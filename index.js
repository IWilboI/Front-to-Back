// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide the usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'ISC'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide the test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];

  // Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('README.md has been generated successfully!');
    });
  }
  
  // Function to initialize app
  function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    });
  }
  
  // Function call to initialize app
  init();