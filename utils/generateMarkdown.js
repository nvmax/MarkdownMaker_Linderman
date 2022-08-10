
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const axios = require("axios");
// const promise = require("promise");
const fs = require("fs");

function renderLicenseBadge(license) {
  // create badges license using /aur/license/:packageName
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink(license) {
  fetch(`https://api.github.com/licenses/${license}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.url);
    return ('${data.url}');
    
  }) 
}
 


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
async function renderLicenseSection(license) {
  axios.get(`https://api.github.com/licenses/${license}`)
  .then(function(response) {
    let licenseBody = response.data.body
    .replace("[year]", new Date().getFullYear())
    .replace("[fullname]", "Jerrod Linderman");
    fs.writeFile("license.txt", licenseBody, function(err) {
      if (err) {
        return console.log(err);
      }
    })
  })
}






// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
  </div>
  <div align="center">
  Jerrod Linderman
  </div>
  <div align="center">
  <img src="https://komarev.com/ghpvc/?username=${data.github}&style=flat-square&color=blue" alt=""/>
  </div>
  
  
  <h1 align="center">Badges</h1>
  <div align="center">
  <a href="">
  
  ${renderLicenseBadge(data.license)}
  
  </a>
  </div>
  
  <h1 align="center">
  
  ${data.title}</h1>
  
  
  ## Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [credits](#credits)
  5. [license](#license)
  6. [Tests](#tests)
  7. [github](#github)
  8. [email](#email)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License

  ${(data.license)}

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## GitHub
  [${data.github}](https://github.com/${data.github})

  ## Email
  ${data.email}
  
`;
}

module.exports = generateMarkdown;
