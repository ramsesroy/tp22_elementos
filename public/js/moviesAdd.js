function qs(element) {
    return document.querySelector(element);
}

let $moviesAddTitulo = qs('h1');
let $form = qs('section');
let $article = qs('article');

$moviesAddTitulo.innerHTML = 'AGREGAR PELÍCULAS'
$moviesAddTitulo.classList.add('titulo')

$article.classList.add('fondoTransparente')

$form.classList.add('fondoCRUD');