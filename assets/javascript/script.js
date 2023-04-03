// Quesion data 
const quizData = [
{
    question: "When was Chelsea F.C founded?",
    a: "1905",
    b: "2000",
    c: "1988",
    d: "1964",
    correct:"a",
},
{
    question: "What is Chelsea's nickname?",
    a: "The  Lions",
    b: "The  Blues",
    c: "The Giants",
    d: "The Gunners",
    correct:"b",
},
{
    question: "Who is Chelsea's All Time top Scorer?",
    a: "Didier Drogba",
    b: "Petr Cech",
    c: "Kai Havertz",
    d: "Frank Lampard",
    correct: "d",
},
{
    question: "How many times has Chelsea Won the UEFA Champions League?",
    a: "0",
    b: "6",
    c: "1",
    d: "2",
    correct: "d",
},
{
    question: "What is Chelsea's main color?",
    a: "yellow",
    b: "blue",
    c: "green",
    d: "orange",
    correct: "b",
},
{
    question: "Who's the All Time assiter at Chelsea?",
    a: "Francesc Fabregas",
    b: "Frank Lampard",
    c: "Eden Hazard",
    d: "Didier Drogba",
    correct: "b",
},
 {
    question: "How many times has Chelsea Won the Premier League?",
a: "3",
b: "6",
c: "1",
d: "5",
correct: "d",
 },
];

const quiz= document.getElementById('quiz')
const answerELs = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const startBtn  = document.getElementById('Start')
const scoreText = document.getElementById('score')
const timeLeft = document.getElementById('timer')
const CORRECT_BONUS = 10
const WRONG_TIMER = 10

let currentQuiz = 0
let score = 0
let time = 0 
loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
startBtn.addEventListener('click', () => {
    time= 70
    setInterval(function() {
        time -= 1
       if (time >= 0) {
          span = document.getElementById("timer");
          span.innerHTML = time;
       }
       if (time === 0) {
          alert('sorry, out of time');
          clearInterval(time);
        }
      }, 1000);
 });
function deselectAnswers(){
    answerELs.forEach(answerEL => answerEL.checked = false)
}

function getSelected(){
 let answer
 answerELs.forEach(answerEL => {
    if(answerEL.checked){
        answer = answerEL.id
    }
 })
 return answer
}
 submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
        if(answer === quizData[currentQuiz].correct){
            incrementScore(CORRECT_BONUS)
        }
        else{
            decreaseTimer(WRONG_TIMER)
        }
        currentQuiz++

        if(currentQuiz< quizData.length){
            loadQuiz()
        }
        else{
            localStorage.setItem('mostRecentScore', score);
            return  window.location.assign("./end.html")
        }
 })

  incrementScore = num => {
    score += num;
    scoreText.innerText  = score;

  }
  decreaseTimer = num =>{
    time -= num;
    timeLeft.innerText = time;
    if(time <= 0){
        localStorage.setItem('mostRecentScore', score);
        return  window.location.assign("./end.html")
    }
  }