<!-- fonction qui s'occupe de la validation du formulaire de contact -->

if (document.getElementById('envoyer')) document.getElementById('envoyer').addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const mess = document.getElementById('Contact');

    const bodymessage = `Email : ${email.value}<br> Subject: ${subject.value}<br> Message: ${mess.value}`;

    email.send({
        Host: "smtp.elasticemail.com",
        Username: "chessweb7@gmail.com",
        Password: "8E95DF2BFE4225A64EC31EBB47EC0777DCB9",
        Port: 2525,
        To: 'chessweb7@gmail.com',
        From: document.getElementById("email").value,
        Subject: subject.value,
        Body: bodymessage
    }).then(message => {
        alert(message);
        myalert();
    });
});

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