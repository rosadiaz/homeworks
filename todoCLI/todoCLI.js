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
        break;
      }
    waitingForUser();
  });
}

let list = ""; // pending change to object to have task properties: number, completed, description
function viewToDoList () {
  fs.readFile('./toDoList.txt', (err, data) => {
    if (err) {
      console.log(`Could not read file ${err}`)
    } else {
      list = data.toString();
      console.log(list, `\n`)
      console.log(menu);
    }
  })
}

function addTask () {
  interface.question(`Enter new task: `, (task) => {
    list = list.concat(`\n2 [   ] ${task}`); //update to object properties
    console.log(list);
    fs.writeFile(`toDoList.txt`, list, (err) => {
      if(err) {
        console.log(`Could not write file ${err}`);
      } else {
        console.log(`**********\nTo do list updated!!\n`);
        waitingForUser();
      }
    })
  })
}
