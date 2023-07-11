import React from "react";

function TodoList({tasks}) {
  return (
    <>
      <div className="row mt-4 ">
        <div className="col-md-4"></div>
        <div className="col-md-4 card text-center todoform">
        <h2>Task List</h2>
          {tasks.map((item) => {
            return (
              <div key={item.id}>
              
                <div className="listit">
                  <input checked={item.completed} type="checkbox"></input>{" "}
                  <h6 className="mt-2 ms-4">{item.title}</h6>
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

export default TodoList;
