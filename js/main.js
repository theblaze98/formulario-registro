const formulario = document.getElementById('formulario');
const inputs = formulario.querySelectorAll('input');
const radios = formulario.querySelectorAll('.radio');
const checkbox = formulario.querySelector('.checkbox');

formulario.addEventListener('submit', (e) => {
    let resultado = true;
    e.preventDefault();
    inputs.forEach(input => {
        if (input.type === 'text' || input.type === 'email' || input.type === 'password') {
            if (input.value === '') {
                input.parentElement.classList.add('error');
                resultado = false;
            }
        }
    });

    const pass1 = document.getElementById('pass');
    const pass2 = document.getElementById('pass2');

    if (pass1.value !== pass2.value) {
        resultado = false;
        console.log('Las contraseñas no coinciden');
        pass2.parentElement.classList.add('error');
        pass2.nextElementSibling.innerHTML = `<i class="fas fa-times"></i> La confirmacion no coincide con la contraseña ingresada`;
    }

    const opciones = document.getElementsByName('genero');

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opciones[0].parentElement.classList.remove('error');
            break;
        } else {
            opciones[0].parentElement.classList.add('error');
        }
    }

    const terminos = document.getElementById('terminos');

    if (terminos.checked === false) {
        terminos.parentElement.classList.add('error');
    }

    resultado === false ? e.preventDefault() : console.log('Registro');
});

inputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        if (e.target.id === 'pass2') {
            e.target.nextElementSibling.innerHTML = `<i class="fas fa-times"></i> Debe confirmar la contraseña`;
        }
        if (e.target.parentElement.className.includes('error')) {
            e.target.parentElement.classList.remove('error');
        }
        e.target.parentElement.classList.add('active');
    });
    input.addEventListener('blur', (e) => {
        if (e.target.value === '') {
            e.target.parentElement.classList.remove('active');
            e.target.parentElement.classList.add('error');
        }
    });
});

radios.forEach(radio => {
    radio.addEventListener('click', (e) => {
        if (radio.parentElement.className.includes('error')) {
            radio.parentElement.classList.remove('error');
        }
    });
});

checkbox.addEventListener('click', (e) => {
    if (checkbox.parentElement.className.includes('error')) {
        checkbox.parentElement.classList.remove('error');
    }
});