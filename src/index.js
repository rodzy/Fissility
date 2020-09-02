require("colors");
const inquirer = require("inquirer");
const setup = require("./setup/main");

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
        "create-react-app (Default)",
        "create-react-app (Using webpack⚡)",
      ],
    },
    {
      type: "list",
      name: "appLanguage",
      message: "Select the language of preference",
      choices: ["JavaScript", "TypeScript"],
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

const mainConfig = {
  JavaScript: setup,
  TypeScript: "Starting your React TypeScript App.....".green
};

const principalRunner = async () => {
  const answer = await principalQuestions();
  const { appName,appLanguage } = answer;

  if (!appName || appName.length <= 0) {
    console.log(`The application name is required ❌`.red);
    return process.exit(0);
  }

  const folderName = await convertAppName(appName);

  console.log(folderName);

  console.log(mainConfig[appLanguage])

  // const app = mainConfig[appLanguage];

    // if (!app) {
    //   console.log(
    //     `App type: ${appLanguage} is not yet supported by this CLI tool.`.red
    //   );
    //   return process.exit(0);
    // }

  // const appDirectory = `${process.cwd()}/${folderName}`;

  // const res = await app.create(folderName, appDirectory);

  // if (!res) {
  //   console.log("There was an error generating your app.".red);
  //   return process.exit(0);
  // }

  // return process.exit(0);
};

principalRunner();

