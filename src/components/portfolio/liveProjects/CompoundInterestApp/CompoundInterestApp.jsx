import React, { Component } from "react";
import { Helmet } from "react-helmet";
import InputForm from "./InputForm";
import ViewResult from "./ViewResult";
// import TableRow from "./TableRow";

// Todo
// Use babel-class-properties
// Make Daily, Quarterly, Semi-Annually and Yearly work

class CompoundInterestApp extends Component {
  // state = {
  //     fv: undefined,
  //     resultArray: undefined,
  //     table: ''
  // }

  constructor(props) {
    super(props);
    this.state = {
      fv: undefined,
      resultArray: undefined,
      table: ""
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleInterestComputation = this.handleInterestComputation.bind(this);
  }

  handleInterestComputation = (
    principal,
    addition,
    annualInterest,
    interval,
    years
  ) => {
    const result = this.computeInterestRate(
      principal,
      addition,
      annualInterest,
      interval,
      years
    );

    this.setState(() => ({ resultArray: result }));
    console.log(this.state.resultArray);
  };

  computeInterestRate = (
    principal,
    addition,
    annualInterest,
    interval,
    years
  ) => {
    // p = initial value
    // n = compounding periods per year = 12
    // r = nominal interest rate, compounded n times per year = 4% = 0.04
    // i = periodic interest rate = r/n = 0.04/12 = 0.00333333
    // y = number of years = 5
    // t = number of compounding periods = n*y = 12*5 = 60
    // d = periodic deposit = 100

    //fv = future value: interest + deposits

    let p = principal;
    let n = interval;
    let r = annualInterest / 100;
    let i = r / 12;
    let y = years;
    let t = n * y;
    let d = addition;

    // const fv = p * (i + 1) ** t + d * (((1 + i) ** t - 1) / i) * (1 + i);

    let resultArray = [];

    // let table = document.createElement("table");

    for (let month = 1; month <= t; month++) {
      let fvn =
        p * (i + 1) ** month + d * (((1 + i) ** month - 1) / i) * (1 + i);
      if (month % 12 === 0) {
        resultArray.push([month / 12, d * month, i, fvn]);
      }
    }
    return resultArray;
  };

  handleReset() {
    this.setState(() => {
      return {
        resultArray: undefined
      };
    });
  }

  render() {
    const style = {
      borderRadius: "0px"
    };
    return (
      <div className="container" style={{ paddingTop: "15vh" }}>
        <Helmet>
          <title>Compound Interest in Naira | ApDevv.com</title>
        </Helmet>
        <h1 className="display-4 text-center">Compound Interest Calculator</h1>
        <br />
        <br />
        <div className="row mb-3">
          <div className="col-sm-6 offset-sm-3 card pt-3 pb-3" style={style}>
            <InputForm
              handleInterestComputation={this.handleInterestComputation}
              handleReset={this.handleReset}
            />
          </div>
        </div>

        {this.state.resultArray ? (
          <div className="row mb-5">
            <div className="col-sm-6 offset-sm-3 card" style={style}>
              {this.state.resultArray && (
                <ViewResult resultArray={this.state.resultArray} />
              )}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default CompoundInterestApp;
