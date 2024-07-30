import React from "react";

function Text(props) {
    return <p className={`text-base ${props.className}`}>{props.text}</p>;
}

export default Text;
