// Créer un événement au click sur le hamburger menu pour sortir la sidebar
// ranger la sidebar si on reclick dessus

const btnToggle = document.querySelector('.toggle-btn');
const sideBar = document.getElementById("side-bar");
const content = document.querySelector('.content');

btnToggle.addEventListener("click", () => {
    sideBar.classList.toggle("sidebarToggle");
    content.classList.toggle("content2");
});

// Ranger la sidebar si on click sur le contenu principal

content.addEventListener("click", () => {
    sideBar.classList.remove("sidebarToggle");
    content.classList.remove("content2");
});

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
