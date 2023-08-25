const form = document.getElementById("registro-form");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", function (event) {
  const username = document.getElementById("username").value;
  const contrasena = document.getElementById("contrasena").value;

  // Validación de nombre de usuario
  const firstLetter = username.charAt(0);
  if (firstLetter !== firstLetter.toUpperCase()) {
    event.preventDefault();
    errorMsg.textContent = "El nombre de usuario debe comenzar con mayúscula";
    return;
  }

  // Validación de contraseña
  if (
    !/[A-Z]/.test(contrasena) ||
    !/\d/.test(contrasena) ||
    !/[!@#$%^&*]/.test(contrasena)
  ) {
    event.preventDefault();
    errorMsg.textContent =
      "La contraseña debe tener al menos una mayúscula, un número y un caracter especial";
    return;
  }
  return (window.location.href = "index.html");
});
