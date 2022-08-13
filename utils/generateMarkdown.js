const axios = require("axios");
const fs = require("fs");
const licenseArr = ["APACHE-2.0", "MIT", "ISC", "gpl-3.0", "bsd-3-clause", "unlicense"];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  renderLicenseSection(license)
  renderLicenseLink(license)
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/ISC)`
  } else if (license===licenseArr[3]){
    return `[${licenseArr[3]}](https://opensource.org/licenses/gpl-3.0.html)`
  } else if (license===licenseArr[4]){
    return `[${licenseArr[4]}](https://opensource.org/licenses/bsd-3-clause)`
  } else if (license===licenseArr[5]){
    return `[${licenseArr[5]}](http://unlicense.org/)`
  }
};

 //  renders optional badges with random colors.
function renderbadges(badges) {
  let badge = "";
  for (let i = 0; i < badges.length; i++) {
    let color = Math.floor(Math.random() * 5);
    if (color === 0) {
      color = "green";
    } else if (color === 1) {
      color = "blue";
    } else if (color === 2) {
      color = "yellow";
    } else if (color === 3) {
      color = "red";
    } else if (color === 4) {
      color = "orange";
    } else if (color === 5) {
      color = "purple";
    }
    badge += `[![${badges[i]}](https://img.shields.io/badge/${badges[i]}-${color}.svg)](https://badges.greenkeeper.io/${badges[i]})`;
  }
  return badge;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const year =["<year>", "[year]", "[YYYY]","[yyyy]"];
const cwName = ["<name of author>", "[name of copyright owner]", "[fullname]", "[full name]"];
function renderLicenseSection(license) {
  return axios.get(`https://api.github.com/licenses/${license}`)
  .then(function(response) {
    let licenseBody = response.data.body
    if (licenseBody.includes(year[0]) || licenseBody.includes(year[1]) || licenseBody.includes(year[2]) || licenseBody.includes(year[3])) {
      licenseBody = licenseBody.replace(year[0], year[3]);
      licenseBody = licenseBody.replace(year[1], year[3]);
      licenseBody = licenseBody.replace(year[2], year[3]);
      licenseBody = licenseBody.replace(year[3], new Date().getFullYear());
    }
    if (licenseBody.includes(cwName[0]) || licenseBody.includes(cwName[1]) || licenseBody.includes(cwName[2]) || licenseBody.includes(cwName[3])) {
      licenseBody = licenseBody.replace(cwName[0], cwName[3]);
      licenseBody = licenseBody.replace(cwName[1], cwName[3]);
      licenseBody = licenseBody.replace(cwName[2], cwName[3]);
      licenseBody = licenseBody.replace(cwName[3], `Jerrod Linderman`);
    }
    fs.writeFile("license.txt", licenseBody, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  })
};

// function for contributing choices yes or now and returns string
function renderContributing(contributing) {
  if (contributing === "Yes") {
    return "Please refer to contributing resource link above for more information.";
  } else {
    return "At this time owner is not accepting any contributions to this project.";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
  </div>
  <div align="center">
  
  ## ${data.fullName}

  </div>
  <div align="center">
  <img src="https://komarev.com/ghpvc/?username=${data.github}&style=flat-square&color=blue" alt=""/>
  </div>
  
  
  <h1 align="center">Badges</h1>
  <div align="center">
  <div align="center" style="display:block; width:300px; >
  
  ${renderbadges(data.badges,)}

  ${renderLicenseBadge(data.license)}
  
  
  </div>
  </div>
  
  <h1 align="center">
  
  ${data.title}</h1>
  
  
  ## Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [How To Contribute](#contribute)
  5. [license](#license)
  6. [Tests](#tests)
  7. [Github](#github)
  8. [Email](#questions)

  ## Description
  ${data.description}



  ## Installation
  ${data.installation}



  ## Usage
  ${data.usage}


 
  ## Contribute
  ![GitHub license](https://img.shields.io/badge/Made%20by-%40nvmax-blue)
  [Contributor Covenant](https://www.contributor-covenant.org/)

  ${renderContributing(data.contributing)}



  ## License

  Published under the [${data.license}](license.txt) License.
  

  Read More about the licence by clicking this Link: ${renderLicenseLink(data.license)}.
 

  ## Tests
  ${data.tests}



  ## GitHub
  [${data.github}](https://github.com/${data.github})

  ## Questions
  If you have any questions, please contact me by clicking the email link below:
  ### ${data.email !== null ? "[" + data.email + "](" + data.email + ")" : "Owner has not provided an email"} 

 
`;
}

module.exports = generateMarkdown;

