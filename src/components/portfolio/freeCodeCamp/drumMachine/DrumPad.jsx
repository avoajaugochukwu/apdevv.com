import React from 'react';


const DrumPad = (props) => {
    return (
        <div className="col-sm-4 drum-pad">
            <div className="drum-pad-inner" value="Q" onClick={props.clicker}>
                {props.letter}
            </div>
        </div>
    );
};

export default DrumPad;