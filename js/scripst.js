// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 500);

    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Botón para ir arriba
    const btnTop = document.createElement('div');
    btnTop.className = 'btn-top';
    btnTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(btnTop);

    btnTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnTop.classList.add('show');
        } else {
            btnTop.classList.remove('show');
        }
    });

    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Obtener la posición del elemento
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const navHeight = document.querySelector('nav').offsetHeight;
                
                // Desplazarse a la posición menos la altura del menú
                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Filtrar documentos
    const btnFiltrar = document.getElementById('btn-filtrar');
    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', function() {
            const anioSeleccionado = document.getElementById('filtro-anio').value;
            
            // Seleccionar todos los documentos
            const documentos = document.querySelectorAll('.documento-card');
            
            documentos.forEach(function(doc) {
                const docAnio = doc.getAttribute('data-anio');
                
                // Mostrar u ocultar basado en el filtro
                if (anioSeleccionado === 'todos' || docAnio === anioSeleccionado) {
                    doc.style.display = 'flex';
                } else {
                    doc.style.display = 'none';
                }
            });
        });
    }

    // Añadir el preloader al HTML si no existe
    if (!document.querySelector('.preloader')) {
        const preloaderDiv = document.createElement('div');
        preloaderDiv.className = 'preloader';
        preloaderDiv.innerHTML = '<div class="loader"></div>';
        document.body.prepend(preloaderDiv);
    }

    // Añadir menú toggle al HTML si no existe
    if (!document.querySelector('.menu-toggle')) {
        const menuToggleDiv = document.createElement('div');
        menuToggleDiv.className = 'menu-toggle';
        menuToggleDiv.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('nav').prepend(menuToggleDiv);
    }

    // Añadir efectos de animación a las secciones
    const secciones = document.querySelectorAll('section');
    
    // Función para comprobar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Añadir la clase de animación cuando la sección sea visible
    function animarSecciones() {
        secciones.forEach(function(seccion) {
            if (isInViewport(seccion) && !seccion.classList.contains('animado')) {
                seccion.classList.add('animado');
            }
        });
    }

    // Ejecutar la función al cargar y al hacer scroll
    window.addEventListener('load', animarSecciones);
    window.addEventListener('scroll', animarSecciones);

    // Configurar paginación para los documentos
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const paginaActual = document.getElementById('pagina-actual');
    const totalPaginas = document.getElementById('total-paginas');

    // Actualizar estado de botones de paginación
    function actualizarEstadoPaginacion() {
        const paginaActualNum = parseInt(paginaActual.textContent);
        const totalPaginasNum = parseInt(totalPaginas.textContent);
        
        btnAnterior.disabled = paginaActualNum === 1;
        btnSiguiente.disabled = paginaActualNum === totalPaginasNum;
    }

    // Configurar eventos para los botones de paginación
    if (btnAnterior && btnSiguiente) {
        btnAnterior.addEventListener('click', function() {
            const paginaActualNum = parseInt(paginaActual.textContent);
            if (paginaActualNum > 1) {
                paginaActual.textContent = paginaActualNum - 1;
                actualizarEstadoPaginacion();
                // Aquí iría la lógica para cargar los documentos de la página anterior
            }
        });

        btnSiguiente.addEventListener('click', function() {
            const paginaActualNum = parseInt(paginaActual.textContent);
            const totalPaginasNum = parseInt(totalPaginas.textContent);
            if (paginaActualNum < totalPaginasNum) {
                paginaActual.textContent = paginaActualNum + 1;
                actualizarEstadoPaginacion();
                // Aquí iría la lógica para cargar los documentos de la página siguiente
            }
        });
    }

    // Inicializar el estado de los botones
    actualizarEstadoPaginacion();
});