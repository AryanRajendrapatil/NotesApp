import React, { useState } from "react";
import axios from "axios";
import "./Note.css";

export const Addnote = ({ setNotes }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [message, setmessage] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://notesapp-coxu.onrender.com/api/addnote", {
        title: title,
        description: description,
      })
      .then((res) => {
        setmessage("Note added successfully!!");
        setNotes(res.data); // Update notes list directly
      })
      .catch((err) => {
        setmessage("Error adding note");
        console.error(err);
      });
  };
  return (
    <div className="section-container">
      <h1 className="section-title">Add Note</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};
export default Addnote;
