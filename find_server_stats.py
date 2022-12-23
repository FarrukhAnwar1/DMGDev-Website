import requests
import json


def get_stats(ip):
    url = f"https://api.mcsrvstat.us/2/{ip}"
    response = json.loads(requests.get(url).content)
    ip = response["ip"]
    status = find_status(response["online"])
    if status == "Online":
        version = response["version"]
        motd = response["motd"]["clean"][0]
        try:
            player_names = response["players"]["list"]
            players = []
            for player_name in player_names:
                players.append([player_name, f"https://namemc.com/profile/{player_name}", f"https://mc-heads.net/avatar/{player_name}/70"])
        except KeyError:
            players = ["No Players Found"]
        players_online = response["players"]["online"]
        players_max = response["players"]["max"]
        stats_to_return = {"ip": ip, "status": status, "version": version,
                           "motd": motd, "players": players,
                           "players_online": players_online,
                           "players_max": players_max}
        return stats_to_return
    elif status == "Offline":
        stats_to_return = {"ip": ip, "status": status}
        return stats_to_return


def find_status(server_status):
    if server_status:
        return 'Online'
    else:
        return 'Offline'
