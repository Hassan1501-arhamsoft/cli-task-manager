import { getTasks } from "../services/taskService.js";

export default function listCommand() {
  const tasks = getTasks();

  if (tasks.length === 0) {
    console.log("No tasks found.");
    console.log("Use the add command to create your first task.");
    return;
  }

  console.log("Tasks\n");

  for (const task of tasks) {
    const status = task.completed ? "Completed" : "Pending";

    console.log(`[${task.id}] [${status}] ${task.title}`);
  }
}