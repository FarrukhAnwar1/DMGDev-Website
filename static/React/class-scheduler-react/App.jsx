import React, { useState, useEffect, useRef } from "react"
import DOMPurify from 'isomorphic-dompurify';
import { Link } from "react-scroll"

function App() {

  const outputDivRef = useRef(null);

  const [state, setState] = useState({

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

});

  const [saveName, setSaveName] = useState("");
  const [saveNames, setSaveNames] = useState([]);
  const [targetSaveName, setTargetSaveName] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    localStorage.setItem("Default", DOMPurify.sanitize(JSON.stringify(state)));
    updateSaveNames();
  }, []);

  useEffect(() => {
    setTargetSaveName(DOMPurify.sanitize(saveNames[0]));
  }, [saveNames])

  function updateCorrespondingStateKey(key, value) {
    setState(previousState => ({
      ...previousState, [key]: DOMPurify.sanitize(value)
    }));
  }

  function updateCorrespondingStateClassName(classIndex, value) {
    setState(previousState => {
      const newState = {...previousState};
      newState.classes[classIndex].name = DOMPurify.sanitize(value);
      return newState;
    });
  }

  function updateCorrespondingStateClassTiming(classIndex, timingIndex, key, value) {
    setState(previousState => ({
      ...previousState, classes: [].concat(previousState.classes.slice(0, classIndex), [{...previousState.classes[classIndex], timings: [].concat(previousState.classes[classIndex].timings.slice(0, timingIndex), [{...previousState.classes[classIndex].timings[timingIndex], [key]: DOMPurify.sanitize(value)}], previousState.classes[classIndex].timings.slice(timingIndex + 1))}], previousState.classes.slice(classIndex + 1))
    }));
  }

  function addClass() {
    setState(previousState => ({
      ...previousState, classes: [...previousState.classes, {"name": "", 
                                                             "timings":
                                                                      [
                                                                          {"days": "", "start_time": "", "end_time": ""}
                                                                      ]}]
    }));
  }

  function removeClass() {
    setState(previousState => ({
      ...previousState, classes: previousState.classes.slice(0, -1)
    }));
  }

  function addTiming(classIndex) {
    setState(previousState => ({
      ...previousState, classes: [].concat(previousState.classes.slice(0, classIndex), [{...previousState.classes[classIndex], timings: [...previousState.classes[classIndex].timings, {"days": "", "start_time": "", "end_time": ""}]}], previousState.classes.slice(classIndex + 1))
    }));
  }

  function removeTiming(classIndex) {
    setState(previousState => ({
      ...previousState, classes: [].concat(previousState.classes.slice(0, classIndex), [{...previousState.classes[classIndex], timings: previousState.classes[classIndex].timings.slice(0, -1)}], previousState.classes.slice(classIndex + 1))
    }));
  }

  function generateBestSchedule() {
    
    const targetURL = "https://dmg1plays.pythonanywhere.com/classscheduler/data";

    fetch(targetURL, {
      method: "POST",
      headers: {
        "Origin": window.location.href,
        "Content-Type": "application/json; charset = utf-8",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type"
      },
      body: JSON.stringify(state)
    })
    .then(response => response.json())
    .then(result => {
      setOutput(
        <>

          <h3>Best Schedule (Class View)</h3>
          { 
            result.class_view.map( eachClass => (
            <React.Fragment key = {`${eachClass.name}-${eachClass.days}-${eachClass.start_time}-${eachClass.end_time}`}>
              <h4>{eachClass.name}</h4>
              <h5>{`${eachClass.days}: ${eachClass.start_time} - ${eachClass.end_time}`}</h5>
            </React.Fragment>
            ))
          }

          <h3>Best Schedule (Schedule View)</h3>
          {
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map( day => (
              <React.Fragment key = {day}>
                <h4>{day}</h4>
                {
                  (result.schedule_view[day].length > 0) && (result.schedule_view[day].map( eachClass => (
                    <React.Fragment key = {`${eachClass.name}-${eachClass.start_time}-${eachClass.end_time}`}>
                      <h5>{eachClass.name}</h5>
                      <h6>{`${eachClass.start_time} - ${eachClass.end_time}`}</h6>
                    </React.Fragment>
                  )))
                }
                <h5>{result.schedule_view.day}</h5>
              </React.Fragment>
            ))
          }

          <h3>Total Time Between Classes</h3>
          <h4>{result.total_time_between_classes}</h4>

        </>
      );
    })
    .catch(error => {
      console.error("Error: ", error);
      setOutput(<h1>Error</h1>);
    });

  }

  function updateSaveName(value) {
    setSaveName(DOMPurify.sanitize(value));
  }

  function updateSaveNames() {
    setSaveNames(Object.keys(localStorage));
  }

  function updateTargetSaveName(value) {
    setTargetSaveName(DOMPurify.sanitize(value));
  }

  function saveData() {
    localStorage.setItem(DOMPurify.sanitize(saveName), JSON.stringify(state));
    updateSaveNames();
  }

  function loadData() {
    setState(JSON.parse(localStorage.getItem(targetSaveName)));
  }

  function removeData() {
    localStorage.removeItem(targetSaveName);
    updateSaveNames();
  }

  return (
    <>
      {/* Body Container */}
      <div className = "container-fluid text-center justify-content-center">

        {/* Preferences Row */}
        <div className = "row">

          <h3>Preferences</h3>

          {/* Maximum Time Between Classes Input Row */}
          <div className = "row justify-content-center">
              <label className = "col-lg-12 col-form-label col-form-label-lg" htmlFor = "maximumTimeBetweenClassesInput">
                  Maximum Time Between Classes
              </label>
              <div className = "col-md-2">
                  <input 
                    className = "form-control form-control-lg" 
                    type = "number" 
                    id = "maximumTimeBetweenClassesInput" 
                    value = {state.preferred_max_time_between_classes} 
                    onChange = {(event) => updateCorrespondingStateKey("preferred_max_time_between_classes", event.target.value)} 
                    min = "0"/>
              </div>
          </div>

          {/* Maximum Classes Per Day Input Row */}
          <div className = "row justify-content-center">
              <label className = "col-lg-12 col-form-label col-form-label-lg" htmlFor = "maximumClassesPerDayInput">
                  Maximum Classes Per Day
              </label>
              <div className = "col-md-2">
                  <input 
                    className = "form-control form-control-lg" 
                    type = "number" 
                    id = "maximumClassesPerDayInput" 
                    value = {state.preferred_max_classes_per_day} 
                    onChange = {(event) => updateCorrespondingStateKey("preferred_max_classes_per_day", event.target.value)} 
                    min = "0"/>
              </div>
          </div>

          {/* Classes Row */}
          <div className = "row">

            <h3>Classes</h3>

            {state.classes.map((eachClass, classIndex) => (
              <React.Fragment key = {`c-${classIndex}`}>
                <div className = "row justify-content-center">
                  <label className = "col-xs-12 col-sm-2 col-form-label col-form-label-lg">
                    Name
                  </label>
                  <div className = "col-xs-12 col-sm-6">
                      <input 
                        className = "form-control form-control-lg" 
                        type = "text" 
                        value = {eachClass.name} 
                        onChange = {(event) => updateCorrespondingStateClassName(classIndex, event.target.value)} 
                        placeholder = "Class name" />
                  </div>

                  <div className = "row justify-content-center timings-input mt-3">
                    
                    <button type = "button" className = "btn btn-info" onClick = {() => addTiming(classIndex)}>Add Timing</button>
                    <button type = "button" className = "btn btn-warning" onClick = {() => removeTiming(classIndex)}>Remove Timing</button>

                    {eachClass.timings.map((eachTiming, timingIndex) => (
                      <React.Fragment key = {`t-${timingIndex}`}>
                        <div className = "row justify-content-center timings-input">
                          <div className = "row justify-content-center">
                            <hr className = "col-12" />
                          </div>
                          <label className = "col-xs-12 col-sm-2 col-form-label col-form-label-lg">
                            Days
                          </label>
                          <div className = "col-xs-12 col-sm-3">
                              <input 
                                className = "form-control form-control-lg" 
                                type = "text" 
                                value = {eachTiming.days} 
                                onChange = {(event) => updateCorrespondingStateClassTiming(classIndex, timingIndex, "days", event.target.value)} 
                                placeholder = "MTWRF" />
                          </div>
                        </div>

                        <div className = "row justify-content-center timings-input">
                          <label className = "col-xs-12 col-sm-2 col-form-label col-form-label-lg">
                            Start Time
                          </label>
                          <div className = "col-xs-12 col-sm-3">
                              <input 
                                className = "form-control form-control-lg" 
                                type = "text" 
                                value = {eachTiming.start_time} 
                                onChange = {(event) => updateCorrespondingStateClassTiming(classIndex, timingIndex, "start_time", event.target.value)} 
                                placeholder = "HH:MM" />
                          </div>
                        </div>

                        <div className = "row justify-content-center timings-input mb-3">
                          <label className = "col-xs-12 col-sm-2 col-form-label col-form-label-lg">
                            End Time
                          </label>
                          <div className = "col-xs-12 col-sm-3">
                              <input 
                                className = "form-control form-control-lg" 
                                type = "text" 
                                value = {eachTiming.end_time} 
                                onChange = {(event) => updateCorrespondingStateClassTiming(classIndex, timingIndex, "end_time", event.target.value)} 
                                placeholder = "HH:MM" />
                          </div>
                        </div>
                      </React.Fragment>
                    ))}

                  </div>

                </div>
              </React.Fragment>
            ))}

          </div>

        </div>
        
        {/* Save Data Modal */}
        <div className = "modal fade" id = "saveDataModal" tabIndex = "-1" aria-labelledby = "saveDataModalLabel" aria-hidden = "true">
          <div className = "modal-dialog modal-dialog-centered">
            <div className = "modal-content">
              <div className = "modal-header">
                <h1 className = "modal-title fs-5" id = "saveDataModalLabel">Save Data</h1>
                <button type = "button" className = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
              </div>
              <div className = "modal-body">
                <input 
                  type = "text" 
                  className = "form-control form-control-lg" 
                  title = "Enter save name" 
                  placeholder = "Save name" 
                  value = {saveName} 
                  onChange = {(event) => updateSaveName(event.target.value)} />
              </div>
              <div className = "modal-footer">
                <button type = "button" className = "btn btn-secondary" data-bs-dismiss = "modal">Close</button>
                <button type = "button" className = "btn btn-primary" data-bs-dismiss = "modal" onClick = {() => saveData()}>Save</button>
              </div>
            </div>
          </div>
        </div>

        {/* Load Data Modal */}
        <div className = "modal fade" id = "loadSavedDataModal" tabIndex = "-2" aria-labelledby = "loadSavedDataModalLabel" aria-hidden = "true">
          <div className = "modal-dialog modal-dialog-centered">
            <div className = "modal-content">
              <div className = "modal-header">
                <h1 className = "modal-title fs-5" id = "loadSavedDataModalLabel">Load Data</h1>
                <button type = "button" className = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
              </div>
              <div className = "modal-body">
                <select className = "form-control" value = {targetSaveName} onChange = {(event) => updateTargetSaveName(event.target.value)}>
                    {saveNames.map(eachSaveName => (
                      <option key = {eachSaveName}>
                        {eachSaveName}
                      </option>
                    ))}
                </select>
              </div>
              <div className = "modal-footer">
                <button type = "button" className = "btn btn-danger" onClick = {() => removeData()}>Remove</button>
                <button type = "button" className = "btn btn-secondary" data-bs-dismiss = "modal">Close</button>
                <button type = "button" className = "btn btn-primary" data-bs-dismiss = "modal" onClick = {() => loadData()}>Load</button>
              </div>
            </div>
          </div>
        </div>

        {/* Class Modifiers and Generate Schedule Buttons Row */}
        <div className = "row">
            <button type = "button" className = "btn btn-primary" onClick = {() => addClass()}>Add Class</button>
            <button type = "button" className = "btn btn-secondary" onClick = {() => removeClass()}>Remove Class</button>
            <button type = "button" className = "btn btn-dark" data-bs-toggle = "modal" data-bs-target = "#saveDataModal">Save Data</button>
            <button type = "button" className = "btn btn-dark" data-bs-toggle = "modal" data-bs-target = "#loadSavedDataModal">Load Data</button>
            <Link activeClass="active"
                  to="outputDiv"
                  smooth={true}
                  offset={-38}
                  duration={1000}>
              <div className = "row">
                <button type = "button" className = "btn btn-success" onClick = {() => generateBestSchedule()}>Generate Schedule</button>
              </div>
            </Link>
        </div>

        {/* Schedule Output Row */}
        <div className = "row" id = "outputDiv">
            {output}
        </div>

      </div>
    </>
  )

}

export default App
