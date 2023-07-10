// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Whats the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Whats the description of your project?",
    },
    {
        type: "input",
        name: "license",
        message: "Whats the license of your project?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "none"],
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Whats the table of contents of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "Whats the installation of your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Whats the usage of your project?",
    },
    
    {
        type: "input",
        name: "contribution",
        message: "Who contributed to this project project?",
    },
    {
        type: "input",
        name: "test",
        message: "Whats the test of your project?",
    },
    {
        type: "input",
        name: "questions",
        message: "What is your github profile link?",
    },
    {
        type: "input",
        name: "githubUserName",
        message: "What is your github user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },





];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created readme!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((awnsers) => {
        console.log(awnsers)
        const template = generateMarkdown(awnsers)
        console.log(template)
        writeToFile("./Finished/readme.md", template )
    })
}

// Function call to initialize app
init();
