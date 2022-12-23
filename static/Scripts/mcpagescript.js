function find_stats() {
    var ip = document.getElementById("ipInput").value;
    var url = window.location.href + ip;
    window.open(url);
}
