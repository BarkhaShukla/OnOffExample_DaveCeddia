import React, { useState } from "react";
import ReactDOM from "react-dom";
import "/src/styles.css";

function Room() {
  //const [isLit, setLit] = useState(true);
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
      <div className={`light${"status"}`} />
      The status of bulb is : <div className="value">{status}</div>
      <br />
      <br />
      <button className="ON" onClick={() => setOn(true)}>
        ON
      </button>
      <button className="OFF" onClick={() => setOn(false)}>
        OFF
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
