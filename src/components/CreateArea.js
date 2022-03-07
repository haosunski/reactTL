import { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {
  const [showTitle, setShowTitle] = useState(false)
  const [note, setNote] = useState({
    title:"",
    content:""
  })
  const updateNote = event =>{
    const {name, value} = event.target
    setNote({...note,[name]:value})
  }
  const addItem = e =>{
    e.preventDefault()
    setNote({
      title:"",
      content:''
    })
    props.onAdd(note)
  }
  const onContentFocus= () =>{
    setShowTitle(true)
  }
  return (
    <div>
      <form className="create-note">
        {
          showTitle && <input name="title" onChange={updateNote} placeholder="Title" value={note.title}/>
        }
        <textarea onFocus={onContentFocus} name="content" onChange={updateNote} placeholder="Take a note..." rows={showTitle?"3":"1"} value={note.content}/>
        {/* <button onClick={addItem}><AddIcon/></button> */}
        <Zoom in={showTitle}>
          <Fab onClick={addItem} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
