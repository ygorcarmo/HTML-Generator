const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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
              case 'Manager': inquirer.prompt(managerQuestions)
                .then((manager) => {
                    const managerName = new Manager(manager.managerName, manager.managerID, manager.managerEmail, manager.managerOfficeNumber); console.log(managerName)} 
                    );

                break;
              case 'Engineer': inquirer.prompt(engineerQuestions)
              .then((engineer) => {
                const engineerName = new Engineer(engineer.engineerName, engineer.engineerID, engineer.engineerEmail, engineer.engineerGithub); console.log(engineerName)} 
                );              
                break;
              case 'Intern': inquirer.prompt(internQuestions)
              .then((intern) => {
                const internName = new Intern(intern.internName, intern.internID, intern.internEmail, intern.school); console.log(internName)} 
                );
                break;
          }
         
      })
      .catch((err) => console.error(err));
}
questions();