import React, { useContext, useState } from 'react';
import '../css/Home.css';
import { NoteContext } from '../Context/NoteContext';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

    const { id } = useParams();
    const [notes, setNotes] = useContext(NoteContext);
    const [title, setTitle] = useState(notes[id]?.title || "")
    const [content, setContent] = useState(notes[id]?.content || "");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (title === "" || content === "") {
            alert("Please enter your details!")
        } else {
            event.preventDefault();
            const newNote = { title, content };
            if (id) {
                // If we're in edit mode, update the existing note
                const updatedNotes = [...notes];
                updatedNotes[id] = newNote;
                setNotes(updatedNotes);
            } else {
                // Otherwise, add a new note
                setNotes([...notes, newNote]);
            }
            navigate('/notes');
        }
    };

    return (
        <div className='home'>
            <div className='box'>
                <div className='note'>
                    Notes
                </div>
                <div>
                    <div className='title'>
                        <label className='label'>
                            Title
                        </label>
                        <input
                            type='text'
                            placeholder='Add your title'
                            className='input'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='title'>
                        <label className='label'>
                            Content
                        </label>
                        <textarea
                            type='text'
                            placeholder='Add your content'
                            className='text'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className='button'>
                        <button className='cancelClass' onClick={() => navigate('/notes')}>
                            Cancel
                        </button>
                        <button className='buttonClass' onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;