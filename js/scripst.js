// Efecto de desplazamiento suave para la navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación del formulario de carga de fotos
document.getElementById('photo-upload-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores de los campos
    const photo = document.getElementById('photo').value;
    const description = document.getElementById('description').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validaciones simples
    if (!photo) {
        alert('Por favor, selecciona una imagen.');
        return;
    }
    if (!description) {
        alert('Por favor, añade una descripción.');
        return;
    }
    if (!name) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    if (!email) {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor
    alert('Foto enviada con éxito. ¡Gracias por compartir!');

    // Reiniciar el formulario
    this.reset();
});

// Validación del formulario de carga de documentos
document.getElementById('documento-upload-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores de los campos
    const titulo = document.getElementById('documento-titulo').value;
    const fecha = document.getElementById('documento-fecha').value;
    const descripcion = document.getElementById('documento-descripcion').value;
    const archivo = document.getElementById('documento-archivo').value;
    const clave = document.getElementById('documento-clave').value;

    // Validaciones simples
    if (!titulo) {
        alert('Por favor, ingresa el título del documento.');
        return;
    }
    if (!fecha) {
        alert('Por favor, selecciona una fecha.');
        return;
    }
    if (!descripcion) {
        alert('Por favor, añade una descripción.');
        return;
    }
    if (!archivo) {
        alert('Por favor, selecciona un archivo PDF.');
        return;
    }
    if (!clave) {
        alert('Por favor, ingresa la clave de administrador.');
        return;
    }

    // Aquí defines la clave correcta
    const claveCorrecta = '123456'; // Cambia esto por la clave real

    // Validar la clave
    if (clave !== claveCorrecta) {
        alert('Clave incorrecta. Inténtalo de nuevo.');
        return;
    }

    // Si todo es correcto, aquí puedes agregar la lógica para enviar el formulario a tu servidor
    alert('Documento subido con éxito. ¡Gracias!');

    // Reiniciar el formulario
    this.reset();
});

// Función para mostrar las imágenes en la galería
function loadGalleryImages() {
    const gallery = document.querySelector('.galeria');
    const images = [
        'images/galeria/foto1.jpg',
        'images/galeria/foto2.jpg',
        'images/galeria/foto3.jpg',
        'images/galeria/foto4.jpg',
        'images/galeria/foto5.jpg',
        'images/galeria/foto6.jpg'
    ];

    images.forEach(image => {
        const item = document.createElement('div');
        item.classList.add('galeria-item');
        item.style.backgroundImage = `url('${image}')`;
        gallery.appendChild(item);
    });
}

// Cargar las imágenes de la galería al cargar la página
document.addEventListener('DOMContentLoaded', loadGalleryImages);