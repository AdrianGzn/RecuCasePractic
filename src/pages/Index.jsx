import React, { useRef, useState, useEffect } from "react";
import AddNote from "../components/organisms/AddNote";
import DeleteNote from "../components/organisms/DeleteNote";
import ShowNotes from "../components/organisms/ShowNotes";

function Index() {
    const [notes, setNotes] = useState([]);
    const [idCount, setIdCount] = useState(0);
    const titleRef = useRef("");
    const contentRef = useRef("");
    const idRef = useRef(0);

    const addNote = () => {
        const newNote = {
            id: idCount,
            title: titleRef.current.value,
            content: contentRef.current.value,
        };

        setNotes(prevNotes => [...prevNotes, newNote]);
        setIdCount(prevIdCount => prevIdCount + 1);
        alert("Se ha agregado correctamente");
    };

    const deleteNote = () => {
        const idToDelete = parseInt(idRef.current.value, 10);
        setNotes(prevNotes => prevNotes.filter(note => note.id !== idToDelete));
        alert("Se ha eliminado correctamente")
    };

    useEffect(() => {
        console.log("Notes updated:", notes);
    }, [notes]);

    return (
        <div className="w-full h-full bg-gray-300 flex justify-center items-center">
            <div className="w-4/5 flex flex-wrap">
                <AddNote titleReference={titleRef} contentReference={contentRef} onClickAdd={addNote} />
                <DeleteNote idReference={idRef} onClickDelete={deleteNote} />
                <ShowNotes notes={notes} />
            </div>
        </div>
    );
}

export default Index;
