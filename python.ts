import chalk from 'chalk';
import QuizQuestionInterface from "./interface.js";

const pythonQuizQuestions: QuizQuestionInterface[] = [
  {
    question: "What is the correct file extension for Python files?",
    options: [
      chalk.cyan("A) .pyth"),
      chalk.cyan("B) .pt"),
      chalk.cyan("C) .py"),
      chalk.cyan("D) .pyt")
    ],
    correctAnswer: chalk.cyan("C) .py")
  },
  {
    question: "How do you create a variable with the numeric value 5 in Python?",
    options: [
      chalk.cyan("A) x = 5"),
      chalk.cyan("B) int x = 5"),
      chalk.cyan("C) num x = 5"),
      chalk.cyan("D) x := 5")
    ],
    correctAnswer: chalk.cyan("A) x = 5")
  },
  {
    question: "What is the output of print(2 ** 3)?",
    options: [
      chalk.cyan("A) 6"),
      chalk.cyan("B) 8"),
      chalk.cyan("C) 9"),
      chalk.cyan("D) 5")
    ],
    correctAnswer:   chalk.cyan("B) 8")
  },
  {
    question: "Which of the following is used to define a block of code in Python?",
    options: [
      chalk.cyan("A) Curly braces {}"),
      chalk.cyan("B) Parentheses ()"),
      chalk.cyan("C) Indentation"),
      chalk.cyan("D) Square brackets []")
    ],
    correctAnswer: chalk.cyan("C) Indentation")
  },
  {
    question: "Which of the following is the correct syntax to create a function in Python?",
    options: [
      chalk.cyan("A) function myFunction()"),
      chalk.cyan("B) def myFunction()"),
      chalk.cyan("C) create myFunction()"),
      chalk.cyan("D) function:myFunction()")
    ],
    correctAnswer:    chalk.cyan("B) def myFunction()")
  },
  {
    question: "How do you insert comments in Python code?",
    options: [
      chalk.cyan("A) // This is a comment"),
      chalk.cyan("B) /* This is a comment */"),
      chalk.cyan("C) # This is a comment"),
      chalk.cyan("D) <!-- This is a comment -->")
    ],
    correctAnswer:chalk.cyan("C) # This is a comment")
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    options: [
      chalk.cyan("A) tuple"),
      chalk.cyan("B) list"),
      chalk.cyan("C) string"),
      chalk.cyan("D) int")
    ],
    correctAnswer: chalk.cyan("B) list")
  },
  {
    question: "How do you start a while loop in Python?",
    options: [
      chalk.cyan("A) while x > 5:"),
      chalk.cyan("B) while (x > 5)"),
      chalk.cyan("C) while x > 5 {"),
      chalk.cyan("D) while: x > 5")
    ],
    correctAnswer: chalk.cyan("A) while x > 5:")
  },
  {
    question: "Which of the following functions can be used to read a string from the user in Python?",
    options: [
      chalk.cyan("A) input()"),
      chalk.cyan("B) read()"),
      chalk.cyan("C) gets()"),
      chalk.cyan("D) scan()")
    ],
    correctAnswer:  chalk.cyan("A) input()")
  },
  {
    question: "What is the correct way to create an instance of a class in Python?",
    options: [
      chalk.cyan("A) className object = new className()"),
      chalk.cyan("B) className object = className.new()"),
      chalk.cyan("C) object = className()"),
      chalk.cyan("D) className object()")
    ],
    correctAnswer: chalk.cyan("C) object = className()")
  }
];



export default pythonQuizQuestions;
