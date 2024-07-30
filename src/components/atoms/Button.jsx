import React from "react";

function Button(props) {
    return (
        <button onClick={props.onClick} className="w-full h-10 bg-blue-500 text-white rounded-sm p-2">
            {props.text}
        </button>
    );
}

export default Button;
