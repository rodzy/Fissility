require("colors");
const inquirer = require("inquirer");

const principalQuestions = () => {
  const message =
    "Welcome to Fissility ✨\nThe friendly CLI to prototype your React apps faster";
  console.log(message);
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
  ];
  return inquirer.prompt(questions);
};

const convertAppName = (appName) => {
  const dirName = appName
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
  return dirName;
};

const principalRunner = async () => {
  const answer = await principalQuestions();
  const { appName } = answer;

  if (!appName || appName.length <= 0) {
    console.log(`The application name is required ❌`.red);
    return process.exit(0);
  }

  const folderName = await convertAppName(appName);

  console.log(folderName);

  const app = "appDict[appType];";

//   if (!app) {
//     console.log(
//       `App type: ${appType} is not yet supported by this CLI tool.`.red
//     );
//     return process.exit(0);
//   }

  const appDirectory = `${process.cwd()}/${folderName}`;

  const res = await app.create(folderName, appDirectory);

  if (!res) {
    console.log("There was an error generating your app.".red);
    return process.exit(0);
  }

  return process.exit(0);
};

principalRunner();


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
