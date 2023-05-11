import React, { useContext, useEffect, useState } from 'react';
import '../css/Notes.css';
import { NoteContext } from '../Context/NoteContext';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { MdSearch, MdModeEdit } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

const Notes = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useContext(NoteContext);
    const [content, setContent] = useState(false);
    const [data, setData] = useState(notes);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchField, setSearchField] = useState("");
    const showModal = (content) => {
        setIsModalOpen(true);
        setContent(content)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSearch = (search) => {
        setSearchField(search);
    }

    useEffect(() => {
        let filtered = notes;
        if (searchField) {
            filtered = filtered.filter(item => item.title.toLowerCase().includes(searchField.toLowerCase()) || item.content?.toString().includes(searchField));
        }
        console.log();
        setData(filtered)
    }, [searchField, notes])

    return (
        <div className='notes'>
            <h1 className='h1'>My Notes</h1>
            <div>
                {/* {notes.map((note, index) => (
                    <div key={index} className='boxPart'>
                        <h2 className='h1'>{note.title}</h2>
                        {showFullContent ? (
                            <p className="h1">{note.content}</p>
                        ) : (
                            <p className="h1" onClick={handleContentClick}>
                                {note.content.substring(0, 100)}...
                            </p>
                        )}

                        <div className='buttonPart'>
                            <button className='editButton' onClick={() => handleEdit(index)}>
                                Edit
                            </button>
                            <button className='deleteButton' onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))} */}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div className='search'>
                        <input
                            type='text'
                            className='serachField'
                            placeholder='Search'
                            value={searchField}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <MdSearch />
                    </div>
                    <div>
                        <button className='addNew' onClick={() => navigate('/')}>
                            Add New
                        </button>
                    </div>
                </div>


                {
                    window.innerWidth < 650 && (data.length === 0 ? <p className='pText'>
                        No Data Found!
                    </p> :
                        <table className='table'>
                            <tbody className='tbody'>
                                <tr style={{ paddingTop: "15px" }}>
                                    <th className='th'>Id</th>
                                    <th className='th'>Title</th>
                                    <th className='th'>Body</th>
                                    <th className='th'>Edit</th>
                                    <th className='th'>Delete</th>
                                </tr>
                                {data.map((note, index) => {
                                    return (
                                        <tr key={index} className='tr'>
                                            <td className='td'>{index}</td>
                                            <td className='td' style={{ width: "70px" }}>{note.title}</td>
                                            <td className='td' style={{ width: "168px" }} onClick={() => showModal(note.content)}>{note.content.substring(0, 30)}...</td>
                                            <td className='td'>
                                                <button className='editButton' onClick={() => handleEdit(index)}>
                                                    <MdModeEdit size={15} />
                                                </button>
                                            </td>
                                            <td className='td'>
                                                <button className='deleteButton' onClick={() => handleDelete(index)}>
                                                    <AiFillDelete size={15} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>)
                }

                {window.innerWidth >= 650 && (data.length === 0 ? <p className='pText'>
                    No Data Found!
                </p> : <table className='table'>
                    <tbody className='tbody'>
                        <tr style={{ paddingTop: "15px" }}>
                            <th className='th'>Id</th>
                            <th className='th'>Title</th>
                            <th className='th'>Body</th>
                            <th className='th'>Edit</th>
                            <th className='th'>Delete</th>
                        </tr>
                        {data.map((note, index) => {
                            return (
                                <tr key={index} className='tr'>
                                    <td className='td'>{index}</td>
                                    <td className='td'>{note.title}</td>
                                    <td className='td' onClick={() => showModal(note.content)}>{note.content.substring(0, 100)}...</td>
                                    <td className='td'>
                                        <button className='editButton' onClick={() => handleEdit(index)}>
                                        <MdModeEdit size={15} />
                                        </button>
                                    </td>
                                    <td className='td'>
                                        <button className='deleteButton' onClick={() => handleDelete(index)}>
                                        <AiFillDelete size={15} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                )}
            </div>

            <Modal open={isModalOpen} closable={true} centered footer={null} onCancel={handleCancel}>
                <p>
                    {content}
                </p>
            </Modal>
        </div>
    );
}

export default Notes;
