const fs = require("fs")
const { getSystemErrorMap } = require('util');
const inquirer = require('inquirer');
const { default: Choice } = require("inquirer/lib/objects/choice");
const { default: Choices } = require("inquirer/lib/objects/choices");

let parameters = process.argv.slice(2);

let readMeText = (answers) => {
  let readMe = `## Project Name
  ${answers.repositoryName}

## Description
${answers.description}

## Table of Contents
* [installation](#installation)
* [licenses](#licenses)
* [usage](#usage)
* [contributing](#contributing)
* [tests](#tests)
* [contactInfo](#contactInfo)

## Installation

${answers.installation}

## Licenses
${answers.licenses}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Contact Info

* ${answers.email}

* ${answers.github}`
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
      message: 'Describe the program',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What does the user need to install to use your program?',
      name: 'installation',
    },
    {
      type: 'list',
      message: 'please select which licenses were needed for this project',
      name: 'licenses',
      choices: ['IBM', 'BSD', 'CCO', 'IBM']
    },
    {
      type: 'input',
      message: 'How does one use this program?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who contributed to this program?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Enter Tests',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter email address',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter github repository url',
      name: 'github',
    },
  ])
  .then((answers) => {
    console.log(answers)
    fs.writeFile('generatedReadMe.md', readMeText(answers), (err) =>
      err ? console.error(err) : console.log('Check the explorer for your new readMe')
    );
  }

  );