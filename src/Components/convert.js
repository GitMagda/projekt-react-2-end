import react from "react";
// import "./style.css";

function Convert({ onBtnClick }) {
  return (
    <div className="convert" id="convert">
      <button onClick={onBtnClick} className="convertAmount" id="convertAmount">
        Przelicz
      </button>
    </div>
  );
}

export default Convert;
