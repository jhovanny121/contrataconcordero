function mostrarMensaje() {
    alert("¡Bienvenido a mi página web!");
}

function mostrarInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.style.display = 'block';
}

function ocultarInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert("¡Gracias por contactarme! Pronto me comunicaré contigo.");
    this.reset();
});


