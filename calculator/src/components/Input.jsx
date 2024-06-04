import React from "react";
import "./Input.css";

export default function Input(props){
    return(
        <div className="input-wrapper">
            <div className="result">
                <h1>{props.result}</h1>
            </div>

            <div className="text">
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}