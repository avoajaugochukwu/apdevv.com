import React from "react";
import { Helmet } from "react-helmet";

// import PortfolioBody from "./PortfolioBody";
import FreeCodeCampPortfolio from "./freeCodeCamp/FreeCodeCampPortfolio";
import LiveProjectPortfolio from "./liveProjects/LiveProjectPortfolio";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio | ApDevv.com | Front End Developer</title>
      </Helmet>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "10vh" }}>
          <div className="col-sm home-menu" />
          <div className="col-sm home-menu">
            <div className="" style={{ fontWeight: "lighter" }}>
              <h1 className="display-2">Portfolio</h1>
              <div>
                <p
                  style={{
                    fontSize: "1.5em",
                    color: "#8f979e",
                    fontWeight: "lighter"
                  }}
                >
                  This is a list of the things I have worked on in the past,
                  during learning or live projects.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm home-menu" />
        </div>
      </div>

      {/*End of first row*/}

      <div className="container">
        <div className="row">
          <h2
            className="live_project_h2 pl-3"
            style={{ fontWeight: "lighter" }}
          >
            <span className="live_project_h2_span">Live Projects</span>
          </h2>
        </div>

        <LiveProjectPortfolio />
      </div>

      <br />

      <div className="container" style={{ backgroundColor: "rgba(41, 98, 255, 0.04)" }}>
        <div className="row">
          <h2
            className=" freecodecamp_h2 pl-3"
            style={{ fontWeight: "lighter" }}
          >
            <span className="freecodecamp_h2_span">Free Code Camp</span>
          </h2>
        </div>

        <FreeCodeCampPortfolio />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Portfolio;
