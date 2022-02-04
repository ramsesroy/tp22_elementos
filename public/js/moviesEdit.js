function qs(element) {
    return document.querySelector(element);
}

let $title = qs('h1');
let $form = qs('section');
let $article = qs('article');

$title.classList.add('titulo');
$form.classList.add('fondoCRUD');
$article.classList.add('fondoTransparente');
$form.style.color = '#fff'
$form.style.fontWeight = 'bold'

