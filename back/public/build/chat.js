"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chat"],{

/***/ "./assets/js/chat.js":
/*!***************************!*\
  !*** ./assets/js/chat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _joeattardi_emoji_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joeattardi/emoji-button */ "./node_modules/@joeattardi/emoji-button/dist/index.js");


document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('chat-input');
  var btnSend = document.getElementById('btn-send');
  var messagesContainer = document.getElementById('chat-messages');
  var emojiTrigger = document.getElementById('emoji-trigger');

  // Inicializar Emoji Picker
  var picker = new _joeattardi_emoji_button__WEBPACK_IMPORTED_MODULE_1__.EmojiButton({
    position: 'top-start',
    theme: 'auto',
    autoHide: false
  });
  picker.on('emoji', function (selection) {
    // Insertar emoji en la posición del cursor o al final
    var start = input.selectionStart;
    var end = input.selectionEnd;
    var text = input.value;
    var before = text.substring(0, start);
    var after = text.substring(end, text.length);
    input.value = before + selection.emoji + after;

    // Mover cursor después del emoji
    input.selectionStart = input.selectionEnd = start + selection.emoji.length;
    input.focus();
  });
  emojiTrigger.addEventListener('click', function () {
    picker.togglePicker(emojiTrigger);
  });

  // Función para agregar mensaje
  function addMessage(text) {
    var isUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var msgWrapper = document.createElement('div');
    msgWrapper.className = "d-flex mb-3 ".concat(isUser ? 'justify-content-end' : 'justify-content-start');
    var msgBubble = document.createElement('div');
    msgBubble.className = "p-3 rounded-3 fs-5 ".concat(isUser ? 'bg-primary text-white' : 'bg-secondary text-white');
    msgBubble.style.maxWidth = '75%';
    msgBubble.textContent = text;
    msgWrapper.appendChild(msgBubble);
    messagesContainer.appendChild(msgWrapper);

    // Auto-scroll al final
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  function handleSend() {
    var text = input.value.trim();
    if (text) {
      addMessage(text, true);
      input.value = '';
      input.focus();
    }
  }
  btnSend.addEventListener('click', handleSend);
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_joeattardi_emoji-button_dist_index_js-node_modules_core-js_modules_es_st-5dddc3"], () => (__webpack_exec__("./assets/js/chat.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBRTtNQUNOUyxVQUFVLENBQUNULElBQUksRUFBRSxJQUFJLENBQUM7TUFDdEJmLEtBQUssQ0FBQ2dCLEtBQUssR0FBRyxFQUFFO01BQ2hCaEIsS0FBSyxDQUFDc0IsS0FBSyxDQUFDLENBQUM7SUFDakI7RUFDSjtFQUVBcEIsT0FBTyxDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV3QyxVQUFVLENBQUM7RUFFN0N2QyxLQUFLLENBQUNELGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFVMEMsQ0FBQyxFQUFFO0lBQzVDLElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLE9BQU8sRUFBRTtNQUNuQkgsVUFBVSxDQUFDLENBQUM7SUFDaEI7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNuRVc7QUFDYixjQUFjLG1CQUFPLENBQUMseUVBQXNCOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1vamlCdXR0b24gfSBmcm9tICdAam9lYXR0YXJkaS9lbW9qaS1idXR0b24nO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtaW5wdXQnKTtcclxuICAgIGNvbnN0IGJ0blNlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNlbmQnKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtbWVzc2FnZXMnKTtcclxuICAgIGNvbnN0IGVtb2ppVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbW9qaS10cmlnZ2VyJyk7XHJcblxyXG4gICAgLy8gSW5pY2lhbGl6YXIgRW1vamkgUGlja2VyXHJcbiAgICBjb25zdCBwaWNrZXIgPSBuZXcgRW1vamlCdXR0b24oe1xyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLXN0YXJ0JyxcclxuICAgICAgICB0aGVtZTogJ2F1dG8nLFxyXG4gICAgICAgIGF1dG9IaWRlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGlja2VyLm9uKCdlbW9qaScsIHNlbGVjdGlvbiA9PiB7XHJcbiAgICAgICAgLy8gSW5zZXJ0YXIgZW1vamkgZW4gbGEgcG9zaWNpw7NuIGRlbCBjdXJzb3IgbyBhbCBmaW5hbFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgY29uc3QgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBiZWZvcmUgPSB0ZXh0LnN1YnN0cmluZygwLCBzdGFydCk7XHJcbiAgICAgICAgY29uc3QgYWZ0ZXIgPSB0ZXh0LnN1YnN0cmluZyhlbmQsIHRleHQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBiZWZvcmUgKyBzZWxlY3Rpb24uZW1vamkgKyBhZnRlcjtcclxuXHJcbiAgICAgICAgLy8gTW92ZXIgY3Vyc29yIGRlc3B1w6lzIGRlbCBlbW9qaVxyXG4gICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uRW5kID0gc3RhcnQgKyBzZWxlY3Rpb24uZW1vamkubGVuZ3RoO1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbW9qaVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGlja2VyLnRvZ2dsZVBpY2tlcihlbW9qaVRyaWdnZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRnVuY2nDs24gcGFyYSBhZ3JlZ2FyIG1lbnNhamVcclxuICAgIGZ1bmN0aW9uIGFkZE1lc3NhZ2UodGV4dCwgaXNVc2VyID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG1zZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtc2dXcmFwcGVyLmNsYXNzTmFtZSA9IGBkLWZsZXggbWItMyAke2lzVXNlciA/ICdqdXN0aWZ5LWNvbnRlbnQtZW5kJyA6ICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IG1zZ0J1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1zZ0J1YmJsZS5jbGFzc05hbWUgPSBgcC0zIHJvdW5kZWQtMyBmcy01ICR7aXNVc2VyID8gJ2JnLXByaW1hcnkgdGV4dC13aGl0ZScgOiAnYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUnfWA7XHJcbiAgICAgICAgbXNnQnViYmxlLnN0eWxlLm1heFdpZHRoID0gJzc1JSc7XHJcbiAgICAgICAgbXNnQnViYmxlLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICAgICAgbXNnV3JhcHBlci5hcHBlbmRDaGlsZChtc2dCdWJibGUpO1xyXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1zZ1dyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBBdXRvLXNjcm9sbCBhbCBmaW5hbFxyXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZW5kKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgYWRkTWVzc2FnZSh0ZXh0LCB0cnVlKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnRuU2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlbmQpO1xyXG5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlU2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiJdLCJuYW1lcyI6WyJFbW9qaUJ1dHRvbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlucHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5TZW5kIiwibWVzc2FnZXNDb250YWluZXIiLCJlbW9qaVRyaWdnZXIiLCJwaWNrZXIiLCJwb3NpdGlvbiIsInRoZW1lIiwiYXV0b0hpZGUiLCJvbiIsInNlbGVjdGlvbiIsInN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJlbmQiLCJzZWxlY3Rpb25FbmQiLCJ0ZXh0IiwidmFsdWUiLCJiZWZvcmUiLCJzdWJzdHJpbmciLCJhZnRlciIsImxlbmd0aCIsImVtb2ppIiwiZm9jdXMiLCJ0b2dnbGVQaWNrZXIiLCJhZGRNZXNzYWdlIiwiaXNVc2VyIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwibXNnV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJtc2dCdWJibGUiLCJzdHlsZSIsIm1heFdpZHRoIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImhhbmRsZVNlbmQiLCJ0cmltIiwiZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=