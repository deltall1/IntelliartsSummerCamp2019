const inquirer = require("inquirer");

const purchaseConsole = require("../console/purchase");
const allConsole = require("../console/all");
const clearConsole = require("../console/clear");
const reportConsole = require("../console/report");

const askQuestions = () => {
  const questions = [
    {
      name: "command",
      type: "input"
    }
  ];
  return inquirer.prompt(questions);
};

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
        purchaseConsole.createPurchase(arr);
        break;
      case "all":
        allConsole.all();
        break;
      case "clear":
        clearConsole.clear(arr);
        break;
      case "report":
        reportConsole.conversion(arr);
        break;
      default:
        console.log(arr[0] + " is not a function");
    }
  }
};