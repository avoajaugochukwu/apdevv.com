import React from "react";
import PortfolioItem from "../PortfolioItem";

const middleBackgroundColor = {
  backgroundColor: "#edf8ff"
};

const LiveProjectPortfolio = () => {
  return (
    <div className="row" style={{ borderTop: "1px #d5dce0 solid" }}>
      <div className="col-sm">
        <PortfolioItem
          header="Interest Calculator"
          explanation="This is an app that computes compound interest in Naira, and displays the interest made at the end of each year."
          challengeSource="live project"
          link="/compound_interest_app_in_naira"
        />
      </div>

      <div className="col-sm" style={middleBackgroundColor}>
        <PortfolioItem
          header="Salary Converter"
          explanation="This app takes our hourly wage and tax rate, and computes the annual salary. It also computes the monthly or bi-weekly wage."
          challengeSource="live project"
          link="/salary_converter"
        />
      </div>

      <div className="col-sm" />
    </div>
  );
};

export default LiveProjectPortfolio;
