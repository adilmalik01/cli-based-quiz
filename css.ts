import QuizQuestionInterface from "./interface.js";
import chalk from 'chalk';

const cssQuizQuestions: QuizQuestionInterface[] = [
    {
        question: "What does CSS stand for?",
        options: [
            chalk.cyan("A) Creative Style Sheets"),
            chalk.cyan("B) Cascading Style Sheets"),
            chalk.cyan("C) Computer Style Sheets"),
            chalk.cyan("D) Colorful Style Sheets")
        ],
        correctAnswer: chalk.cyan("B) Cascading Style Sheets")
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            chalk.cyan("A) class"),
            chalk.cyan("B) font"),
            chalk.cyan("C) styles"),
            chalk.cyan("D) style")
        ],
        correctAnswer: chalk.cyan("D) style")
    },
    {
        question: "Which is the correct CSS syntax?",
        options: [
            chalk.cyan("A) {body;color:black;}"),
            chalk.cyan("B) body {color: black;}"),
            chalk.cyan("C) {body:color=black;}"),
            chalk.cyan("D) body:color=black;")
        ],
        correctAnswer: chalk.cyan("B) body {color: black;}")
    },
    {
        question: "How do you insert a comment in a CSS file?",
        options: [
            chalk.cyan("A) ' this is a comment"),
            chalk.cyan("B) // this is a comment"),
            chalk.cyan("C) /* this is a comment */"),
            chalk.cyan("D) // this is a comment //")
        ],
        correctAnswer: chalk.cyan("C) /* this is a comment */")
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            chalk.cyan("A) bgcolor"),
            chalk.cyan("B) color"),
            chalk.cyan("C) background-color"),
            chalk.cyan("D) background")
        ],
        correctAnswer: chalk.cyan("C) background-color")
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        options: [
            chalk.cyan("A) all.h1 {background-color:#FFFFFF;}"),
            chalk.cyan("B) h1.setAll {background-color:#FFFFFF;}"),
            chalk.cyan("C) h1 {background-color:#FFFFFF;}"),
            chalk.cyan("D) h1.all {background-color:#FFFFFF;}")
        ],
        correctAnswer: chalk.cyan("C) h1 {background-color:#FFFFFF;}")
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            chalk.cyan("A) fgcolor"),
            chalk.cyan("B) text-color"),
            chalk.cyan("C) color"),
            chalk.cyan("D) font-color")
        ],
        correctAnswer: chalk.cyan("C) color")
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            chalk.cyan("A) font-style"),
            chalk.cyan("B) text-size"),
            chalk.cyan("C) font-size"),
            chalk.cyan("D) text-style")
        ],
        correctAnswer: chalk.cyan("C) font-size")
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: [
            chalk.cyan("A) <p style='text-size:bold;'>"),
            chalk.cyan("B) p {text-size:bold;}"),
            chalk.cyan("C) <p style='font-size:bold;'>"),
            chalk.cyan("D) p {font-weight:bold;}")
        ],
        correctAnswer: chalk.cyan("D) p {font-weight:bold;}")
    },
    {
        question: "How do you display hyperlinks without an underline?",
        options: [
            chalk.cyan("A) a {text-decoration:no-underline;}"),
            chalk.cyan("B) a {underline:none;}"),
            chalk.cyan("C) a {decoration:no-underline;}"),
            chalk.cyan("D) a {text-decoration:none;}")
        ],
        correctAnswer: chalk.cyan("D) a {text-decoration:none;}")
    }
];

export default cssQuizQuestions;
