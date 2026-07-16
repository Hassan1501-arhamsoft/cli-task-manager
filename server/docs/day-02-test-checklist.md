# Day 02 Test Checklist

## Test 1 — Run the application without a command

**Command:**

```bash
node src/index.js
```

**Expected:**
Displays the help message or a clear message explaining that a command is required.

**Actual:**

Unknown command: undefined
Run "node src/index.js help" to view available commands.

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

**Result:** Pass 


## Test 2 — Run the `help` command

**Command:**

```bash
node src/index.js help
```

**Expected:**
Displays the application name, usage, available commands, descriptions, and examples.

**Actual:**

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

**Result:** Pass 


## Test 3 — Run an unknown command

**Command:**

```bash
node src/index.js unknown
```

**Expected:**

```text
Unknown command: unknown
Run "node src/index.js help" to view available commands.
```

**Actual:**

Unknown command: unknown
Run "node src/index.js help" to view available commands.

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

**Result:** Pass 


## Test 4 — Add a valid task

**Command:**

```bash
node src/index.js add "Complete Node.js assignment"
```

**Expected:**
Displays a success message with the task ID, title, and status.

**Actual:**

hello world
Task created successfully.

ID: 1
Title: hello world
Status: Pending

**Result:** Pass 



## Test 5 — Add a task without quotes

**Command:**

```bash
node src/index.js add Complete Node.js assignment
```

**Expected:**
Creates a single task with the title:

```text
Complete Node.js assignment
```

**Actual:**

Complete Node.js assignment
Task created successfully.

ID: 1
Title: Complete Node.js assignment
Status: Pending

**Result:** Pass 



## Test 6 — Add a task with no title

**Command:**

```bash
node src/index.js add
```

**Expected:**

```text
Task title is required.

Usage:
  node src/index.js add "Task title"
```

**Actual:**


Task title is required.

Usage:
  node src/index.js add "Task title"

**Result:** Pass 

## Test 7 — Add a title containing only spaces

**Command:**

```bash
node src/index.js add "     "
```

**Expected:**
Displays an error indicating that the task title is required.

**Actual:**

Task title is required.

Usage:
  node src/index.js add "Task title"

**Result:** Pass 


## Test 8 — Add a title longer than 120 characters

**Command:**

```bash
node src/index.js add "<title longer than 120 characters>"
```

**Expected:**
Displays an error indicating that the title exceeds the maximum length.

**Actual:**

Task title must not exceed 120 characters.

Usage:
  node src/index.js add "Task title"

**Result:** Pass 



## Test 9 — Run the `list` command with no tasks

**Command:**

```bash
node src/index.js list
```

**Expected:**

```text
No tasks found.
Use the add command to create your first task.
```

**Actual:**

No tasks found.
Use the add command to create your first task.

**Result:** Pass 

