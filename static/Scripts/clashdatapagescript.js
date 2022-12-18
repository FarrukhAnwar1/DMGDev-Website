$(document).ready(function() {
    $("#specificlegendsdata").hide();
});

function switch_mode() {
    var mode = document.getElementById("mode").value;
    if (mode == "Trophy Road") {
        console.log("Doing trophy road");
        $("#specifictrophyroaddata").show();
        $("#specificlegendsdata").hide();
    } else if (mode == "Path of Legends") {
        console.log("Doing path of legends");
        $("#specifictrophyroaddata").hide();
        $("#specificlegendsdata").show();
    }
}