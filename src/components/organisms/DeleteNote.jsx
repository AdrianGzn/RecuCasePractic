import React from "react";
import Text from "../atoms/Text";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

function DeleteNote(props) {
    return (
        <div className="w-full my-5 bg-gray-200 rounded-md p-4">
            <Text text="Eliminar nota" />
            <Field name="Id de la nota:" reference={props.idReference} />
            <Button text="Eliminar" onClick={props.onClickDelete} />
        </div>
    );
}

export default DeleteNote;
