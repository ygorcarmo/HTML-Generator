const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const managerQuestions = require("./lib/questions/managerQuestions")
const engineerQuestions = require("./lib/questions/engineerQuestions")
const internQuestions = require("./lib/questions/internQuestions")

// const ygor = new Employee("ygor",123, "lala@lands.com");
// const manager = new Manager("the Manager", 999, "asuhaush",123);
// console.log(ygor);
// console.log(manager);

function questions(){
    const firstQuestion = [{
        name: "initial",
        type: "list",
        message: "What type of team member would you like to add ?",
        choices: ["Manager", "Engineer", "Intern"],
      }];

      inquirer.prompt(firstQuestion)
      .then(function(answer){
          switch(answer.initial){
              case 'Manager': inquirer.prompt(managerQuestions);
                break;
              case 'Engineer': inquirer.prompt(engineerQuestions);
                break;
              case 'Intern': inquirer.prompt(internQuestions);
                break;
          }
      })
      .catch((err) => console.error(err));
}
questions();