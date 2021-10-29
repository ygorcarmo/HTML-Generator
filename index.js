const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerQuestions = require("./lib/questions/managerQuestions")
const engineerQuestions = require("./lib/questions/engineerQuestions")
const internQuestions = require("./lib/questions/internQuestions")

let members= [];

let run = true;
 
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
                    const managerName = new Manager(manager.managerName, manager.managerID, manager.managerEmail, manager.managerOfficeNumber); 
                    console.log(managerName);
                    
                  });
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

function starter(){
  const firstQuestion = [{
    name: "initial",
    type: "list",
    message: "What type of team member would you like to add ?",
    choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members"],
  }];

  inquirer.prompt(firstQuestion)
    .then(teamMember => {
      switch(teamMember.initial){
        case 'Manager':  addManager();
          break;

        case 'Engineer':  addEngineer();             
          break;
          
        case 'Intern': addIntern();
          break;

        case "I don't want to add any more team members": finishitOff();
          break;
        
        default: starter();
    }
    })

}

function addManager(){
  inquirer.prompt(managerQuestions)
    .then((answer) => {                    
      const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber); 
      members.push(manager);      
      starter();
      });  
}
function addEngineer(){
  inquirer.prompt(engineerQuestions)
    .then((answer) => {
      const engineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerGithub);
      members.push(engineer);
      starter();
    });
}
function addIntern(){
  inquirer.prompt(internQuestions)
    .then((answer) => {
      const intern = new Intern(answer.internName, answer.internID, answer.internEmail, answer.school);
      members.push(intern);
      starter();
    });
}
function finishitOff(){
  // members.forEach(Manager => console.log("Manager"));
  // members.forEach(Engineer => console.log("Engineer"));
  // members.forEach(Intern => console.log("Intern"));
  // console.log(members);
  const found = members.find(element => element.role === 'Manager');
  members.forEach(function (element){
    if(element.role === 'Manager'){
      console.log("manager");
      console.log(element);
    }
  });
  // if(found){
  //   console.log("yes")
  //   console.log(found.name)
  // }
}


starter();

