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
        total_card_levels += card["level"] + (13 - card["maxLevel"])
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

    # DMG - PGLGY9QJ
    # Gamer - YOJ9JPUQ2
    # Sami - 8UVQCLCPU
    player_tag = provided_player_tag
    url = f"https://api.clashroyale.com/v1/players/%23{player_tag}/battlelog"
    headers = {"Authorization": "Bearer %s" % api_token}

    response = requests.request("GET", url, headers=headers)

    battles = json.loads(response.content)

    if response.status_code == 403:
        return ["Server Side Issue"]

    if response.status_code == 404:
        return ["Incorrect Tag Provided"]

    opponent_levels_list = []
    player_levels_list = []
    ladder_battles = []
    match_percentages = [0] * 13
    total_battles = 0

    found_name = False
    player_name = None

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

    if len(ladder_battles) == 0:
        return "No recent ladder battles found"

    win_percentages = []
    for i in range(13):
        win_percentages.append(win_percentage(ladder_battles, i + 1))

    ladder_win_percentage = overall_win_percentage(ladder_battles)
    average_difference = find_average_difference(player_levels_list, opponent_levels_list)
    match_numbers = match_percentages.copy()
    match_percentages = find_match_percentages(match_percentages, total_battles)
    colors = ['red', '#ff0600', '#fe0b00', '#fe1101', '#fe1701', '#fd1c01', '#fd2201', '#fd2701', '#fc2d01', '#fc3202', '#fc3802', '#fb3d02', '#fb4302', '#fb4802', '#fa4e02', '#fa5303', '#fa5803', '#f95e03', '#f96303', '#f86803', '#f86d03', '#f87304', '#f77804', '#f77d04', '#f78204', '#f68704', '#f68d04', '#f69205', '#f59705', '#f59c05', '#f5a105', '#f4a605', '#f4ab05', '#f4b006', '#f3b506', '#f3ba06', '#f3bf06', '#f2c406', '#f2c806', '#f2cd07', '#f1d207', '#f1d707', '#f1dc07', '#f0e107', '#f0e507', '#f0ea08', '#efef08', '#ebef08', '#e5ef08', '#e0ee08', '#dbee08', '#d6ee09', '#d0ed09', '#cbed09', '#c6ed09', '#c1ec09', '#bcec09', '#b6ec09', '#b1eb0a', '#aceb0a', '#a7eb0a', '#a2ea0a', '#9dea0a', '#98ea0a', '#93e90b', '#8ee90b', '#89e90b', '#84e80b', '#7fe80b', '#7be80b', '#76e70c', '#71e70c', '#6ce70c', '#67e60c', '#63e60c', '#5ee60c', '#59e50c', '#54e50d', '#50e50d', '#4be40d', '#46e40d', '#42e40d', '#3de40d', '#39e30e', '#34e30e', '#2fe30e', '#2be20e', '#26e20e', '#22e20e', '#1de10e', '#19e10f', '#15e10f', '#10e00f', '#0fe012', '#0fe017', '#0fdf1c', '#10df20', '#10df25', '#10de29', '#10de2e']

    data_to_return = {
        "player_name": player_name,
        "player_tag": provided_player_tag,
        "win_percentages": win_percentages,
        "average_ladder_win_percentage": ladder_win_percentage,
        "average_level_difference": -average_difference,
        "match_percentages": match_percentages,
        "match_numbers": match_numbers,
        "colors": colors
    }

    return data_to_return
