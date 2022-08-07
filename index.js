

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gMarkDown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
function questions(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",  // 1 - Title
            name: "title"
        },
        {
            type: "input",
            message: "What is the description of your project?", // 2 - Description
            name: "description"
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install your project?" // 3 - Installation
        },
        {
            type: "input",
            message: "How do you use your project?", // 4 - Usage
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed to your project?", // 5 - Credits
            name: "credits"
        },
        {
            type: "list",
            message: "What License is used in this repository?", // 6 - License
            name: "license",
            choices: ["APACHE 2.0", "MIT", "ISC", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            message: "How do you test your project?", // 8 - Tests
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username?", // 9 - GitHub Username
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?", // 10 - Email
            name: "email"
        }
    ])};   
    


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.appendFile(`README.md`, data,(err) => err? console.error(err): console.log("Successfully wrote to file"));

};
// TODO: Create a function to initialize app
async function init() {
    let answers = await questions();
    writeToFile((answers.file),(gMarkDown(answers)));
}
    

// Function call to initialize app
init();