import { useState } from "react";
import axios from 'axios'
function Create() {
    const handleAdd=()=>{
        axios.post('http://localhost:3001/taskAdd',{task:task})
        .then(result=>{console.log(result)
        location.reload()
        })
        .catch(err=>{console.log(err)})
    }
    const [task,setTask]=useState()
    return ( 
        <div className="create_form">
            <input type="text" onChange={(e)=>setTask(e.target.value)} />
            <button className='btn' onClick={handleAdd} type="button">Add</button>
        </div>
     );
}

export default Create;