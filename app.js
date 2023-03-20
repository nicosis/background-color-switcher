// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(addListenerToBtn);

function addListenerToBtn(button) {
    button.addEventListener('click', (obj) => {
        body.style.backgroundColor = obj.target.id;
    });
};
