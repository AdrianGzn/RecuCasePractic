import React from "react";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

function Field(props) {
    return (
        <div className="min-h-20 bg-gray-100 rounded-sm p-2 mb-2">
            <Text text={props.name} />
            <Input reference={props.reference} />
        </div>
    );
}

export default Field;
