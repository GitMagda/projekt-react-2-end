import React from "react";
// import "./style.css";

function Outcome({ text }) {
  if (text !== "0.00") {
    return (
      <div className="outcome" id="outcome">
        <p> to {text} PLN</p>
      </div>
    );
  } else {
    return (
      <div className="outcome" id="outcome">
        <p>wpisz wartość!</p>
      </div>
    );
  }
}

export default Outcome;
