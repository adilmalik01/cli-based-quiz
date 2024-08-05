import QuizQuestionInterface from "./interface.js";
import chalk from 'chalk';

const htmlQuizQuestions: QuizQuestionInterface[] = [
    {
        question: "What does HTML stand for?",
        options: [
            chalk.cyan("A) Hyper Text Preprocessor"),
            chalk.cyan("B) Hyper Text Markup Language"),
            chalk.cyan("C) Hyper Text Multiple Language"),
            chalk.cyan("D) Hyper Tool Multi Language")
        ],
        correctAnswer: chalk.cyan("B) Hyper Text Markup Language")
    },
    {
        question: "Who is making the Web standards?",
        options: [
            chalk.cyan("A) Mozilla"),
            chalk.cyan("B) Microsoft"),
            chalk.cyan("C) The World Wide Web Consortium"),
            chalk.cyan("D) Google")
        ],
        correctAnswer: chalk.cyan("C) The World Wide Web Consortium")
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: [
            chalk.cyan("A) <heading>"),
            chalk.cyan("B) <h6>"),
            chalk.cyan("C) <head>"),
            chalk.cyan("D) <h1>")
        ],
        correctAnswer: chalk.cyan("D) <h1>")
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            chalk.cyan("A) <lb>"),
            chalk.cyan("B) <br>"),
            chalk.cyan("C) <break>"),
            chalk.cyan("D) <b>")
        ],
        correctAnswer: chalk.cyan("B) <br>")
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: [
            chalk.cyan("A) <body style='background-color:yellow;'>"),
            chalk.cyan("B) <body bg='yellow'>"),
            chalk.cyan("C) <background>yellow</background>"),
            chalk.cyan("D) <body style='bg-color:yellow;'>")
        ],
        correctAnswer: chalk.cyan("A) <body style='background-color:yellow;'>")
    },
    {
        question: "Choose the correct HTML element to define important text",
        options: [
            chalk.cyan("A) <important>"),
            chalk.cyan("B) <i>"),
            chalk.cyan("C) <strong>"),
            chalk.cyan("D) <b>")
        ],
        correctAnswer: chalk.cyan("C) <strong>")
    },
    {
        question: "Which character is used to indicate an end tag?",
        options: [
            chalk.cyan("A) *"),
            chalk.cyan("B) /"),
            chalk.cyan("C) <"),
            chalk.cyan("D) ^")
        ],
        correctAnswer: chalk.cyan("B) /")
    },
    {
        question: "How can you make a numbered list?",
        options: [
            chalk.cyan("A) <ol>"),
            chalk.cyan("B) <ul>"),
            chalk.cyan("C) <list>"),
            chalk.cyan("D) <dl>")
        ],
        correctAnswer: chalk.cyan("A) <ol>")
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            chalk.cyan("A) <a href='http://www.example.com'>Example</a>"),
            chalk.cyan("B) <a url='http://www.example.com'>Example</a>"),
            chalk.cyan("C) <a>http://www.example.com</a>"),
            chalk.cyan("D) <a name='http://www.example.com'>Example</a>")
        ],
        correctAnswer: chalk.cyan("A) <a href='http://www.example.com'>Example</a>")
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: [
            chalk.cyan("A) <bottom>"),
            chalk.cyan("B) <footer>"),
            chalk.cyan("C) <section>"),
            chalk.cyan("D) <foot>")
        ],
        correctAnswer: chalk.cyan("B) <footer>")
    }
];

export default htmlQuizQuestions;
