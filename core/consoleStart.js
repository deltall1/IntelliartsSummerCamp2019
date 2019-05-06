const inquirer = require("inquirer"); // Needs to enter into the console

// Сonsole command logic
const consoleCommands = require("../console/index");

// Input handler
const askQuestions = () => {
  const questions = [
    {
      name: "command",
      type: "input"
    }
  ];
  return inquirer.prompt(questions);
};

// Main function
exports.run = async () => {
  while (true) {
    // Ask questions
    const answers = await askQuestions();
    const pattern = /['"].+?['"]|\S+/g;
    const arr = answers.command.match(pattern);

    // Check if the input is empty
    try {
      if (arr == null) {
        throw new Error("You have not entered anything");
      }
    } catch (e) {
      console.log(e.message);
      continue;
    }

    // Branching by commands
    switch (arr[0]) {
      case "purchase":
        consoleCommands.purchase(arr);
        break;

      case "all":
        consoleCommands.all();
        break;

      case "clear":
        consoleCommands.clear(arr);
        break;

      case "report":
        consoleCommands.report(arr);
        break;

      case "--help":
        consoleCommands.help();
        break;

      default:
        console.log(arr[0] + " is not a function, try --help for details");
    }
  }
};
