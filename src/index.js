const inquirer = require("inquirer");
const questions = require('./interactive/questions');
const optional = require("./interactive/optional");

const introQuestions = () => {
    const message = "Welcome to Fissility ✨\nThe friendly CLI to prototype your React apps faster"
    console.log(message)
    const prompt = inquirer.prompt(questions).then(answers => {
        if (answers.appRouter) {
            inquirer.prompt(optional)
        }
    })
    return prompt;
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
