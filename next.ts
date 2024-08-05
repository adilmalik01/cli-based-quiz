import chalk from 'chalk';
import QuizQuestionInterface from "./interface.js";

const nextjsQuizQuestions: QuizQuestionInterface[] = [
    {
        question: "What is Next.js?",
        options: [
            chalk.cyan("A) A JavaScript framework"),
            chalk.cyan("B) A CSS framework"),
            chalk.cyan("C) A React framework"),
            chalk.cyan("D) A Node.js framework")
        ],
        correctAnswer: chalk.cyan("C) A React framework")
    },
    {
        question: "Which command is used to create a new Next.js app?",
        options: [
            chalk.cyan("A) create-next-app"),
            chalk.cyan("B) new-next-app"),
            chalk.cyan("C) next-create-app"),
            chalk.cyan("D) next-new-app")
        ],
        correctAnswer: chalk.cyan("A) create-next-app")
    },
    {
        question: "What is the main purpose of server-side rendering in Next.js?",
        options: [
            chalk.cyan("A) To improve SEO"),
            chalk.cyan("B) To reduce loading times"),
            chalk.cyan("C) To enhance security"),
            chalk.cyan("D) To optimize code splitting")
        ],
        correctAnswer: chalk.cyan("A) To improve SEO")
    },
    {
        question: "Which file is used to configure routing in Next.js?",
        options: [
            chalk.cyan("A) routes.js"),
            chalk.cyan("B) pages.js"),
            chalk.cyan("C) next.config.js"),
            chalk.cyan("D) _app.js")
        ],
        correctAnswer: chalk.cyan("B) pages.js")
    },
    {
        question: "How do you create dynamic routes in Next.js?",
        options: [
            chalk.cyan("A) Using the <Link> component"),
            chalk.cyan("B) By creating a folder with square brackets [ ]"),
            chalk.cyan("C) By configuring routes in next.config.js"),
            chalk.cyan("D) By using the useRouter hook")
        ],
        correctAnswer: chalk.cyan("B) By creating a folder with square brackets [ ]")
    },
    {
        question: "Which lifecycle method is used in Next.js for data fetching?",
        options: [
            chalk.cyan("A) componentDidMount"),
            chalk.cyan("B) componentDidUpdate"),
            chalk.cyan("C) getInitialProps"),
            chalk.cyan("D) useEffect")
        ],
        correctAnswer: chalk.cyan("C) getInitialProps")
    },
    {
        question: "How do you create a custom 404 page in Next.js?",
        options: [
            chalk.cyan("A) By creating a file named error.js"),
            chalk.cyan("B) By creating a file named 404.js"),
            chalk.cyan("C) By creating a folder named 404"),
            chalk.cyan("D) By using the custom404 function")
        ],
        correctAnswer: chalk.cyan("B) By creating a file named 404.js")
    },
    {
        question: "Which function is used to fetch data client-side in Next.js?",
        options: [
            chalk.cyan("A) fetch"),
            chalk.cyan("B) getServerSideProps"),
            chalk.cyan("C) getData"),
            chalk.cyan("D) getStaticProps")
        ],
        correctAnswer: chalk.cyan("A) fetch"),
    },
    {
        question: "What is the purpose of the Head component in Next.js?",
        options: [
            chalk.cyan("A) To manage state"),
            chalk.cyan("B) To handle routing"),
            chalk.cyan("C) To manage document head metadata"),
            chalk.cyan("D) To style components")
        ],
        correctAnswer: chalk.cyan("C) To manage document head metadata")
    },
    {
        question: "Which package is commonly used for styling in Next.js?",
        options: [
            chalk.cyan("A) Sass"),
            chalk.cyan("B) Tailwind CSS"),
            chalk.cyan("C) Styled Components"),
            chalk.cyan("D) Bootstrap")
        ],
        correctAnswer: chalk.cyan("C) Styled Components")
    }
];

export default nextjsQuizQuestions;
