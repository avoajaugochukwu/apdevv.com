import React from "react";
import PortfolioItem from "../PortfolioItem";

const middleBackgroundColor = {
  backgroundColor: "#edf8ff"
};

const FreeCodeCampPortfolio = () => {
  return (
    <div>
      <div className="row" style={{ borderTop: "1px #d5dce0 solid" }}>
        <div className="col-sm">
          <PortfolioItem
            header="Local Weather"
            explanation="This is an app automatically displays the weather and temperature in the city where the user is located."
            challengeSource="freecodecamp.org"
            link="/portfolio/local_weather"
          />{" "}
          {/* Write how you achieved this a little comment on this and maybe level of difficulty with a star system */}
        </div>
        <div className="col-sm" style={middleBackgroundColor}>
          <PortfolioItem
            header="Quote Machine"
            explanation="This is an app that randomly generates quotes and change colors when the button is clicked."
            challengeSource="freecodecamp.org"
            link="/portfolio/quote_machine"
          />{" "}
          {/* Write how you achieved this a little comment on this and maybe level of difficulty with a star system */}
        </div>

        <div className="col-sm">
          <PortfolioItem
            header="Wikipedia View"
            explanation="The Wikipedia app can display a random wikipedia article, or can be used to search the wikipedia site, from any location on the web. "
            challengeSource="freecodecamp.org"
            link="/portfolio/wikipedia_viewer"
          />{" "}
          {/* Write how you achieved this a little comment on this and maybe level of difficulty with a star system */}
        </div>
      </div>

      <div className="row" style={{ borderTop: "1px #d5dce0 solid" }}>
        <div className="col-sm">
          <PortfolioItem
            header="Twitch TV Api"
            explanation="This app displays the status various Twitch TV channels, to let you know whether they are streaming."
            challengeSource="freecodecamp.org"
            link="/portfolio/twitch_tv_api"
          />{" "}
          {/* Write how you achieved this a little comment on this and maybe level of difficulty with a star system */}
        </div>
        <div className="col-sm" style={middleBackgroundColor}>
          <PortfolioItem
            header="Markdown Previewer"
            explanation="This app displays the status various Twitch TV channels, to let you know whether they are streaming."
            challengeSource="freecodecamp.org"
            link="/portfolio/MarkdownPreviewer"
          />
        </div>

        <div className="col-sm">
          <PortfolioItem
            header="Drum Machine"
            explanation="This is an application that is an almagamation of a drum and a calculator."
            challengeSource="freecodecamp.org"
            link="/portfolio/DrumMachine"
          />{" "}
          {/* Write how you achieved this a little comment on this and maybe level of difficulty with a star system */}
        </div>
      </div>

      <div className="row" style={{ borderTop: "1px #d5dce0 solid" }}>
        <div className="col-sm">
          <PortfolioItem
            header="Calculator"
            explanation="This app is a calculator, build with JavaScript."
            challengeSource="freecodecamp.org"
            link="/portfolio/calculator"
          />{" "}

        </div>
        <div className="col-sm" style={middleBackgroundColor}>
          {/* <PortfolioItem
            header="Markdown Previewer"
            explanation="This app displays the status various Twitch TV channels, to let you know whether they are streaming."
            challengeSource="freecodecamp.org"
            link="/portfolio/MarkdownPreviewer"
          /> */}
        </div>

        <div className="col-sm">
          {/* <PortfolioItem
            header="Drum Machine"
            explanation="This is an application that is an almagamation of a drum and a calculator."
            challengeSource="freecodecamp.org"
            link="/portfolio/DrumMachine"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default FreeCodeCampPortfolio;
