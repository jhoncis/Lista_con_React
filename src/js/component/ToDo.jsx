import React, { useState } from "react";

const ToDo = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [isShown, setIsShown] =useState(-1);


  const handlertask = (event) => {
    setTask(event.target.value);
  };

  const handlerKeyPress = (event) => {
    // event.preventDefault();

    if (event.key == "Enter" && task != "") {

        setTaskList([...taskList, task]);
        setTask("");

    }
  };
  const handlerButtomDelete = (indexid) => setTaskList(taskList.filter((tarea , index)=> (index != indexid)))

  return (
    <div className="row mt-5">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="Card" id="card">
          <div className="form-floating mb-3">
            <input
              onChange={handlertask}
              value={task}
              onKeyDown={handlerKeyPress}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Tarea por hacer"
            />

            <label htmlFor="floatingInput">Tarea por hacer
            </label>
            <div className="task"></div>
            {taskList.length == 0 && <h1> No hay tareas, añadir tareas.</h1>}

            {taskList.map((tarea, i) => {
              return (
              <span className="d-flex justify-content-between py-2 bg-light" key={`s-${i}`}
              onMouseEnter={() => {setIsShown(i)}} onMouseLeave={() => {setIsShown(-1)}} >
                <h2 key={i}>{tarea}</h2>

                { isShown == i &&
                <i className="fas fa-minus-circle mt-3 ms-4 position-relative me-3 "
                key={`p-${i}`} onClick={() => {handlerButtomDelete(i)}}></i>}
              </span>);

            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
