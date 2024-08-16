function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Spécifiez l'ID de l'élément
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Fermez le menu
    document.getElementById("main").style.marginLeft = "0"; // Réinitialisez la marge
}



let currentQuestionIndex = 0;
let score = 0;
const questions = [ 
 {question:"What is the bloodiest event in United States history, in terms of casualties?", option:["battle of Antietam", "september 11th", "D-Day","Pearl Harbor"], correct: "b" } 
 
     

     

    // Ajoutez des questions ici avec la structure suivante
    // { question: "Texte de la question", options: ["Option 1", "Option 2"], correct: "Option 1" }

    
];

function startQuiz() {
    document.getElementById('home-page').style.display = '';
    document.getElementById('quiz-page').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('question-text').innerText = question.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.correct) {
        score += 2; // Incrementer le score
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz-container').innerHTML = `
        <div>Your final score is ${score}</div>
        <button id="retry-button" onclick="retryQuiz()">Retry</button>
    `;
}

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}
