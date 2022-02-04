function qs(element) {
    return document.querySelector(element);
}

let $container = qs('main');
let $subtitle = qs('h2');
let $links = qs('a');
let $info = document.querySelectorAll('p');
let userName = prompt('Por favor, ingrese su nombre');
let userBackground = confirm('¿Desea colocar un fondo de pantalla?');


$subtitle.style.textTransform = 'uppercase'
$links.style.color = '#E51B3E'

if (userName != undefined) {
    $subtitle.innerHTML = `${userName}`
} else {
    $subtitle.innerHTML = 'Invitado'
}

if (userBackground == true) {
    document.querySelector('body').classList.add('fondo')
}

$info.forEach((element, index) => {
    if ((index + 1)% 2 === 0) {
        element.classList.add('destacadoPar')
    } else {
        element.classList.add('destacadoImpar')
    }
});

$container.style.display = 'block'
