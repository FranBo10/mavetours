(self["webpackChunk"] = self["webpackChunk"] || []).push([["calendario"],{

/***/ "./assets/js/calendario.js":
/*!*********************************!*\
  !*** ./assets/js/calendario.js ***!
  \*********************************/
/***/ (() => {

//* ------------ Traitement du Calendar -----------------

//   document.addEventListener("DOMContentLoaded", () => {
//     let calendarEl = document.getElementById("calendario");

//     $.ajaxSetup({
//       headers:{
//           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
//       }
//     });

//     let events = eventData.map(event => ({
//       id: event.id,
//       title: event.titulo,
//       start: event.inicio,
//       end: event.fin,
//       cantidad: event.cantidadAsistentes,
//       usuario: event.usuario
//   }));

//     let calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'multiMonthYear',
//       locale: "es",
//       timeZone: "Europe/Paris",
//       headerToolbar: {
//           start: "prev, next today",
//           center: "title",
//           end: "dayGridMonth, timeGridWeek, list",
//       },
//       buttonText: {
//           today: "Hoy",
//           month: "Mes",
//           week: "Semana",
//           list: "Día"
//       },
//       events: events,
//       selectable: true,
//       editable: true,
//       allDaySlot: false,
//       eventClick: function (start, end) {
//         $('#reservaModal').modal('toggle');

//         // Desvincular el controlador de clic previo
//         $('#guardarBtn').off('click').click(function() {
//             let title = $('#title').val();
//             let start_date = moment(start).format('YYYY-MM-DD');
//             let end_date = moment(end).format('YYYY-MM-DD');

//             let requestData = {
//                 title: title,
//                 start_date: start_date,
//                 end_date: end_date
//             };

//             console.log(requestData)

//             $.ajax({
//                 url: "{{ path('store') }}",
//                 method: "POST",
//                 dataType: "json",
//                 data: requestData,
//                 success: function(response) {
//                     $('#reservaModal').modal('hide');
//                     $('#calendario').fullCalendar('renderEvent', {
//                         title: response.title,
//                         start: response.start_date,
//                         end: response.end_date
//                     });
//                 },
//                 error: function(error) {
//                     if (error.responseJSON && error.responseJSON.errors) {
//                         for (const field in error.responseJSON.errors) {
//                             $('#' + field + 'error').html(error.responseJSON.errors[field]);
//                         }
//                     }
//                 }
//             });
//         });
//     },

//   });

//   calendar.render();
// });

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/calendario.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJpby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbGVuZGFyaW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8qIC0tLS0tLS0tLS0tLSBUcmFpdGVtZW50IGR1IENhbGVuZGFyIC0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbiAgLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhcmlvXCIpO1xyXG5cclxuICAvLyAgICAgJC5hamF4U2V0dXAoe1xyXG4gIC8vICAgICAgIGhlYWRlcnM6e1xyXG4gIC8vICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gICAgICBcclxuICAvLyAgICAgbGV0IGV2ZW50cyA9IGV2ZW50RGF0YS5tYXAoZXZlbnQgPT4gKHtcclxuICAvLyAgICAgICBpZDogZXZlbnQuaWQsXHJcbiAgLy8gICAgICAgdGl0bGU6IGV2ZW50LnRpdHVsbyxcclxuICAvLyAgICAgICBzdGFydDogZXZlbnQuaW5pY2lvLFxyXG4gIC8vICAgICAgIGVuZDogZXZlbnQuZmluLFxyXG4gIC8vICAgICAgIGNhbnRpZGFkOiBldmVudC5jYW50aWRhZEFzaXN0ZW50ZXMsXHJcbiAgLy8gICAgICAgdXN1YXJpbzogZXZlbnQudXN1YXJpb1xyXG4gIC8vICAgfSkpO1xyXG5cclxuICAvLyAgICAgbGV0IGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihjYWxlbmRhckVsLCB7XHJcbiAgLy8gICAgICAgaW5pdGlhbFZpZXc6ICdtdWx0aU1vbnRoWWVhcicsXHJcbiAgLy8gICAgICAgbG9jYWxlOiBcImVzXCIsXHJcbiAgLy8gICAgICAgdGltZVpvbmU6IFwiRXVyb3BlL1BhcmlzXCIsXHJcbiAgLy8gICAgICAgaGVhZGVyVG9vbGJhcjoge1xyXG4gIC8vICAgICAgICAgICBzdGFydDogXCJwcmV2LCBuZXh0IHRvZGF5XCIsXHJcbiAgLy8gICAgICAgICAgIGNlbnRlcjogXCJ0aXRsZVwiLFxyXG4gIC8vICAgICAgICAgICBlbmQ6IFwiZGF5R3JpZE1vbnRoLCB0aW1lR3JpZFdlZWssIGxpc3RcIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGJ1dHRvblRleHQ6IHtcclxuICAvLyAgICAgICAgICAgdG9kYXk6IFwiSG95XCIsXHJcbiAgLy8gICAgICAgICAgIG1vbnRoOiBcIk1lc1wiLFxyXG4gIC8vICAgICAgICAgICB3ZWVrOiBcIlNlbWFuYVwiLFxyXG4gIC8vICAgICAgICAgICBsaXN0OiBcIkTDrWFcIlxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgZXZlbnRzOiBldmVudHMsXHJcbiAgLy8gICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBhbGxEYXlTbG90OiBmYWxzZSxcclxuICAvLyAgICAgICBldmVudENsaWNrOiBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xyXG4gIC8vICAgICAgICAgJCgnI3Jlc2VydmFNb2RhbCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgLy8gICAgICAgICAvLyBEZXN2aW5jdWxhciBlbCBjb250cm9sYWRvciBkZSBjbGljIHByZXZpb1xyXG4gIC8vICAgICAgICAgJCgnI2d1YXJkYXJCdG4nKS5vZmYoJ2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHRpdGxlID0gJCgnI3RpdGxlJykudmFsKCk7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHN0YXJ0X2RhdGUgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gIC8vICAgICAgICAgICAgIGxldCBlbmRfZGF0ZSA9IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cclxuICAvLyAgICAgICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAvLyAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnRfZGF0ZSxcclxuICAvLyAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IGVuZF9kYXRlXHJcbiAgLy8gICAgICAgICAgICAgfTtcclxuXHJcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERhdGEpXHJcblxyXG4gIC8vICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVybDogXCJ7eyBwYXRoKCdzdG9yZScpIH19XCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAvLyAgICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAkKCcjcmVzZXJ2YU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICQoJyNjYWxlbmRhcmlvJykuZnVsbENhbGVuZGFyKCdyZW5kZXJFdmVudCcsIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHJlc3BvbnNlLnN0YXJ0X2RhdGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiByZXNwb25zZS5lbmRfZGF0ZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlSlNPTiAmJiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgZmllbGQgKyAnZXJyb3InKS5odG1sKGVycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnNbZmllbGRdKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICB9LFxyXG4gICAgICAgIFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgY2FsZW5kYXIucmVuZGVyKCk7XHJcbiAgLy8gfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9