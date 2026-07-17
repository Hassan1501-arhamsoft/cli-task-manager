import {validateTaskTitle} from '../utils/validation.js'
import {addTask} from '../services/taskService.js'
export default function addCommand (remainingArg){
     const title = remainingArg.join(" ").trim();
     console.log(title)

  const error = validateTaskTitle(title);

  if (error) {
    console.log(error);
    console.log();
    console.log("Usage:");
    console.log('  node src/index.js add "Task title"');
    return;
  }

  const task = addTask(title);

  console.log("Task created successfully.\n");
  console.log(`ID: ${task.id}`);
  console.log(`Title: ${task.title}`);
  console.log("Status: Pending");
}