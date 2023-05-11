import React, { createContext, useState, useEffect } from 'react';

export const NoteContext = createContext();

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState(() => {
        const storedNotes = localStorage.getItem('notes');
        return storedNotes ? JSON.parse(storedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <NoteContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NoteContext.Provider>
    );
};
