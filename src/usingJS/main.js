require("colors");
const sh = require("shelljs");
const inquirer = require("inquirer");
const fse = require("fs-extra");
const set = require("lodash.set");
const ora = require("ora");

sh.config.silent = true;

const mainQuestions = async () => {
  const configs = [];
  const questions = [];
  const aswers = await inquirer.prompt(questions);
  configs.push(aswers);
  return configs;
};

const createReactAppJS = (appName, appType) => {
  const spinner = ora(
    `Generating ` + appType.underline.brightGreen + ` @ ` + appName.bold + ``
  ).start();
  spinner.spinner = "dots";
  spinner.color = "cyan";
  if (appType === "create-react-app (Default)") {
    return new Promise((resolve, reject) => {
      sh.exec(`npx create-react-app ${appName}`, () => {
        const redirect = sh.cd(appName);
        if (redirect.code !== 0) {
          console.log(`❌ Error while searching for ${appName}`.red);
          reject();
        }
        spinner.succeed();
        resolve();
      });
    });
  } else if (appType === "create-react-app (Using webpack⚡)") {
    // Using the CRA template for now
    // @TODO: Using javascript webpack template for use on _mocks_
    return new Promise((resolve, reject) => {
      sh.exec(`npx create-react-app ${appName}`, () => {
        const redirect = sh.cd(appName);
        if (redirect.code !== 0) {
          console.log(`❌ Error while searching for ${appName}`.red);
          reject();
        }
        spinner.succeed();
        resolve();
      });
    });
  }
};

exports.execute = async (appName, appDirectory, appType) => {
  const preferedConfig = await mainQuestions();
  await createReactAppJS(appName, appType);
  
  console.log(`✅ Created ${appType} on ${appName}`)
  return true;
};
