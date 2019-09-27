import React from "react";
import { Alert, Collapse, Button } from "reactstrap";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 0,
      collapse: false
    };

    this.handleIncomeCalculation = this.handleIncomeCalculation.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleEmptyFieldAlert = this.handleEmptyFieldAlert.bind(this);
  }

  handleIncomeCalculation(e) {
    e.preventDefault();

    const hourly_rate = e.target.elements.hourly_rate.value.trim();
    const number_of_hours = e.target.elements.number_of_hours.value.trim();
    const tax_rate = e.target.elements.tax_rate.value.trim();

    if (hourly_rate === "" || number_of_hours === "" || tax_rate === "") {
      this.setState(state => ({ collapse: !state.collapse }));
    }

    this.props.calculateIncome(hourly_rate, number_of_hours, tax_rate);
  }

  handleReset(e) {
    e.preventDefault();
    this.props.handleReset();
  }

  handleEmptyFieldAlert() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <form onSubmit={this.handleIncomeCalculation}>
        <div className="form-group row">
          <label htmlFor="hourly_rate" className="col-sm-5 col-form-label">
            Hourly salary rate &#36;:
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              name="hourly_rate"
              placeholder="Enter hourly rate"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="number_of_hours" className="col-sm-5 col-form-label">
            Hours per week:
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              name="number_of_hours"
              placeholder="Weekly working hours"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="tax_rate" className="col-sm-5 col-form-label">
            Tax rate (%):
          </label>
          <div className="col-sm-6">
            <input
              type="decimal"
              className="form-control"
              name="tax_rate"
              placeholder="Enter tax rate"
            />
          </div>
        </div>

        <br />

        <div>
          <button type="submit" className="btn btn-primary">
            Calculate Income
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

        <Collapse isOpen={this.state.collapse} style={{ marginTop: "1rem" }}>
          <Alert color="danger" style={{ marginBottom: "0rem" }}>
            Please enter values in the fields &nbsp;&nbsp;&nbsp;
            <Button
              outline
              size="sm"
              color="success"
              onClick={this.handleEmptyFieldAlert}
            >
              Close
            </Button>
          </Alert>
        </Collapse>
      </form>
    );
  }
}

export default InputForm;
