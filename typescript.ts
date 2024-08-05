import chalk from 'chalk';
import QuizQuestionInterface from "./interface.js";

const TypescriptQuestions: QuizQuestionInterface[] = [
    {
        question: "What is TypeScript?",
        options: [
            chalk.cyan("A) A programming language"),
            chalk.cyan("B) A superset of JavaScript"),
            chalk.cyan("C) A library for JavaScript"),
            chalk.cyan("D) A framework for JavaScript")
        ],
        correctAnswer: chalk.cyan("B) A superset of JavaScript")
    },
    {
        question: "Which keyword is used to define a variable in TypeScript?",
        options: [
            chalk.cyan("A) var"),
            chalk.cyan("B) let"),
            chalk.cyan("C) const"),
            chalk.cyan("D) All of the above")
        ],
        correctAnswer: chalk.cyan("D) All of the above")
    },
    {
        question: "How do you specify a type for a variable in TypeScript?",
        options: [
            chalk.cyan("A) let variableName: type;"),
            chalk.cyan("B) var variableName = type;"),
            chalk.cyan("C) type variableName = type;"),
            chalk.cyan("D) const variableName: type;")
        ],
        correctAnswer:  chalk.cyan("A) let variableName: type;")
    },
    {
        question: "Which of the following is not a TypeScript data type?",
        options: [
            chalk.cyan("A) string"),
            chalk.cyan("B) number"),
            chalk.cyan("C) boolean"),
            chalk.cyan("D) character")
        ],
        correctAnswer: chalk.cyan("D) character")
    },
    {
        question: "How do you define an interface in TypeScript?",
        options: [
            chalk.cyan("A) interface MyInterface {}"),
            chalk.cyan("B) type MyInterface = {}"),
            chalk.cyan("C) class MyInterface {}"),
            chalk.cyan("D) function MyInterface() {}")
        ],
        correctAnswer:  chalk.cyan("A) interface MyInterface {}")
    },
    {
        question: "How can you extend an interface in TypeScript?",
        options: [
            chalk.cyan("A) Using the extends keyword"),
            chalk.cyan("B) Using the implements keyword"),
            chalk.cyan("C) Using the inherit keyword"),
            chalk.cyan("D) Using the interface keyword")
        ],
        correctAnswer: chalk.cyan("A) Using the extends keyword")
    },
    {
        question: "What is the correct way to define a tuple in TypeScript?",
        options: [
            chalk.cyan("A) let tuple: [string, number] = ['hello', 10];"),
            chalk.cyan("B) let tuple = ['hello', 10];"),
            chalk.cyan("C) let tuple: {string, number} = ['hello', 10];"),
            chalk.cyan("D) let tuple: (string, number) = ['hello', 10];")
        ],
        correctAnswer:  chalk.cyan("A) let tuple: [string, number] = ['hello', 10];")
    },
    {
        question: "Which of the following is the correct syntax for a type assertion in TypeScript?",
        options: [
            chalk.cyan("A) let someValue: any = 'this is a string'; let strLength: number = (<string>someValue).length;"),
            chalk.cyan("B) let someValue: any = 'this is a string'; let strLength: number = (string)someValue.length;"),
            chalk.cyan("C) let someValue: any = 'this is a string'; let strLength: number = (someValue as string).length;"),
            chalk.cyan("D) Both A and C")
        ],
        correctAnswer: chalk.cyan("D) Both A and C")
    },
    {
        question: "How do you import a single export from a module in TypeScript?",
        options: [
            chalk.cyan("A) import { myFunction } from 'myModule';"),
            chalk.cyan("B) import myFunction from 'myModule';"),
            chalk.cyan("C) import 'myFunction' from 'myModule';"),
            chalk.cyan("D) require('myModule').myFunction;")
        ],
        correctAnswer: chalk.cyan("A) import { myFunction } from 'myModule';")
    },
    {
        question: "What is the purpose of the 'never' type in TypeScript?",
        options: [
            chalk.cyan("A) To represent values that will never occur"),
            chalk.cyan("B) To represent an infinite loop"),
            chalk.cyan("C) To represent a variable that can hold any value"),
            chalk.cyan("D) To represent a value that can be null or undefined")
        ],
        correctAnswer:  chalk.cyan("A) To represent values that will never occur"),
    }
];

export default TypescriptQuestions;
