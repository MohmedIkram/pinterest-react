import React from "react";

/** local files import */
import "./Pin.css";
import Dots from "../../assets/Dots.png";
import Upload from "../../assets/Upload.png";

function Pin(props) {
  let { urls } = props;

  return (
    <div className="pin">
      <div className="pin__container">
        <button type="button" className="TopButton">
          <a href={() => false}>Save</a>
        </button>
        <img src={urls?.regular} alt="pin" className="pinimg" />
        <div>
          <button type="button" className="RoundButton">
            <img src={Dots} alt="Dots"></img>
          </button>
          <button type="button" className="ButtonUpload">
            <img src={Upload} alt="Upload"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pin;
