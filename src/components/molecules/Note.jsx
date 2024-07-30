import React from "react";
import Text from "../atoms/Text";

function Note(props) {
    return (
        <div className="w-44 min-h-44 bg-gray-100 rounded-sm p-2 m-2 flex flex-col">
            <Text text={props.title} className="text-xl mb-2" />
            <Text text={`ID: ${props.id}`} className="mb-2" />
            <Text text={props.content} />
        </div>
    );
}

export default Note;
