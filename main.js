// ══════════════════════════════════════════
// main.js — Brendelcraft
// ══════════════════════════════════════════

// ── Navegación entre páginas ──────────────────────
function mostrarPagina(nombre) {
  // Oculta todas las secciones
  document.querySelectorAll('main > section').forEach(s => s.style.display = 'none');
  // Muestra la elegida
  document.getElementById('pagina-' + nombre).style.display = 'block';
  // Marca el enlace activo en el nav
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('activo'));
  document.getElementById('nav-' + nombre).classList.add('activo');
}

// ── Filtro en la página de Obras ─────────────────
function filtrar(categoria, boton) {
  // Marca el botón activo
  document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('activo'));
  boton.classList.add('activo');
  // Muestra u oculta entradas según la categoría
  document.querySelectorAll('#pagina-obras .entrada').forEach(function(entrada) {
    if (categoria === 'todos' || entrada.dataset.cat === categoria) {
      entrada.classList.remove('oculta');
    } else {
      entrada.classList.add('oculta');
    }
  });
}

// Muestra la página de inicio al cargar
const pagina = window.location.hash.replace('#', '') || 'inicio';
mostrarPagina(pagina);
