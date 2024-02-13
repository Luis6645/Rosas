onload = () => {
  document.body.classList.remove("container");
};

function toggleMessage() {
  var message = document.getElementById("message");
  var button = document.getElementById("idbutton");
  if (message.style.display === "none" || message.style.display === "") {
    message.style.display = "block"; // Mostrar el mensaje
    button.style.display = "none"; // Ocultar el boton
  } else {
    message.style.display = "none"; // Ocultar el mensaje
    button.style.display = "block"; // Mostrar el boton
  }
}

// Función para cerrar el mensaje
function closeMessage() {
  var message = document.getElementById("message");
  var button = document.getElementById("idbutton");
  message.style.display = "none"; // Ocultar el mensaje
  button.style.display = "block"; // Mostrar el boton
}