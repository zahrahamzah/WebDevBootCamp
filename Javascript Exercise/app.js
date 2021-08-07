let input = prompt("What would you like to do?")
const myTodos = ['Wake uo you crazy bij', 'hello eat something', 'go workout']

while(input != 'quit'){

    if (input == "new") {
        let addTodo = prompt("What would you like to add in the Todo List?")
        myTodos.push(addTodo)
        console.log(addTodo + " is added to the Todo List")
        
    } else if (input == "list") {
        console.log("###################")
        console.log("Todo List for Today")
        console.log("###################\n")

        for (let i = 0; i < myTodos.length ; i++){
            console.log(i + ": " + myTodos[i])
        }
    } else if (input == "delete") {
        let deleteTodo = parseInt(prompt("What would you like to delete? Enter the index "))
        console.log("Todo List " + myTodos[deleteTodo] + " is deleted.")
        myTodos.splice(deleteTodo)
    }

    input = prompt("What would you like to do?") 
}

console.log("Okay you're quitting");


