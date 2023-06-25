from datetime import datetime, timedelta
from itertools import product


class Class:

    class_name = ""
    days = []
    start_time = None
    end_time = None

    def __init__(self, class_name, days, start_time, end_time):
        self.class_name = class_name
        day_dictionary = {"M": "Monday", "T": "Tuesday", "W": "Wednesday", "R": "Thursday", "F": "Friday"}
        self.days = [day_dictionary[day] for day in days]

        add_12_hours = 0
        if "pm" in start_time.lower():
            add_12_hours = 12
        self.start_time = datetime(hour=int(start_time[:start_time.index(":")]) + add_12_hours,
                                   minute=int(start_time[start_time.index(":") + 1:start_time.index(":") + 3]), second=0, microsecond=0, day=1,
                                   month=1, year=1)

        add_12_hours = 0
        if "pm" in end_time.lower():
            add_12_hours = 12
        self.end_time = datetime(hour=int(end_time[:end_time.index(":")]) + add_12_hours,
                                 minute=int(end_time[end_time.index(":") + 1:end_time.index(":") + 3]), second=0, microsecond=0, day=1,
                                 month=1, year=1)

    def __str__(self):
        return f"{self.class_name}\n{str(self.days)}\n{str(self.start_time)[11:]}-{str(self.end_time)[11:]}\n"

    def return_without_days(self):
        return f"{self.class_name}\n{str(self.start_time)[11:]}-{str(self.end_time)[11:]}\n"

    def get_abbreviated_days(self):
        day_dictionary = {"Monday": "M", "Tuesday": "T", "Wednesday": "W", "Thursday": "R", "Friday": "F"}
        return "".join([day_dictionary[day] for day in self.days])

    def has_conflict(self, other):

        if set(self.days).isdisjoint(other.days):
            return False

        if self.start_time < other.start_time < self.end_time:
            return True
        if self.start_time < other.end_time < self.end_time:
            return True
        if other.start_time < self.start_time < other.end_time:
            return True
        if other.start_time < self.end_time < other.end_time:
            return True
        return False


class OptimalClassScheduler:

    @staticmethod
    def check_conflicts(schedule):
        conflicts = []
        num_classes = len(schedule)

        for i in range(num_classes):
            for j in range(i + 1, num_classes):
                class1 = schedule[i]
                class2 = schedule[j]

                if class1.has_conflict(class2):
                    conflicts.append((class1, class2))

        return conflicts

    @staticmethod
    def load_data(data):
        classes = []
        preferred_max_time_between_classes = data["preferred_max_time_between_classes"] * 60 * 60
        preferred_max_classes_per_day = data["preferred_max_classes_per_day"]
        for each_class in data["classes"]:
            same_class = []
            name = each_class["name"].rstrip()
            for timing in each_class["timings"]:
                days = timing["days"].rstrip()
                start_time = timing["start_time"].rstrip()
                end_time = timing["end_time"].rstrip()
                same_class.append(Class(name, days, start_time, end_time))
            classes.append(same_class)
        return classes, preferred_max_time_between_classes, preferred_max_classes_per_day

    @staticmethod
    def create_sorted_and_non_conflicting_schedules(classes):
        possible_schedules = list(product(*classes))
        sorted_and_non_conflicting_schedules = []
        for possible_schedule in possible_schedules:
            if not OptimalClassScheduler.check_conflicts(possible_schedule):
                sorted_and_non_conflicting_schedules.append(
                    sorted(possible_schedule, key=lambda each_class: each_class.start_time))
        return sorted_and_non_conflicting_schedules

    @staticmethod
    def create_total_times_between_classes(sorted_and_non_conflicting_schedules, preferred_max_time_between_classes,
                                           preferred_max_classes_per_day):
        total_times_between_classes = []
        possible_schedule_index = 0
        while possible_schedule_index < len(sorted_and_non_conflicting_schedules):
            keep_time = True
            weekly_schedule = {"Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": []}
            for specific_class in sorted_and_non_conflicting_schedules[possible_schedule_index]:
                for specific_day in specific_class.days:
                    weekly_schedule[specific_day].append(specific_class)
            total_time_between_classes = 0
            for specific_day in weekly_schedule.values():
                if not keep_time:
                    break
                if len(specific_day) > 1:
                    for k in range(1, len(specific_day)):
                        time_between = (specific_day[k].start_time - specific_day[k - 1].end_time).seconds
                        if (time_between < preferred_max_time_between_classes) and len(specific_day) <= preferred_max_classes_per_day:
                            total_time_between_classes += time_between
                        else:
                            sorted_and_non_conflicting_schedules.pop(possible_schedule_index)
                            keep_time = False
                            total_time_between_classes = "N/A"
                            possible_schedule_index -= 1
                            break
            if keep_time:
                total_times_between_classes.append(total_time_between_classes)
            possible_schedule_index += 1
        return total_times_between_classes

    @staticmethod
    def return_best_schedule(sorted_and_non_conflicting_schedules, total_times_between_classes):
        output = {}
        if len(total_times_between_classes) == 0:
            output["code"] = 201
            output["message"] = "No schedules found meeting criteria"
            return output
        output["code"] = 200
        output["message"] = "Successfully found best schedule"
        output["class_view"] = []
        output["schedule_view"] = {"Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": []}
        least_time_between_classes = min(total_times_between_classes)
        best_schedule = sorted_and_non_conflicting_schedules[total_times_between_classes.index(least_time_between_classes)]
        for specific_class in best_schedule:
            output["class_view"].append({"name": specific_class.class_name,
                                         "days": specific_class.get_abbreviated_days(),
                                         "start_time": str(specific_class.start_time)[11:16],
                                         "end_time": str(specific_class.end_time)[11:16]})
        for specific_class in best_schedule:
            for specific_day in specific_class.days:
                output["schedule_view"][specific_day].append({"name": specific_class.class_name,
                                                              "start_time": str(specific_class.start_time)[11:16],
                                                              "end_time": str(specific_class.end_time)[11:16]})
        total_time_between_classes = str(timedelta(seconds=least_time_between_classes))
        output["total_time_between_classes"] = total_time_between_classes[:total_time_between_classes.index(":", 3)]
        return output


def main(data):
    try:
        classes, preferred_max_time_between_classes, preferred_max_classes_per_day = OptimalClassScheduler.load_data(data)
        sorted_and_non_conflicting_schedules = OptimalClassScheduler.create_sorted_and_non_conflicting_schedules(classes)
        total_times_between_classes = OptimalClassScheduler.create_total_times_between_classes(
            sorted_and_non_conflicting_schedules, preferred_max_time_between_classes, preferred_max_classes_per_day)
        return OptimalClassScheduler.return_best_schedule(sorted_and_non_conflicting_schedules, total_times_between_classes)
    except:
        output = {"code": 500, "message": "Internal server error"}
        return output
