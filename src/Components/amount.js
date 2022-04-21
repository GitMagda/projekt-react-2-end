import React from "react";
// import "./style.css";

function Amount({ getAmount }) {
  return (
    <div className="amount" id="amount">
      <input
        onInput={(e) => getAmount(e.target.value)}
        type="number"
        min="0"
        className="moneyAmount"
        id="moneyAmount"
      />
    </div>
  );
}

export default Amount;
