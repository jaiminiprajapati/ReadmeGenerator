// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} License.


## Questions
For any questions or feedback, feel free to contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
