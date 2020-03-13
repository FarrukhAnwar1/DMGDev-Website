function search_player_data() {
  var player_tag = document.getElementById("player_tag_input").value;
  var response_type = document.getElementById("response_type").value;
  if (response_type == "json") {
    var url = "https://dmg1plays.pythonanywhere.com/api/clash/win_percentages?player_tag=" + player_tag;
  } else if (response_type == "html") {
    var url = "https://dmg1plays.pythonanywhere.com/api/clash/win_percentages?type=html&player_tag=" + player_tag;
  }
    window.open(url);
}
