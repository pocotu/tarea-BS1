// Script básico para la tarea de GitHub

document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón
    const btn = document.getElementById('btn');
    
    // Agregar evento de clic al botón
    btn.addEventListener('click', function() {
        alert('¡Hola! Has hecho clic en el botón.');
        
        // Cambiar el color del título
        const titulo = document.querySelector('h1');
        titulo.style.color = getRandomColor();
    });
    
    // Función para generar un color aleatorio
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});