export default function helpCommand() {
  console.log(`
Task Manager CLI

Usage:
  node src/index.js <command>

Commands:
  add <title>    Add a new task
  list           List all tasks
  help           Show this help message

Examples:
  node src/index.js add "Buy milk"
  node src/index.js list
  node src/index.js help
`);
}