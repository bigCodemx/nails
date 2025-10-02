// script.js - Interacciones y validaciones para la web de uñas acrílicas

// Scroll to Top
const scrollBtn = document.createElement('a');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-top-btn btn btn-light';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.width = '48px';
scrollBtn.style.height = '48px';
scrollBtn.style.fontSize = '1.5rem';
scrollBtn.style.backgroundColor = '#a678b4';
scrollBtn.style.color = 'white';
scrollBtn.style.border = 'none';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validación básica del formulario de contacto
function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');
    let valido = true;
    let errores = [];

    if (!nombre.value.trim()) {
        valido = false;
        errores.push('El nombre es obligatorio.');
    }
    if (!correo.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo.value)) {
        valido = false;
        errores.push('Correo electrónico inválido.');
    }
    if (!mensaje.value.trim()) {
        valido = false;
        errores.push('El mensaje es obligatorio.');
    }

    const alerta = document.getElementById('form-alerta');
    if (!valido) {
        alerta.innerHTML = errores.join('<br>');
        alerta.style.display = 'block';
    } else {
        alerta.style.display = 'none';
    }
    return valido;
}

const form = document.getElementById('contacto-form');
if (form) {
    form.addEventListener('submit', function(e) {
        if (!validarFormulario()) {
            e.preventDefault();
        }
    });
}
// Ampliar imagen en portafolio

// Galería ampliada con navegación
let imagenesPortafolio = [];
let indiceActual = 0;

document.addEventListener('DOMContentLoaded', function() {
    imagenesPortafolio = Array.from(document.querySelectorAll('.portafolio-img'));
    // Flechas
    const flechaIzq = document.getElementById('flechaIzq');
    const flechaDer = document.getElementById('flechaDer');
    if (flechaIzq && flechaDer) {
        flechaIzq.addEventListener('click', mostrarAnterior);
        flechaDer.addEventListener('click', mostrarSiguiente);
    }

    // Efecto hover en imágenes del portafolio
    const portfolioImages = document.querySelectorAll('.portafolio-img');
    if (portfolioImages.length > 0) {
        portfolioImages.forEach(img => {
            const parentCol = img.parentElement;
            parentCol.style.overflow = 'hidden';
            parentCol.style.borderRadius = '0.25rem';
        });
    }
});

function ampliarImagen(img) {
    imagenesPortafolio = Array.from(document.querySelectorAll('.portafolio-img'));
    indiceActual = imagenesPortafolio.findIndex(i => i.src === img.src);
    mostrarImagenModal(indiceActual);
    var modal = document.getElementById('modalImagen');
    var modalBootstrap = new bootstrap.Modal(modal);
    modalBootstrap.show();
}

function mostrarImagenModal(indice) {
    var imgAmpliada = document.getElementById('imgAmpliada');
    if (imagenesPortafolio[indice]) {
        imgAmpliada.src = imagenesPortafolio[indice].src;
    }
}

function mostrarAnterior() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarImagenModal(indiceActual);
    }
}

function mostrarSiguiente() {
    if (indiceActual < imagenesPortafolio.length - 1) {
        indiceActual++;
        mostrarImagenModal(indiceActual);
    }
}