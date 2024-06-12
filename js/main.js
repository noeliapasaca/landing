/*-------*/
let loaded = (eventLoaded) => {

  /* Primera parte alerta */
  window.alert("landing page loaded");
  console.log(eventLoaded);
  debugger;

  /* Segunda parte - document API */
  let myform = document.getElementById('formu');
  debugger
  //actua como hanlder del evento submit
  myform.addEventListener('submit', (eventSubmit) => {

    eventSubmit.preventDefault();
    // Elementos
    var elemento1 = document.getElementById('nombre')
    var elemento2 = document.getElementById('email')
    var elemento3 = document.getElementById('select')


    var nombre = elemento1.value.trim();
    var email = elemento2.value.trim();
    var select = elemento3.value.trim();

    if (nombre.length == 0) {
      elemento1.focus();
      alert('Por favor, ingrese un nombre.');
      return;
    }
    if (email.length === 0) {
      elemento2.focus();
      alert('Por favor, ingrese su correo electrónico.');
      return;
    }
    if (select.length === 0) {
      elemento3.focus();
      alert('Por favor, ingrese la opcion deseada.');
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Muestra un mensaje de alerta con la validación de correo electrónico
      elemento2.focus();
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    alert('Formulario válido. Procediendo con el envío...');

    const datos = {
      nombre: nombre,
      email: email,
      select: select
    };

    fetch("https://prueba-a229e-default-rtdb.firebaseio.com/collection.json",
      {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: { 'Content-Type': 'application/json' }
      }
      /* con el then recibo la respuesta del fetch y con esa respuesta hago mi logica para mostrarla */
    ).then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
      }).catch((error) => {
        console.error(error);
      })

    debugger;
  })

}

window.addEventListener("DOMContentLoaded", loaded);

async function obtenerDatos() {
  const url = "https://prueba-a229e-default-rtdb.firebaseio.com/collection.json"; // Reemplaza con la URL real de la API o recurso
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    console.error("Error:", respuesta.status);
    return;
  }
  const datos = await respuesta.json();
  console.log(datos); // Procesar o mostrar los datos obtenidos

  


}

obtenerDatos();
