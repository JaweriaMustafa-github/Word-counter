#! /usr/bin/env node 

import inquirer from "inquirer"
import chalk from "chalk"

let answers
 = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter your sentence to count the word: "
    }
 ]);

 const words = answers.Sentence.trim().split(" ");
console.log(words);

// Print the word count of the sentence
console.log(chalk.cyanBright`Your sentence word count is ${words.length}`);
