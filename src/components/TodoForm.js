import React, { useState } from "react";
//import TodoList from "./TodoList";

function TodoForm() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const Addhandler = () => {
    return setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: newTask, completed: false },
    ]);
  };

  const checkToggle=(key)=>{
    setTasks(
        tasks.map(
            (item)=> {
                return item.id===key ? {...item,completed:!(item.completed)}: item
            }
        )
    )
    
 

  }

  const delHandler=(key)=>{
    setTasks(
        tasks.filter(
            (item)=> {
                return item.id!==key

            }
        )
       
    )
  }
  

  return (
    <>
      <div className="row mt-4 ">
        <div className="col-md-4"></div>
        <div className="col-md-4 card text-center todoform">
          <h1>Todo</h1>
          <label>What's the new task?</label>
          <input
            className="lcolor form-control"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <div className="">
            <button
              className="btn btn-light addbtn text-center bvcolor"
              onClick={Addhandler}
            >
              Add
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>


      <div className="row mt-4 ">
        <div className="col-md-4"></div>
        <div className="col-md-4 card text-center todoform">
          <h2>Task List</h2>
          {tasks.length===0 && <h5>No Todos</h5>}
          {tasks.map((item) => {
            return (
              <div key={item.id}>
                <div className="listit">
                  <input checked={item.completed} type="checkbox" onChange={(e)=>checkToggle(item.id)}></input>
                  <h6 className="mt-2 ms-4">{item.title}</h6>
                  <i class="fa fa-trash mt-2 del-icon" onClick={()=>delHandler(item.id)} aria-hidden="true"></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default TodoForm;
