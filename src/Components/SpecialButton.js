import React from 'react';
//import firebaseDb from "../firebase";

import "../Style/App.css";

const SpecialButton = ({ type, handle }) => {
    let button = <span />;
    if (type === "submit") {
        button = <button className="margin-right" onClick={handle}>Submit</button>
    }
    else if (type === "clear") {
        button = <button className="margin-right" onClick={handle}>Clear</button>
    }
    else if (type === "clueless") {
        button = <button className="special_button" onClick={ClueLessClick}>What's the purpose of this thing again?</button>
    }
    return (
        <span>{button} </span>
    )
}
const ClueLessClick = () => {
    alert("well IDK either.Just input Random Words!!");
}
export default SpecialButton;