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
          return <Pin urls={urls} />;
        })}
      </div>
      <div>
        <a href="#" class="float">
          <img src={questionmark} alt="questionmark" class="my-float"></img>
        </a>
        <a href="#" class="floattwo">
          <img src={plus} alt="plus" class="my-float"></img>
        </a>

      </div>

    </div>
  );
}

function Images() {

}

export default Mainboard;
