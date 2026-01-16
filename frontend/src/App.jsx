import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    setTasks(await getTasks());
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (title) => {
    await createTask({ title });
    loadTasks();
  };

  const toggleTask = async (task) => {
    await updateTask(task.id, {
      status: task.status === "Pending" ? "Completed" : "Pending",
    });
    loadTasks();
  };

  const updateTitle = async (id, title) => {
    await updateTask(id, { title });
    loadTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="app">
      <h1 className="title">Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={removeTask}
        onUpdate={updateTitle}
      />
    </div>
  );
}

export default App;
