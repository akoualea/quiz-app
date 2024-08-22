function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Spécifiez l'ID de l'élément
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Fermez le menu
    document.getElementById("main").style.marginLeft = "0"; // Réinitialisez la marge
}
const questions = {
    easy: [
        { question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript?", options: ["var", "int", "string", "float"], correctAnswer: 0 },
        { question: "Quelle méthode est utilisée pour écrire dans la console du navigateur?", options: ["console.log()", "print()", "echo()", "write()"], correctAnswer: 0 },
        { question: "Comment créer une fonction en JavaScript?", options: ["function myFunction()", "def myFunction()", "create function myFunction()", "function:myFunction()"], correctAnswer: 0 },
        { question: "Quel symbole est utilisé pour les commentaires sur une seule ligne en JavaScript?", options: ["//", "/* */", "<!-- -->", "#"], correctAnswer: 0 },
        { question: "Comment ajouter un élément à la fin d'un tableau en JavaScript?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0 },
    ],
    medium: [
        { question: "Quel est le type de 'null' en JavaScript?", options: ["object", "null", "undefined", "number"], correctAnswer: 0 },
        { question: "Quelle est la sortie de typeof NaN?", options: ["number", "NaN", "undefined", "object"], correctAnswer: 0 },
        { question: "Comment peut-on ajouter un élément au début d'un tableau?", options: ["unshift()", "shift()", "push()", "pop()"], correctAnswer: 0 },
        { question: "Quelle est la sortie de '1' - 1?", options: ["0", "1", "NaN", "'11'"], correctAnswer: 0 },
        { question: "Que renvoie '2' * '3' en JavaScript?", options: ["6", "'23'", "5", "NaN"], correctAnswer: 0 },
    ],
    difficult: [
        { question: "Quel est le résultat de [] + [] en JavaScript?", options: ["''", "NaN", "undefined", "[]"], correctAnswer: 0 },
        { question: "Quelle est la sortie de '2' - -'2' en JavaScript?", options: ["4", "NaN", "0", "Erreur"], correctAnswer: 0 },
        { question: "Que renvoie la méthode Object.is(NaN, NaN) ?", options: ["true", "false", "undefined", "null"], correctAnswer: 0 },
        { question: "Comment déclarer une fonction auto-exécutée en JavaScript?", options: ["(function(){})()", "function(){}", "function()(){}", "()function{}"], correctAnswer: 0 },
        { question: "Quel est le résultat de '5' - 2 en JavaScript?", options: ["3", "52", "NaN", "Erreur"], correctAnswer: 0 },
    ]
};

// Combine les questions faciles, moyennes et difficiles pour atteindre au moins 50 questions
const allQuestions = [...questions.easy, ...questions.medium, ...questions.difficult];

let currentQuestionIndex = 0;
let selectedDifficulty;
let selectedAmount;
let score = 0;

function startQuiz() {
    selectedDifficulty = document.getElementById('difficulty').value;
    selectedAmount = parseInt(document.getElementById('amount').value);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('retry-button').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = allQuestions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} of ${selectedAmount}`;
    document.getElementById('question-text').innerText = currentQuestion.question;

    const optionsDiv = document.getElementById('amount');
    optionsDiv.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.innerText = option;
        button.onclick = () => selectAnswer(index, button);
        optionsDiv.appendChild(button);
    });
}

function selectAnswer(selectedOption, button) {
    const currentQuestion = allQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('#amount .btn');

    if (selectedOption === currentQuestion.correctAnswer) {
        button.style.backgroundColor = 'green';
        score += 1;  // Le score augmente d'un point
    } else {
        button.style.backgroundColor = 'red';
        options[currentQuestion.correctAnswer].style.backgroundColor = 'green';
    }

    options.forEach(btn => btn.disabled = true);
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < selectedAmount && currentQuestionIndex < allQuestions.length) {
        showQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').innerHTML = `<h2>Your Score: ${score}</h2>`;
    document.getElementById('retry-button').style.display = 'block';
}

function retryQuiz() {
    startQuiz();
}

// Ajouter un événement de clic pour démarrer le quiz
document.querySelector('.start-button').addEventListener('click', startQuiz);


console.log(currentQuestion);
