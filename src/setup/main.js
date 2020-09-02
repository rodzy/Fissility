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
    const spi
}

module.exports = mainQuestions;