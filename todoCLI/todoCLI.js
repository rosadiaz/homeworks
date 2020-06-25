const rl = require(`readline`);
const fs = require(`fs`);

const menu= `(V) View ✏︎ (n) New ✏︎ (cX) Complete  ✏︎  (dX) Delete ✏︎ (q) Quit\n`;

console.log(`\n\nWelcome to Todo CLI!\n----------------------`);
const interface = rl.createInterface ( {
	input: process.stdin,
	output: process.stdout
});

waitingForUser();

function waitingForUser () {
  interface.question(menu, (command) => {
    let number = parseFloat(command.replace(/[cd]/ , ''))
    command = command.replace(number, '')
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
      case `c`:
        completeTask(number);
        break; 
      case `d`:
        deleteTask(number);
        // console.log(`You typed dX`);
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
      console.log(`\n   ¯\\\_(ツ)_/¯      You haven't started a list yet. Type 'n' to start one\n`)
      // waitingForUser();
    } 
    else {
      tasks = JSON.parse(json).tasks;
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.status) { 
          console.log(`${i+1} [ X ] ${task.description}`);
        } else {
          console.log(`${i+1} [   ] ${task.description}`);
        }
      }
      // waitingForUser();
    }
    waitingForUser();
  })
}

function addTask () {
  interface.question(`Enter new task: `, (task) => {
    if (task === "") { 
      console.log(`Can't add an empty task, please enter task`)
      waitingForUser()
    } else {
      let newTask = {"description": task, status: false}
      fs.readFile(`./toDoList.json`, (err, json) => {
        let myToDoList = { "tasks" :[]};
        if (err) {
          myToDoList.tasks.push(newTask)
          writeJSON(myToDoList)
        } else {
          myToDoList.tasks = JSON.parse(json).tasks;
          myToDoList.tasks.push(newTask)
          writeJSON(myToDoList);
        }
        console.log(`                           . . . . . . task added uccessfuly!!!\n`)
      })
    }
    // waitingForUser()
  })
}

function writeJSON (myToDoList) {
  JSONlist = JSON.stringify(myToDoList);
  fs.writeFile(`toDoList.json`, JSONlist, (err) => {
    if(err) {
      console.log(`Could not write file ${err}`);
    } else {
      // console.log(`**********\nTo do list updated!!\n`);
      waitingForUser();
    }
  })
}

function completeTask (num) {
  interface.question(`Are you sure you want to complete task ${num}? Type 'y' or 'n': `, (confirmation) => {
    if (confirmation.includes('y')) {
      fs.readFile('./toDoList.json', (err, json) => {
        if (err) { 
          console.log(`\n   ¯\\\_(ツ)_/¯      You haven't started a list yet. Type 'n' to start one\n`)
        } else {
          let myToDoList = { "tasks" :[]};
          myToDoList.tasks = JSON.parse(json).tasks;
          if (myToDoList.tasks[num-1] == undefined) {
            console.log(`\n         Nice try smart ass ! ╭∩╮ (òÓ,) ╭∩╮\n`)
            waitingForUser();
          } else {
            myToDoList.tasks[num-1].status = true;
            writeJSON(myToDoList);
            console.log( `\n      ┏(^-^)┛┗(^-^)┓    ${tasks[num-1].description} ... COMPLETED!\n`)
          }
        }
      })
    } else {
      console.log(`       Ok ¯\\\_(ツ)_/¯\n`)
      waitingForUser();
    }

  })
}

function deleteTask (num) {
  interface.question(`Are you sure you want to permanently delete task ${num}? Type 'y' or 'n': `, (confirmation) => {
    if (confirmation.includes('y')) {
      fs.readFile('./toDoList.json', (err, json) => {
        if (err) { 
          console.log(`\n   ¯\\\_(ツ)_/¯      You haven't started a list yet. Type 'n' to start one\n`)
        } else {
          let myToDoList = { "tasks" :[]};
          myToDoList.tasks = JSON.parse(json).tasks;
          if (myToDoList.tasks[num-1] == undefined) {
            console.log(`\n         Nice try smart ass ! ╭∩╮ (òÓ,) ╭∩╮\n`)
            waitingForUser();
          } else {
            myToDoList.tasks.splice(num-1,1);
            writeJSON(myToDoList);
            console.log( `\n      ${tasks[num-1].description} ... deleted forever!\n`)
          }
        }
      })
    } else {
      console.log(`       Ok ¯\\\_(ツ)_/¯\n`)
      waitingForUser();
    }

  })
}