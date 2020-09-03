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

const createReactAppTS = (appName, appType, appManager) => {
  const spinner = ora(
    `✨ Generating a ` + appType.underline.brightGreen + ` @ ` + appName.bold + ``
  ).start();
  spinner.spinner = "dots";
  spinner.color = "cyan";
  if (appType === "create-react-app (Default)") {
    if (appManager === "npm") {
      return new Promise((resolve, reject) => {
        sh.exec(
          `npx create-react-app ${appName} --use-npm --template typescript`,
          () => {
            const redirect = sh.cd(appName);
            if (redirect.code !== 0) {
              console.log(`❌ Error while searching for ${appName}`.red);
              reject();
            }
            spinner.succeed();
            resolve();
          }
        );
      });
    } else {
      return new Promise((resolve, reject) => {
        sh.exec(`npx create-react-app ${appName} --template typescript`, () => {
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
  } else if (appType === "create-react-app (Using webpack⚡)") {
    // Using the CRA template for now
    // @TODO: Using typescript webpack template for use on _mocks_
    return new Promise((resolve, reject) => {
      sh.exec(`npx create-react-app ${appName} --template typescript`, () => {
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

exports.execute = async (appName, appDirectory, appType, appManager) => {
  const preferedConfig = await mainQuestions();
  await createReactAppTS(appName, appType, appManager);

  console.log(`✅ Created ${appType} on ${appName}`);
  return true;
};
