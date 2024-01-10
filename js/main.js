if(document.getElementById('envoyer')) document.getElementById('envoyer').addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const mess = document.getElementById('Contact');

    const bodymessage = `Email : ${email.value}<br> Subject: ${subject.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chessweb7@gmail.com",
        Password : "8E95DF2BFE4225A64EC31EBB47EC0777DCB9",
        Port : 2525,
        To: 'chessweb7@gmail.com',
        From: document.getElementById("email").value,
        Subject: subject.value,
        Body: bodymessage
    }).then(
        message => {
            alert(message);
            myalert();
        }
    );
});

if(document.getElementById('theme')) document.getElementById('theme').addEventListener('click', function(){
    css = document.getElementById('css');
    if(css.href.endsWith("/css/theme.css")) {
        css.href='css/style.css'
    } else {
        css.href='css/theme.css';
    }
});
function myalert() {
    alert("Merci pour votre retour !");
}
function ouvrir() {
    let videoContainer = document.getElementById('video');

    videoContainer.style.display = 'block';
}
function fermer() {
    let videoContainer = document.getElementById('video');

    videoContainer.style.display = 'none';
}
if(document.getElementById('btnfermer')) document.getElementById('btnfermer').addEventListener('click',fermer);



const menuHamburger = document.querySelector(".menuHamburger");
const menu = document.querySelector('.menuDeroulantActif');

if (menuHamburger) {
    menuHamburger.addEventListener('click', function () {
        menu.classList.toggle('mobile-menu');

    });
}
