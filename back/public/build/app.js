(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _js_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/audio */ "./assets/js/audio.js");
/* harmony import */ var _js_audio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_audio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ "./assets/js/menu.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_menu2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/menu2 */ "./assets/js/menu2.js");
/* harmony import */ var _js_menu2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_menu2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_tour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/tour */ "./assets/js/tour.js");
/* harmony import */ var _js_tour__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_tour__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_qrCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/qrCode */ "./assets/js/qrCode.js");
/* harmony import */ var _js_qrCode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_qrCode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_avatars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/avatars */ "./assets/js/avatars.js");
/* harmony import */ var _js_avatars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_avatars__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/cookies */ "./assets/js/cookies.js");
/* harmony import */ var _js_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_paradas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/paradas */ "./assets/js/paradas.js");
/* harmony import */ var _js_paradas__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_paradas__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_valoraciones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/valoraciones */ "./assets/js/valoraciones.js");
/* harmony import */ var _js_valoraciones__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_valoraciones__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/pagination */ "./assets/js/pagination.js");
/* harmony import */ var _js_pagination__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_pagination__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _js_cuenta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/cuenta */ "./assets/js/cuenta.js");
/* harmony import */ var _js_cuenta__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_cuenta__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _js_calendario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/calendario */ "./assets/js/calendario.js");
/* harmony import */ var _js_calendario__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_calendario__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _js_chat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/chat */ "./assets/js/chat.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");

















// import './controllers/cookie-consent-controller';

// const $ = require('jquery');
// // this "modifies" the jquery module: adding behavior to it
// // the bootstrap module doesn't export/return anything
// require('bootstrap');

// // or you can include specific pieces
// // require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
app.register('hello', (__webpack_require__(/*! ./controllers/hello_controller */ "./assets/controllers/hello_controller.js")["default"]));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/controllers/hello_controller.js":
/*!************************************************!*\
  !*** ./assets/controllers/hello_controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus!';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/js/avatars.js":
/*!******************************!*\
  !*** ./assets/js/avatars.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var select = document.querySelectorAll(".select");
var options = document.querySelectorAll(".options");
var selectedImage = document.querySelectorAll(".selectedImage");
var selectAvatar = document.querySelectorAll(".selectAvatar");
var avatarInput = document.querySelectorAll('input[name="registration_form[avatar]"]');
var avatarInputCuenta = document.querySelector('input[name="user_form[avatar]"]');
var modal = document.querySelectorAll(".container"); // Modifica esto según la clase o ID de tu modal

select.forEach(function (sel) {
  sel.addEventListener("click", function () {
    sel.classList.toggle("active");
    options.forEach(function (opt) {
      opt.classList.toggle("active");
      opt.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var selectAvatars = document.querySelectorAll(".selectAvatar");
  selectAvatars.forEach(function (selectAvatar) {
    selectAvatar.addEventListener("click", function (event) {
      event.preventDefault();
      var imagePath = this.querySelector("img").src;
      var avatar = imagePath.split('/').pop().split('.')[0];
      selectedImage.forEach(function (selImg) {
        selImg.src = imagePath;
        selImg.value = avatar;
      });
      avatarInput.forEach(function (avatarInp) {
        avatarInp.value = avatar;
      });
      if (avatarInputCuenta) {
        avatarInputCuenta.value = avatar;
      }
      console.log('Avatar seleccionado:', avatar);

      // Envía el avatar seleccionado al servidor
      actualizarAvatarEnSession(avatar);
      options.forEach(function (opt) {
        opt.classList.toggle("active");
        opt.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
      select.forEach(function (sel) {
        sel.classList.toggle("active");
      });
    });
  });

  // Nueva función para enviar el avatar seleccionado al servidor
  function actualizarAvatarEnSession(avatar) {
    $.ajax({
      type: 'POST',
      url: '/actualizar-avatar-session',
      // Ajusta la URL según tu configuración
      data: {
        avatar: avatar
      },
      success: function success(response) {
        console.log('Avatar actualizado en la sesión correctamente');
      },
      error: function error(_error) {
        console.error('Error al actualizar el avatar en la sesión');
      }
    });
  }
});

/***/ }),

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

/***/ }),

/***/ "./assets/js/chat.js":
/*!***************************!*\
  !*** ./assets/js/chat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/js/cookies.js":
/*!******************************!*\
  !*** ./assets/js/cookies.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var cookieBox = document.querySelector('.wrapper');
  var buttons = document.querySelectorAll('.button');
  var connect = function connect() {
    if (!sessionStorage.getItem("cookieAccepted")) {
      cookieBox.classList.add("show");
    }
  };
  var acceptOrDecline = function acceptOrDecline() {
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        sessionStorage.setItem("cookieAccepted", "true");
        cookieBox.classList.remove("show");
        if (button.id === "aceptar") {
          document.cookie = "cookieBy=FreetourGo; max-age=" + 60 * 60 * 24 * 30;
          localStorage.setItem('cookieConsent', 'accepted');
        } else if (button.id === "declinar") {
          localStorage.setItem('cookieConsent', 'declined');
        }
      });
    });
  };
  window.addEventListener("load", function () {
    if (!localStorage.getItem('cookieConsent')) {
      connect();
      acceptOrDecline();
    } else {
      sessionStorage.setItem("cookieAccepted", "true");
    }
  });
});

/***/ }),

/***/ "./assets/js/cuenta.js":
/*!*****************************!*\
  !*** ./assets/js/cuenta.js ***!
  \*****************************/
/***/ (() => {

var footer = document.querySelector('footer');
var mainContainer = document.getElementById("main-container");
document.addEventListener("DOMContentLoaded", function () {
  var datosPersoContainer = document.querySelector(".datos_perso-container");
  var datosPersoElementos = datosPersoContainer.querySelector(".datos_perso-elementos");
  var persoFormContainer = datosPersoContainer.querySelector(".perso_form-container");
  datosPersoElementos.addEventListener("click", function () {
    persoFormContainer.classList.toggle("active");
    datosPersoElementos.classList.toggle("active");
  });
});

/***/ }),

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var navBar1 = document.querySelector("#navigation");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var menuMobile = document.querySelector(".menu-mobile");
var navBarElem = document.querySelector("nav ul li a");
var navBarUserName = document.querySelector(".logo a span");
var mobileLinks = document.querySelectorAll(".menu-mobile li");
var languageToggle = document.querySelectorAll('#navigation .language-toggle');
languageToggle.forEach(function (toggle) {
  toggle.addEventListener('click', function (event) {
    event.preventDefault();
    if (window.innerWidth < 1024) {
      var subMenu = this.nextElementSibling;
      if (subMenu) {
        if (subMenu.classList.contains('show')) {
          subMenu.classList.remove('show');
          subMenu.style.height = '0';
        } else {
          subMenu.classList.add('show');
          subMenu.style.height = subMenu.scrollHeight + 'px';
        }
      }
    }
  });
});
function updateNavBarStyles() {
  if (window.innerWidth < 750 || window.scrollY > 0) {
    navBar1.classList.add("navigation");
    navBarUserName.classList.add("logoNombre");
  }
}
menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile.classList.add("active");
  navBarUserName.classList.add("logoNombre");
  navBar1.classList.add("navigation");
  updateNavBarStyles();
});
closeBtn.addEventListener("click", function () {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile.classList.remove("active");
  if (window.innerWidth < 970) {
    navBar1.classList.add("navigation");
  } else {
    navBar1.classList.remove("navigation");
  }
  updateNavBarStyles();
});
function handleResize() {
  if (window.innerWidth >= 850) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBar1 === null || navBar1 === void 0 || navBar1.classList.remove("navigation");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  } else {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar1 === null || navBar1 === void 0 || navBar1.classList.add("navigation");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
  }
  updateNavBarStyles();
}
window.addEventListener("resize", handleResize);

// Actualiza el manejador de eventos para los enlaces en el menú móvil
mobileLinks.forEach(function (link) {
  var languageLink = link.querySelector('.language-toggle');
  if (!languageLink) {
    // Excluye el enlace de idiomas
    link.addEventListener("click", function () {
      menuMobile === null || menuMobile === void 0 || menuMobile.classList.remove("active");
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
      updateNavBarStyles();
    });
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 0 && window.scrollY < 300) {
    if (window.innerWidth >= 750) {
      navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
    } else {
      navBar1 === null || navBar1 === void 0 || navBar1.classList.add("navigation");
    }
  } else if (window.scrollY > 300) {
    if (navBar1) navBar1.style.display = "none";
  } else {
    navBar1 === null || navBar1 === void 0 || navBar1.classList.remove("navigation");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  }
  updateNavBarStyles();
});
var prevScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  var currentScrollY = window.scrollY;
  if (currentScrollY < prevScrollY) {
    if (navBar1) navBar1.style.display = "flex";
  }
  prevScrollY = currentScrollY;
});
window.dispatchEvent(new Event("scroll"));
updateNavBarStyles();

/***/ }),

/***/ "./assets/js/menu2.js":
/*!****************************!*\
  !*** ./assets/js/menu2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var navBar2 = document.querySelector("#navigation-2");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var menuMobile = document.querySelector(".menu-mobile");
var navBarElem = document.querySelector("nav ul li a");
var navBarUserName = document.querySelector(".logo a span");
var mobileLinks = document.querySelectorAll(".menu-mobile li");
var languageToggle = document.querySelectorAll('#navigation-2 .language-toggle');
languageToggle.forEach(function (toggle) {
  toggle.addEventListener('click', function (event) {
    event.preventDefault();
    if (window.innerWidth < 1024) {
      var subMenu = this.nextElementSibling;
      if (subMenu && subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
        subMenu.style.height = '0';
      } else if (subMenu) {
        subMenu.classList.add('show');
        subMenu.style.height = subMenu.scrollHeight + 'px';
      }
    }
  });
});
function updateNavBarStyles() {
  if (window.innerWidth < 750 || window.scrollY > 0) {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
  } else {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  }
}
menuBtn === null || menuBtn === void 0 || menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile === null || menuMobile === void 0 || menuMobile.classList.add("active");
  navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
  navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
  updateNavBarStyles();
});
closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener("click", function () {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile === null || menuMobile === void 0 || menuMobile.classList.remove("active");
  if (window.innerWidth < 970) {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
  } else {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
  }
  updateNavBarStyles();
});
function handleResize() {
  if (window.innerWidth >= 850) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
  } else {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
  }
  updateNavBarStyles();
}

// Ejecutar handleResize al cargar la página
window.addEventListener("resize", handleResize);

// Actualiza el manejador de eventos para los enlaces en el menú móvil
mobileLinks.forEach(function (link) {
  var languageLink = link.querySelector('.language-toggle');
  if (!languageLink) {
    // Excluye el enlace de idiomas
    link.addEventListener("click", function () {
      menuMobile === null || menuMobile === void 0 || menuMobile.classList.remove("active");
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
      updateNavBarStyles();
    });
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 0 && window.scrollY < 300) {
    if (window.innerWidth >= 750) {
      navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
    } else {
      navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
    }
  } else if (window.scrollY > 300) {
    if (navBar2) navBar2.style.display = "none";
  } else {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  }
  updateNavBarStyles();
});
var prevScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  var currentScrollY = window.scrollY;
  if (currentScrollY < prevScrollY) {
    if (navBar2) navBar2.style.display = "flex";
  }
  prevScrollY = currentScrollY;
});
window.dispatchEvent(new Event("scroll"));
updateNavBarStyles();

/***/ }),

/***/ "./assets/js/pagination.js":
/*!*********************************!*\
  !*** ./assets/js/pagination.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  attachPaginationEventListeners();
});
function attachPaginationEventListeners() {
  document.querySelectorAll('.pagination a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var url = this.getAttribute('href');
      fetch(url, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        document.getElementById('comentario-lista').innerHTML = data.content;
        history.pushState(null, '', url);
        attachPaginationEventListeners();
        document.querySelector('.btn-primary-card').scrollIntoView({
          behavior: 'smooth'
        });
      })["catch"](function (error) {
        return console.error('Error:', error);
      });
    });
  });
}

/***/ }),

/***/ "./assets/js/paradas.js":
/*!******************************!*\
  !*** ./assets/js/paradas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var containers = document.querySelectorAll('.description-container');
  var cardsContainer = document.querySelector('.cards__reservas');
  var tabletBreakpoint = 848;
  var currentExpandedCard = null;
  function updateLayout() {
    if (window.innerWidth > tabletBreakpoint) {
      cardsContainer.classList.toggle('single-column', currentExpandedCard !== null);
    }
  }
  function closeCurrentCard() {
    if (currentExpandedCard) {
      var _currentExpandedCard = currentExpandedCard,
        container = _currentExpandedCard.container,
        descriptionBlock = _currentExpandedCard.descriptionBlock,
        resumen = _currentExpandedCard.resumen,
        showLink = _currentExpandedCard.showLink,
        hideLink = _currentExpandedCard.hideLink;
      descriptionBlock.classList.remove('description-visible');
      descriptionBlock.classList.add('description-hidden');
      resumen.classList.remove('description-resumen-hidden');
      showLink.classList.remove('is-hidden');
      hideLink.classList.add('is-hidden');
      currentExpandedCard = null;
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  containers.forEach(function (container) {
    var _parentLi$previousEle, _parentLi$previousEle2;
    var showLink = container.querySelector('.show-link');
    var hideLink = container.querySelector('.hide-link');
    var parentLi = container.closest('li');
    var descriptionBlock = parentLi === null || parentLi === void 0 || (_parentLi$previousEle = parentLi.previousElementSibling) === null || _parentLi$previousEle === void 0 ? void 0 : _parentLi$previousEle.querySelector('.description-hidden');
    var resumen = parentLi === null || parentLi === void 0 || (_parentLi$previousEle2 = parentLi.previousElementSibling) === null || _parentLi$previousEle2 === void 0 ? void 0 : _parentLi$previousEle2.querySelector('.description-resumen');
    var card = container.closest('.card__reservas');
    if (!descriptionBlock || !resumen || !card) return;
    showLink.addEventListener('click', function (e) {
      e.preventDefault();
      closeCurrentCard();
      currentExpandedCard = {
        container: container,
        descriptionBlock: descriptionBlock,
        resumen: resumen,
        showLink: showLink,
        hideLink: hideLink,
        card: card
      };
      descriptionBlock.classList.add('description-visible');
      descriptionBlock.classList.remove('description-hidden');
      resumen.classList.add('description-resumen-hidden');
      showLink.classList.add('is-hidden');
      hideLink.classList.remove('is-hidden');
      updateLayout();

      // Scroll a la card al abrir
      var cardPosition = card.getBoundingClientRect().top;
      var offsetPosition = cardPosition + window.pageYOffset - 20;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
    hideLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (currentExpandedCard && currentExpandedCard.container === container) {
        closeCurrentCard();
        updateLayout();
        scrollToTop(); // Scroll al inicio al cerrar
      }
    });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth <= tabletBreakpoint) {
      cardsContainer.classList.remove('single-column');
    } else {
      updateLayout();
    }
  });
});

/***/ }),

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

/***/ }),

/***/ "./assets/js/tour.js":
/*!***************************!*\
  !*** ./assets/js/tour.js ***!
  \***************************/
/***/ (() => {

var mostrarLink = document.getElementById('mostrar-link');
var ocultarLink = document.getElementById('ocultar-link');
var descripcionHidden = document.querySelector('.descripcion-hidden');
mostrarLink.addEventListener('click', function (event) {
  event.preventDefault();
  if (descripcionHidden.classList.contains('descripcion-visible')) {
    descripcionHidden.classList.remove('descripcion-visible');
    mostrarLink.textContent = 'See full description';
    ocultarLink.classList.add('hidden');
  } else {
    descripcionHidden.classList.add('descripcion-visible');
    mostrarLink.textContent = 'Hide description';
    ocultarLink.classList.remove('hidden'); // Removemos la clase 'hidden' si está presente
  }
});

/***/ }),

/***/ "./assets/js/valoraciones.js":
/*!***********************************!*\
  !*** ./assets/js/valoraciones.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener("DOMContentLoaded", function () {
  var stars = document.querySelectorAll(".stars .la-star");
  var nota = document.querySelector("#nota");
  var _iterator = _createForOfIteratorHelper(stars),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      star = _step.value;
      star.addEventListener("mouseover", function () {
        resetStars();
        this.style.color = "gold";
        this.classList.add("las");
        this.classList.remove("lar");
        var previousStar = this.previousElementSibling;
        while (previousStar) {
          previousStar.style.color = "gold";
          previousStar.classList.add("las");
          previousStar.classList.remove("lar");
          previousStar = previousStar.previousElementSibling;
        }
      });
      star.addEventListener("mouseout", function () {
        resetStars(nota.value);
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  stars.forEach(function (star) {
    star.addEventListener("click", function () {
      var valorNota = parseInt(this.dataset.value);
      nota.value = valorNota;
      console.log(nota.value);
    });
  });
  function resetStars() {
    var nota = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var _iterator2 = _createForOfIteratorHelper(stars),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        star = _step2.value;
        if (star.dataset.value > nota) {
          star.style.color = "black";
          star.classList.add("lar");
          star.classList.remove("las");
        } else {
          star.style.color = "gold";
          star.classList.add("las");
          star.classList.remove("lar");
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  document.getElementById('submit-btn').addEventListener('click', function (event) {
    var notaValue = document.getElementById('nota').value;
    if (notaValue == 0) {
      event.preventDefault();
      var errorDiv = document.createElement('div');
      errorDiv.classList.add('alert', 'alert-danger');
      errorDiv.innerText = 'La nota no puede ser 0. Por favor, seleccione al menos una estrella.';
      document.querySelector('.valoracion').appendChild(errorDiv);
    }
  });
});

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-leaflet-map--map': class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
      constructor(context) {
          super(context);
          this.__stimulusLazyController = true;
      }
      initialize() {
          if (this.application.controllers.find((controller) => {
              return controller.identifier === this.identifier && controller.__stimulusLazyController;
          })) {
              return;
          }
          __webpack_require__.e(/*! import() */ "vendors-node_modules_symfony_ux-leaflet-map_dist_map_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-leaflet-map/dist/map_controller.js */ "./node_modules/@symfony/ux-leaflet-map/dist/map_controller.js")).then((controller) => {
              this.application.register(this.identifier, controller.default);
          });
      }
  },
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus!';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f","vendors-node_modules_core-js_internals_array-from_js-node_modules_core-js_internals_check-cor-06316a","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_joeattardi_emoji-button_dist_index_js-node_modules_core-js_modules_es_st-5dddc3","vendors-node_modules_core-js_modules_es_array_push_js-node_modules_core-js_modules_es_array_r-db9b1d","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_leaflet_dist_leaflet_-3a96a4","assets_js_audio_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEdBQUduTCxRQUFRLENBQUNtRSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzVDZ0gsUUFBUSxDQUFDdkssU0FBUyxDQUFDdUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7TUFDL0NnRyxRQUFRLENBQUNDLFNBQVMsR0FBRyxzRUFBc0U7TUFDM0ZwTCxRQUFRLENBQUNPLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ2tFLFdBQVcsQ0FBQzBHLFFBQVEsQ0FBQztJQUMvRDtFQUNKLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNURGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNoRCxpRUFBZTtBQUNmLGdEQUFnRCwwREFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBVSxzUkFBd0Q7QUFDbEU7QUFDQSxXQUFXO0FBQ1g7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QWRsQitDO0FBQUEsSUFBQWpNLFFBQUEsMEJBQUFDLFdBQUE7RUFBQUMsU0FBQSxDQUFBRixRQUFBLEVBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFHLGVBQUEsT0FBQUgsUUFBQTtJQUFBLE9BQUFJLFVBQUEsT0FBQUosUUFBQSxFQUFBSyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUc1QyxTQUFBQyxRQUFBLEVBQVU7TUFDTixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHLGlCQUFpQjtJQUNoRDtFQUFDO0VBQUEsT0FBQVgsUUFBQTtBQUFBLEVBSHdCRCwyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXZhdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FsZW5kYXJpby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VlbnRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tZW51Mi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFyYWRhcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXJDb2RlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90b3VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92YWxvcmFjaW9uZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3M/NWY0YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcclxuaW1wb3J0ICcuL2pzL2F1ZGlvJztcclxuaW1wb3J0ICcuL2pzL21lbnUnO1xyXG5pbXBvcnQgJy4vanMvbWVudTInO1xyXG5pbXBvcnQgJy4vanMvdG91cic7XHJcbmltcG9ydCAnLi9qcy9xckNvZGUnO1xyXG5pbXBvcnQgJy4vanMvYXZhdGFycyc7XHJcbmltcG9ydCAnLi9qcy9jb29raWVzJztcclxuaW1wb3J0ICcuL2pzL3BhcmFkYXMnO1xyXG5pbXBvcnQgJy4vanMvdmFsb3JhY2lvbmVzJztcclxuaW1wb3J0ICcuL2pzL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgJy4vanMvY3VlbnRhJztcclxuaW1wb3J0ICcuL2pzL2NhbGVuZGFyaW8nO1xyXG5pbXBvcnQgJy4vanMvY2hhdCc7XHJcbmltcG9ydCAnLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0ICcuL2NvbnRyb2xsZXJzL2Nvb2tpZS1jb25zZW50LWNvbnRyb2xsZXInO1xyXG5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vLyAvLyB0aGlzIFwibW9kaWZpZXNcIiB0aGUganF1ZXJ5IG1vZHVsZTogYWRkaW5nIGJlaGF2aW9yIHRvIGl0XHJcbi8vIC8vIHRoZSBib290c3RyYXAgbW9kdWxlIGRvZXNuJ3QgZXhwb3J0L3JldHVybiBhbnl0aGluZ1xyXG4vLyByZXF1aXJlKCdib290c3RyYXAnKTtcclxuXHJcbi8vIC8vIG9yIHlvdSBjYW4gaW5jbHVkZSBzcGVjaWZpYyBwaWVjZXNcclxuLy8gLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCcpO1xyXG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC9wb3BvdmVyJyk7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcbi8vIH0pOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG5hcHAucmVnaXN0ZXIoJ2hlbGxvJywgcmVxdWlyZSgnLi9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyJykuZGVmYXVsdCk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISc7XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RcIik7XHJcbmNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvbnNcIik7XHJcbmNvbnN0IHNlbGVjdGVkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGVkSW1hZ2VcIik7XHJcbmNvbnN0IHNlbGVjdEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0QXZhdGFyXCIpO1xyXG5jb25zdCBhdmF0YXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgJ2lucHV0W25hbWU9XCJyZWdpc3RyYXRpb25fZm9ybVthdmF0YXJdXCJdJ1xyXG4pO1xyXG5jb25zdCBhdmF0YXJJbnB1dEN1ZW50YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ1c2VyX2Zvcm1bYXZhdGFyXVwiXScpO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKTsgLy8gTW9kaWZpY2EgZXN0byBzZWfDum4gbGEgY2xhc2UgbyBJRCBkZSB0dSBtb2RhbFxyXG5cclxuc2VsZWN0LmZvckVhY2goZnVuY3Rpb24gKHNlbCkge1xyXG4gIHNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2VsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xyXG4gICAgICBvcHQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgb3B0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc2VsZWN0QXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0QXZhdGFyXCIpO1xyXG5cclxuICBzZWxlY3RBdmF0YXJzLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdEF2YXRhcikge1xyXG4gICAgICBzZWxlY3RBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBpbWFnZVBhdGggPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjO1xyXG4gICAgICAgICAgY29uc3QgYXZhdGFyID0gaW1hZ2VQYXRoLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKVswXTtcclxuXHJcbiAgICAgICAgICBzZWxlY3RlZEltYWdlLmZvckVhY2goZnVuY3Rpb24gKHNlbEltZykge1xyXG4gICAgICAgICAgICAgIHNlbEltZy5zcmMgPSBpbWFnZVBhdGg7XHJcbiAgICAgICAgICAgICAgc2VsSW1nLnZhbHVlID0gYXZhdGFyO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgYXZhdGFySW5wdXQuZm9yRWFjaChmdW5jdGlvbiAoYXZhdGFySW5wKSB7XHJcbiAgICAgICAgICAgICAgYXZhdGFySW5wLnZhbHVlID0gYXZhdGFyO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKGF2YXRhcklucHV0Q3VlbnRhKSB7XHJcbiAgICAgICAgICAgIGF2YXRhcklucHV0Q3VlbnRhLnZhbHVlID0gYXZhdGFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBdmF0YXIgc2VsZWNjaW9uYWRvOicsIGF2YXRhcik7XHJcblxyXG4gICAgICAgICAgLy8gRW52w61hIGVsIGF2YXRhciBzZWxlY2Npb25hZG8gYWwgc2Vydmlkb3JcclxuICAgICAgICAgIGFjdHVhbGl6YXJBdmF0YXJFblNlc3Npb24oYXZhdGFyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgICAgICAgICBvcHQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICBvcHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uIChzZWwpIHtcclxuICAgICAgICAgICAgICBzZWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gTnVldmEgZnVuY2nDs24gcGFyYSBlbnZpYXIgZWwgYXZhdGFyIHNlbGVjY2lvbmFkbyBhbCBzZXJ2aWRvclxyXG4gIGZ1bmN0aW9uIGFjdHVhbGl6YXJBdmF0YXJFblNlc3Npb24oYXZhdGFyKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9hY3R1YWxpemFyLWF2YXRhci1zZXNzaW9uJywgLy8gQWp1c3RhIGxhIFVSTCBzZWfDum4gdHUgY29uZmlndXJhY2nDs25cclxuICAgICAgZGF0YTogeyBhdmF0YXI6IGF2YXRhciB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBdmF0YXIgYWN0dWFsaXphZG8gZW4gbGEgc2VzacOzbiBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGFjdHVhbGl6YXIgZWwgYXZhdGFyIGVuIGxhIHNlc2nDs24nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbiIsIi8vKiAtLS0tLS0tLS0tLS0gVHJhaXRlbWVudCBkdSBDYWxlbmRhciAtLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAvLyAgICAgbGV0IGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyaW9cIik7XHJcblxyXG4gIC8vICAgICAkLmFqYXhTZXR1cCh7XHJcbiAgLy8gICAgICAgaGVhZGVyczp7XHJcbiAgLy8gICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpLFxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgICAgIFxyXG4gIC8vICAgICBsZXQgZXZlbnRzID0gZXZlbnREYXRhLm1hcChldmVudCA9PiAoe1xyXG4gIC8vICAgICAgIGlkOiBldmVudC5pZCxcclxuICAvLyAgICAgICB0aXRsZTogZXZlbnQudGl0dWxvLFxyXG4gIC8vICAgICAgIHN0YXJ0OiBldmVudC5pbmljaW8sXHJcbiAgLy8gICAgICAgZW5kOiBldmVudC5maW4sXHJcbiAgLy8gICAgICAgY2FudGlkYWQ6IGV2ZW50LmNhbnRpZGFkQXNpc3RlbnRlcyxcclxuICAvLyAgICAgICB1c3VhcmlvOiBldmVudC51c3VhcmlvXHJcbiAgLy8gICB9KSk7XHJcblxyXG4gIC8vICAgICBsZXQgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGNhbGVuZGFyRWwsIHtcclxuICAvLyAgICAgICBpbml0aWFsVmlldzogJ211bHRpTW9udGhZZWFyJyxcclxuICAvLyAgICAgICBsb2NhbGU6IFwiZXNcIixcclxuICAvLyAgICAgICB0aW1lWm9uZTogXCJFdXJvcGUvUGFyaXNcIixcclxuICAvLyAgICAgICBoZWFkZXJUb29sYmFyOiB7XHJcbiAgLy8gICAgICAgICAgIHN0YXJ0OiBcInByZXYsIG5leHQgdG9kYXlcIixcclxuICAvLyAgICAgICAgICAgY2VudGVyOiBcInRpdGxlXCIsXHJcbiAgLy8gICAgICAgICAgIGVuZDogXCJkYXlHcmlkTW9udGgsIHRpbWVHcmlkV2VlaywgbGlzdFwiLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgYnV0dG9uVGV4dDoge1xyXG4gIC8vICAgICAgICAgICB0b2RheTogXCJIb3lcIixcclxuICAvLyAgICAgICAgICAgbW9udGg6IFwiTWVzXCIsXHJcbiAgLy8gICAgICAgICAgIHdlZWs6IFwiU2VtYW5hXCIsXHJcbiAgLy8gICAgICAgICAgIGxpc3Q6IFwiRMOtYVwiXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBldmVudHM6IGV2ZW50cyxcclxuICAvLyAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxyXG4gIC8vICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gIC8vICAgICAgIGFsbERheVNsb3Q6IGZhbHNlLFxyXG4gIC8vICAgICAgIGV2ZW50Q2xpY2s6IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XHJcbiAgLy8gICAgICAgICAkKCcjcmVzZXJ2YU1vZGFsJykubW9kYWwoJ3RvZ2dsZScpO1xyXG5cclxuICAvLyAgICAgICAgIC8vIERlc3ZpbmN1bGFyIGVsIGNvbnRyb2xhZG9yIGRlIGNsaWMgcHJldmlvXHJcbiAgLy8gICAgICAgICAkKCcjZ3VhcmRhckJ0bicpLm9mZignY2xpY2snKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAvLyAgICAgICAgICAgICBsZXQgdGl0bGUgPSAkKCcjdGl0bGUnKS52YWwoKTtcclxuICAvLyAgICAgICAgICAgICBsZXQgc3RhcnRfZGF0ZSA9IG1vbWVudChzdGFydCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IGVuZF9kYXRlID0gbW9tZW50KGVuZCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcblxyXG4gIC8vICAgICAgICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IHtcclxuICAvLyAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gIC8vICAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiBzdGFydF9kYXRlLFxyXG4gIC8vICAgICAgICAgICAgICAgICBlbmRfZGF0ZTogZW5kX2RhdGVcclxuICAvLyAgICAgICAgICAgICB9O1xyXG5cclxuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RGF0YSlcclxuXHJcbiAgLy8gICAgICAgICAgICAgJC5hamF4KHtcclxuICAvLyAgICAgICAgICAgICAgICAgdXJsOiBcInt7IHBhdGgoJ3N0b3JlJykgfX1cIixcclxuICAvLyAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAvLyAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YSxcclxuICAvLyAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICQoJyNyZXNlcnZhTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgJCgnI2NhbGVuZGFyaW8nKS5mdWxsQ2FsZW5kYXIoJ3JlbmRlckV2ZW50Jywge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcmVzcG9uc2Uuc3RhcnRfZGF0ZSxcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHJlc3BvbnNlLmVuZF9kYXRlXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAvLyAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2VKU09OICYmIGVycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnMpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIGluIGVycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnMpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBmaWVsZCArICdlcnJvcicpLmh0bWwoZXJyb3IucmVzcG9uc2VKU09OLmVycm9yc1tmaWVsZF0pO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgIH0sXHJcbiAgICAgICAgXHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICBjYWxlbmRhci5yZW5kZXIoKTtcclxuICAvLyB9KTsiLCJpbXBvcnQgeyBFbW9qaUJ1dHRvbiB9IGZyb20gJ0Bqb2VhdHRhcmRpL2Vtb2ppLWJ1dHRvbic7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1pbnB1dCcpO1xyXG4gICAgY29uc3QgYnRuU2VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2VuZCcpO1xyXG4gICAgY29uc3QgbWVzc2FnZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1tZXNzYWdlcycpO1xyXG4gICAgY29uc3QgZW1vamlUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vtb2ppLXRyaWdnZXInKTtcclxuXHJcbiAgICAvLyBJbmljaWFsaXphciBFbW9qaSBQaWNrZXJcclxuICAgIGNvbnN0IHBpY2tlciA9IG5ldyBFbW9qaUJ1dHRvbih7XHJcbiAgICAgICAgcG9zaXRpb246ICd0b3Atc3RhcnQnLFxyXG4gICAgICAgIHRoZW1lOiAnYXV0bycsXHJcbiAgICAgICAgYXV0b0hpZGU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwaWNrZXIub24oJ2Vtb2ppJywgc2VsZWN0aW9uID0+IHtcclxuICAgICAgICAvLyBJbnNlcnRhciBlbW9qaSBlbiBsYSBwb3NpY2nDs24gZGVsIGN1cnNvciBvIGFsIGZpbmFsXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICBjb25zdCBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGJlZm9yZSA9IHRleHQuc3Vic3RyaW5nKDAsIHN0YXJ0KTtcclxuICAgICAgICBjb25zdCBhZnRlciA9IHRleHQuc3Vic3RyaW5nKGVuZCwgdGV4dC5sZW5ndGgpO1xyXG5cclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGJlZm9yZSArIHNlbGVjdGlvbi5lbW9qaSArIGFmdGVyO1xyXG5cclxuICAgICAgICAvLyBNb3ZlciBjdXJzb3IgZGVzcHXDqXMgZGVsIGVtb2ppXHJcbiAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25FbmQgPSBzdGFydCArIHNlbGVjdGlvbi5lbW9qaS5sZW5ndGg7XHJcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVtb2ppVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwaWNrZXIudG9nZ2xlUGlja2VyKGVtb2ppVHJpZ2dlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGdW5jacOzbiBwYXJhIGFncmVnYXIgbWVuc2FqZVxyXG4gICAgZnVuY3Rpb24gYWRkTWVzc2FnZSh0ZXh0LCBpc1VzZXIgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbXNnV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1zZ1dyYXBwZXIuY2xhc3NOYW1lID0gYGQtZmxleCBtYi0zICR7aXNVc2VyID8gJ2p1c3RpZnktY29udGVudC1lbmQnIDogJ2p1c3RpZnktY29udGVudC1zdGFydCd9YDtcclxuXHJcbiAgICAgICAgY29uc3QgbXNnQnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbXNnQnViYmxlLmNsYXNzTmFtZSA9IGBwLTMgcm91bmRlZC0zIGZzLTUgJHtpc1VzZXIgPyAnYmctcHJpbWFyeSB0ZXh0LXdoaXRlJyA6ICdiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSd9YDtcclxuICAgICAgICBtc2dCdWJibGUuc3R5bGUubWF4V2lkdGggPSAnNzUlJztcclxuICAgICAgICBtc2dCdWJibGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgICAgICBtc2dXcmFwcGVyLmFwcGVuZENoaWxkKG1zZ0J1YmJsZSk7XHJcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobXNnV3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIEF1dG8tc2Nyb2xsIGFsIGZpbmFsXHJcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuc2Nyb2xsVG9wID0gbWVzc2FnZXNDb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbmQoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICBhZGRNZXNzYWdlKHRleHQsIHRydWUpO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidG5TZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VuZCk7XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBoYW5kbGVTZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgY29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiKSkge1xyXG4gICAgICAgICAgICBjb29raWVCb3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhY2NlcHRPckRlY2xpbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZUFjY2VwdGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBcImFjZXB0YXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llQnk9RnJlZXRvdXJHbzsgbWF4LWFnZT1cIiArIDYwICogNjAgKiAyNCAqIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVDb25zZW50JywgJ2FjY2VwdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5pZCA9PT0gXCJkZWNsaW5hclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZUNvbnNlbnQnLCAnZGVjbGluZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29va2llQ29uc2VudCcpKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3QoKTtcclxuICAgICAgICAgICAgYWNjZXB0T3JEZWNsaW5lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZUFjY2VwdGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIiwiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGRhdG9zUGVyc29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdG9zX3BlcnNvLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBkYXRvc1BlcnNvRWxlbWVudG9zID0gZGF0b3NQZXJzb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhdG9zX3BlcnNvLWVsZW1lbnRvc1wiKTtcclxuICBjb25zdCBwZXJzb0Zvcm1Db250YWluZXIgPSBkYXRvc1BlcnNvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucGVyc29fZm9ybS1jb250YWluZXJcIik7XHJcblxyXG4gIGRhdG9zUGVyc29FbGVtZW50b3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGVyc29Gb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7ICAgICAgXHJcbiAgICAgIGRhdG9zUGVyc29FbGVtZW50b3MuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufSk7IiwiY29uc3QgbmF2QmFyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvblwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbmNvbnN0IG1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbW9iaWxlXCIpO1xyXG5jb25zdCBuYXZCYXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiB1bCBsaSBhXCIpO1xyXG5jb25zdCBuYXZCYXJVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nbyBhIHNwYW5cIik7XHJcbmNvbnN0IG1vYmlsZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LW1vYmlsZSBsaVwiKTtcclxuXHJcbmNvbnN0IGxhbmd1YWdlVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25hdmlnYXRpb24gLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG5cclxubGFuZ3VhZ2VUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xyXG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xyXG4gICAgICBjb25zdCBzdWJNZW51ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIGlmIChzdWJNZW51KSB7XHJcbiAgICAgICAgaWYgKHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSBzdWJNZW51LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2QmFyU3R5bGVzKCkge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MCB8fCB3aW5kb3cuc2Nyb2xsWSA+IDApIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICB9IFxyXG59XHJcblxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgbWVudU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAgXHJcbiAgbmF2QmFyVXNlck5hbWUuY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgbmF2QmFyMS5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk3MCkge1xyXG4gICAgbmF2QmFyMS5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvblwiKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gODUwKSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjE/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIxPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICB9XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4vLyBBY3R1YWxpemEgZWwgbWFuZWphZG9yIGRlIGV2ZW50b3MgcGFyYSBsb3MgZW5sYWNlcyBlbiBlbCBtZW7DuiBtw7N2aWxcclxubW9iaWxlTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gIGNvbnN0IGxhbmd1YWdlTGluayA9IGxpbmsucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG4gIGlmICghbGFuZ3VhZ2VMaW5rKSB7IC8vIEV4Y2x1eWUgZWwgZW5sYWNlIGRlIGlkaW9tYXNcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbWVudU1vYmlsZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBpZiAod2luZG93LnNjcm9sbFkgPiAwICYmIHdpbmRvdy5zY3JvbGxZIDwgMzAwKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzUwKSB7XHJcbiAgICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdkJhcjE/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPiAzMDApIHtcclxuICAgIGlmIChuYXZCYXIxKSBuYXZCYXIxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMT8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb25cIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LnJlbW92ZShcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5sZXQgcHJldlNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbFkgPCBwcmV2U2Nyb2xsWSkge1xyXG4gICAgaWYgKG5hdkJhcjEpIG5hdkJhcjEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH1cclxuXHJcbiAgcHJldlNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWTtcclxufSk7XHJcblxyXG53aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpO1xyXG5cclxudXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbiIsImNvbnN0IG5hdkJhcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb24tMlwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbmNvbnN0IG1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbW9iaWxlXCIpO1xyXG5jb25zdCBuYXZCYXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiB1bCBsaSBhXCIpO1xyXG5jb25zdCBuYXZCYXJVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nbyBhIHNwYW5cIik7XHJcbmNvbnN0IG1vYmlsZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LW1vYmlsZSBsaVwiKTtcclxuXHJcbmNvbnN0IGxhbmd1YWdlVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25hdmlnYXRpb24tMiAubGFuZ3VhZ2UtdG9nZ2xlJyk7XHJcblxyXG5sYW5ndWFnZVRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XHJcbiAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0KSB7XHJcbiAgICAgIGNvbnN0IHN1Yk1lbnUgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgaWYgKHN1Yk1lbnUgJiYgc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKHN1Yk1lbnUpIHtcclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICBzdWJNZW51LnN0eWxlLmhlaWdodCA9IHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdkJhclN0eWxlcygpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTAgfHwgd2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH1cclxufVxyXG5cclxubWVudUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBtZW51TW9iaWxlPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk3MCkge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA4NTApIHtcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn1cclxuXHJcbi8vIEVqZWN1dGFyIGhhbmRsZVJlc2l6ZSBhbCBjYXJnYXIgbGEgcMOhZ2luYVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuLy8gQWN0dWFsaXphIGVsIG1hbmVqYWRvciBkZSBldmVudG9zIHBhcmEgbG9zIGVubGFjZXMgZW4gZWwgbWVuw7ogbcOzdmlsXHJcbm1vYmlsZUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICBjb25zdCBsYW5ndWFnZUxpbmsgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZS10b2dnbGUnKTtcclxuICBpZiAoIWxhbmd1YWdlTGluaykgeyAvLyBFeGNsdXllIGVsIGVubGFjZSBkZSBpZGlvbWFzXHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IDMwMCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc1MCkge1xyXG4gICAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPiAzMDApIHtcclxuICAgIGlmIChuYXZCYXIyKSBuYXZCYXIyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxubGV0IHByZXZTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGxZIDwgcHJldlNjcm9sbFkpIHtcclxuICAgIGlmIChuYXZCYXIyKSBuYXZCYXIyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9XHJcblxyXG4gIHByZXZTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XHJcbn0pO1xyXG5cclxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKTtcclxuXHJcbnVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhdHRhY2hQYWdpbmF0aW9uRXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hQYWdpbmF0aW9uRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnaW5hdGlvbiBhJykuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21lbnRhcmlvLWxpc3RhJykuaW5uZXJIVE1MID0gZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2hQYWdpbmF0aW9uRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wcmltYXJ5LWNhcmQnKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbi1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19yZXNlcnZhcycpO1xyXG4gICAgY29uc3QgdGFibGV0QnJlYWtwb2ludCA9IDg0ODtcclxuICAgIGxldCBjdXJyZW50RXhwYW5kZWRDYXJkID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gdGFibGV0QnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaW5nbGUtY29sdW1uJywgY3VycmVudEV4cGFuZGVkQ2FyZCAhPT0gbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlQ3VycmVudENhcmQoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFeHBhbmRlZENhcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBjb250YWluZXIsIGRlc2NyaXB0aW9uQmxvY2ssIHJlc3VtZW4sIHNob3dMaW5rLCBoaWRlTGluayB9ID0gY3VycmVudEV4cGFuZGVkQ2FyZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnZGVzY3JpcHRpb24tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWhpZGRlbicpO1xyXG4gICAgICAgICAgICByZXN1bWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NyaXB0aW9uLXJlc3VtZW4taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHNob3dMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBoaWRlTGluay5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRFeHBhbmRlZENhcmQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2hvd0xpbmsgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnNob3ctbGluaycpO1xyXG4gICAgICAgIGNvbnN0IGhpZGVMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oaWRlLWxpbmsnKTtcclxuICAgICAgICBjb25zdCBwYXJlbnRMaSA9IGNvbnRhaW5lci5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQmxvY2sgPSBwYXJlbnRMaT8ucHJldmlvdXNFbGVtZW50U2libGluZz8ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWhpZGRlbicpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VtZW4gPSBwYXJlbnRMaT8ucHJldmlvdXNFbGVtZW50U2libGluZz8ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLXJlc3VtZW4nKTtcclxuICAgICAgICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNsb3Nlc3QoJy5jYXJkX19yZXNlcnZhcycpO1xyXG5cclxuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uQmxvY2sgfHwgIXJlc3VtZW4gfHwgIWNhcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgc2hvd0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjbG9zZUN1cnJlbnRDYXJkKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwYW5kZWRDYXJkID0geyBjb250YWluZXIsIGRlc2NyaXB0aW9uQmxvY2ssIHJlc3VtZW4sIHNob3dMaW5rLCBoaWRlTGluaywgY2FyZCB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25CbG9jay5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnZGVzY3JpcHRpb24taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJlc3VtZW4uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tcmVzdW1lbi1oaWRkZW4nKTtcclxuICAgICAgICAgICAgc2hvd0xpbmsuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGhpZGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTY3JvbGwgYSBsYSBjYXJkIGFsIGFicmlyXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRQb3NpdGlvbiA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IGNhcmRQb3NpdGlvbiArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDIwO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGlkZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoY3VycmVudEV4cGFuZGVkQ2FyZCAmJiBjdXJyZW50RXhwYW5kZWRDYXJkLmNvbnRhaW5lciA9PT0gY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUN1cnJlbnRDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvVG9wKCk7IC8vIFNjcm9sbCBhbCBpbmljaW8gYWwgY2VycmFyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gdGFibGV0QnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaW5nbGUtY29sdW1uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsImNvbnN0IG1vc3RyYXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vc3RyYXJRcicpO1xyXG5jb25zdCBvY3VsdGFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvY3VsdGFyUXInKTtcclxuY29uc3QgZGVzY3JpcGNpb25IaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXItaGlkZGVuJyk7XHJcblxyXG5tb3N0cmFyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3FyLXZpc2libGUnKSkge1xyXG4gICAgZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LnJlbW92ZSgncXItdmlzaWJsZScpO1xyXG4gICAgbW9zdHJhckxpbmsudGV4dENvbnRlbnQgPSAnTW9zdHJhciBRUkNvZGUnO1xyXG4gICAgb2N1bHRhckxpbmsuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5hZGQoJ3FyLXZpc2libGUnKTtcclxuICAgIG1vc3RyYXJMaW5rLnRleHRDb250ZW50ID0gJ09jdWx0YXIgUVJDb2RlJztcclxuICAgIG9jdWx0YXJMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyAvLyBSZW1vdmVtb3MgbGEgY2xhc2UgJ2hpZGRlbicgc2kgZXN0w6EgcHJlc2VudGVcclxuICB9XHJcbn0pOyIsImNvbnN0IG1vc3RyYXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vc3RyYXItbGluaycpO1xyXG5jb25zdCBvY3VsdGFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvY3VsdGFyLWxpbmsnKTtcclxuY29uc3QgZGVzY3JpcGNpb25IaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcGNpb24taGlkZGVuJyk7XHJcblxyXG5tb3N0cmFyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc2NyaXBjaW9uLXZpc2libGUnKSkge1xyXG4gICAgZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LnJlbW92ZSgnZGVzY3JpcGNpb24tdmlzaWJsZScpO1xyXG4gICAgbW9zdHJhckxpbmsudGV4dENvbnRlbnQgPSAnU2VlIGZ1bGwgZGVzY3JpcHRpb24nO1xyXG4gICAgb2N1bHRhckxpbmsuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXBjaW9uLXZpc2libGUnKTtcclxuICAgIG1vc3RyYXJMaW5rLnRleHRDb250ZW50ID0gJ0hpZGUgZGVzY3JpcHRpb24nO1xyXG4gICAgb2N1bHRhckxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IC8vIFJlbW92ZW1vcyBsYSBjbGFzZSAnaGlkZGVuJyBzaSBlc3TDoSBwcmVzZW50ZVxyXG4gIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHN0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGFycyAubGEtc3RhclwiKTtcclxuICAgIGNvbnN0IG5vdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGFcIik7XHJcblxyXG4gICAgZm9yKHN0YXIgb2Ygc3RhcnMpIHtcclxuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmVzZXRTdGFycygpO1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gXCJnb2xkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImxhc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwibGFyXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzU3RhciA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdoaWxlKHByZXZpb3VzU3Rhcikge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTdGFyLnN0eWxlLmNvbG9yID0gXCJnb2xkXCI7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1N0YXIuY2xhc3NMaXN0LmFkZChcImxhc1wiKTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU3Rhci5jbGFzc0xpc3QucmVtb3ZlKFwibGFyXCIpO1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTdGFyID0gcHJldmlvdXNTdGFyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmVzZXRTdGFycyhub3RhLnZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJzLmZvckVhY2goc3RhciA9PiB7XHJcbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc3QgdmFsb3JOb3RhID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgbm90YS52YWx1ZSA9IHZhbG9yTm90YTsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vdGEudmFsdWUpOyBcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0U3RhcnMobm90YSA9IDApIHtcclxuICAgICAgICBmb3Ioc3RhciBvZiBzdGFycykge1xyXG4gICAgICAgICAgICBpZihzdGFyLmRhdGFzZXQudmFsdWUgPiBub3RhKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFyLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKFwibGFyXCIpO1xyXG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QucmVtb3ZlKFwibGFzXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFyLnN0eWxlLmNvbG9yID0gXCJnb2xkXCI7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKFwibGFzXCIpO1xyXG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QucmVtb3ZlKFwibGFyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHZhciBub3RhVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90YScpLnZhbHVlO1xyXG4gICAgICAgIGlmIChub3RhVmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICAgICAgdmFyIGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JywgJ2FsZXJ0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICBlcnJvckRpdi5pbm5lclRleHQgPSAnTGEgbm90YSBubyBwdWVkZSBzZXIgMC4gUG9yIGZhdm9yLCBzZWxlY2Npb25lIGFsIG1lbm9zIHVuYSBlc3RyZWxsYS4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFsb3JhY2lvbicpLmFwcGVuZENoaWxkKGVycm9yRGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtbGVhZmxldC1tYXAtLW1hcCc6IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICAgdGhpcy5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbi5jb250cm9sbGVycy5maW5kKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllciAmJiBjb250cm9sbGVyLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlcjtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydCgnQHN5bWZvbnkvdXgtbGVhZmxldC1tYXAvZGlzdC9tYXBfY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5yZWdpc3Rlcih0aGlzLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIuZGVmYXVsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gIH0sXG59OyJdLCJuYW1lcyI6WyJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJyZWdpc3RlciIsIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzZWxlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcHRpb25zIiwic2VsZWN0ZWRJbWFnZSIsInNlbGVjdEF2YXRhciIsImF2YXRhcklucHV0IiwiYXZhdGFySW5wdXRDdWVudGEiLCJxdWVyeVNlbGVjdG9yIiwibW9kYWwiLCJmb3JFYWNoIiwic2VsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9wdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNlbGVjdEF2YXRhcnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2VQYXRoIiwic3JjIiwiYXZhdGFyIiwic3BsaXQiLCJwb3AiLCJzZWxJbWciLCJhdmF0YXJJbnAiLCJjb25zb2xlIiwibG9nIiwiYWN0dWFsaXphckF2YXRhckVuU2Vzc2lvbiIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsIkVtb2ppQnV0dG9uIiwiaW5wdXQiLCJnZXRFbGVtZW50QnlJZCIsImJ0blNlbmQiLCJtZXNzYWdlc0NvbnRhaW5lciIsImVtb2ppVHJpZ2dlciIsInBpY2tlciIsInBvc2l0aW9uIiwidGhlbWUiLCJhdXRvSGlkZSIsIm9uIiwic2VsZWN0aW9uIiwic3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsImVuZCIsInNlbGVjdGlvbkVuZCIsInRleHQiLCJiZWZvcmUiLCJzdWJzdHJpbmciLCJhZnRlciIsImxlbmd0aCIsImVtb2ppIiwiZm9jdXMiLCJ0b2dnbGVQaWNrZXIiLCJhZGRNZXNzYWdlIiwiaXNVc2VyIiwidW5kZWZpbmVkIiwibXNnV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJtc2dCdWJibGUiLCJzdHlsZSIsIm1heFdpZHRoIiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJoYW5kbGVTZW5kIiwidHJpbSIsImUiLCJjb29raWVCb3giLCJidXR0b25zIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkIiwiYWNjZXB0T3JEZWNsaW5lIiwiYnV0dG9uIiwic2V0SXRlbSIsInJlbW92ZSIsImlkIiwiY29va2llIiwibG9jYWxTdG9yYWdlIiwid2luZG93IiwiZm9vdGVyIiwibWFpbkNvbnRhaW5lciIsImRhdG9zUGVyc29Db250YWluZXIiLCJkYXRvc1BlcnNvRWxlbWVudG9zIiwicGVyc29Gb3JtQ29udGFpbmVyIiwibmF2QmFyMSIsIm1lbnVCdG4iLCJjbG9zZUJ0biIsIm1lbnVNb2JpbGUiLCJuYXZCYXJFbGVtIiwibmF2QmFyVXNlck5hbWUiLCJtb2JpbGVMaW5rcyIsImxhbmd1YWdlVG9nZ2xlIiwiaW5uZXJXaWR0aCIsInN1Yk1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb250YWlucyIsImhlaWdodCIsInVwZGF0ZU5hdkJhclN0eWxlcyIsInNjcm9sbFkiLCJkaXNwbGF5IiwiY29sb3IiLCJoYW5kbGVSZXNpemUiLCJsaW5rIiwibGFuZ3VhZ2VMaW5rIiwicHJldlNjcm9sbFkiLCJjdXJyZW50U2Nyb2xsWSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm5hdkJhcjIiLCJhdHRhY2hQYWdpbmF0aW9uRXZlbnRMaXN0ZW5lcnMiLCJnZXRBdHRyaWJ1dGUiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsImlubmVySFRNTCIsImNvbnRlbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY29udGFpbmVycyIsImNhcmRzQ29udGFpbmVyIiwidGFibGV0QnJlYWtwb2ludCIsImN1cnJlbnRFeHBhbmRlZENhcmQiLCJ1cGRhdGVMYXlvdXQiLCJjbG9zZUN1cnJlbnRDYXJkIiwiX2N1cnJlbnRFeHBhbmRlZENhcmQiLCJjb250YWluZXIiLCJkZXNjcmlwdGlvbkJsb2NrIiwicmVzdW1lbiIsInNob3dMaW5rIiwiaGlkZUxpbmsiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiX3BhcmVudExpJHByZXZpb3VzRWxlIiwiX3BhcmVudExpJHByZXZpb3VzRWxlMiIsInBhcmVudExpIiwiY2xvc2VzdCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjYXJkIiwiY2FyZFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2Zmc2V0UG9zaXRpb24iLCJwYWdlWU9mZnNldCIsIm1vc3RyYXJMaW5rIiwib2N1bHRhckxpbmsiLCJkZXNjcmlwY2lvbkhpZGRlbiIsInN0YXJzIiwibm90YSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJzdGFyIiwicmVzZXRTdGFycyIsInByZXZpb3VzU3RhciIsImVyciIsImYiLCJ2YWxvck5vdGEiLCJwYXJzZUludCIsImRhdGFzZXQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibm90YVZhbHVlIiwiZXJyb3JEaXYiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9