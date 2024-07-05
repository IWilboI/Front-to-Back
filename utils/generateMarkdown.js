// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
    'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
  };
  return badges[license] || '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'ISC': 'https://opensource.org/licenses/ISC',
  };
  return links[license] || '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} License - see the [LICENSE](${renderLicenseLink(license)}) file for details.
  `;
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me with the information below:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;

