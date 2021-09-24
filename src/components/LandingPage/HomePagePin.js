import React from "react";
import "./HomePagePin.css";

function HomePagePin(props) {
  let { urls } = props;

  return (
    <div className="pin">
      <div className="pin__container">
        <img src={urls?.regular} alt="pin" />
      </div>
    </div>
  );
}

export default HomePagePin;
