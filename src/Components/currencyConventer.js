import React from "react";
// import "./style.css";

function CurrencyConventer() {
  return (
    <div className="currencyConverter" id="currencyConverter">
      <div class="logo" id="logo">
        <img src="584-2507x1674.jpg" alt="" />
      </div>
      <div class="title" id="title">
        Przelicznik walut
      </div>
      <div class="input" id="input">
        <div class="amount" id="amount"></div>
      </div>
    </div>
  );
}
export default CurrencyConventer;
