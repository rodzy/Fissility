require("colors");
const sh = require("shelljs");
const inquirer = require("inquirer");
const fse = require("fs-extra");
const set = require("lodash.set");
const ora = require("ora");

sh.config.silent = true;

const mainQuestions = async() => {
    const configs = [];
    const questions = [];
    const aswers = await inquirer.prompt(questions);
    configs.push(aswers);
    return configs
}


const createReactAppJS = appName => {
    const spinner = ora(`Running ${appName}...`).start();
    spinner.color='cyan'
}


exports.execute = async (appName, appDirectory, appLanguage) => {
    const preferedConfig = await mainQuestions();
    await createReactAppJS(appName)
   

} 