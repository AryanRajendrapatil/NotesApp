import React,{useState}from 'react'
import axios from "axios";


const DeleteNote = () => {
    
  const [title, settitle] = useState("");
  const [message, setmessage] = useState("");
  const handledelete=(e)=>{
    e.preventDefault();
    axios.delete("https://notesapp-coxu.onrender.com/api/deletenote", {
        data:{title: title}
       
      })
      .then((res) => {
       setmessage("note deleted successfully");    
       
      })
      .catch((err) => {
        setmessage("Error deleting note");
        console.error(err);
      });
    }
  return (
    <div  className="section-container">
      <h1 className="section-title">Delete Note</h1>
      <form onSubmit={handledelete}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        
        <button type="submit">Delete  Note</button>
      </form>
      <p>{message}</p>
    </div>
  );
};
  


export default DeleteNote
