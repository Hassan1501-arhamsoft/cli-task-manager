import helpCommand from '../commands/helpCommand.js'
import addCommand from '../commands/addCommand.js'
import listCommand from '../commands/listCommand.js'
// read the command line
const args = process.argv.splice(2)

// extract the command
const command = args[0]

// extract the remaining data
const remainingArg = args.splice(1)

// routes

switch (command) {
    case "add":
    addCommand(remainingArg)
        break;
    case "list":
        listCommand();
        break
    case "help":
        helpCommand();
        break
    default:
          console.log(`Unknown command: ${command}`);
        console.log('Run "node src/index.js help" to view available commands.');
        helpCommand();
        
}


























