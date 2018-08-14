var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score=0;
var p2Score=0;
var winningScore = 5;
var gameOver=false;

p1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score===winningScore){
			p1Display.classList.add("winner");
			p2Display.classList.add("looser");
			gameOver=true;
		}
		p1Display.textContent = p1Score;
	}
});

p2.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score===winningScore){
			p1Display.classList.add("looser");
			p2Display.classList.add("winner");
			gameOver=true;
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click", function(){
	reset_func();
});

function reset_func() {
	gameOver=false;
	p1Score=0;
	p2Score=0;
	p1Display.textContent=p1Score;
	p2Display.textContent=p2Score;
	p1Display.classList.remove("winner");
	p1Display.classList.remove("looser");
	p2Display.classList.remove("winner");
	p2Display.classList.remove("looser");
}

input.addEventListener("change", function(){
	reset_func();
	winningScore = Number(input.value);
	winningScoreDisplay.textContent = winningScore;


});








