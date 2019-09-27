import React from 'react';
import './calculator.css';


class Calculator extends React.Component {


    render() {
        return (
            <div className="container" style={{ paddingTop: "20vh" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="calculator-container" style={{ background: "#000" }}>
                            <div className="calculator-display">
                                <p className="text-right">0</p>
                            </div>

                            <div className="container" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                                <div className="row no-gutters">
                                    {/* <div className="col-sm-3"><div className="shoutkk"></div></div> */}
                                    <div className="col-sm-6"><div className="cal-button cal-ac-button">AC</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-operators-button">/</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-operators-button">x</div></div>
                                </div>

                                <div className="row no-gutters">
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">7</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">8</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">9</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-operators-button">-</div></div>
                                </div>

                                <div className="row no-gutters">
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">4</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">5</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">6</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-operators-button">+</div></div>
                                </div>

                                <div className="row no-gutters">
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">1</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">2</div></div>
                                    <div className="col-sm-3"><div className="cal-button cal-numbers-button">3</div></div>
                                    <div className="col-sm-3"><div className="cal-button">.</div></div>
                                </div>

                                <div className="row no-gutters">
                                    <div className="col-sm-6"><div className="cal-button cal-zero-button">0</div></div>
                                    {/* <div className="col-sm-3"><div className="shoutkk">2</div></div> */}
                                    {/* <div className="col-sm-3"><div className="shoutkk"></div></div> */}
                                    <div className="col-sm-6"><div className="cal-button cal-equal-button">=</div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

export default Calculator;