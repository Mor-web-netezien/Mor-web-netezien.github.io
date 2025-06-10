document.addEventListener('DOMContentLoaded', () => {
    const pawButtons = document.querySelectorAll('.paw-button');
    const infoDisplay = document.getElementById('info-display');
    const feedbackForm = document.getElementById('feedback-form');

    // Contenido para cada botón
    const buttonContent = {
        'info-quiénes-somos': `
            <h3>¿Quiénes somos?</h3>
            <p>En De mi cocina a tu casa contamos con un amplio menú que satisface las necesidades nutritivas de tu cuerpo, es saludable y accesible para aquellos que esperan alimentos de calidad y entragados en buenas condiciones. Promovemos:</p>
            <ul>
                <li><b>Nuestros objetivos son divulgar una alimentación saludable, principalemte en más jovenes</b></li>
                <li><b>Concientizar sobre la importancia de la hora de la comida a pesar de nuestras actividades.</b></li>
                <li><b/> Dar alternativas más sanas para rendir lo mejor posible día a día.</li>
            </ul>
            <p>¡Tu participación es crucial para un futuro más verde!</p>

        `,
        'info-horario': `
            <h3>Horario</h3>
            <p>Fomentar una alimentación saludable es fundamental para el bienestar y rendimiento de nuestros estudiantes y personal:</p>
            <ul>
                <li>Nuestros horarios son de 9:00 A.M. a 6:00 P.M.</li>
            </ul>
            <p>Una buena alimentación es la base de una mente y cuerpo sanos.</p>
        `,
        'info-redes: `
            <h3>Redes</h3>
            <p>La comunidad del Plantel 20 se une para implementar cambios significativos:</p>
            <ul>
                <li>**Por ahora, no contamos con redes sociales**.</li>
            </ul>
            <p>¡Hay muchas formas de involucrarte y hacer la diferencia!</p>
        `,
        'info-especialidades': `
            <h3>Especialidades</h3>
            <p>Nuestras especialidades son:</p>
            <ul>
                <li>**Instalación de bebederos con filtro** para reducir el uso de botellas de plástico.</li>
            </ul>
            <p>¡Anímate a compartir tus propias ideas en nuestro formulario!</p>
        `,
        'info-colación': `
            <h3>Colación</h3>
            <p>¡Nos encantaría escuchar tus ideas y comentarios sobre nuevos platillos para nuestra cocina!</p>
            <ul>
                <li>**Yogurt natural** Se agraga fruta al gusto
                <li>**Frutas con miel o algun coctel**</li>
        `
    };

    // Event listener para los botones de imagenes
    pawButtons.forEach(button => {
        button.addEventListener('click', () => {
            const infoKey = button.dataset.info;
            if (buttonContent[infoKey]) {
                infoDisplay.innerHTML = buttonContent[infoKey];
                // Desplazamiento suave hacia la sección de información
                infoDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                infoDisplay.innerHTML = '<p>No hay información disponible para este botón.</p>';
            }
        });
    });

    // Envío del formulario (solo en el lado del cliente, para demostración)
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío de formulario por defecto

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const propuesta = document.getElementById('propuesta').value;

        // En una aplicación real, enviarías estos datos a un servidor usando Fetch API o XMLHttpRequest
        console.log('Formulario Enviado:');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Propuesta/Comentario:', propuesta);

        alert('¡Gracias por tu propuesta/comentario! Lo hemos recibido.');

        feedbackForm.reset(); // Limpia el formulario
    });
});

