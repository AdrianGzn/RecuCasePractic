import React from "react";

function Input(props) {
    return <input type="text" ref={props.reference} className="w-full h-10 p-2 mb-2" />;
}

export default Input;
