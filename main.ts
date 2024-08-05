#! /usr/bin/env node

/////////// 3RD PARTY PAKAGES /////////// 
import inquirer from "inquirer";
import showBanner from "node-banner"
import chalk from "chalk"

//////////// MY TS FILES /////////////////
import TypescriptQuestions from "./typescript.js";
import pythonQuizQuestions from "./python.js";
import htmlQuizQuestions from "./html.js";
import cssQuizQuestions from "./css.js";
import nextjsQuizQuestions from "./next.js";



let red = chalk.red.italic
let yellow = chalk.yellow.italic
let green = chalk.green.italic
let blue = chalk.blue.italic
let cyan = chalk.cyanBright.italic


async function AppNameBanner() {
    await showBanner('Quiz App', 'This App Made by Adil malik\n')
}

await AppNameBanner();

async function startQuiz() {
    const Quizsprompt = await inquirer.prompt([
        {
            name: "select",
            message: yellow(`Which quiz do you want to take?`),
            choices: ["PYTHON", "TYPESCRIPT", "HTML", "CSS", "NEXT.JS"],
            type: "list"
        }
    ])

    switch (Quizsprompt.select) {
        case "PYTHON":
            QuizLogic(pythonQuizQuestions)
            break
        case "TYPESCRIPT":
            QuizLogic(TypescriptQuestions)
            break
        case "HTML":
            QuizLogic(htmlQuizQuestions)
            break
        case "CSS":
            QuizLogic(cssQuizQuestions)
            break
        case "NEXT.JS":
            QuizLogic(nextjsQuizQuestions)
            break
        default:
            console.log("Invalid Quiz");
    }
}


console.log(" \n \n");


async function QuizLogic(QuizArray: any[]) {
    let score: number = 0;
    let wrong: number = 0
    let correct: number = 0
    for (let i = 0; i < QuizArray.length; i++) {
        const prompt = await inquirer.prompt([
            {
                name: "question",
                message: `${QuizArray[i].question}`,
                choices: QuizArray[i].options,
                type: "list"
            }
        ])

        if (prompt.question === QuizArray[i].correctAnswer) {
            score++
            correct++
            console.log(green(`( Correct : ${correct} )`));
        } else {
            score = score
            wrong++
            console.log(red(`( Wrong : ${wrong} )`));
        }
    }

    if (score >= 0 && score <= 3) {
        console.log(red("\nYou Need hard working. Your Total Point  :", score));
    } else if (score >= 3 && score <= 5) {
        console.log(cyan("\nYou Need hard working. Your Total Point  :", score));
    } else if (score >= 5 && score <= 8) {
        console.log(blue("\nGood Keep it up. Your Total Point  :", score));
    } else if (score >= 8 && score <= 10) {
        console.log(green("\nExcellent Work. Your Total Point  :", score));
    } else {
        console.log(red("\nInvalid score"));
    }

    console.log(red("Your Wrong answer is :", wrong));
    console.log(green("Your correct answer is :", correct));

}

startQuiz()













