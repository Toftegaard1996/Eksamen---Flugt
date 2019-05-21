/* quiz */

    let myQuestions = [
        {
            question: "Hvor mange boede der i lejr samfundet ved Oksbøl?",
            answer: {
                a: "25.000"
                b: "30.000"
                c: "35.000"
            },
            correctAnswer: "c"
        },
        {
            question: "Hvor længe stod lejren efter krigen?",
            answer: {
                a: "4 år"
                b: "6 år"
                c: "8 år"
            },
            correctAnswer: "a"
        },
        {
            question: "Hvem var primært i lejren?",
            answer: {
                a: "Børn"
                b: "Børn, kvinder og gamle"
                c: "Alle"
            },
            correctAnswer: "b"
        },
        {
            question: "Hvad skete der med lejren efter den sidste flygtning tog hjem?",
            answer: {
                a: "Lejren blev revet ned da Danmark manglede ressourcer"
                b: "Danskerne brugte den til at huse de syge og skadet"
                c: "Den stod urørt i 10 år inden der blev taget en beslutning om hvad der skulle ske"
            },
            correctAnswer: "a"
        },
        {
            question: "Hvad havde de ikke i lejren?",
            answer: {
                a: "Teater"
                b: "Skole"
                c: "Fængsel"
            },
            correctAnswer: "c"
        },
        {
            question: "Hvor mange ligger der cirka på kirkegården?",
            answer: {
                a: "1100"
                b: "1700"
                c: "2300"
            },
            correctAnswer: "a"
        }
    ];
let quizContainer = document.getElementsByName('.quiz');
let resultContainer = document.getElementsByName('.result');
let submitButton = document.getElementsByName('.submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        let output[];
        let answers;
        for(let i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answer){
            answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ':'
            +questions[i].answers[letter]
            +'</label>');
            }
        output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>');
        }
    
    quizContainer.innerHTML = output.join('');
    }
    
    function showResults(questions, quizContainer, resultsContainer){
        let answerContainers = quizContainer.querySelectorAll('.answers');
        let userAnswer = '';
        let numCorrect = 0;
        for(let i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name]{}).value;
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
            }
        }
        resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
    }
    
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

/* login */