import React, { Component } from "react";
import { Helmet } from "react-helmet";
import InputForm from "./InputForm";
const style = {
  borderRadius: "0px"
};

class SalaryConverterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: undefined,
      grossIncome: 0,
      netIncome: 0,
      monthlyPay: 0,
      biweeklyPay: 0
    };

    this.handleReset = this.handleReset.bind(this);
    this.calculateIncome = this.calculateIncome.bind(this);
  }

  calculateIncome(hourly_rate, number_of_hours, tax_rate) {
    let grossIncome, netIncome, monthlyPay, biweeklyPay, incomeTax;
    grossIncome = netIncome = monthlyPay = biweeklyPay = incomeTax = 0;

    grossIncome = hourly_rate * number_of_hours * 52;
    incomeTax = (grossIncome * tax_rate) / 100;
    netIncome = grossIncome - incomeTax;
    monthlyPay = netIncome / 12;
    biweeklyPay = netIncome / 24;

    this.setState(() => ({
      showResult: grossIncome,
      grossIncome: grossIncome,
      netIncome: netIncome,
      monthlyPay: monthlyPay,
      biweeklyPay: biweeklyPay
    }));
  }

  handleReset() {
    this.setState(() => ({
      showResult: undefined
    }));
    console.log("THtiti");
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "15vh" }}>
        <Helmet>
          <title>Salary Converter | ApDevv.com</title>
        </Helmet>
        <h1 className="display-4 text-center">Salary Converter</h1>
        <br />
        <br />
        <div className="row mb-3">
          <div className="col-sm-6 offset-sm-3 card pt-3 pb-3" style={style}>
            <InputForm
              calculateIncome={this.calculateIncome}
              handleReset={this.handleReset}
            />
          </div>
        </div>

        {this.state.showResult ? (
          <div className="row">
            <div className="col-sm-6 offset-sm-3 card pt-3 pb-3">
              <div className="row">
                <div className="col-sm-6 offset-sm-3" style={style}>
                  <div className="form-group row">
                    <label
                      htmlFor="annualInterest"
                      className="col-sm-7 col-form-label"
                    >
                      Gross income:
                    </label>
                    <div className="col-sm-4 col-form-label">
                      {this.state.grossIncome}
                    </div>
                  </div>
                </div>
                {/*----*/}
                <div className="col-sm-6 offset-sm-3" style={style}>
                  <div className="form-group row">
                    <label
                      htmlFor="annualInterest"
                      className="col-sm-7 col-form-label"
                    >
                      Net income:
                    </label>
                    <div className="col-sm-4 col-form-label">
                      {this.state.netIncome}
                    </div>
                  </div>
                </div>
                {/*----*/}
                <div className="col-sm-6 offset-sm-3" style={style}>
                  <div className="form-group row">
                    <label
                      htmlFor="annualInterest"
                      className="col-sm-7 col-form-label"
                    >
                      Monthly pay:
                    </label>
                    <div className="col-sm-4 col-form-label">
                      {this.state.monthlyPay}
                    </div>
                  </div>
                </div>
                {/*----*/}
                <div className="col-sm-6 offset-sm-3" style={style}>
                  <div className="form-group row">
                    <label
                      htmlFor="annualInterest"
                      className="col-sm-7 col-form-label"
                    >
                      Biweekly pay:
                    </label>
                    <div className="col-sm-4 col-form-label">
                      {this.state.biweeklyPay}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default SalaryConverterApp;
