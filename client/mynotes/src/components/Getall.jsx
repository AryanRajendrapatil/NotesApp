import React, {useState, useEffect } from 'react'
import axios from "axios";
import "../components/Getall.css"

const Getall = ({ notes, setNotes }) => {

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/allnotes");
                setNotes(response.data);
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };
        fetchNotes();
    }, [notes]);

    const handleGetNotes = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/allnotes");
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h1  className="section-title">All Notes</h1>
            
            {/* <button onClick={handleGetNotes} style={{ padding: "0.5rem 1rem", marginBottom: "1rem" }}>
                Get All Notes
            </button> */}
            
            

            {notes.length > 0 ? (
                <ul className="notes-list">
                    {notes.map(note => (
                        <li key={note._id} className="note-card">
                            <h3>{note.title}</h3>
                            <p>{note.description}</p>
                        </li>
                    ))}
                </ul>
                
            )
             : (
                <p>No notes to display.</p>
            )}
              {/* <button onClick={handleGetNotes} style={{ padding: "0.5rem 1rem", marginBottom: "1rem" }}>
                Get All Notes
            </button> */}
        </div>
    );
}

    
 



export default Getall