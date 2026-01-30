function mostrarAlerta() {
  alert("¡Gracias por visitar nuestro sitio!");
}

function validarFormulario() {
  let valido = true;

  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorMensaje").textContent = "";

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio";
    valido = false;
  }

  if (correo === "") {
    document.getElementById("errorCorreo").textContent = "El correo es obligatorio";
    valido = false;
  }

  if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = "El mensaje es obligatorio";
    valido = false;
  }

  return valido;
}
