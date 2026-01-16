import { useState } from "react";
import "./Task.css";

export default function TaskList({ tasks, onToggle, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const startEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  const saveEdit = (id) => {
    if (!editTitle.trim()) return;
    onUpdate(id, editTitle);
    setEditId(null);
  };

  if (!tasks.length) {
    return <p className="empty">No tasks available</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {editId === task.id ? (
            <input
              className="edit-input"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          ) : (
            <span className={task.status === "Completed" ? "completed" : ""}>
              {task.title}
            </span>
          )}

          <div className="actions">
            {editId === task.id ? (
              <button className="save" onClick={() => saveEdit(task.id)}>
                Save
              </button>
            ) : (
              <button onClick={() => startEdit(task)}>Update</button>
            )}

            <button onClick={() => onToggle(task)}>Done</button>
            <button className="delete" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
