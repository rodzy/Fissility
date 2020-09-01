const inquirer = require("inquirer");

const introQuestions = () => {
    const message = "Welcome to Fissility ✨\nThe friendly CLI to prototype your React apps faster"
    console.log(message)
    const questions = [
        {
            type: "input",
            name: "appName",
            message:
                "Give a name to your aplication?",
        },
        {
            type: "list",
            name: "appType",
            message: "Select your type of React app",
            choices: [
                "Create-TSX-App (Using webpack⚡)",
                "Create-JSX-App (Using webpack⚡)",
                "Create-React-App (Default CRA JavaScript)",
                "Create-React-App (Default CRA TypeScript)",
            ],
        },
    ];
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
