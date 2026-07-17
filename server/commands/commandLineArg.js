console.log("Task CLI application started");
let operation = process.argv[2]
let firstValue = Number(process.argv[3])
let secondValue = Number(process.argv[4])
const command = args[0]
console.log(command)
let calculation = function(op , a ,b){
    if (operation === "add") {
        return a + b
    }
}
console.log(calculation(operation , firstValue , secondValue))