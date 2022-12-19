import flask
from flask import request, jsonify, render_template
from mysite.clash import main

app = flask.Flask(__name__)
app.config["DEBUG"] = False


@app.route("/", methods=["GET"])
def home():
    return render_template("homepage.html", current_url = request.base_url)


# Test Site: http://127.0.0.1:5000/api/clash/win_percentages?player_tag=PGLGY9QJ
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
            data_to_return = main(player_tag)
            return jsonify(data_to_return)
        except Exception as e:
            print(e)
            return "An error occurred while retrieving data. Check to see if the player tag was entered correctly. If "\
                   "that doesn't work, open an issue on the Source Code GitHub issue page (" \
                   "https://github.com/DMG1Plays/DMGDev-API-Endpoints/issues) to see if the server admin can fix the " \
                   "issue."
    elif html:
        try:
            data_to_return = main(player_tag)
            return render_template("clashdatapage.html", data=data_to_return)
        except Exception as e:
            print(e)
            return render_template("errorpage.html")


@app.route("/discordbots/serverstatus", methods=["GET"])
def server_status_page():
    return render_template("serverstatusbotpage.html")


if __name__ == "__main__":
    app.run()
