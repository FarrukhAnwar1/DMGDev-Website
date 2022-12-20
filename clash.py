import requests
import json


def find_opponent_level(tag, request_headers):
    player_url = f"https://api.clashroyale.com/v1/players/%23{tag}"
    opponent_response = requests.request("GET", player_url, headers=request_headers)
    opponent = json.loads(opponent_response.content)
    found_opponent_level = opponent["expLevel"]
    return found_opponent_level


def win_percentage(player_battles, level):
    total_matches = 0
    total_wins = 0
    for player_battle in player_battles:
        if player_battle[0] == level:
            total_matches += 1
            if player_battle[1]:
                total_wins += 1
    if total_matches == 0:
        return "N/A"
    percentage = round(((total_wins / total_matches) * 100), 2)
    return percentage


def find_card_levels(cards):
    total_card_levels = 0
    for card in cards:
        # print(card, card["level"] + 14 - card["maxLevel"])
        total_card_levels += card["level"] + (14 - card["maxLevel"])
    return total_card_levels


def find_average_difference(player_levels, opponent_levels):
    difference = 0
    for player_card_level, opponent_card_level in zip(player_levels, opponent_levels):
        difference += opponent_card_level - player_card_level
    average_level_difference = difference / len(player_levels)
    return round(average_level_difference, 2)


def overall_win_percentage(player_battles):
    total_matches = 0
    total_wins = 0
    for player_battle in player_battles:
        total_matches += 1
        if player_battle[1]:
            total_wins += 1
    if total_matches == 0:
        return "N/A"
    percentage = round(((total_wins / total_matches) * 100), 2)
    return percentage


def find_match_percentages(player_matches, total_matches):
    matches = player_matches
    for i in range(len(matches)):
        matches[i] = round((matches[i] / total_matches * 100), 2)
    return matches


def main(provided_player_tag):
    with open("api_token.txt") as f:
        api_token = f.read().rstrip("\n")

    player_tag = provided_player_tag
    url = f"https://api.clashroyale.com/v1/players/%23{player_tag}/battlelog"
    headers = {"Authorization": "Bearer %s" % api_token}

    response = requests.request("GET", url, headers=headers)

    battles = json.loads(response.content)

    if response.status_code == 403:
        return ["Server Side Issue"]

    if response.status_code == 404:
        return ["Incorrect Tag Provided"]

    player_levels_list = []
    opponent_levels_list = []
    ladder_battles = []
    match_percentages = [0] * 50
    total_battles = 0
    found_name = False
    player_name = None

    # Path of Legends data
    pol_total_battles = 0
    pol_battles_won = 0
    pol_player_levels_list = []
    pol_opponent_levels_list = []

    for battle in battles:
        if battle["type"] == "PvP":
            total_battles += 1
            opponent_tag = battle["opponent"][0]["tag"][1:]
            opponent_level = find_opponent_level(opponent_tag, headers)
            match_percentages[opponent_level - 1] += 1

            trophy_change = battle["team"][0]["trophyChange"]

            if trophy_change > 0:
                did_win = True
            else:
                did_win = False

            if not found_name:
                player_name = battle["team"][0]["name"]
                found_name = True

            battle_stats = [opponent_level, did_win]
            ladder_battles.append(battle_stats)

            player_cards = battle["team"][0]["cards"]
            player_levels_list.append(find_card_levels(player_cards))

            opponent_cards = battle["opponent"][0]["cards"]
            opponent_levels_list.append(find_card_levels(opponent_cards))
        elif battle["type"] == "pathOfLegend":
            pol_total_battles += 1

            if "trophyChange" in battle["team"][0].keys():
                trophy_change = battle["team"][0]["trophyChange"]
                if trophy_change > 0:
                    pol_battles_won += 1

            if not found_name:
                player_name = battle["team"][0]["name"]
                found_name = True

            player_cards = battle["team"][0]["cards"]
            pol_player_levels_list.append(find_card_levels(player_cards))

            opponent_cards = battle["opponent"][0]["cards"]
            pol_opponent_levels_list.append(find_card_levels(opponent_cards))

    if len(ladder_battles) == 0:
        return "No recent ladder battles found"

    win_percentages = []
    for i in range(50):
        win_percentages.append(win_percentage(ladder_battles, i + 1))

    ladder_win_percentage = overall_win_percentage(ladder_battles)
    average_difference = find_average_difference(player_levels_list, opponent_levels_list)
    match_numbers = match_percentages.copy()
    match_percentages = find_match_percentages(match_percentages, total_battles)
    colors = ['red', '#ff0600', '#fe0b00', '#fe1101', '#fe1601', '#fd1c01', '#fd2101', '#fd2701', '#fc2c01', '#fc3202', '#fc3702', '#fb3d02', '#fb4202', '#fb4702', '#fa4d02', '#fa5203', '#fa5703', '#f95d03', '#f96203', '#f96703', '#f86c03', '#f87204', '#f87704', '#f77c04', '#f78104', '#f78604', '#f68b04', '#f69005', '#f69505', '#f59a05', '#f59f05', '#f5a405', '#f4a905', '#f4ae06', '#f4b306', '#f3b806', '#f3bd06', '#f3c206', '#f2c706', '#f2cb07', '#f2d007', '#f1d507', '#f1da07', '#f1de07', '#f0e307', '#f0e807', '#f0ed08', '#edef08', '#e8ef08', '#e3ef08', '#ddee08', '#d8ee08', '#d3ee09', '#ceed09', '#c9ed09', '#c4ed09', '#beec09', '#b9ec09', '#b4ec0a', '#afeb0a', '#aaeb0a', '#a5eb0a', '#a0ea0a', '#9bea0a', '#96ea0b', '#91e90b', '#8de90b', '#88e90b', '#83e80b', '#7ee80b', '#79e80b', '#74e70c', '#70e70c', '#6be70c', '#66e60c', '#61e60c', '#5de60c', '#58e50d', '#53e50d', '#4fe50d', '#4ae40d', '#45e40d', '#41e40d', '#3ce30d', '#38e30e', '#33e30e', '#2fe20e', '#2ae20e', '#26e20e', '#21e20e', '#1de10f', '#19e10f', '#14e10f', '#10e00f', '#0fe013', '#0fe017', '#0fdf1c', '#10df20', '#10df25', '#10de29', '#10de2e']

    if pol_total_battles != 0:
        pol_average_win_percentage = round(((pol_battles_won / pol_total_battles) * 100), 2)
        pol_average_card_level_difference = find_average_difference(pol_player_levels_list, pol_opponent_levels_list)
    else:
        pol_average_win_percentage = "N/A"
        pol_average_card_level_difference = "N/A"

    data_to_return = {"trophy_road": {
        "player_name": player_name,
        "player_tag": provided_player_tag,
        "win_percentages": win_percentages,
        "average_ladder_win_percentage": ladder_win_percentage,
        "average_level_difference": -average_difference,
        "match_percentages": match_percentages,
        "match_numbers": match_numbers,
        "colors": colors
    }, "path_of_legends": {
        "average_pol_win_percentage": pol_average_win_percentage,
        "average_pol_level_difference": -pol_average_card_level_difference
    }}

    return data_to_return
