function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Spécifiez l'ID de l'élément
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Fermez le menu
    document.getElementById("main").style.marginLeft = "0"; // Réinitialisez la marge
}

// récupérer les valeurs sélectionnées et les sauvegarder dans le LocalStorage.
function saveSettings() {
    const amount = document.getElementById("amount").value;
    const difficulty = document.getElementById("difficulty").value;

    localStorage.setItem("quizAmount", amount);
    localStorage.setItem("quizDifficulty", difficulty);
}
//Récupérer les valeurs sur la page slide2.html :
window.onload = function() {
    const amount = localStorage.getItem("quizAmount");
    const difficulty = localStorage.getItem("quizDifficulty");

    console.log("Amount:", amount);
    console.log("Difficulty:", difficulty);

    // Utiliser ces valeurs pour configurer ton quiz
};




