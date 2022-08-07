

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gMarkDown = require("./utils/generateMarkdown.js");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "license",
        message: "What License is used in this repository?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "tests",
        message: "How do you test your project?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }],
    inquirer.prompt[{
        type: "input",
        name: "email",
        message: "What is your email address?"
    }])
    
       
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFilesync(path.join(process.cwd(), "README.md"), data(gMarkDown));{
     
    }

};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile(data);
    })};   
    


        

// Function call to initialize app
init();