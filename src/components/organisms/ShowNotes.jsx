import React from "react";
import Text from "../atoms/Text";
import Note from "../molecules/Note";

function ShowNotes(props) {
    const notes = props.notes;

    return (
        <div className="w-full min-h-44 my-5 bg-gray-200 rounded-md p-4">
            <Text text="Notas anteriores:" />
            <div className="w-full flex justify-center items-center flex-wrap">
                {notes.map(note => (
                    <Note key={note.id} title={note.title} id={note.id} content={note.content} />
                ))}
            </div>
        </div>
    );
}

export default ShowNotes;
