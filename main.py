import flask
from flask import request, jsonify, render_template
from mysite.clash import main

app = flask.Flask(__name__)
app.config["DEBUG"] = False


@app.route("/", methods=["GET"])
def home():
    return render_template("homepage.html")


# Test Key: http://127.0.0.1:5000/api/clash/win_percentages?player_tag=PGLGY9QJ
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
            return str(e)
    elif html:
        try:
            data_to_return = main(player_tag)
            name = data_to_return["player_name"]
            tag = data_to_return["player_tag"]
            average_win_rate = data_to_return["average_ladder_win_percentage"]
            average_level_difference = data_to_return["average_level_difference"]
            win_rates = data_to_return["win_percentages"]
            return render_template("clashdatapage.html", name = name, tag = tag, average_win_rate = average_win_rate,
                                   average_level_difference = average_level_difference, win_rates = win_rates)
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    app.run()
