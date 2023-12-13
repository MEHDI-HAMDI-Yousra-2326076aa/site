document.getElementById('theme').addEventListener('click', function(){
    css = document.getElementById('css');
    if(css.href.endsWith("/css/theme.css")) {
        css.href='css/style.css'
    } else {
        css.href='css/theme.css';
    }
});
