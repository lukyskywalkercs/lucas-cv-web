// JavaScript para el portfolio de LindInformatica

// Calcular tiempo de carga
document.addEventListener('DOMContentLoaded', function() {
    const startTime = performance.now();
    
    window.addEventListener('load', function() {
        const loadTime = Math.round(performance.now() - startTime);
        const loadTimeElement = document.getElementById('loadTime');
        if (loadTimeElement) {
            loadTimeElement.textContent = loadTime.toString().padStart(4, '0');
        }
    });
});

// Contador de visitantes
function updateVisitorCount() {
    const visitorElement = document.getElementById('visitors');
    if (!visitorElement) return;

    let count = localStorage.getItem('lindin_visitorCount');
    
    if (!count) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    
    // Incrementar solo si es una nueva sesión (básico, se puede mejorar)
    if (sessionStorage.getItem('lindin_sessionVisited') !== 'true') {
        count++;
        sessionStorage.setItem('lindin_sessionVisited', 'true');
    }

    localStorage.setItem('lindin_visitorCount', count);
    visitorElement.textContent = count.toString().padStart(6, '0');
}

// Ejecutar contador al cargar
updateVisitorCount(); 