let loaded = (eventLoaded) => {

  window.alert("landing page loaded");
  console.log(eventLoaded);
  debugger;




  let loaded = (eventLoaded) => {

    let myform = document.getElementById('formu');
    myform.addEventListener('submit', (eventSubmit) => {
      debugger;
    })
  }
}
window.addEventListener("DOMContentLoaded", loaded)


document.addEventListener('DOMContentLoaded', function () {
  var formulario = document.getElementById('formu');

  formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '') {
      alert('Por favor, ingrese su nombre.');
      return;
    }

    if (email === '') {
      alert('Por favor, ingrese su correo electrónico.');
      return;
    }

    // Validar formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    alert('Formulario válido. Procediendo con el envío...');
  });



  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  const datos = {
    nombre: nombre,
    email: email,
  };

  fetch('https://prueba-a229e-default-rtdb.firebaseio.com/collection.json', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log(datos); // Imprimir la respuesta del servidor
    })
    .catch(error => console.error(error));
});