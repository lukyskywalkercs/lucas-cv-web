// Render de proyectos
window.onload = () => {
  const startTime = performance.now();
  const list = document.getElementById("projectList");
  const count = document.getElementById("projectCount");

  // Asegurarse de que projects está definido (viene de projects.js)
  if (typeof projects === 'undefined') {
      console.error("projects.js no cargado o 'projects' no definido.");
      return;
  }

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-description">${project.description}</div>
      <a class="project-link" href="${project.link}" target="_blank">ver proyecto ↗</a>
    `;

    list.appendChild(card);
  });

  // contador de proyectos
  count.textContent = projects.length.toString().padStart(2, '0');

  // tiempo de carga
  const loadTime = performance.now() - startTime;
  document.getElementById("loadTime").textContent = Math.floor(loadTime);
}; 