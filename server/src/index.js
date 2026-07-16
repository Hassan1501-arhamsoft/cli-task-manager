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


























// console.log("Task CLI application started");
// let operation = process.argv[2]
// let firstValue = Number(process.argv[3])
// let secondValue = Number(process.argv[4])
// const command = args[0]
// console.log(command)
// let calculation = function(op , a ,b){
//     if (operation === "add") {
//         return a + b
//     }
// }
// console.log(calculation(operation , firstValue , secondValue))