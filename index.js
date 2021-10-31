const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerQuestions = require("./lib/questions/managerQuestions")
const engineerQuestions = require("./lib/questions/engineerQuestions")
const internQuestions = require("./lib/questions/internQuestions");
const generateHtml = require("./lib/generateHtml");

let manager= [];
let intern= [];
let engineer= [];

function starter(){
  const firstQuestion = [{
    name: "initial",
    type: "list",
    message: "What type of team member would you like to add ?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
  }];

  inquirer.prompt(firstQuestion)
    .then(teamMember => {
      switch(teamMember.initial){
        // case 'Manager':  addManager();
        //   break;

        case 'Engineer':  addEngineer();             
          break;
          
        case 'Intern': addIntern();
          break;

        case "I don't want to add any more team members":
          finishItOff();
          break;
        
        default: starter();
    }
    })

}

function addManager(){
  inquirer.prompt(managerQuestions)
    .then((answer) => {                    
      const managers = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber); 
      manager.push(managers);      
      starter();
      });  
}
function addEngineer(){
  inquirer.prompt(engineerQuestions)
    .then((answer) => {
      const engineers = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerGithub);
      engineer.push(engineers);
      starter();
    });
}
function addIntern(){
  inquirer.prompt(internQuestions)
    .then((answer) => {
      const interns = new Intern(answer.internName, answer.internID, answer.internEmail, answer.school);
      intern.push(interns);
      starter();
    });
}
function finishItOff(){
  let htmlContent = generateHtml(manager, engineer, intern)
    fs.writeFile("./dist/index.html", htmlContent, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully in index.html\n");
      }
    });
}

function init(){
  addManager();
}

init();

