document.getElementById('profitForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const costPerUnit = parseFloat(document.getElementById('costPerUnit').value);
    const pricePerUnit = parseFloat(document.getElementById('pricePerUnit').value);
    const monthlyVolume = parseFloat(document.getElementById('monthlyVolume').value);
    const fixedCosts = parseFloat(document.getElementById('fixedCosts').value);

    const margin = pricePerUnit - costPerUnit;
    const revenue = pricePerUnit * monthlyVolume;
    const grossProfit = margin * monthlyVolume;
    const netProfit = grossProfit - fixedCosts;

    const financialSummaryContent = `
        <p><strong>Margen Bruto por Unidad:</strong> €${margin.toFixed(2)}</p>
        <p><strong>Ingresos Estimados Mensuales:</strong> €${revenue.toFixed(2)}</p>
        <p><strong>Ganancia Bruta Mensual:</strong> €${grossProfit.toFixed(2)}</p>
        <p><strong>Ganancia Neta Mensual:</strong> <span class="${netProfit > 0 ? 'text-success' : 'text-danger'}">€${netProfit.toFixed(2)}</span></p>
    `;

    document.getElementById('financialSummary').innerHTML = financialSummaryContent;

    const evaluationText = document.getElementById('evaluation-text');
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = ''; // Limpiar recomendaciones anteriores

    if (netProfit > 10000) {
        evaluationText.textContent = "El producto muestra una rentabilidad muy sólida. Con un excelente margen y potencial de escalabilidad, es una oportunidad prometedora.";
        evaluationText.className = 'text-success';
        addRecommendation(recommendationsList, "Considerar expandir agresivamente el alcance comercial y los canales de distribución.");
        addRecommendation(recommendationsList, "Implementar optimizaciones de procesos y tecnología para mantener los márgenes a medida que el volumen crece.");
        addRecommendation(recommendationsList, "Explorar oportunidades para diversificar la oferta de productos que complementen este éxito.");
    } else if (netProfit > 0) {
        evaluationText.textContent = "La rentabilidad es aceptable, pero con margen significativo para optimización y mejora.";
        evaluationText.className = 'text-warning';
        addRecommendation(recommendationsList, "Negociar con proveedores para buscar reducciones en el costo por unidad sin comprometer la calidad.");
        addRecommendation(recommendationsList, "Evaluar estrategias de precios o mejorar el valor percibido del producto para aumentar el margen de ganancia.");
        addRecommendation(recommendationsList, "Realizar un análisis detallado de los costos fijos para identificar áreas de posible ahorro.");
    } else {
        evaluationText.textContent = "El producto presenta una rentabilidad negativa. Es crucial realizar ajustes importantes o reevaluar la estrategia.";
        evaluationText.className = 'text-danger';
        addRecommendation(recommendationsList, "Es imperativo reducir drásticamente los costos de producción o ajustar el precio de venta para alcanzar el punto de equilibrio.");
        addRecommendation(recommendationsList, "Investigar a fondo la demanda del mercado y la propuesta de valor de la competencia para reajustar la estrategia de marketing y ventas.");
        addRecommendation(recommendationsList, "Reconsiderar la viabilidad a largo plazo del producto si los ajustes no prometen una rentabilidad positiva.");
    }

    document.getElementById('results-section').classList.remove('hidden');
});

function addRecommendation(ulElement, text) {
    const li = document.createElement('li');
    li.textContent = text;
    ulElement.appendChild(li);
}

function copyResults() {
    const resultsSection = document.getElementById('results-section');
    let textToCopy = 'Analizador de Rentabilidad de Producto - Informe IA Simulado\n\n';

    // Título de la sección de resultados
    textToCopy += `${resultsSection.querySelector('.section-title').textContent}\n\n`;

    // Resumen Financiero
    textToCopy += `Resumen Financiero:\n${document.getElementById('financialSummary').innerText}\n\n`;

    // Evaluación de Rentabilidad
    textToCopy += `Evaluación de Rentabilidad:\n${document.getElementById('evaluation-text').textContent}\n\n`;

    // Recomendaciones Estratégicas
    textToCopy += `Recomendaciones Estratégicas:\n`;
    Array.from(document.querySelectorAll('#recommendations-list li')).forEach(li => {
        textToCopy += `- ${li.textContent}\n`;
    });

    navigator.clipboard.writeText(textToCopy.trim()).then(() => {
        alert('Informe de rentabilidad copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar: ', err);
        alert('Error al copiar el informe.');
    });
}

function resetForm() {
    document.getElementById('profitForm').reset();
    document.getElementById('results-section').classList.add('hidden');
    // Opcional: limpiar los estilos de texto de evaluación si no se ocultan con hidden
    document.getElementById('evaluation-text').className = '';
    document.getElementById('financialSummary').innerHTML = '';
} 