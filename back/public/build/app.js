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
/* harmony import */ var _js_avatars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/avatars */ "./assets/js/avatars.js");
/* harmony import */ var _js_avatars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_avatars__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/cookies */ "./assets/js/cookies.js");
/* harmony import */ var _js_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_paradas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/paradas */ "./assets/js/paradas.js");
/* harmony import */ var _js_paradas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_paradas__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_valoraciones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/valoraciones */ "./assets/js/valoraciones.js");
/* harmony import */ var _js_valoraciones__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_valoraciones__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/pagination */ "./assets/js/pagination.js");
/* harmony import */ var _js_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_pagination__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_cuenta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/cuenta */ "./assets/js/cuenta.js");
/* harmony import */ var _js_cuenta__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_cuenta__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _js_calendario__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/calendario */ "./assets/js/calendario.js");
/* harmony import */ var _js_calendario__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_calendario__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _js_chat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/chat */ "./assets/js/chat.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
















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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUh3QkQsMkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2F2YXRhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbGVuZGFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1ZW50YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudTIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcmFkYXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZhbG9yYWNpb25lcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2Nzcz81ZjRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xyXG5pbXBvcnQgJy4vanMvYXVkaW8nO1xyXG5pbXBvcnQgJy4vanMvbWVudSc7XHJcbmltcG9ydCAnLi9qcy9tZW51Mic7XHJcbmltcG9ydCAnLi9qcy90b3VyJztcclxuaW1wb3J0ICcuL2pzL2F2YXRhcnMnO1xyXG5pbXBvcnQgJy4vanMvY29va2llcyc7XHJcbmltcG9ydCAnLi9qcy9wYXJhZGFzJztcclxuaW1wb3J0ICcuL2pzL3ZhbG9yYWNpb25lcyc7XHJcbmltcG9ydCAnLi9qcy9wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuL2pzL2N1ZW50YSc7XHJcbmltcG9ydCAnLi9qcy9jYWxlbmRhcmlvJztcclxuaW1wb3J0ICcuL2pzL2NoYXQnO1xyXG5pbXBvcnQgJy4vc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuXHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCAnLi9jb250cm9sbGVycy9jb29raWUtY29uc2VudC1jb250cm9sbGVyJztcclxuXHJcbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy8gLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxyXG4vLyAvLyB0aGUgYm9vdHN0cmFwIG1vZHVsZSBkb2Vzbid0IGV4cG9ydC9yZXR1cm4gYW55dGhpbmdcclxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcblxyXG4vLyAvLyBvciB5b3UgY2FuIGluY2x1ZGUgc3BlY2lmaWMgcGllY2VzXHJcbi8vIC8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnKTtcclxuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3ZlcicpO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG4vLyB9KTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuYXBwLnJlZ2lzdGVyKCdoZWxsbycsIHJlcXVpcmUoJy4vY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlcicpLmRlZmF1bHQpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEnO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0XCIpO1xyXG5jb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25zXCIpO1xyXG5jb25zdCBzZWxlY3RlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZEltYWdlXCIpO1xyXG5jb25zdCBzZWxlY3RBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuY29uc3QgYXZhdGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICdpbnB1dFtuYW1lPVwicmVnaXN0cmF0aW9uX2Zvcm1bYXZhdGFyXVwiXSdcclxuKTtcclxuY29uc3QgYXZhdGFySW5wdXRDdWVudGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidXNlcl9mb3JtW2F2YXRhcl1cIl0nKTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIik7IC8vIE1vZGlmaWNhIGVzdG8gc2Vnw7puIGxhIGNsYXNlIG8gSUQgZGUgdHUgbW9kYWxcclxuXHJcbnNlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uIChzZWwpIHtcclxuICBzZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG9wdC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNlbGVjdEF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuXHJcbiAgc2VsZWN0QXZhdGFycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3RBdmF0YXIpIHtcclxuICAgICAgc2VsZWN0QXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYztcclxuICAgICAgICAgIGNvbnN0IGF2YXRhciA9IGltYWdlUGF0aC5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF07XHJcblxyXG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxJbWcpIHtcclxuICAgICAgICAgICAgICBzZWxJbWcuc3JjID0gaW1hZ2VQYXRoO1xyXG4gICAgICAgICAgICAgIHNlbEltZy52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGF2YXRhcklucHV0LmZvckVhY2goZnVuY3Rpb24gKGF2YXRhcklucCkge1xyXG4gICAgICAgICAgICAgIGF2YXRhcklucC52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChhdmF0YXJJbnB1dEN1ZW50YSkge1xyXG4gICAgICAgICAgICBhdmF0YXJJbnB1dEN1ZW50YS52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIHNlbGVjY2lvbmFkbzonLCBhdmF0YXIpO1xyXG5cclxuICAgICAgICAgIC8vIEVudsOtYSBlbCBhdmF0YXIgc2VsZWNjaW9uYWRvIGFsIHNlcnZpZG9yXHJcbiAgICAgICAgICBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0KSB7XHJcbiAgICAgICAgICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgb3B0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZWxlY3QuZm9yRWFjaChmdW5jdGlvbiAoc2VsKSB7XHJcbiAgICAgICAgICAgICAgc2VsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE51ZXZhIGZ1bmNpw7NuIHBhcmEgZW52aWFyIGVsIGF2YXRhciBzZWxlY2Npb25hZG8gYWwgc2Vydmlkb3JcclxuICBmdW5jdGlvbiBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcikge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYWN0dWFsaXphci1hdmF0YXItc2Vzc2lvbicsIC8vIEFqdXN0YSBsYSBVUkwgc2Vnw7puIHR1IGNvbmZpZ3VyYWNpw7NuXHJcbiAgICAgIGRhdGE6IHsgYXZhdGFyOiBhdmF0YXIgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIGFjdHVhbGl6YWRvIGVuIGxhIHNlc2nDs24gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBhY3R1YWxpemFyIGVsIGF2YXRhciBlbiBsYSBzZXNpw7NuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4iLCIvLyogLS0tLS0tLS0tLS0tIFRyYWl0ZW1lbnQgZHUgQ2FsZW5kYXIgLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhcmlvXCIpO1xyXG5cclxuICAvLyAgICAgJC5hamF4U2V0dXAoe1xyXG4gIC8vICAgICAgIGhlYWRlcnM6e1xyXG4gIC8vICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gICAgICBcclxuICAvLyAgICAgbGV0IGV2ZW50cyA9IGV2ZW50RGF0YS5tYXAoZXZlbnQgPT4gKHtcclxuICAvLyAgICAgICBpZDogZXZlbnQuaWQsXHJcbiAgLy8gICAgICAgdGl0bGU6IGV2ZW50LnRpdHVsbyxcclxuICAvLyAgICAgICBzdGFydDogZXZlbnQuaW5pY2lvLFxyXG4gIC8vICAgICAgIGVuZDogZXZlbnQuZmluLFxyXG4gIC8vICAgICAgIGNhbnRpZGFkOiBldmVudC5jYW50aWRhZEFzaXN0ZW50ZXMsXHJcbiAgLy8gICAgICAgdXN1YXJpbzogZXZlbnQudXN1YXJpb1xyXG4gIC8vICAgfSkpO1xyXG5cclxuICAvLyAgICAgbGV0IGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihjYWxlbmRhckVsLCB7XHJcbiAgLy8gICAgICAgaW5pdGlhbFZpZXc6ICdtdWx0aU1vbnRoWWVhcicsXHJcbiAgLy8gICAgICAgbG9jYWxlOiBcImVzXCIsXHJcbiAgLy8gICAgICAgdGltZVpvbmU6IFwiRXVyb3BlL1BhcmlzXCIsXHJcbiAgLy8gICAgICAgaGVhZGVyVG9vbGJhcjoge1xyXG4gIC8vICAgICAgICAgICBzdGFydDogXCJwcmV2LCBuZXh0IHRvZGF5XCIsXHJcbiAgLy8gICAgICAgICAgIGNlbnRlcjogXCJ0aXRsZVwiLFxyXG4gIC8vICAgICAgICAgICBlbmQ6IFwiZGF5R3JpZE1vbnRoLCB0aW1lR3JpZFdlZWssIGxpc3RcIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGJ1dHRvblRleHQ6IHtcclxuICAvLyAgICAgICAgICAgdG9kYXk6IFwiSG95XCIsXHJcbiAgLy8gICAgICAgICAgIG1vbnRoOiBcIk1lc1wiLFxyXG4gIC8vICAgICAgICAgICB3ZWVrOiBcIlNlbWFuYVwiLFxyXG4gIC8vICAgICAgICAgICBsaXN0OiBcIkTDrWFcIlxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgZXZlbnRzOiBldmVudHMsXHJcbiAgLy8gICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBhbGxEYXlTbG90OiBmYWxzZSxcclxuICAvLyAgICAgICBldmVudENsaWNrOiBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xyXG4gIC8vICAgICAgICAgJCgnI3Jlc2VydmFNb2RhbCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgLy8gICAgICAgICAvLyBEZXN2aW5jdWxhciBlbCBjb250cm9sYWRvciBkZSBjbGljIHByZXZpb1xyXG4gIC8vICAgICAgICAgJCgnI2d1YXJkYXJCdG4nKS5vZmYoJ2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHRpdGxlID0gJCgnI3RpdGxlJykudmFsKCk7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHN0YXJ0X2RhdGUgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gIC8vICAgICAgICAgICAgIGxldCBlbmRfZGF0ZSA9IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cclxuICAvLyAgICAgICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAvLyAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnRfZGF0ZSxcclxuICAvLyAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IGVuZF9kYXRlXHJcbiAgLy8gICAgICAgICAgICAgfTtcclxuXHJcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERhdGEpXHJcblxyXG4gIC8vICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVybDogXCJ7eyBwYXRoKCdzdG9yZScpIH19XCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAvLyAgICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAkKCcjcmVzZXJ2YU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICQoJyNjYWxlbmRhcmlvJykuZnVsbENhbGVuZGFyKCdyZW5kZXJFdmVudCcsIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHJlc3BvbnNlLnN0YXJ0X2RhdGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiByZXNwb25zZS5lbmRfZGF0ZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlSlNPTiAmJiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgZmllbGQgKyAnZXJyb3InKS5odG1sKGVycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnNbZmllbGRdKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICB9LFxyXG4gICAgICAgIFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgY2FsZW5kYXIucmVuZGVyKCk7XHJcbiAgLy8gfSk7IiwiaW1wb3J0IHsgRW1vamlCdXR0b24gfSBmcm9tICdAam9lYXR0YXJkaS9lbW9qaS1idXR0b24nO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtaW5wdXQnKTtcclxuICAgIGNvbnN0IGJ0blNlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNlbmQnKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtbWVzc2FnZXMnKTtcclxuICAgIGNvbnN0IGVtb2ppVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbW9qaS10cmlnZ2VyJyk7XHJcblxyXG4gICAgLy8gSW5pY2lhbGl6YXIgRW1vamkgUGlja2VyXHJcbiAgICBjb25zdCBwaWNrZXIgPSBuZXcgRW1vamlCdXR0b24oe1xyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLXN0YXJ0JyxcclxuICAgICAgICB0aGVtZTogJ2F1dG8nLFxyXG4gICAgICAgIGF1dG9IaWRlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGlja2VyLm9uKCdlbW9qaScsIHNlbGVjdGlvbiA9PiB7XHJcbiAgICAgICAgLy8gSW5zZXJ0YXIgZW1vamkgZW4gbGEgcG9zaWNpw7NuIGRlbCBjdXJzb3IgbyBhbCBmaW5hbFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgY29uc3QgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBiZWZvcmUgPSB0ZXh0LnN1YnN0cmluZygwLCBzdGFydCk7XHJcbiAgICAgICAgY29uc3QgYWZ0ZXIgPSB0ZXh0LnN1YnN0cmluZyhlbmQsIHRleHQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBiZWZvcmUgKyBzZWxlY3Rpb24uZW1vamkgKyBhZnRlcjtcclxuXHJcbiAgICAgICAgLy8gTW92ZXIgY3Vyc29yIGRlc3B1w6lzIGRlbCBlbW9qaVxyXG4gICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uRW5kID0gc3RhcnQgKyBzZWxlY3Rpb24uZW1vamkubGVuZ3RoO1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbW9qaVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGlja2VyLnRvZ2dsZVBpY2tlcihlbW9qaVRyaWdnZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRnVuY2nDs24gcGFyYSBhZ3JlZ2FyIG1lbnNhamVcclxuICAgIGZ1bmN0aW9uIGFkZE1lc3NhZ2UodGV4dCwgaXNVc2VyID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG1zZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtc2dXcmFwcGVyLmNsYXNzTmFtZSA9IGBkLWZsZXggbWItMyAke2lzVXNlciA/ICdqdXN0aWZ5LWNvbnRlbnQtZW5kJyA6ICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IG1zZ0J1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1zZ0J1YmJsZS5jbGFzc05hbWUgPSBgcC0zIHJvdW5kZWQtMyBmcy01ICR7aXNVc2VyID8gJ2JnLXByaW1hcnkgdGV4dC13aGl0ZScgOiAnYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUnfWA7XHJcbiAgICAgICAgbXNnQnViYmxlLnN0eWxlLm1heFdpZHRoID0gJzc1JSc7XHJcbiAgICAgICAgbXNnQnViYmxlLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICAgICAgbXNnV3JhcHBlci5hcHBlbmRDaGlsZChtc2dCdWJibGUpO1xyXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1zZ1dyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBBdXRvLXNjcm9sbCBhbCBmaW5hbFxyXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZW5kKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgYWRkTWVzc2FnZSh0ZXh0LCB0cnVlKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnRuU2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlbmQpO1xyXG5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlU2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY29va2llQWNjZXB0ZWRcIikpIHtcclxuICAgICAgICAgICAgY29va2llQm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWNjZXB0T3JEZWNsaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBjb29raWVCb3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJhY2VwdGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZUJ5PUZyZWV0b3VyR287IG1heC1hZ2U9XCIgKyA2MCAqIDYwICogMjQgKiAzMDtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llQ29uc2VudCcsICdhY2NlcHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT09IFwiZGVjbGluYXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVDb25zZW50JywgJ2RlY2xpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZUNvbnNlbnQnKSkge1xyXG4gICAgICAgICAgICBjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGFjY2VwdE9yRGVjbGluZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkYXRvc1BlcnNvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRvc19wZXJzby1jb250YWluZXJcIik7XHJcbiAgY29uc3QgZGF0b3NQZXJzb0VsZW1lbnRvcyA9IGRhdG9zUGVyc29Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYXRvc19wZXJzby1lbGVtZW50b3NcIik7XHJcbiAgY29uc3QgcGVyc29Gb3JtQ29udGFpbmVyID0gZGF0b3NQZXJzb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBlcnNvX2Zvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuICBkYXRvc1BlcnNvRWxlbWVudG9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBlcnNvRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpOyAgICAgIFxyXG4gICAgICBkYXRvc1BlcnNvRWxlbWVudG9zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pOyIsImNvbnN0IG5hdkJhcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25cIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW1vYmlsZVwiKTtcclxuY29uc3QgbmF2QmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWwgbGkgYVwiKTtcclxuY29uc3QgbmF2QmFyVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28gYSBzcGFuXCIpO1xyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1tb2JpbGUgbGlcIik7XHJcblxyXG5jb25zdCBsYW5ndWFnZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXZpZ2F0aW9uIC5sYW5ndWFnZS10b2dnbGUnKTtcclxuXHJcbmxhbmd1YWdlVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcclxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBpZiAoc3ViTWVudSkge1xyXG4gICAgICAgIGlmIChzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdkJhclN0eWxlcygpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTAgfHwgd2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgICBuYXZCYXIxLmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWUuY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgfSBcclxufVxyXG5cclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgIFxyXG4gIG5hdkJhclVzZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NzApIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb25cIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDg1MCkge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIxPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvblwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMT8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuLy8gQWN0dWFsaXphIGVsIG1hbmVqYWRvciBkZSBldmVudG9zIHBhcmEgbG9zIGVubGFjZXMgZW4gZWwgbWVuw7ogbcOzdmlsXHJcbm1vYmlsZUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICBjb25zdCBsYW5ndWFnZUxpbmsgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZS10b2dnbGUnKTtcclxuICBpZiAoIWxhbmd1YWdlTGluaykgeyAvLyBFeGNsdXllIGVsIGVubGFjZSBkZSBpZGlvbWFzXHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IDMwMCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc1MCkge1xyXG4gICAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZCYXIxPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiAgICBpZiAobmF2QmFyMSkgbmF2QmFyMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjE/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxubGV0IHByZXZTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGxZIDwgcHJldlNjcm9sbFkpIHtcclxuICAgIGlmIChuYXZCYXIxKSBuYXZCYXIxLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9XHJcblxyXG4gIHByZXZTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XHJcbn0pO1xyXG5cclxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKTtcclxuXHJcbnVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4iLCJjb25zdCBuYXZCYXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uLTJcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW1vYmlsZVwiKTtcclxuY29uc3QgbmF2QmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWwgbGkgYVwiKTtcclxuY29uc3QgbmF2QmFyVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28gYSBzcGFuXCIpO1xyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1tb2JpbGUgbGlcIik7XHJcblxyXG5jb25zdCBsYW5ndWFnZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXZpZ2F0aW9uLTIgLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG5cclxubGFuZ3VhZ2VUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xyXG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xyXG4gICAgICBjb25zdCBzdWJNZW51ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIGlmIChzdWJNZW51ICYmIHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICBzdWJNZW51LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmIChzdWJNZW51KSB7XHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSBzdWJNZW51LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVOYXZCYXJTdHlsZXMoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzUwIHx8IHdpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbm1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICBtZW51TW9iaWxlPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbWVudU1vYmlsZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NzApIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gODUwKSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59XHJcblxyXG4vLyBFamVjdXRhciBoYW5kbGVSZXNpemUgYWwgY2FyZ2FyIGxhIHDDoWdpbmFcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbi8vIEFjdHVhbGl6YSBlbCBtYW5lamFkb3IgZGUgZXZlbnRvcyBwYXJhIGxvcyBlbmxhY2VzIGVuIGVsIG1lbsO6IG3Ds3ZpbFxyXG5tb2JpbGVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgY29uc3QgbGFuZ3VhZ2VMaW5rID0gbGluay5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UtdG9nZ2xlJyk7XHJcbiAgaWYgKCFsYW5ndWFnZUxpbmspIHsgLy8gRXhjbHV5ZSBlbCBlbmxhY2UgZGUgaWRpb21hc1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtZW51TW9iaWxlPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDAgJiYgd2luZG93LnNjcm9sbFkgPCAzMDApIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NTApIHtcclxuICAgICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiAgICBpZiAobmF2QmFyMikgbmF2QmFyMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LnJlbW92ZShcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmxldCBwcmV2U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsWSA8IHByZXZTY3JvbGxZKSB7XHJcbiAgICBpZiAobmF2QmFyMikgbmF2QmFyMi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfVxyXG5cclxuICBwcmV2U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZO1xyXG59KTtcclxuXHJcbndpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInNjcm9sbFwiKSk7XHJcblxyXG51cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgYXR0YWNoUGFnaW5hdGlvbkV2ZW50TGlzdGVuZXJzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYXR0YWNoUGFnaW5hdGlvbkV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2luYXRpb24gYScpLmZvckVhY2goZnVuY3Rpb24obGluaykge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tZW50YXJpby1saXN0YScpLmlubmVySFRNTCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoUGFnaW5hdGlvbkV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcHJpbWFyeS1jYXJkJykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fcmVzZXJ2YXMnKTtcclxuICAgIGNvbnN0IHRhYmxldEJyZWFrcG9pbnQgPSA4NDg7XHJcbiAgICBsZXQgY3VycmVudEV4cGFuZGVkQ2FyZCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IHRhYmxldEJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2luZ2xlLWNvbHVtbicsIGN1cnJlbnRFeHBhbmRlZENhcmQgIT09IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUN1cnJlbnRDYXJkKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50RXhwYW5kZWRDYXJkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyLCBkZXNjcmlwdGlvbkJsb2NrLCByZXN1bWVuLCBzaG93TGluaywgaGlkZUxpbmsgfSA9IGN1cnJlbnRFeHBhbmRlZENhcmQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NyaXB0aW9uLXZpc2libGUnKTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25CbG9jay5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1oaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVzdW1lbi5jbGFzc0xpc3QucmVtb3ZlKCdkZXNjcmlwdGlvbi1yZXN1bWVuLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBzaG93TGluay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgaGlkZUxpbmsuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwYW5kZWRDYXJkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHNob3dMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zaG93LWxpbmsnKTtcclxuICAgICAgICBjb25zdCBoaWRlTGluayA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGlkZS1saW5rJyk7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGkgPSBjb250YWluZXIuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkJsb2NrID0gcGFyZW50TGk/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1oaWRkZW4nKTtcclxuICAgICAgICBjb25zdCByZXN1bWVuID0gcGFyZW50TGk/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1yZXN1bWVuJyk7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jbG9zZXN0KCcuY2FyZF9fcmVzZXJ2YXMnKTtcclxuXHJcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbkJsb2NrIHx8ICFyZXN1bWVuIHx8ICFjYXJkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNob3dMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xvc2VDdXJyZW50Q2FyZCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudEV4cGFuZGVkQ2FyZCA9IHsgY29udGFpbmVyLCBkZXNjcmlwdGlvbkJsb2NrLCByZXN1bWVuLCBzaG93TGluaywgaGlkZUxpbmssIGNhcmQgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQmxvY2suY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NyaXB0aW9uLWhpZGRlbicpO1xyXG4gICAgICAgICAgICByZXN1bWVuLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXJlc3VtZW4taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHNob3dMaW5rLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBoaWRlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2Nyb2xsIGEgbGEgY2FyZCBhbCBhYnJpclxyXG4gICAgICAgICAgICBjb25zdCBjYXJkUG9zaXRpb24gPSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBjYXJkUG9zaXRpb24gKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAyMDtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhpZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFeHBhbmRlZENhcmQgJiYgY3VycmVudEV4cGFuZGVkQ2FyZC5jb250YWluZXIgPT09IGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VDdXJyZW50Q2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1RvcCgpOyAvLyBTY3JvbGwgYWwgaW5pY2lvIGFsIGNlcnJhclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IHRhYmxldEJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2luZ2xlLWNvbHVtbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCJjb25zdCBtb3N0cmFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3N0cmFyLWxpbmsnKTtcclxuY29uc3Qgb2N1bHRhckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2N1bHRhci1saW5rJyk7XHJcbmNvbnN0IGRlc2NyaXBjaW9uSGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXBjaW9uLWhpZGRlbicpO1xyXG5cclxubW9zdHJhckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNjcmlwY2lvbi12aXNpYmxlJykpIHtcclxuICAgIGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NyaXBjaW9uLXZpc2libGUnKTtcclxuICAgIG1vc3RyYXJMaW5rLnRleHRDb250ZW50ID0gJ1NlZSBmdWxsIGRlc2NyaXB0aW9uJztcclxuICAgIG9jdWx0YXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwY2lvbi12aXNpYmxlJyk7XHJcbiAgICBtb3N0cmFyTGluay50ZXh0Q29udGVudCA9ICdIaWRlIGRlc2NyaXB0aW9uJztcclxuICAgIG9jdWx0YXJMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyAvLyBSZW1vdmVtb3MgbGEgY2xhc2UgJ2hpZGRlbicgc2kgZXN0w6EgcHJlc2VudGVcclxuICB9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhcnMgLmxhLXN0YXJcIik7XHJcbiAgICBjb25zdCBub3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RhXCIpO1xyXG5cclxuICAgIGZvcihzdGFyIG9mIHN0YXJzKSB7XHJcbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJlc2V0U3RhcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5jb2xvciA9IFwiZ29sZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJsYXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImxhclwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1N0YXIgPSB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aGlsZShwcmV2aW91c1N0YXIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU3Rhci5zdHlsZS5jb2xvciA9IFwiZ29sZFwiO1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTdGFyLmNsYXNzTGlzdC5hZGQoXCJsYXNcIik7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1N0YXIuY2xhc3NMaXN0LnJlbW92ZShcImxhclwiKTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU3RhciA9IHByZXZpb3VzU3Rhci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJlc2V0U3RhcnMobm90YS52YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbG9yTm90YSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIG5vdGEudmFsdWUgPSB2YWxvck5vdGE7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub3RhLnZhbHVlKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFN0YXJzKG5vdGEgPSAwKSB7XHJcbiAgICAgICAgZm9yKHN0YXIgb2Ygc3RhcnMpIHtcclxuICAgICAgICAgICAgaWYoc3Rhci5kYXRhc2V0LnZhbHVlID4gbm90YSkge1xyXG4gICAgICAgICAgICAgICAgc3Rhci5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZChcImxhclwiKTtcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZShcImxhc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3Rhci5zdHlsZS5jb2xvciA9IFwiZ29sZFwiOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZChcImxhc1wiKTtcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZShcImxhclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICB2YXIgbm90YVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGEnKS52YWx1ZTtcclxuICAgICAgICBpZiAobm90YVZhbHVlID09IDApIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgICAgIHZhciBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdhbGVydCcsICdhbGVydC1kYW5nZXInKTtcclxuICAgICAgICAgICAgZXJyb3JEaXYuaW5uZXJUZXh0ID0gJ0xhIG5vdGEgbm8gcHVlZGUgc2VyIDAuIFBvciBmYXZvciwgc2VsZWNjaW9uZSBhbCBtZW5vcyB1bmEgZXN0cmVsbGEuJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbG9yYWNpb24nKS5hcHBlbmRDaGlsZChlcnJvckRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyJdLCJuYW1lcyI6WyJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJyZWdpc3RlciIsIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzZWxlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcHRpb25zIiwic2VsZWN0ZWRJbWFnZSIsInNlbGVjdEF2YXRhciIsImF2YXRhcklucHV0IiwiYXZhdGFySW5wdXRDdWVudGEiLCJxdWVyeVNlbGVjdG9yIiwibW9kYWwiLCJmb3JFYWNoIiwic2VsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9wdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNlbGVjdEF2YXRhcnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2VQYXRoIiwic3JjIiwiYXZhdGFyIiwic3BsaXQiLCJwb3AiLCJzZWxJbWciLCJhdmF0YXJJbnAiLCJjb25zb2xlIiwibG9nIiwiYWN0dWFsaXphckF2YXRhckVuU2Vzc2lvbiIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsIkVtb2ppQnV0dG9uIiwiaW5wdXQiLCJnZXRFbGVtZW50QnlJZCIsImJ0blNlbmQiLCJtZXNzYWdlc0NvbnRhaW5lciIsImVtb2ppVHJpZ2dlciIsInBpY2tlciIsInBvc2l0aW9uIiwidGhlbWUiLCJhdXRvSGlkZSIsIm9uIiwic2VsZWN0aW9uIiwic3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsImVuZCIsInNlbGVjdGlvbkVuZCIsInRleHQiLCJiZWZvcmUiLCJzdWJzdHJpbmciLCJhZnRlciIsImxlbmd0aCIsImVtb2ppIiwiZm9jdXMiLCJ0b2dnbGVQaWNrZXIiLCJhZGRNZXNzYWdlIiwiaXNVc2VyIiwidW5kZWZpbmVkIiwibXNnV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJtc2dCdWJibGUiLCJzdHlsZSIsIm1heFdpZHRoIiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJoYW5kbGVTZW5kIiwidHJpbSIsImUiLCJjb29raWVCb3giLCJidXR0b25zIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkIiwiYWNjZXB0T3JEZWNsaW5lIiwiYnV0dG9uIiwic2V0SXRlbSIsInJlbW92ZSIsImlkIiwiY29va2llIiwibG9jYWxTdG9yYWdlIiwid2luZG93IiwiZm9vdGVyIiwibWFpbkNvbnRhaW5lciIsImRhdG9zUGVyc29Db250YWluZXIiLCJkYXRvc1BlcnNvRWxlbWVudG9zIiwicGVyc29Gb3JtQ29udGFpbmVyIiwibmF2QmFyMSIsIm1lbnVCdG4iLCJjbG9zZUJ0biIsIm1lbnVNb2JpbGUiLCJuYXZCYXJFbGVtIiwibmF2QmFyVXNlck5hbWUiLCJtb2JpbGVMaW5rcyIsImxhbmd1YWdlVG9nZ2xlIiwiaW5uZXJXaWR0aCIsInN1Yk1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb250YWlucyIsImhlaWdodCIsInVwZGF0ZU5hdkJhclN0eWxlcyIsInNjcm9sbFkiLCJkaXNwbGF5IiwiY29sb3IiLCJoYW5kbGVSZXNpemUiLCJsaW5rIiwibGFuZ3VhZ2VMaW5rIiwicHJldlNjcm9sbFkiLCJjdXJyZW50U2Nyb2xsWSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm5hdkJhcjIiLCJhdHRhY2hQYWdpbmF0aW9uRXZlbnRMaXN0ZW5lcnMiLCJnZXRBdHRyaWJ1dGUiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsImlubmVySFRNTCIsImNvbnRlbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY29udGFpbmVycyIsImNhcmRzQ29udGFpbmVyIiwidGFibGV0QnJlYWtwb2ludCIsImN1cnJlbnRFeHBhbmRlZENhcmQiLCJ1cGRhdGVMYXlvdXQiLCJjbG9zZUN1cnJlbnRDYXJkIiwiX2N1cnJlbnRFeHBhbmRlZENhcmQiLCJjb250YWluZXIiLCJkZXNjcmlwdGlvbkJsb2NrIiwicmVzdW1lbiIsInNob3dMaW5rIiwiaGlkZUxpbmsiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiX3BhcmVudExpJHByZXZpb3VzRWxlIiwiX3BhcmVudExpJHByZXZpb3VzRWxlMiIsInBhcmVudExpIiwiY2xvc2VzdCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjYXJkIiwiY2FyZFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2Zmc2V0UG9zaXRpb24iLCJwYWdlWU9mZnNldCIsIm1vc3RyYXJMaW5rIiwib2N1bHRhckxpbmsiLCJkZXNjcmlwY2lvbkhpZGRlbiIsInN0YXJzIiwibm90YSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJzdGFyIiwicmVzZXRTdGFycyIsInByZXZpb3VzU3RhciIsImVyciIsImYiLCJ2YWxvck5vdGEiLCJwYXJzZUludCIsImRhdGFzZXQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibm90YVZhbHVlIiwiZXJyb3JEaXYiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9