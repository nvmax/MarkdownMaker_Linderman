// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gMarkDown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Full Name?",
        name: "fullName"
    },
    {
        type: "checkbox",
        message: "Please choose the badges you would like to include in your README",  
        name: "badges",
        choices: ["Node.js", "jQuery", "NPM", "Express.js", "SASS", "WebStorm", "CSS3", "HTML5", "JavaScript", "Markdown" ]
    },
    {
        type: "list",
        message: "What License is used in this repository?", 
        name: "license",
        choices: ["APACHE-2.0", "MIT", "ISC", "gpl-3.0", "bsd-3-clause", "unlicense"]
    },
    {
        type: "input",
        message: "What is the title of your project?",  
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?", 
        name: "description"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
    },
    {
        type: "input",
        message: "How do you use your project?", 
        name: "usage"
    },
    {
        type: "list",
        message: "Can anyone contribute to your project?", 
        name: "contributing",
        choices: ["Yes", "No"],
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];   
    
// TODO: Create a function to write README file
function writeToFile(file, data) {
   fs.writeFileSync(`README.md`, data, (err) => err ? console.error(err) : console.log("Successfully wrote to file"));
};

// TODO: Create a function to initialize app
async function init() {
    try {
        // thanks to scott casey for the help with this code
        const answers = await inquirer.prompt(questions);
        const md = gMarkDown(answers);
        writeToFile(answers.file, md);
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();