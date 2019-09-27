import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalSelectedValue: "Monthly",
      intervalSelectedValueNumeric: 12
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInterestComputation = this.handleInterestComputation.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInterestComputation(e) {
    // console.log(e);
    e.preventDefault();

    const principal = e.target.elements.principal.value.trim();
    const addition = e.target.elements.addition.value.trim();
    const annualInterest = e.target.elements.annualInterest.value.trim();
    const interval = this.state.intervalSelectedValueNumeric;
    const years = e.target.elements.years.value.trim();

    this.props.handleInterestComputation(
      principal,
      addition,
      annualInterest,
      interval,
      years
    );
  }

  handleChange(e) {
    // e.persist();
    let intervalSelectedValue = e.target.value;
    let intervalSelectedValueNumeric = 0;

    this.setState(() => {
      return { intervalSelectedValue };
    });
    // check value of intervalSelectedValue
    if (intervalSelectedValue === "Monthly") {
      intervalSelectedValueNumeric = 12;
    } else if (intervalSelectedValue === "Daily") {
      intervalSelectedValueNumeric = 365;
    } else if (intervalSelectedValue === "Quarterly") {
      intervalSelectedValueNumeric = 4;
    } else if (intervalSelectedValue === "Biannual") {
      intervalSelectedValueNumeric = 2;
    } else {
      intervalSelectedValueNumeric = 1;
    }

    this.setState(() => {
      return { intervalSelectedValueNumeric: intervalSelectedValueNumeric };
    });
  }

  handleReset(e) {
    e.preventDefault();

    this.props.handleReset();
  }

  render() {
    return (
      <form onSubmit={this.handleInterestComputation}>
        <div className="form-group row">
          <label htmlFor="principal" className="col-sm-7 col-form-label">
            Beginning Account Balance:
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              name="principal"
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="addition" className="col-sm-7 col-form-label">
            Enter the *monthly* addition (&#8358;):
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              name="addition"
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="annualInterest" className="col-sm-7 col-form-label">
            Annual Interest Rate (%):
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              name="annualInterest"
              placeholder="0.0"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="interval" className="col-sm-7 col-form-label">
            Choose Your Compound Interval:
          </label>
          <div className="col-sm-4">
            <select
              className="custom-select custom-select-sm"
              name="interval"
              value={this.state.intervalSelectedValue}
              onChange={this.handleChange}
            >
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Biannual">Biannual</option>
              <option value="Years">Years</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="years" className="col-sm-7 col-form-label">
            Number of *years*:
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              name="years"
              placeholder="0"
            />
          </div>
        </div>

        <br />

        <div>
          <button type="submit" className="btn btn-primary">
            Calculate Compound Interest
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="submit"
            className="btn btn-warning"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default InputForm;
