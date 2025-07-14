import axios from 'axios'
import React,{useState} from 'react'


const UpdataNote = () => {
    const[change,Setchange]=useState("")
    const [title,Settitle]=useState("")
    const[description,SetDescription]=useState("")
    const[message,setMessage]=useState("")
    const handleupdate=(e)=>{
       
        axios.put("http://localhost:5000/api/updatenote",{
            change:change,
            title:title,
            description:description
        })
        .then((res) => {
       setMessage("note updated successfully");    
       
      })
      .catch((err) => {
        setMessage("Error updating note");
        console.error(err);
      });
        

    }
  return (
    
    <div className="section-container">
        <h1   className="section-title">UpdataNote</h1>
        <form onSubmit={handleupdate}>
            <input type="text" 
             placeholder="Old Title"
              value={change} 
              onChange={(e)=>Setchange(e.target.value)}/>
        <input
          type="text"
          placeholder="Enter New Title"
          value={title}
          onChange={(e) => Settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter New Description"
          value={description}
          onChange={(e) => SetDescription(e.target.value)}
        />
        <button type="submit">Update Note</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default UpdataNote