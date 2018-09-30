const rl = require("readline");
const fs = require('fs');

const menu= `\n\nWelcome to Todo CLI!\n---------------------- \n(V) View ✏︎ (n) New ✏︎ (cX) Complete  ✏︎  (dX) Delete ✏︎ (q) Quit\n\n`;

const interface = rl.createInterface ( {
	input: process.stdin,
	output: process.stdout
});

interface.question(menu, (command) => {
  switch (command) {
    case "q":
      process.exit();
      break;

  }
});