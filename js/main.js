
if(document.getElementById('envoyer')){
    document.getElementById('envoyer').addEventListener('click', function () {
        // Récupération des valeurs des champs
        const email = document.getElementById('email').value;
        const subject = document.getElementById('sujet').value;
        const message = document.getElementById('Contact').value;

        // Création du lien mailto avec les valeurs pré-remplies
        window.location.href = `mailto:chessweb7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Email: ${email}\nMessage: ${message}`)}`;
    });
}
// fonction qui envoie un retour à l'utilisateur lorsque le message est envoyé

function myalert() {
    alert("Merci pour votre retour !");
}

//fonctions qui permet d'ouvrir la vidéo et la fermer en cliquant sur la croix

function ouvrir() {
    let videoContainer = document.getElementById('video');
    videoContainer.style.display = 'block';
    let btnFermer = document.getElementById('btnfermer');
    btnFermer.style.display = 'block';
    video.play();
}

function fermer() {
    let videoContainer = document.getElementById('video');
    videoContainer.style.display = 'none';
    video.pause();
    let btnFermer = document.getElementById('btnfermer');
    btnFermer.style.display = 'none';
}

if (document.getElementById('btnfermer')) document.getElementById('btnfermer').addEventListener('click', fermer);


//fonction qui permet de faire apparaitre le menu déroulant en cliquant sur le hamburger

const menuHamburger = document.querySelector(".menuHamburger");
const menu = document.querySelector('.menuDeroulantActif');

if (menuHamburger) {
    menuHamburger.addEventListener('click', function () {
        menu.classList.toggle('mobile-menu');

    });
}
//fonction qui permet de changer le thème du site vers le thème traditionnel ou classique

document.getElementById('changementTheme').addEventListener('click', function () {
    let classique = document.querySelectorAll('.classique');
    let traditionnel = document.querySelectorAll('.traditionnel');
    classique.forEach((element, index) => {

        if (element.disabled) {
            element.disabled = false;
            traditionnel[index].disabled = true;
        } else {
            element.disabled = true;
            traditionnel[index].disabled = false;
        }
    });

});