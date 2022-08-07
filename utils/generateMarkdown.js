
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// tags of licenses listed
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  console.log(license);
  switch (license) {
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (licenselink) {
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (licensereadme) {
    case "APACHE 2.0":
      return ;
  }
}

// TODO: Create a function to generate markdown for README
// using layout template from readme of uofu readme
function generateMarkdown(data) {
  return `# ${data.title}


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
  ${renderLicenseBadge(data.license)} 
  // not working maybe need an array of licenses in const waiting for help from scott.

  ## Tests
  ${data.tests}

  ## GitHub
  ${data.github}

  ## Email
  ${data.email}
  
`;
}

module.exports = generateMarkdown;
