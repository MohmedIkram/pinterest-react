import React from "react";

/** local files import */
import Pin from "./Pin";
import "./Mainboard.css";
import plus from "../../assets/plus.svg"
import questionmark from "../../assets/questionmark.png"

function Mainboard(props) {
  let { pins } = props;

  return (
    <div className="mainboard">
      <div className="mainboard__container">
        {pins.map((pin) => {
          let { urls } = pin;
          return <Pin key={urls} urls={urls} />;
        })}
      </div>
      <div>
        <a href="#" className="float">
          <img src={questionmark} alt="questionmark" className="my-float"></img>
        </a>
        <a href="#" className="floattwo">
          <img src={plus} alt="plus" className="my-float"></img>
        </a>
      </div>
    </div>
  );
}

function Images() {

}

export default Mainboard;
