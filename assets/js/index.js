// Validación de formulario de login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!email || !password) {
      e.preventDefault();
      alert('Por favor, complete todos los campos.');
    }
  });
}

// Inicialización de tabla interactiva en tabla.html
if (document.getElementById('tablaProductos')) {
  if (window.simpleDatatables) {
    new simpleDatatables.DataTable('#tablaProductos');
  }
}
