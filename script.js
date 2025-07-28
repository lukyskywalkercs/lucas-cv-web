// Calcular tiempo de carga
document.addEventListener('DOMContentLoaded', function() {
    const startTime = performance.now();
    
    window.addEventListener('load', function() {
        const loadTime = Math.round(performance.now() - startTime);
        document.getElementById('loadTime').textContent = loadTime.toString().padStart(4, '0');
    });
});

// Contador de visitantes real
function updateVisitorCount() {
    const visitorElement = document.getElementById('visitors');
    let count = localStorage.getItem('visitorCount');
    
    if (!count) {
        count = 0; // Empezar desde 0
    }
    
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    visitorElement.textContent = count.toString().padStart(6, '0');
}

// Ejecutar contador al cargar
updateVisitorCount(); 