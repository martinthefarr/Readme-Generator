// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
  return `[GitHub Pages](https://img.shields.io/badge/license-MIT-brightgreen)`
}
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
    return `\n* [License]{#license}\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return `## license 
    
    ${license}`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
 
  ${data.tableOfContents}
  
  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}
  
  ## Contribution 

  ${data.contribution}

  ## Test 

  ${data.test}

  ## Questions
  *GitHub Profile link
  https://github.com/martinthefarr
  ${data.questions}

  *GitHub UserName
  martinthefarr
  TY'${data.githubUserName}

  *Email Address
  ${data.email}
  

`;
}

module.exports = generateMarkdown;
