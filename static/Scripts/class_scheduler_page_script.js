var globalData = {

    "preferred_max_time_between_classes": 0,
    "preferred_max_classes_per_day": 0,

    "classes":
    [
        {"name": "", "timings":
            [
                {"days": "", "start_time": "", "end_time": ""}
            ]
        }
    ]

}

function initialLoadData() {
    localStorage.setItem("Default", JSON.stringify(globalData));
    renderClasses(globalData);
    var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

    $("button, input[type='submit']").on(isMobile ? 'touchend' : 'click', function(e) {
        navigator.vibrate(50);
    });

    if (!isTouchEnabled()) {
        document.getElementById("addClassButton").classList.add("hasHoverEffect");
        document.getElementById("removeClassButton").classList.add("hasHoverEffect");
        document.getElementById("saveDataButton").classList.add("hasHoverEffect");
        document.getElementById("loadSavedDataButton").classList.add("hasHoverEffect");
        document.getElementById("generateScheduleButton").classList.add("hasHoverEffect");
    }
}

function saveData() {
    readInput();
    var saveName = document.getElementById("saveNameInput").value;
    localStorage.setItem(DOMPurify.sanitize(saveName), JSON.stringify(globalData));
}

function populateSaveNames() {

    var saveNames = Object.keys(localStorage);
    var options = "";

    saveNames.forEach(saveName => {
        options += `
                   <option>${saveName}</option>
                   `;
    });

    document.getElementById("loadSaveNameInput").innerHTML = options;

}

function removeSave() {

    var saveName = document.getElementById("loadSaveNameInput").value;
    localStorage.removeItem(saveName);
    populateSaveNames();

}

function loadSavedData() {

    var saveName = document.getElementById("loadSaveNameInput").value;
    var data = localStorage.getItem(saveName);

    if (data != null) {
        globalData = JSON.parse(DOMPurify.sanitize(data));
        renderClasses(globalData);
    }

}

function readInput() {

    globalData["preferred_max_time_between_classes"] = Number(DOMPurify.sanitize(document.getElementById("preferredMaxTimeBetweenClassesInput").value));
    globalData["preferred_max_classes_per_day"] = Number(DOMPurify.sanitize(document.getElementById("preferredMaxClassesPerDayInput").value));
    globalData["classes"] = [];

    var specificClasses = Array.from(document.getElementById("classes-input").children);

    specificClasses.forEach(specificClass => {

        if (specificClass.id.indexOf("specificClass") >= 0) {

            var className = Array.from(Array.from(specificClass.children)[0].children)[1].value;

            var timings = [];

            specificTimings = Array.from(Array.from(specificClass.children)[2].children)

            specificTimings.forEach(specificTiming => {

                days = Array.from(Array.from(specificTiming.children)[1].children)[1].value;
                startTime = Array.from(Array.from(specificTiming.children)[2].children)[1].value;
                endTime = Array.from(Array.from(specificTiming.children)[3].children)[1].value;
                timings.push({"days": DOMPurify.sanitize(days), "start_time": DOMPurify.sanitize(startTime), "end_time": DOMPurify.sanitize(endTime)});

            });

            globalData["classes"].push({"name": DOMPurify.sanitize(className), "timings": timings});

        }
    });

}

function renderClasses(data) {

    document.getElementById("preferredMaxTimeBetweenClassesInput").value = data["preferred_max_time_between_classes"];
    document.getElementById("preferredMaxClassesPerDayInput").value = data["preferred_max_classes_per_day"];
    var allClassesHTML = "";

    var hasHoverEffect = ""
    if (!isTouchEnabled()) {
        hasHoverEffect = " hasHoverEffect";
    }

    for (var i = 0; i < data["classes"].length; i++) {

        var eachClass = data["classes"][i]

        var timingsHTML = "";

        eachClass["timings"].forEach(eachTiming => {
            timingsHTML += `
                            <div class = "timing-input">
                                <hr>
                                <div class = "form-group row">
                                    <label class = "col-sm-7 col-form-label">Days</label>
                                    <input type = "text" class = "col-sm-5 form-control" placeholder = "MTWRF" value = ${eachTiming["days"]}>
                                </div>

                                <div class = "form-group row">
                                    <label class = "col-sm-7 col-form-label">Start Time</label>
                                    <input type = "text" class = "col-sm-5 form-control" placeholder = "HH:MM" value = ${eachTiming["start_time"]}>
                                </div>

                                <div class = "form-group row">
                                    <label class = "col-sm-7 col-form-label">End Time</label>
                                    <input type = "text" class = "col-sm-5 form-control" placeholder = "HH:MM" value = ${eachTiming["end_time"]}>
                                </div>
                            </div>
                            `;
        });

        var classHTML = `
                        <hr class = "class-seperator">
                        <div id = "specificClass${i}">
                            <div class = "form-group row name-input">
                                <label class = "col-sm-5 col-form-label">Name</label>
                                <input type = "text" class = "col-sm-7 form-control" placeholder = "Class name" value = ${eachClass["name"]}>
                            </div>

                            <div>
                                <input class = "timing-modifier ${hasHoverEffect}" type = "submit" name = "add_timing" value = "Add Timing" onclick = "addTiming(this)">
                                <input class = "timing-modifier ${hasHoverEffect}" type = "submit" name = "remove_timing" value = "Remove Timing" onclick = "removeTiming(this)">
                            </div>

                            <div class = "timings-input">
                                ${timingsHTML}
                            </div>
                        </div>
                        `;

        allClassesHTML += classHTML;

    }

    document.getElementById("classes-input").innerHTML = allClassesHTML;

}

function addClass() {
    readInput();
    globalData["classes"].push({"name": "", "timings":
                            [
                                {"days": "", "start_time": "", "end_time": ""}
                            ]
                        });
    renderClasses(globalData);
}

function removeClass() {
    readInput();
    globalData["classes"].pop();
    renderClasses(globalData);
}

function addTiming(btn) {
    readInput();
    var specificClassIndex = Number(btn.parentNode.parentNode.id.match(/\d+$/)[0]);
    globalData["classes"][specificClassIndex]["timings"].push({"days": "", "start_time": "", "end_time": ""});
    renderClasses(globalData);

    var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
    if (isMobile) {
        navigator.vibrate(50);
    }
}

function removeTiming(btn) {
    readInput();
    var specificClassIndex = Number(btn.parentNode.parentNode.id.match(/\d+$/)[0]);
    globalData["classes"][specificClassIndex]["timings"].pop();
    renderClasses(globalData);

    var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
    if (isMobile) {
        navigator.vibrate(50);
    }
}

function sendData() {

    var currentURL = window.location.href;
    var targetURL = currentURL + "/data";

    readInput();

    fetch(targetURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset = utf-8"
      },
      body: JSON.stringify(globalData)
    })
    .then(response => response.json())
    .then(result => {
      outputResult(result);
    })
    .catch(error => {
      // console.error("Error: ", error);
      outputErrorResult();
    });

}

function outputResult(result) {

    var output = "";

    if (result["code"] == 200) {

        output = `<h2 class = "scheduleheader">Best Schedule (Class View)</h2>`;

        result["class_view"].forEach(eachClass => {
            output += `<h3 class = "classheader">${eachClass["name"]}</h3><h4 class = "timingheader">${eachClass["days"]}: ${eachClass["start_time"]} - ${eachClass["end_time"]}</h4>`;
        });

        output += `<h2 class = "scheduleheader">Best Schedule (Schedule View)</h2><table class = "table text-center">`;

        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

        days.forEach(day => {
            output += `<tr><th><h3 class = "dayheader">${day}</h3></th></tr><tr><td>`;
            result["schedule_view"][day].forEach(eachClass => {
                output += `<h3 class = "classheader">${eachClass["name"]}</h3><h4 class = "timingheader">${eachClass["start_time"]} - ${eachClass["end_time"]}</h4>`;
            });
            output += `</td></tr>`;
        });

        output += `</table><h2 class = "scheduleheader">Total Time Between Classes</h2><h4 class = "timingheader">${result["total_time_between_classes"]}</h4>`;

    } else if (result["code"] == 201) {
        
        output = `
                  <h2 class = "scheduleheader">No schedule found meeting preferred criteria</h2>
                  <h2 class = "scheduleheader">Please change criteria and press <span class = "generate-schedule-highlight">Generate Schedule</span> again</h2>
                 `;

    } else {
        
        outputErrorResult();
        return;

    }

    output += "<br><br>";

    document.getElementById("output").innerHTML = output;

    document.getElementById("generateScheduleButton").scrollIntoView({ behavior: 'smooth' });

}

function outputErrorResult() {


    var output = `
                 <h2 class = "scheduleheader">Error when attempting to find schedule</h2>
                 <h2 class = "scheduleheader">Please make sure all inputs are filled with appropriate data</h2>
                 <br>
                 <br>
                 `;


    document.getElementById("output").innerHTML = output;

    document.getElementById("generateScheduleButton").scrollIntoView({ behavior: 'smooth' });

}

function isTouchEnabled() {
   return ('ontouchstart' in window) ||
   (navigator.maxTouchPoints > 0) ||
   (navigator.msMaxTouchPoints > 0);
}
