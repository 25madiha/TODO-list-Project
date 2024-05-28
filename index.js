import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    //--------------------options-----------------------------
    let option = await inquirer.prompt([{
            type: 'list',
            name: "user_option",
            message: 'select an option',
            choices: ["Add", "remove"]
        }]);
    //--------------------Add-----------------------------
    if (option.user_option === "Add") {
        let answer = await inquirer.prompt([{
                type: 'input',
                name: 'user_answer',
                message: 'write something to add in the task list.'
            }]);
        if (answer.user_answer !== '') {
            todo_list.push(answer.user_answer);
            console.log(todo_list);
        }
        else {
            console.log('please write something to add in the todo list');
        }
    }
    //----------------remove-------------------------
    else if (option.user_option === "remove") {
        let removeChoice = await inquirer.prompt([{
                type: 'list',
                name: 'remove_item',
                message: 'select item to remove',
                choices: todo_list
            }]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log('you removed : ', removeChoice.remove_item);
            console.log(todo_list);
        }
    }
    //------------------confirmation-------------------
    let user_answer = await inquirer.prompt([{
            type: 'confirm',
            name: 'selection',
            message: 'do you want to continue?',
            default: true
        }]);
    if (user_answer.selection === false) {
        while_condition = false;
    }
}
console.log(`Thank you for using todo list`);
