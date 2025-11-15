let RandomNumber = parseInt(Math.random()*100 + 1)
let inputField  =document.querySelector('#guessField')
let Submit  =document.querySelector('#subt')
let ResultParas  =document.querySelector('.resultParas')
let GuessField  =document.querySelector('.guesses')
let Remaining  =document.querySelector('.lastResult')
let lowOrHi  =document.querySelector('.lowOrHi')

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    Submit.addEventListener('click', (e)=>{
        e.preventDefault()
        
        let guess = parseInt(inputField.value)
        ValidationCheck(guess)
    } )
}



function ValidationCheck(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid number')
    } else if (guess < 1) {
        alert('Please Enter number higher than 1 ')
    }else if (guess > 100) {
        alert('Please Enter number lower than 100 ')
    }

    prevGuess.push(guess)

    if (numGuess=== 11) {
        DisplayGuess(guess)
        DisplayMessage(`Game over , Random number was ${RandomNumber}`)
        EndGame()
    } else {
        DisplayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {
        DisplayMessage('You  Guessed it Right')
        EndGame()
    }
    else if (guess < RandomNumber) {
        DisplayMessage('number is Too Heigh')
    }else if (guess > RandomNumber) {
        DisplayMessage('number is Too Low')
    }
}


function DisplayGuess(guess) {
    inputField.value = ''
    GuessField.innerHTML += `${guess} ,`
    numGuess++;
    Remaining.innerHTML = `${11 - numGuess}`
}

function DisplayMessage(Message) {
    lowOrHi.innerHTML= `<h2>${Message}</h2> ` 
}

function EndGame() {
    inputField.value = ''
    inputField.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='NewGame' > Start new Game </h2>`
    ResultParas.appendChild(p)
    playGame = false
    Newgame()
    
}

function Newgame() {

    let  Newgamebtn = document.querySelector('#NewGame')
    Newgamebtn.addEventListener('click',(e)=>{
        RandomNumber = parseInt(Math.random()*100 + 1)
        prevGuess= []
        numGuess = 1
        GuessField.innerHTML = ''
        Remaining.innerHTML = `${11 - guess}`
        inputField.removeAttribute('disabled')
        ResultParas.removeChild(p)
        playGame = true
    })
    
}