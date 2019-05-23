/* quiz */
function tilbagequiz() {
    window.location.href = 'login.html';
}

document.getElementsByName("spørgsmål1").onsubmit=function() {
       let = parseInt(document.querySelector('input[name = "svarmulighed"]:checked').value);
	   
	   
	   result = variable + sub + con + ifstate;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false; // required to not refresh the page; just leave this here
} //this ends the submit function

/* feedback*/

function tilbage() {
    window.location.href = 'index.html';
}