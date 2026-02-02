(self["webpackChunk"] = self["webpackChunk"] || []).push([["qrCode"],{

/***/ "./assets/js/qrCode.js":
/*!*****************************!*\
  !*** ./assets/js/qrCode.js ***!
  \*****************************/
/***/ (() => {

var mostrarLink = document.getElementById('mostrarQr');
var ocultarLink = document.getElementById('ocultarQr');
var descripcionHidden = document.querySelector('.qr-hidden');
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/qrCode.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJDb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDeEQsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDeEQsSUFBTUUsaUJBQWlCLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFlBQVksQ0FBQztBQUU5REwsV0FBVyxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0VBQ3JEQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRXRCLElBQUlKLGlCQUFpQixDQUFDSyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtJQUN0RE4saUJBQWlCLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNoRFgsV0FBVyxDQUFDWSxXQUFXLEdBQUcsZ0JBQWdCO0lBQzFDVCxXQUFXLENBQUNNLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNyQyxDQUFDLE1BQU07SUFDTFQsaUJBQWlCLENBQUNLLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFlBQVksQ0FBQztJQUM3Q2IsV0FBVyxDQUFDWSxXQUFXLEdBQUcsZ0JBQWdCO0lBQzFDVCxXQUFXLENBQUNNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFDMUM7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXJDb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vc3RyYXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vc3RyYXJRcicpO1xyXG5jb25zdCBvY3VsdGFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvY3VsdGFyUXInKTtcclxuY29uc3QgZGVzY3JpcGNpb25IaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXItaGlkZGVuJyk7XHJcblxyXG5tb3N0cmFyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3FyLXZpc2libGUnKSkge1xyXG4gICAgZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LnJlbW92ZSgncXItdmlzaWJsZScpO1xyXG4gICAgbW9zdHJhckxpbmsudGV4dENvbnRlbnQgPSAnTW9zdHJhciBRUkNvZGUnO1xyXG4gICAgb2N1bHRhckxpbmsuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5hZGQoJ3FyLXZpc2libGUnKTtcclxuICAgIG1vc3RyYXJMaW5rLnRleHRDb250ZW50ID0gJ09jdWx0YXIgUVJDb2RlJztcclxuICAgIG9jdWx0YXJMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyAvLyBSZW1vdmVtb3MgbGEgY2xhc2UgJ2hpZGRlbicgc2kgZXN0w6EgcHJlc2VudGVcclxuICB9XHJcbn0pOyJdLCJuYW1lcyI6WyJtb3N0cmFyTGluayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvY3VsdGFyTGluayIsImRlc2NyaXBjaW9uSGlkZGVuIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=