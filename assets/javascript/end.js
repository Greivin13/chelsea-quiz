const initials = document.getElementById('initials')
const saveScoreBtn =  document.getElementById('saveScoreBtn')
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore')

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maxHighScores = 5;

finalScore.innerText = mostRecentScore

saveHighScore = (e) => {
    e.preventDefault()

const score = {
    score: mostRecentScore,
    name: initials.value
};

highScores.push(score);
highScores.sort((a, b) => b.score - a.score );

highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("./index.html")
}