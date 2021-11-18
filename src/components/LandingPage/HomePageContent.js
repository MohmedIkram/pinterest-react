import React from "react";
import HomePagePin from "./HomePagePin";
import "./HomePageContent.css";

function HomePageContent(props) {
  let { pins } = props;

  return (
    <div className="LandingPageMainboard">
      <div className="mainboard__container">
        {pins.map((pin) => {
          let { urls } = pin;
          return <HomePagePin key={pin} urls={urls} />;
        })}
      </div>
    </div>
  );
}

export default HomePageContent;
