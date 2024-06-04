import React from "react";
import "./Button.css";

export default function Button(props){
    const className = `button-wrapper ${props.type === "operand" ? "operand" : ""} ${props.type === "clear" ? "clear" : ""}`;
    return(
        <div className = {className} onClick={() => props.handleClick(props.symbol)}>
            {props.symbol}
        </div>
    )
}