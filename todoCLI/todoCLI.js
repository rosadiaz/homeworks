const rl = require(`readline`);
const fs = require(`fs`);

const menu= `(V) View ✏︎ (n) New ✏︎ (cX) Complete  ✏︎  (dX) Delete ✏︎ (q) Quit\n`;
const completed = "\u2713"

console.log(`\n\nWelcome to Todo CLI!\n----------------------`);
const interface = rl.createInterface ( {
	input: process.stdin,
	output: process.stdout
});

waitingForUser();

function waitingForUser () {
  interface.question(menu, (command) => {
    switch (command) {
      case `q`:
        process.exit();
        break;
      case `V`:
        viewToDoList();
        break;
      case `n`:
        addTask();
        break;
      case `cX`:
        console.log(`You typed cX`);
        break; 
      case `dX`:
        console.log(`You typed dX`);
        break;
      default:
        console.log(`Invalid entry\n`);
        waitingForUser();
        break;
      }
  });
}

function viewToDoList () {
  fs.readFile('./toDoList.json', (err, json) => {
    if (err) {
      console.log(`Could not read file ${err}`)
    } else {
      tasks = JSON.parse(json).tasks;
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.status) { 
          console.log(`${i+1} [ X ] ${task.description}`);
        } else {
          console.log(`${i+1} [   ] ${task.description}`);
        }
      }
      waitingForUser();
    }
  })
}

function addTask () {
  interface.question(`Enter new task: `, (task) => {
    newTask = {description: task, status: false}
    let myToDoList = { "tasks" :[]};
    fs.readFile(`./toDoList.json`, (err, json) => {
      tasksArray = JSON.parse(json).tasks;
      myToDoList.tasks = tasksArray;
      myToDoList.tasks.push(newTask);
      JSONlist = JSON.stringify(myToDoList);
      fs.writeFile(`toDoList.json`, JSONlist, (err) => {
        if(err) {
          console.log(`Could not write file ${err}`);
        } else {
          console.log(`**********\nTo do list updated!!\n`);
          waitingForUser();
        }
      })
    })
  })
}
