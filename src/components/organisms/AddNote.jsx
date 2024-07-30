import React from "react";
import Text from "../atoms/Text";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

function AddNote(props) {
    return (
        <div className="w-full my-5 bg-gray-200 rounded-md p-4">
            <Text text="Agregar nota" />
            <Field name="Título:" reference={props.titleReference} />
            <Field name="Contenido:" reference={props.contentReference} />
            <Button text="Guardar" onClick={props.onClickAdd} />
        </div>
    );
}

export default AddNote;
