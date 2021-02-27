import requests
import json
from colour import Color


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
    red = Color("#ff0000")
    colors = list(red.range_to(Color("#10de2e"), 100))

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
