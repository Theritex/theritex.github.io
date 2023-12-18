function playSoundAndRedirect(url) {
    var sonido = document.getElementById('miSonido');
  
    // Verificar si el audio está reproduciéndose
    if (sonido.paused) {
      sonido.play();
      sonido.addEventListener('ended', function () {
        // Redirigir después de que el audio ha terminado de sonar
        window.location.href = url;
      });
    }
  }
  

function cambiarColorAleatorio() {
    var elementos = document.querySelectorAll('.typewriter');
    elementos.forEach(function (elemento) {
      var contenido = elemento.textContent;
      var nuevoContenido = '';
  
      for (var i = 0; i < contenido.length; i++) {
        // Probabilidad del 50% para cambiar el color de cada letra
        if (Math.random() < 0.5) {
          nuevoContenido += '<span class="letra-aleatoria">' + contenido[i] + '</span>';
        } else {
          nuevoContenido += contenido[i];
        }
      }
  
      elemento.innerHTML = nuevoContenido;
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var enlaces = document.querySelectorAll('a.typewriter');
  
    enlaces.forEach(function (enlace) {
      enlace.addEventListener('mouseover', function () {
        corromperEnlace(enlace);
      });
  
      enlace.addEventListener('mouseout', function () {
        restaurarEnlace(enlace);
      });
    });
  });
  
  function corromperEnlace(enlace) {
    var contenido = enlace.textContent;
    var contenidoCorrupto = '';
  
    // Agrega caracteres aleatorios y desordena las palabras
    for (var i = 0; i < contenido.length; i++) {
      // Probabilidad del 30% para agregar caracteres aleatorios
      if (Math.random() < 0.3) {
        contenidoCorrupto += obtenerCaracterAleatorio();
      }
  
      contenidoCorrupto += contenido[i];
  
      // Probabilidad del 20% para agregar espacio adicional
      if (Math.random() < 0.2) {
        contenidoCorrupto += ' ';
      }
    }
  
    enlace.innerHTML = contenidoCorrupto;
  }
  
  function obtenerCaracterAleatorio() {
    var caracteres = '!@#$%^&*()_+{}|:"<>?-=[];,./';
    return caracteres[Math.floor(Math.random() * caracteres.length)];
  }
  