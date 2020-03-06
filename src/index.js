import React, { useState } from "react";
import ReactDOM from "react-dom";
import "/src/styles.css";

function Room() {
  const [isRoomTemp, setRoomTemp] = useState(72);
  const [isOn, setOn] = useState(true);
  const status = isOn ? "ON" : "OFF";

  // const brightness = isLit ? "lit" : "dark";
  return (
    <div>
      {/*   <div className={`room ${brightness}`}>
        the room is
        {isLit ? " lit" : " dark"}
        <br />
        <button onClick={() => setLit(!isLit)}> flip </button>
      </div> */}
      <div className={`light${"status"}`}>
        The status of bulb is : <div className="value">{status}</div>
        <nobr />
        <button className="ON" onClick={() => setOn(true)}>
          ON
        </button>
        <button className="OFF" onClick={() => setOn(false)}>
          OFF
        </button>
      </div>
      <br />
      <button onClick={() => setRoomTemp(isRoomTemp - 1)}> - </button>
      <div className="temp">{isRoomTemp}</div>
      <button onClick={() => setRoomTemp(isRoomTemp + 1)}> + </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
