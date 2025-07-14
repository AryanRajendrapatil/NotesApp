import React , {useState}from 'react'
import Addnote from '../components/Addnote';
import Getall from '../components/Getall';
import DeleteNote from '../components/DeleteNote';
import UpdataNote from '../components/UpdataNote';

export const Home = () => {
  const [notes, setNotes] = useState([]);
  
  return (
    <div>
        <Addnote setNotes={setNotes}/>
         <DeleteNote/>
         <UpdataNote/>
        <Getall notes={notes} setNotes={setNotes}/>
       
    </div>
  
  )
}

export default Home;
