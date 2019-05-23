/* quiz */
function tilbagequiz() {
    window.location.href = 'login.html';
}

let getSpørgsmål1 = document.querySelector(".spørgsmål1");
let getSpørgsmål2 = document.querySelector(".spørgsmål2");
let getSpørgsmål3 = document.querySelector(".spørgsmål3");
let getSpørgsmål4 = document.querySelector(".spørgsmål4");
let getSpørgsmål5 = document.querySelector(".spørgsmål5");
let getSpørgsmål6 = document.querySelector(".spørgsmål6");
let getKort = document.querySelector(".kortKnapper");

let spørgsmål1Status = true;

let spørgsmål1 = function() {
    if (spørgsmål1Status === true) {
        getSpørgsmål1.style.visibility = "hidden";
        getKort.style.visibility = "visible";
    }
}

let spørgsmål2Status = true;

let spørgsmål2 = function() {
    if (spørgsmål1Status === true) {
        getSpørgsmål2.style.visibility = "hidden";
        getKort.style.visibility = "visible";
    }
}

let spørgsmål3Status = true;

let spørgsmål3 = function() {
    if (spørgsmål3Status === true) {
        getSpørgsmål3.style.visibility = "hidden";
        getKort.style.visibility = "visible";
    }
}

let spørgsmål4Status = true;

let spørgsmål4 = function() {
    if (spørgsmål4Status === true) {
        getSpørgsmål4.style.visibility = "hidden";
        getKort.style.visibility = "visible";
    }
}

let spørgsmål5Status = true;

let spørgsmål5 = function() {
    if (spørgsmål5Status === true) {
        getSpørgsmål5.style.visibility = "hidden";
        getKort.style.visibility = "visible";
    }
}

let spørgsmål6Status = true;

let spørgsmål6 = function() {
    if (spørgsmål6Status === true) {
        getSpørgsmål6.style.visibility = "hidden";
        getKort.style.visibility = "visible";
    }
}

let knap1Status = true;

let knap1 = function() {
    if (knap1Status === true) {
        getKort.style.visibility = "hidden";
        getSpørgsmål1.style.visibility = "visible";
    }
}

let knap2Status = true;

let knap2 = function() {
    if (knap2Status === true) {
        getKort.style.visibility = "hidden";
        getSpørgsmål2.style.visibility = "visible";
    }
}

let knap3Status = true;

let knap3 = function() {
    if (knap3Status === true) {
        getKort.style.visibility = "hidden";
        getSpørgsmål3.style.visibility = "visible";
    }
}

let knap4Status = true;

let knap4 = function() {
    if (knap4Status === true) {
        getKort.style.visibility = "hidden";
        getSpørgsmål4.style.visibility = "visible";
    }
}

let knap5Status = true;

let knap5 = function() {
    if (knap5Status === true) {
        getKort.style.visibility = "hidden";
        getSpørgsmål5.style.visibility = "visible";
    }
}

let knap6Status = true;

let knap6 = function() {
    if (knap6Status === true) {
        getKort.style.visibility = "hidden";
        getSpørgsmål6.style.visibility = "visible";
    }
}


/* Under konstruktion, men virker ikke lige nu. Der er blevet fulgt en guide på Youtube: https://www.youtube.com/watch?v=C7NsIRhoWuE */

function check(){
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
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


function tak() {
  let getTak =document.querySelector(".popup") .style.visibility="visible";
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

