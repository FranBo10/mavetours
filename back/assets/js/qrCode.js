const mostrarLink = document.getElementById('mostrarQr');
const ocultarLink = document.getElementById('ocultarQr');
const descripcionHidden = document.querySelector('.qr-hidden');

mostrarLink.addEventListener('click', function (event) {
  event.preventDefault();

  if (descripcionHidden.classList.contains('qr-visible')) {
    descripcionHidden.classList.remove('qr-visible');
    mostrarLink.textContent = 'Mostrar QRCode';
    ocultarLink.classList.add('hidden');
  } else {
    descripcionHidden.classList.add('qr-visible');
    mostrarLink.textContent = 'Ocultar QRCode';
    ocultarLink.classList.remove('hidden'); // Removemos la clase 'hidden' si está presente
  }
});