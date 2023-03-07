const body = document.querySelector('body');
const portuguese = document.querySelector('.pt-br');
const english = document.querySelector('.en-us');
const text = document.querySelector('.text');

english.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    text.textContent = 'A JOURNEY TROUGH THE LIFE OF A WEB DEVELOPER'
})

portuguese.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    text.textContent = 'A JORNADA PELA VIDA DE UM PROGRAMADOR WEB';
})