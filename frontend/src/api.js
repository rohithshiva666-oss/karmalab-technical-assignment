const API_URL = "http://localhost:5000";

export const getTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const updateTask = async (id, data) => {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
};
