import Header from "./components/Header"
import Note from "./components/Note"
import Footer from "./components/Footer"
import notesData from "./notes"
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(notesData)
  const addNote = note =>{
    setNotes([...notes,note])

  }
  const deleteNote = index =>{
    const newNotes = notes.filter((note,i)=>i!==index)
    setNotes(newNotes)
  }
  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {
        notes.map((note,i) => <Note key={i} {...note} id={i} onDelete={deleteNote}/>)
      }

      <Footer/>
    </div>
  );
}

export default App;
