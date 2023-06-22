import flask
from flask import request, jsonify, render_template
import clash
import find_server_stats
import optimal_class_scheduler
import traceback

app = flask.Flask(__name__)
app.config["DEBUG"] = False
app.config["JSONIFY_MIMETYPE"] = "application/json; charset=utf-8"


@app.route("/", methods=["GET"])
def home():
    return render_template("homepage.html", current_url = request.base_url)


@app.route("/api/clash/win_percentages", methods=["GET"])
def win_api():
    html = False
    if "player_tag" in request.args:
        player_tag = request.args["player_tag"]
    else:
        return "No player tag provided"

    if "type" in request.args:
        if request.args["type"] == "html":
            html = True
    if not html:
        try:
            data_to_return = clash.main(player_tag)
            return jsonify(data_to_return)
        except Exception:
            traceback.print_exc()
            return "An error occurred while retrieving data. Check to see if the player tag was entered correctly. If "\
                   "that doesn't work, open an issue on the Source Code GitHub issue page (" \
                   "https://github.com/DMG1Plays/DMGDev-API-Endpoints/issues) to see if the server admin can fix the " \
                   "issue."
    elif html:
        try:
            data_to_return = clash.main(player_tag)
            return render_template("clashdatapage.html", data=data_to_return)
        except Exception:
            traceback.print_exc()
            return render_template("errorpage.html")


@app.route("/discordbots/serverstatus", methods=["GET"])
def server_status_page():
    return render_template("server_status_bot_page.html")


@app.route("/mcserverstats/", methods=["GET"])
def mc_page():
    return render_template("mcpage.html")


@app.route("/mcserverstats/<ip>", methods=["GET"])
def server_stats_page(ip):
    try:
        stats = find_server_stats.get_stats(ip)
        if stats["status"] == "Online":
            return render_template("serverstatspage.html", ip=ip, stats=stats)
        else:
            return render_template("offlineserverstatspage.html", ip=ip, stats=stats)
    except Exception:
        traceback.print_exc()
        return render_template("errorserverstatspage.html")


@app.route("/classscheduler")
def class_scheduler():
    return render_template("class_scheduler_page.html")


@app.route("/classscheduler/data", methods=["POST"])
def class_scheduler_data():
    data = request.get_json()
    output = optimal_class_scheduler.main(data)
    return jsonify(output)


if __name__ == "__main__":
    app.run()
