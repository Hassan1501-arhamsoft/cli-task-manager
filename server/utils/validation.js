export function validateTaskTitle(title) {
  if (!title || title.trim() === "") {
    return "Task title is required.";
  }

  if (title.trim().length > 120) {
    return "Task title must not exceed 120 characters.";
  }

  return null;
}