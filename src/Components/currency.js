import React from "react";
// import "./style.css";

function Currency({ getCurrency }) {
  return (
    <div className="currency" id="currency">
      <select
        onChange={(e) => getCurrency(e.target.value)}
        name="moneyCurrency"
        className="moneyCurrency"
        id="moneyCurrency">
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default Currency;
