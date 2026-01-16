import { useState } from "react";
import "./Task.css";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const submit = () => {
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}
