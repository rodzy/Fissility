const inquirer = require("inquirer");
const questions = require('./interactive/questions')

const introQuestions = () => {
    const message = "Welcome to Fissility ✨\nThe friendly CLI to prototype your React apps faster"
    console.log(message)

    return inquirer.prompt(questions);
};

introQuestions();
// inquirer.prompt([
//     /* Pass your questions in here */
// ]).then((answers) => {
//     // Use user feedback for... whatever!!
// }).catch((error) => {
//     if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//     } else {
//         // Something else when wrong
//     }
// });
