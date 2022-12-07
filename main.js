let dino = document.querySelector('.dino');
let score = document.querySelector('.score');
let GameStart = document.querySelector('.start-screen')
let GameOver = document.querySelector('.end-screen')
let ground = document.querySelector('.ground')

let interval = null
let playerScore = 0;

let scoreCounter = ()=>{
    playerScore++
    score.innerHTML = `Score <b>${playerScore}</b>`
}



window.addEventListener("keydown",(start)=>{
    if(start.code == "Space"){
        GameStart.style.display='none'
        

        //score
        let playerScore = 0;
        //interval = setInterval(scoreCounter,200)
    }
})
var jump = false;
document.addEventListener('keydown',function(e){
    if(e.code == "Space"){
        jump = true;
    }
})
