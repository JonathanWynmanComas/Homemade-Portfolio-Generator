const inquirer = require('inquirer');
const fs = require('fs');

// Prompt questions
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you located?',
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Write a short bio:',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub URL:',
  }
];

// Generate HTML
function generateHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${data.name}'s Portfolio</title>

<style>
  body {
    font-family: Arial;
    background-color: #f4f4f4;
    margin: 0;
  }

  header {
    background: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }

  .container {
    padding: 20px;
  }

  a {
    color: #3498db;
    text-decoration: none;
  }

  .card {
    background: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
  }
</style>
</head>

<body>

<header>
  <h1>${data.name}</h1>
  <p>${data.location}</p>
</header>

<div class="container">

  <div class="card">
    <h2>About Me</h2>
    <p>${data.bio}</p>
  </div>

  <div class="card">
    <h2>Links</h2>
    <p><a href="${data.linkedin}" target="_blank">LinkedIn</a></p>
    <p><a href="${data.github}" target="_blank">GitHub</a></p>
  </div>

</div>

</body>
</html>
`;
}

// Run app
inquirer.prompt(questions).then((answers) => {
  const htmlContent = generateHTML(answers);

  fs.writeFile('dist/index.html', htmlContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Portfolio generated successfully!');
    }
  });
});