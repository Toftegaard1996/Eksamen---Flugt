/* quiz */

const quizContainer = document.querySelector('quiz');
const resultContainer = document.querySelector('results');
const submitButton = document.querySelector('submit');

/*display quiz right away */
function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumner) => {
          const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
            `<label>
            <input type="radio" name="questions"${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            </label>`
            );
        }
            output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorret = 0;
    myQuestions.forEach( (currentQuestion, qustionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer===currentQuestion.correstAnswer){
            numCorret++;
        }
    });
    resultContainer.innerHTML = numCorret + 'out of' + myQuestions.length;
}

const answerContainers = quizContainer.querySelectorAll('.answer');

let numCorrent = 0;

myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'${questionNumber}']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(userAnswer===currentQuestion.correstAnswer){
        numCorrent++;
    }
});

/*on submit, show results */
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "Hvor mange boede der i lejr samfundet ved Oksbøl?",
        answer: {
            a: "25.000"
            b: "30.000"
            c: "35.000"
        },
        correstAnswer: "c"
    },
    {
        question: "Hvor længe stod lejren efter krigen?",
        answer: {
            a: "4 år"
            b: "6 år"
            c: "8 år"
        },
        correstAnswer: "a"
    },
    {
        question: "Hvem var primært i lejren?",
        answer: {
            a: "Børn"
            b: "Børn, kvinder og gamle"
            c: "Alle"
        },
        correstAnswer: "b"
    },
    {
        question: "Hvad skete der med lejren efter den sidste flygtning tog hjem?",
        answer: {
            a: "Lejren blev revet ned da Danmark manglede ressourcer"
            b: "Danskerne brugte den til at huse de syge og skadet"
            c: "Den stod urørt i 10 år inden der blev taget en beslutning om hvad der skulle ske"
        },
        correstAnswer: "a"
    },
    {
        question: "Hvad havde de ikke i lejren?",
        answer: {
            a: "Teater"
            b: "Skole"
            c: "Fængsel"
        },
        correstAnswer: "c"
    },
    {
        question: "Hvor mange ligger der cirka på kirkegården?",
        answer: {
            a: "1100"
            b: "1700"
            c: "2300"
        },
        correstAnswer: "a"
    },
]

/* login */