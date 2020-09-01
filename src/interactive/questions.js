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

module.exports = questions;