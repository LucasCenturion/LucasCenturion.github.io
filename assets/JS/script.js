document.getElementById("toggle-icons").addEventListener("click", function() {
    const icons = document.getElementById("social-icons");
    if (icons.classList.contains("d-none")) {
        icons.classList.remove("d-none");
        icons.classList.add("animate__animated", "animate__fadeIn");
    } else {
        icons.classList.add("animate__fadeOut");
        setTimeout(() => {
            icons.classList.add("d-none");
            icons.classList.remove("animate__fadeOut");
        }, 800);
    }
});

document.getElementById("toggle-form").addEventListener("click", function() {
    const form = document.getElementById("contact-form");
    if (form.classList.contains("d-none")) {
        form.classList.remove("d-none");
        form.classList.add("animate__animated", "animate__slideInUp");
    } else {
        form.classList.add("animate__slideOutDown");
        setTimeout(() => {
            form.classList.add("d-none");
            form.classList.remove("animate__slideOutDown");
        }, 1000);
    }
});

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página
    
    const formData = new FormData(this);
    
    fetch("https://formspree.io/f/xanyqrko", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Mostrar el mensaje de confirmación
        document.getElementById("responseMessage").innerText = "¡Gracias por tu mensaje!";
        document.getElementById("responseMessage").classList.remove("d-none");
        document.getElementById("responseMessage").classList.add("animate__animated", "animate__fadeIn");

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            document.getElementById("responseMessage").classList.add("d-none");
        }, 3000);

        // Añadir animación para ocultar el formulario
        const form = document.getElementById("contact-form");
        form.classList.add("animate__slideOutDown");
        setTimeout(() => {
            form.classList.add("d-none"); // Oculta el formulario
            form.classList.remove("animate__slideOutDown"); // Quita la clase de animación
        }, 1000); // Tiempo de animación
        this.reset(); // Limpiar el formulario
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText = "Hubo un error al enviar el mensaje.";
        document.getElementById("responseMessage").classList.remove("d-none");
    });
});

function animateButton() {
    const button = document.querySelector('.btn-enviar');
    button.classList.add('animate__animated', 'animate__bounce');
    
    // Eliminar la clase después de la animación para que se pueda volver a aplicar
    button.addEventListener('animationend', () => {
        button.classList.remove('animate__animated', '');
    }, { once: true });
}
document.querySelectorAll('.project-row').forEach((row, index) => {
    if (index % 2 === 0) {
        row.classList.add('animate__fadeInLeft');
    } else {
        row.classList.add('animate__fadeInRight');
    }
});
