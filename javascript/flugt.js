/* quiz */
function tilbagequiz() {
    window.location.href = 'login.html';
}



/* Under konstruktion, men virker ikke lige nu. Der er blevet fulgt en guide på Youtube: https://www.youtube.com/watch?v=C7NsIRhoWuE */

function check(){
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let correct = 0;
    
    if(question1 == "right"){
        correct++;
    }
    if(question2 == "right"){
        correct++;
    }
    if(question3 == "right"){
        correct++;
    }
    if(question4 == "right"){
        correct++;
    }
    if(question5 == "right"){
        correct++;
    }
    if(question6 == "right"){
        correct++;
    }
    document.getElementById("number_correct").innerHTML = "Du fik " + correct + " rigtige ud af 6"
}

/* feedback*/

function tilbage() {
    window.location.href = 'index.html';
}

/*index*/

function danskflag() {
    window.location.href = 'login.html'
}

function engelskflag() {
    window.location.href = 'login.html'
}

function tyskflag() {
    window.location.href = 'login.html'
}