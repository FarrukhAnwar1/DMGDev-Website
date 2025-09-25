function search_player_data() {
  const player_tag = cleanPlayerTag(document.getElementById("player_tag_input").value);
  const response_type = document.getElementById("response_type").value;
  const current_url = window.location.href;
  let url = "";
  if (response_type === "json") {
    url = current_url + "api/clash/win_percentages?player_tag=" + player_tag;
  } else if (response_type === "html") {
    url = current_url + "api/clash/win_percentages?type=html&player_tag=" + player_tag;
  } else if (response_type === "vue") {
    url = `${current_url}vue-royale-stats?playerTag=${player_tag}`;
  }
  window.open(url);
}

function cleanPlayerTag(playerTag) {
  return String(playerTag).toUpperCase().trim().replace(/#/g, "");
}
