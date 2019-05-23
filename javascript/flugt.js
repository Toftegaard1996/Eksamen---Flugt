/* quiz */
function tilbagequiz() {
    window.location.href = 'login.html';
}

function check(){
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let correct = 0;
    
    if(question1 == "1"){
        correct++;
    }
    if(question2 == "1"){
        correct++;
    }
    if(question3 == "1"){
        correct++;
    }
    if(question4 == "1"){
        correct++;
    }
    if(question5 == "1"){
        correct++;
    }
    if(question6 == "1"){
        correct++;
    }
    document.getElementById("number_correct").innerHTML = "Du fik " + correct + " rigtige ud af 6"
}

/* feedback*/

function tilbage() {
    window.location.href = 'index.html';
}