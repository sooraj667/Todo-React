import React, { useState } from "react";
//import TodoList from "./TodoList";

function TodoForm() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState([]);

  const Addhandler = () => {
    return setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: newTask, completed: false },
    ]);
  };

  const checkToggle = (key) => {
    setTasks(
      tasks.map((item) => {
        return item.id === key ? { ...item, completed: !item.completed } : item;
      })
    );
  };

  const delHandler = (key) => {
    setTasks(
      tasks.filter((item) => {
        return item.id !== key;
      })
    );
  };

  const notCompletedHandler = () => {
    setStatusFilter(
      tasks.filter((item) => {
        return item.completed === false;
      })
    );
  };

  const completedHandler = () => {
    return setStatusFilter(
      tasks.filter((item) => {
        return item.completed === true;
      })
    );
  };
  
  const delStatusCardHandler=() =>{
    return setStatusFilter([])
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
          <div className="statusdiv">
            <i
              onClick={completedHandler}
              class="fa-sharp fa-regular fa-square-check"
            ></i>
            <i
              onClick={notCompletedHandler}
              class="fa-regular fa-circle-xmark ms-2"
            ></i>
          </div>

          {tasks.length ===0 && <h5>No Todos</h5>}
          {tasks.map((item) => {
            return (
              <div key={item.id}>
                <div className="listit">
                  <input
                    checked={item.completed}
                    type="checkbox"
                    onChange={(e) => checkToggle(item.id)}
                  ></input>
                  <h6 className="mt-2 ms-4">{item.title}</h6>
                  <i
                    class="fa fa-trash mt-2 del-icon"
                    onClick={() => delHandler(item.id)}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>



        








        {statusFilter.length !==0  &&  (
          <div className="col-md-3 ms-4 card todoform">
            {statusFilter[0].completed===true ? 
            <div className="headlist">
            <h4 className="text-center">Completed Tasks</h4> 
            <i onClick={delStatusCardHandler} class="fa-solid fa-trash mt-1"></i> 
            </div>
            
            :<div className="headlist">
            <h4 className="text-center">Not Completed Tasks</h4> 
            <i onClick={delStatusCardHandler}  class="fa-solid fa-trash mt-1"></i>
            </div>  
            }

            {statusFilter.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="complist">
                    <i class="  fa-solid fa-arrow-right"></i>
                    <h6 className=" ms-4 text-center">{item.title}</h6>
                    </div>
                  </div>
                );
              })}
              
          </div>
        )}
      </div>
    </>
  );
}

export default TodoForm;
