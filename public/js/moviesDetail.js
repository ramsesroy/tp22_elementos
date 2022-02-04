function qs(element) {
    return document.querySelector(element);
}

let $body = qs('body');
let $titleMovie = qs('h1');
let $movies = document.querySelectorAll('ul li a');

let darkMode = confirm('¿Desea modo oscuro?');

if (darkMode){
    $body.style.backgroundColor = '#7f7f7f';
    $body.classList.add('fondoMoviesList');
    $movies.forEach(element => {
        element.style.color = 'rgb(3, 233, 233)'
    });
}

$titleMovie.innerHTML = 'LISTADO DE PELÍCULAS'
$titleMovie.style.color = 'white'
$titleMovie.style.backgroundColor = 'teal'
$titleMovie.style.padding = '20px'