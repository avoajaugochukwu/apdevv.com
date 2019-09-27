import React from "react";

const ViewResult = props => {
  return (
    <div>
      <h3>Result</h3>

      {props.resultArray && (
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Deposit</th>
              <th>Rate</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {props.resultArray.map(i => (
              <tr key={i}>
                <td>{i[0]}</td>
                <td>{i[1]}</td>
                <td>{i[2]}</td>
                <td>
                  &#8358;{" "}
                  {i[3]
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewResult;

// {this.state.fv && <ViewResult resultArray={props.resultArray} />}
