import React from 'react';
import { Helmet } from "react-helmet";
import DrumPad from './DrumPad';
import './drumMachine.css';

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];


class DrumMachine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bankSwitchButton: false,
            currentBank: bankOne,
            powerSwitch: false,
            display: ''
        }
    }

    //activatePad
    //updateDisplay

    clickToPlaySound = (e) => {
        const v = e;
        const g = v.target.innerHTML.charCodeAt();

        const f = this.state.currentBank;

        const j = f.filter(i => g === i.keyCode);

        if (this.state.powerSwitch) {
            const audio = new Audio(j[0].url);
            this.setState({
                display: j[0].id
            })
            audio.currentTime = 0;
            audio.play();
        }

    }

    changeBank = (e) => {
        if (this.state.bankSwitchButton) {
            this.setState({
                bankSwitchButton: false,
                currentBank: bankOne
            });
            // console.log('button turned off');
        } else {
            this.setState({
                bankSwitchButton: true,
                currentBank: bankTwo
            });
            // console.log('button turned on');
        }
    }

    powerOnOff = () => {
        if (this.state.powerSwitch) {
            this.setState({
                powerSwitch: false
            })
        } else {
            this.setState({
                powerSwitch: true
            })
        }
    }

    render() {

        return (
            <div className="container" style={{ paddingTop: "15vh" }}>
                <Helmet>
                    <title>Wikipedia Viewer App | FreeCodeCamp | ApDevv.com | Front End Developer</title>
                </Helmet>
                <h1 className="display-4 text-center">Drum Machine</h1>
                <br /><br />
                <div className="container">
                    <div className="col-sm-8 offset-sm-2 card pt-3 pb-3">
                        <div className="row">
                            <div className="container" id="drum-machine">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <div className="container">
                                            <div className="row " id="display">
                                                <DrumPad letter={'Q'} clicker={this.clickToPlaySound} />
                                                <DrumPad letter={'W'} clicker={this.clickToPlaySound} />
                                                <DrumPad letter={'E'} clicker={this.clickToPlaySound} />
                                            </div>
                                            {/*  */}
                                            <div className="row">
                                                <DrumPad letter={'A'} clicker={this.clickToPlaySound} />
                                                <DrumPad letter={'S'} clicker={this.clickToPlaySound} />
                                                <DrumPad letter={'D'} clicker={this.clickToPlaySound} />
                                            </div>

                                            {/*  */}

                                            <div className="row">
                                                <DrumPad letter={'Z'} clicker={this.clickToPlaySound} />
                                                <DrumPad letter={'X'} clicker={this.clickToPlaySound} />
                                                <DrumPad letter={'C'} clicker={this.clickToPlaySound} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="container">
                                            <div className="row d-flex justify-content-center">
                                                <div className="">
                                                    <br />
                                                    <h3 className="font-weight-light">Power</h3>
                                                    <div className="custom-control custom-switch" onChange={this.powerOnOff}>
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                                        <label className="custom-control-label" htmlFor="customSwitch2"></label>
                                                    </div>
                                                    <div>
                                                        <br />
                                                        <input type="text" disabled value={this.state.display} className="text-center" />
                                                        <br /><br />
                                                    </div>
                                                    <h3 className="font-weight-light">Bank</h3>
                                                    <div className="custom-control custom-switch" onChange={this.changeBank}>
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                        <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrumMachine;