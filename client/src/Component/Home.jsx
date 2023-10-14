import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill} from 'react-icons/bs'
function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getTodo")
      .then((result) => setTodos(result.data))

      .catch((err) => console.log(err));
  }, []);

  const handleEdit=(id)=>{
    axios
    .put("http://localhost:3001/update/"+id)
    .then((result) =>{ console.log(result)
    location.reload()
    })

    .catch((err) => console.log(err));
  }

  const handleDelete=(id)=>{
    axios
    .delete("http://localhost:3001/delete/"+id)
    .then((result) =>{ console.log(result)
    location.reload()
    })

    .catch((err) => console.log(err));
  }
  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />

      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => {
          return (
            <div className="task" key={todo._id}> 
            <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
                {
                    todo.Status ? <BsFillCheckCircleFill className="icon"/>
                    :
                <BsCircleFill className='icon'/>
                }
                <p className={todo.Status ? 'line_through':''}>{todo.task}</p>
            </div>
            <div>
                <span><BsFillTrashFill onClick={()=>handleDelete(todo._id)} className='icon'/></span>
            </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
