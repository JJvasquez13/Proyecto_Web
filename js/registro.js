const form = document.getElementById("registro-form");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", function (event) {
  const username = document.getElementById("username").value;
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;
  const confirmar = document.getElementById("confirmar").value;

  // Validación de nombre de usuario
  const firstLetter = username.charAt(0);
  if (firstLetter !== firstLetter.toUpperCase()) {
    event.preventDefault();
    errorMsg.textContent = "El nombre de usuario debe comenzar con mayúscula";
    return;
  }

  // Validación de correo
  else if (!correo.includes("@") || !correo.includes(".com")) {
    event.preventDefault();
    errorMsg.textContent = "El correo debe contener @ y .com";
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

  // Validación de confirmar contraseña
  if (contrasena !== confirmar) {
    event.preventDefault();
    errorMsg.textContent = "Las contraseñas no coinciden";
    return;
  }

  return (window.location.href = "login.html");
});
