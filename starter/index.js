const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the usage instructions for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },


];


// function to write README file
function writeToFile(fileName, data) {
    try {
        // Create dist folder if not exists
        const distFolder = path.join(process.cwd(), 'dist');
        if (!fs.existsSync(distFolder)) {
            fs.mkdirSync(distFolder);
        }

        // Write README.md to dist folder
        const filePath = path.join(distFolder, fileName);
        fs.writeFileSync(filePath, data);
        console.log(`File "${distFolder}" created successfully in the "dist" folder!`);
    } catch (error) {
        console.error('Error occurred while writing to file:', error.message);
    }
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    })

}

// function call to initialize program
init();

