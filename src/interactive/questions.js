const questions = [
  {
    type: "input",
    name: "appName",
    message: "Give a name to your aplication?",
  },
  {
    type: "list",
    name: "appType",
    message: "Select your type of React app",
    choices: [
      "create-react-app JavaScript (Default)",
      "create-react-app TypeScript (Default)",
      "create-react-app JavaScript (Using webpack⚡)",
      "create-react-app TypeScript (Using webpack⚡)",
    ],
  },
  {
    type: "confirm",
    name: "appRouter",
    message: "Would you like to add routing",
  },
  {
    type: "confirm",
    name: "appState",
    message: "Would you like to add any state management tool?",
  },
];

module.exports = questions;
