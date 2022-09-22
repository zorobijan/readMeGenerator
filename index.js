// TODO: Include packages needed for this application
const fs = require("fs")
const { getSystemErrorMap } = require('util');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// let repositoryName = "example"
// let description = "description"
// let tableOfContents = "table of contents"
// let Installation = "installation"
// let Usage = "usage"
// let License = license
// let Contributing = "contributing"
// let Tests = "tests"
// let Questions = "questions"

let parameters = process.argv.slice(2);

let readMeText = (answers) => {
  let readMe = `${response.repositoryName}

${answers.description}

${answers.tableOfContents}

${answers.installation}

${answers.usage}

${answers.contributing}

${answers.tests}

${answers.questions}`
  return readMe
}

inquirer
.prompt([
    {
      type: 'input',
      message: 'Enter Repository Name',
      name: 'repositoryName',
    },
    {
      type: 'input',
      message: 'Enter Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Table of Content',
      name: 'tableOfContents',
    },
    {
      type: 'input',
      message: 'Enter Installation',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter Usage',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter Contributing',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Enter Tests',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter Questions',
      name: 'questions',
    },
  ])
  .then((answers) => {
    console.log(answers)

    fs.writeFile('generatedReadMe.md', readMeText(answers), (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
  }

);



// fs.appendFile('log.txt', `${process.argv[3]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );

// fs.appendFile('log.txt', `${process.argv[4]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );

// fs.appendFile('log.txt', `${process.argv[5]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );

// fs.appendFile('log.txt', `${process.argv[6]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );

// fs.appendFile('log.txt', `${process.argv[7]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );

// fs.appendFile('log.txt', `${process.argv[8]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );

// fs.appendFile('log.txt', `${process.argv[9]}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );

// // function generateBadgeForLicense(){
// //     if(License === MIT)
// //     return [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// //     else if(License === BSD)
// //     return [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

// //     if(License === CCO)
// //     return [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

// //     if(License === IBM)
// //     return [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
// // }
// let readMeText = 





// # $(repositoryName)

// ## Description

// ###Table of Contents

// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
