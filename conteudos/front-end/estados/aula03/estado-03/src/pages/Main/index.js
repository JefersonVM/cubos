import "./style.css";
import { useState } from "react";

function Main() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(event) {
    const content = event.target.value;

    if (event.key !== "Enter" || content === "") {
      return;
    }

    const localTasks = [...tasks];

    const newTask = {
      id: localTasks.length ? localTasks[localTasks.length - 1].id + 1 : 1,
      name: content,
      done: false,
    };

    localTasks.push(newTask);

    setTasks(localTasks);

    event.target.value = "";
  }

  function handleDeleteTask(taskId) {
    const localTasks = [...tasks];

    const taskIndex = localTasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      return;
    }

    localTasks.splice(taskIndex, 1);

    setTasks(localTasks);

    console.log(taskIndex);
  }

  function handleChangeStatus(taskId) {
    const localTasks = [...tasks];

    const findTask = localTasks.find((task) => task.id === taskId);

    if (!findTask) {
      return;
    }

    findTask.done = !findTask.done;

    setTasks(localTasks);
  }
  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Nova tarefa"
          onKeyDown={(event) => {
            handleAddTask(event);
          }}
        />
      </div>

      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                className={`${task.done && "task-done"}`}
                onClick={() => handleChangeStatus(task.id)}
              >
                {task.name}
              </span>
              <button
                className="btn-del"
                onClick={() => handleDeleteTask(task.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
