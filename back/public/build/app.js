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
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");















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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f","vendors-node_modules_core-js_internals_array-from_js-node_modules_core-js_internals_check-cor-06316a","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_push_js-node_modules_core-js_modules_es_array_r-db9b1d","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_leaflet_dist_leaflet_-3a96a4","assets_js_audio_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLENBQUMsYUFBYSxDQUFDLENBQUM2SSxXQUFXLENBQUNILFFBQVEsQ0FBQztJQUMvRDtFQUNKLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNURGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNoRCxpRUFBZTtBQUNmLGdEQUFnRCwwREFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBVSxzUkFBd0Q7QUFDbEU7QUFDQSxXQUFXO0FBQ1g7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QVpsQitDO0FBQUEsSUFBQS9KLFFBQUEsMEJBQUFDLFdBQUE7RUFBQUMsU0FBQSxDQUFBRixRQUFBLEVBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFHLGVBQUEsT0FBQUgsUUFBQTtJQUFBLE9BQUFJLFVBQUEsT0FBQUosUUFBQSxFQUFBSyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUc1QyxTQUFBQyxRQUFBLEVBQVU7TUFDTixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHLGlCQUFpQjtJQUNoRDtFQUFDO0VBQUEsT0FBQVgsUUFBQTtBQUFBLEVBSHdCRCwyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXZhdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FsZW5kYXJpby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VlbnRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tZW51Mi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFyYWRhcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdG91ci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmFsb3JhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzPzVmNGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG5pbXBvcnQgJy4vanMvYXVkaW8nO1xuaW1wb3J0ICcuL2pzL21lbnUnO1xuaW1wb3J0ICcuL2pzL21lbnUyJztcbmltcG9ydCAnLi9qcy90b3VyJztcbmltcG9ydCAnLi9qcy9hdmF0YXJzJztcbmltcG9ydCAnLi9qcy9jb29raWVzJztcbmltcG9ydCAnLi9qcy9wYXJhZGFzJztcbmltcG9ydCAnLi9qcy92YWxvcmFjaW9uZXMnO1xuaW1wb3J0ICcuL2pzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICcuL2pzL2N1ZW50YSc7XG5pbXBvcnQgJy4vanMvY2FsZW5kYXJpbyc7XG5pbXBvcnQgJy4vc2Nzcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XG5cblxuXG5cbi8vIGltcG9ydCAnLi9jb250cm9sbGVycy9jb29raWUtY29uc2VudC1jb250cm9sbGVyJztcblxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxuLy8gLy8gdGhlIGJvb3RzdHJhcCBtb2R1bGUgZG9lc24ndCBleHBvcnQvcmV0dXJuIGFueXRoaW5nXG4vLyByZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gLy8gb3IgeW91IGNhbiBpbmNsdWRlIHNwZWNpZmljIHBpZWNlc1xuLy8gLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCcpO1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3ZlcicpO1xuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbi8vICAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xuLy8gfSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbmFwcC5yZWdpc3RlcignaGVsbG8nLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXInKS5kZWZhdWx0KTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEnO1xuICAgIH1cbn1cbiIsImNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0XCIpO1xyXG5jb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25zXCIpO1xyXG5jb25zdCBzZWxlY3RlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZEltYWdlXCIpO1xyXG5jb25zdCBzZWxlY3RBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuY29uc3QgYXZhdGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICdpbnB1dFtuYW1lPVwicmVnaXN0cmF0aW9uX2Zvcm1bYXZhdGFyXVwiXSdcclxuKTtcclxuY29uc3QgYXZhdGFySW5wdXRDdWVudGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidXNlcl9mb3JtW2F2YXRhcl1cIl0nKTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIik7IC8vIE1vZGlmaWNhIGVzdG8gc2Vnw7puIGxhIGNsYXNlIG8gSUQgZGUgdHUgbW9kYWxcclxuXHJcbnNlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uIChzZWwpIHtcclxuICBzZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG9wdC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNlbGVjdEF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuXHJcbiAgc2VsZWN0QXZhdGFycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3RBdmF0YXIpIHtcclxuICAgICAgc2VsZWN0QXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYztcclxuICAgICAgICAgIGNvbnN0IGF2YXRhciA9IGltYWdlUGF0aC5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF07XHJcblxyXG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxJbWcpIHtcclxuICAgICAgICAgICAgICBzZWxJbWcuc3JjID0gaW1hZ2VQYXRoO1xyXG4gICAgICAgICAgICAgIHNlbEltZy52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGF2YXRhcklucHV0LmZvckVhY2goZnVuY3Rpb24gKGF2YXRhcklucCkge1xyXG4gICAgICAgICAgICAgIGF2YXRhcklucC52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChhdmF0YXJJbnB1dEN1ZW50YSkge1xyXG4gICAgICAgICAgICBhdmF0YXJJbnB1dEN1ZW50YS52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIHNlbGVjY2lvbmFkbzonLCBhdmF0YXIpO1xyXG5cclxuICAgICAgICAgIC8vIEVudsOtYSBlbCBhdmF0YXIgc2VsZWNjaW9uYWRvIGFsIHNlcnZpZG9yXHJcbiAgICAgICAgICBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0KSB7XHJcbiAgICAgICAgICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgb3B0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZWxlY3QuZm9yRWFjaChmdW5jdGlvbiAoc2VsKSB7XHJcbiAgICAgICAgICAgICAgc2VsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE51ZXZhIGZ1bmNpw7NuIHBhcmEgZW52aWFyIGVsIGF2YXRhciBzZWxlY2Npb25hZG8gYWwgc2Vydmlkb3JcclxuICBmdW5jdGlvbiBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcikge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYWN0dWFsaXphci1hdmF0YXItc2Vzc2lvbicsIC8vIEFqdXN0YSBsYSBVUkwgc2Vnw7puIHR1IGNvbmZpZ3VyYWNpw7NuXHJcbiAgICAgIGRhdGE6IHsgYXZhdGFyOiBhdmF0YXIgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIGFjdHVhbGl6YWRvIGVuIGxhIHNlc2nDs24gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBhY3R1YWxpemFyIGVsIGF2YXRhciBlbiBsYSBzZXNpw7NuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4iLCIvLyogLS0tLS0tLS0tLS0tIFRyYWl0ZW1lbnQgZHUgQ2FsZW5kYXIgLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhcmlvXCIpO1xyXG5cclxuICAvLyAgICAgJC5hamF4U2V0dXAoe1xyXG4gIC8vICAgICAgIGhlYWRlcnM6e1xyXG4gIC8vICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gICAgICBcclxuICAvLyAgICAgbGV0IGV2ZW50cyA9IGV2ZW50RGF0YS5tYXAoZXZlbnQgPT4gKHtcclxuICAvLyAgICAgICBpZDogZXZlbnQuaWQsXHJcbiAgLy8gICAgICAgdGl0bGU6IGV2ZW50LnRpdHVsbyxcclxuICAvLyAgICAgICBzdGFydDogZXZlbnQuaW5pY2lvLFxyXG4gIC8vICAgICAgIGVuZDogZXZlbnQuZmluLFxyXG4gIC8vICAgICAgIGNhbnRpZGFkOiBldmVudC5jYW50aWRhZEFzaXN0ZW50ZXMsXHJcbiAgLy8gICAgICAgdXN1YXJpbzogZXZlbnQudXN1YXJpb1xyXG4gIC8vICAgfSkpO1xyXG5cclxuICAvLyAgICAgbGV0IGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihjYWxlbmRhckVsLCB7XHJcbiAgLy8gICAgICAgaW5pdGlhbFZpZXc6ICdtdWx0aU1vbnRoWWVhcicsXHJcbiAgLy8gICAgICAgbG9jYWxlOiBcImVzXCIsXHJcbiAgLy8gICAgICAgdGltZVpvbmU6IFwiRXVyb3BlL1BhcmlzXCIsXHJcbiAgLy8gICAgICAgaGVhZGVyVG9vbGJhcjoge1xyXG4gIC8vICAgICAgICAgICBzdGFydDogXCJwcmV2LCBuZXh0IHRvZGF5XCIsXHJcbiAgLy8gICAgICAgICAgIGNlbnRlcjogXCJ0aXRsZVwiLFxyXG4gIC8vICAgICAgICAgICBlbmQ6IFwiZGF5R3JpZE1vbnRoLCB0aW1lR3JpZFdlZWssIGxpc3RcIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGJ1dHRvblRleHQ6IHtcclxuICAvLyAgICAgICAgICAgdG9kYXk6IFwiSG95XCIsXHJcbiAgLy8gICAgICAgICAgIG1vbnRoOiBcIk1lc1wiLFxyXG4gIC8vICAgICAgICAgICB3ZWVrOiBcIlNlbWFuYVwiLFxyXG4gIC8vICAgICAgICAgICBsaXN0OiBcIkTDrWFcIlxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgZXZlbnRzOiBldmVudHMsXHJcbiAgLy8gICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBhbGxEYXlTbG90OiBmYWxzZSxcclxuICAvLyAgICAgICBldmVudENsaWNrOiBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xyXG4gIC8vICAgICAgICAgJCgnI3Jlc2VydmFNb2RhbCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgLy8gICAgICAgICAvLyBEZXN2aW5jdWxhciBlbCBjb250cm9sYWRvciBkZSBjbGljIHByZXZpb1xyXG4gIC8vICAgICAgICAgJCgnI2d1YXJkYXJCdG4nKS5vZmYoJ2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHRpdGxlID0gJCgnI3RpdGxlJykudmFsKCk7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHN0YXJ0X2RhdGUgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gIC8vICAgICAgICAgICAgIGxldCBlbmRfZGF0ZSA9IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cclxuICAvLyAgICAgICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAvLyAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnRfZGF0ZSxcclxuICAvLyAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IGVuZF9kYXRlXHJcbiAgLy8gICAgICAgICAgICAgfTtcclxuXHJcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERhdGEpXHJcblxyXG4gIC8vICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVybDogXCJ7eyBwYXRoKCdzdG9yZScpIH19XCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAvLyAgICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAkKCcjcmVzZXJ2YU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICQoJyNjYWxlbmRhcmlvJykuZnVsbENhbGVuZGFyKCdyZW5kZXJFdmVudCcsIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHJlc3BvbnNlLnN0YXJ0X2RhdGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiByZXNwb25zZS5lbmRfZGF0ZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlSlNPTiAmJiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgZmllbGQgKyAnZXJyb3InKS5odG1sKGVycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnNbZmllbGRdKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICB9LFxyXG4gICAgICAgIFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgY2FsZW5kYXIucmVuZGVyKCk7XHJcbiAgLy8gfSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY29va2llQWNjZXB0ZWRcIikpIHtcclxuICAgICAgICAgICAgY29va2llQm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWNjZXB0T3JEZWNsaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBjb29raWVCb3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJhY2VwdGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZUJ5PUZyZWV0b3VyR287IG1heC1hZ2U9XCIgKyA2MCAqIDYwICogMjQgKiAzMDtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llQ29uc2VudCcsICdhY2NlcHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT09IFwiZGVjbGluYXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVDb25zZW50JywgJ2RlY2xpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZUNvbnNlbnQnKSkge1xyXG4gICAgICAgICAgICBjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGFjY2VwdE9yRGVjbGluZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkYXRvc1BlcnNvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRvc19wZXJzby1jb250YWluZXJcIik7XHJcbiAgY29uc3QgZGF0b3NQZXJzb0VsZW1lbnRvcyA9IGRhdG9zUGVyc29Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYXRvc19wZXJzby1lbGVtZW50b3NcIik7XHJcbiAgY29uc3QgcGVyc29Gb3JtQ29udGFpbmVyID0gZGF0b3NQZXJzb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBlcnNvX2Zvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuICBkYXRvc1BlcnNvRWxlbWVudG9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBlcnNvRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpOyAgICAgIFxyXG4gICAgICBkYXRvc1BlcnNvRWxlbWVudG9zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pOyIsImNvbnN0IG5hdkJhcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25cIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW1vYmlsZVwiKTtcclxuY29uc3QgbmF2QmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWwgbGkgYVwiKTtcclxuY29uc3QgbmF2QmFyVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28gYSBzcGFuXCIpO1xyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1tb2JpbGUgbGlcIik7XHJcblxyXG5jb25zdCBsYW5ndWFnZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXZpZ2F0aW9uIC5sYW5ndWFnZS10b2dnbGUnKTtcclxuXHJcbmxhbmd1YWdlVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcclxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBpZiAoc3ViTWVudSkge1xyXG4gICAgICAgIGlmIChzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdkJhclN0eWxlcygpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTAgfHwgd2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgICBuYXZCYXIxLmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWUuY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgfSBcclxufVxyXG5cclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgIFxyXG4gIG5hdkJhclVzZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NzApIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb25cIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDg1MCkge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIxPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvblwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMT8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuLy8gQWN0dWFsaXphIGVsIG1hbmVqYWRvciBkZSBldmVudG9zIHBhcmEgbG9zIGVubGFjZXMgZW4gZWwgbWVuw7ogbcOzdmlsXHJcbm1vYmlsZUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICBjb25zdCBsYW5ndWFnZUxpbmsgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZS10b2dnbGUnKTtcclxuICBpZiAoIWxhbmd1YWdlTGluaykgeyAvLyBFeGNsdXllIGVsIGVubGFjZSBkZSBpZGlvbWFzXHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IDMwMCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc1MCkge1xyXG4gICAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZCYXIxPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiAgICBpZiAobmF2QmFyMSkgbmF2QmFyMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjE/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxubGV0IHByZXZTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGxZIDwgcHJldlNjcm9sbFkpIHtcclxuICAgIGlmIChuYXZCYXIxKSBuYXZCYXIxLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9XHJcblxyXG4gIHByZXZTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XHJcbn0pO1xyXG5cclxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKTtcclxuXHJcbnVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4iLCJjb25zdCBuYXZCYXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uLTJcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW1vYmlsZVwiKTtcclxuY29uc3QgbmF2QmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWwgbGkgYVwiKTtcclxuY29uc3QgbmF2QmFyVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28gYSBzcGFuXCIpO1xyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1tb2JpbGUgbGlcIik7XHJcblxyXG5jb25zdCBsYW5ndWFnZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXZpZ2F0aW9uLTIgLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG5cclxubGFuZ3VhZ2VUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xyXG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xyXG4gICAgICBjb25zdCBzdWJNZW51ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIGlmIChzdWJNZW51ICYmIHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICBzdWJNZW51LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmIChzdWJNZW51KSB7XHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSBzdWJNZW51LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVOYXZCYXJTdHlsZXMoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzUwIHx8IHdpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbm1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICBtZW51TW9iaWxlPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbWVudU1vYmlsZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NzApIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gODUwKSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59XHJcblxyXG4vLyBFamVjdXRhciBoYW5kbGVSZXNpemUgYWwgY2FyZ2FyIGxhIHDDoWdpbmFcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbi8vIEFjdHVhbGl6YSBlbCBtYW5lamFkb3IgZGUgZXZlbnRvcyBwYXJhIGxvcyBlbmxhY2VzIGVuIGVsIG1lbsO6IG3Ds3ZpbFxyXG5tb2JpbGVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgY29uc3QgbGFuZ3VhZ2VMaW5rID0gbGluay5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UtdG9nZ2xlJyk7XHJcbiAgaWYgKCFsYW5ndWFnZUxpbmspIHsgLy8gRXhjbHV5ZSBlbCBlbmxhY2UgZGUgaWRpb21hc1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtZW51TW9iaWxlPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDAgJiYgd2luZG93LnNjcm9sbFkgPCAzMDApIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NTApIHtcclxuICAgICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiAgICBpZiAobmF2QmFyMikgbmF2QmFyMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LnJlbW92ZShcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmxldCBwcmV2U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsWSA8IHByZXZTY3JvbGxZKSB7XHJcbiAgICBpZiAobmF2QmFyMikgbmF2QmFyMi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfVxyXG5cclxuICBwcmV2U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZO1xyXG59KTtcclxuXHJcbndpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInNjcm9sbFwiKSk7XHJcblxyXG51cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgYXR0YWNoUGFnaW5hdGlvbkV2ZW50TGlzdGVuZXJzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYXR0YWNoUGFnaW5hdGlvbkV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2luYXRpb24gYScpLmZvckVhY2goZnVuY3Rpb24obGluaykge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tZW50YXJpby1saXN0YScpLmlubmVySFRNTCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoUGFnaW5hdGlvbkV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcHJpbWFyeS1jYXJkJykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fcmVzZXJ2YXMnKTtcclxuICAgIGNvbnN0IHRhYmxldEJyZWFrcG9pbnQgPSA4NDg7XHJcbiAgICBsZXQgY3VycmVudEV4cGFuZGVkQ2FyZCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IHRhYmxldEJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2luZ2xlLWNvbHVtbicsIGN1cnJlbnRFeHBhbmRlZENhcmQgIT09IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUN1cnJlbnRDYXJkKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50RXhwYW5kZWRDYXJkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyLCBkZXNjcmlwdGlvbkJsb2NrLCByZXN1bWVuLCBzaG93TGluaywgaGlkZUxpbmsgfSA9IGN1cnJlbnRFeHBhbmRlZENhcmQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NyaXB0aW9uLXZpc2libGUnKTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25CbG9jay5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1oaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVzdW1lbi5jbGFzc0xpc3QucmVtb3ZlKCdkZXNjcmlwdGlvbi1yZXN1bWVuLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBzaG93TGluay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgaGlkZUxpbmsuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwYW5kZWRDYXJkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHNob3dMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zaG93LWxpbmsnKTtcclxuICAgICAgICBjb25zdCBoaWRlTGluayA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGlkZS1saW5rJyk7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGkgPSBjb250YWluZXIuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkJsb2NrID0gcGFyZW50TGk/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1oaWRkZW4nKTtcclxuICAgICAgICBjb25zdCByZXN1bWVuID0gcGFyZW50TGk/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1yZXN1bWVuJyk7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jbG9zZXN0KCcuY2FyZF9fcmVzZXJ2YXMnKTtcclxuXHJcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbkJsb2NrIHx8ICFyZXN1bWVuIHx8ICFjYXJkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNob3dMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xvc2VDdXJyZW50Q2FyZCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudEV4cGFuZGVkQ2FyZCA9IHsgY29udGFpbmVyLCBkZXNjcmlwdGlvbkJsb2NrLCByZXN1bWVuLCBzaG93TGluaywgaGlkZUxpbmssIGNhcmQgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQmxvY2suY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NyaXB0aW9uLWhpZGRlbicpO1xyXG4gICAgICAgICAgICByZXN1bWVuLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXJlc3VtZW4taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHNob3dMaW5rLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBoaWRlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2Nyb2xsIGEgbGEgY2FyZCBhbCBhYnJpclxyXG4gICAgICAgICAgICBjb25zdCBjYXJkUG9zaXRpb24gPSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBjYXJkUG9zaXRpb24gKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAyMDtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhpZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFeHBhbmRlZENhcmQgJiYgY3VycmVudEV4cGFuZGVkQ2FyZC5jb250YWluZXIgPT09IGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VDdXJyZW50Q2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1RvcCgpOyAvLyBTY3JvbGwgYWwgaW5pY2lvIGFsIGNlcnJhclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IHRhYmxldEJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2luZ2xlLWNvbHVtbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCJjb25zdCBtb3N0cmFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3N0cmFyLWxpbmsnKTtcclxuY29uc3Qgb2N1bHRhckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2N1bHRhci1saW5rJyk7XHJcbmNvbnN0IGRlc2NyaXBjaW9uSGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXBjaW9uLWhpZGRlbicpO1xyXG5cclxubW9zdHJhckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAoZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNjcmlwY2lvbi12aXNpYmxlJykpIHtcclxuICAgIGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NyaXBjaW9uLXZpc2libGUnKTtcclxuICAgIG1vc3RyYXJMaW5rLnRleHRDb250ZW50ID0gJ1NlZSBmdWxsIGRlc2NyaXB0aW9uJztcclxuICAgIG9jdWx0YXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwY2lvbi12aXNpYmxlJyk7XHJcbiAgICBtb3N0cmFyTGluay50ZXh0Q29udGVudCA9ICdIaWRlIGRlc2NyaXB0aW9uJztcclxuICAgIG9jdWx0YXJMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyAvLyBSZW1vdmVtb3MgbGEgY2xhc2UgJ2hpZGRlbicgc2kgZXN0w6EgcHJlc2VudGVcclxuICB9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhcnMgLmxhLXN0YXJcIik7XHJcbiAgICBjb25zdCBub3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RhXCIpO1xyXG5cclxuICAgIGZvcihzdGFyIG9mIHN0YXJzKSB7XHJcbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJlc2V0U3RhcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5jb2xvciA9IFwiZ29sZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJsYXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImxhclwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1N0YXIgPSB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aGlsZShwcmV2aW91c1N0YXIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU3Rhci5zdHlsZS5jb2xvciA9IFwiZ29sZFwiO1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTdGFyLmNsYXNzTGlzdC5hZGQoXCJsYXNcIik7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1N0YXIuY2xhc3NMaXN0LnJlbW92ZShcImxhclwiKTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU3RhciA9IHByZXZpb3VzU3Rhci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJlc2V0U3RhcnMobm90YS52YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbG9yTm90YSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIG5vdGEudmFsdWUgPSB2YWxvck5vdGE7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub3RhLnZhbHVlKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFN0YXJzKG5vdGEgPSAwKSB7XHJcbiAgICAgICAgZm9yKHN0YXIgb2Ygc3RhcnMpIHtcclxuICAgICAgICAgICAgaWYoc3Rhci5kYXRhc2V0LnZhbHVlID4gbm90YSkge1xyXG4gICAgICAgICAgICAgICAgc3Rhci5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZChcImxhclwiKTtcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZShcImxhc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3Rhci5zdHlsZS5jb2xvciA9IFwiZ29sZFwiOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZChcImxhc1wiKTtcclxuICAgICAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZShcImxhclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICB2YXIgbm90YVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGEnKS52YWx1ZTtcclxuICAgICAgICBpZiAobm90YVZhbHVlID09IDApIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgICAgIHZhciBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdhbGVydCcsICdhbGVydC1kYW5nZXInKTtcclxuICAgICAgICAgICAgZXJyb3JEaXYuaW5uZXJUZXh0ID0gJ0xhIG5vdGEgbm8gcHVlZGUgc2VyIDAuIFBvciBmYXZvciwgc2VsZWNjaW9uZSBhbCBtZW5vcyB1bmEgZXN0cmVsbGEuJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbG9yYWNpb24nKS5hcHBlbmRDaGlsZChlcnJvckRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWxlYWZsZXQtbWFwLS1tYXAnOiBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbXBvcnQoJ0BzeW1mb255L3V4LWxlYWZsZXQtbWFwL2Rpc3QvbWFwX2NvbnRyb2xsZXIuanMnKS50aGVuKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICB9LFxufTsiXSwibmFtZXMiOlsic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwicmVnaXN0ZXIiLCJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0Iiwic2VsZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsInNlbGVjdGVkSW1hZ2UiLCJzZWxlY3RBdmF0YXIiLCJhdmF0YXJJbnB1dCIsImF2YXRhcklucHV0Q3VlbnRhIiwicXVlcnlTZWxlY3RvciIsIm1vZGFsIiwiZm9yRWFjaCIsInNlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvcHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJzZWxlY3RBdmF0YXJzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlUGF0aCIsInNyYyIsImF2YXRhciIsInNwbGl0IiwicG9wIiwic2VsSW1nIiwiYXZhdGFySW5wIiwiY29uc29sZSIsImxvZyIsImFjdHVhbGl6YXJBdmF0YXJFblNlc3Npb24iLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb29raWVCb3giLCJidXR0b25zIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkIiwiYWNjZXB0T3JEZWNsaW5lIiwiYnV0dG9uIiwic2V0SXRlbSIsInJlbW92ZSIsImlkIiwiY29va2llIiwibG9jYWxTdG9yYWdlIiwid2luZG93IiwiZm9vdGVyIiwibWFpbkNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiZGF0b3NQZXJzb0NvbnRhaW5lciIsImRhdG9zUGVyc29FbGVtZW50b3MiLCJwZXJzb0Zvcm1Db250YWluZXIiLCJuYXZCYXIxIiwibWVudUJ0biIsImNsb3NlQnRuIiwibWVudU1vYmlsZSIsIm5hdkJhckVsZW0iLCJuYXZCYXJVc2VyTmFtZSIsIm1vYmlsZUxpbmtzIiwibGFuZ3VhZ2VUb2dnbGUiLCJpbm5lcldpZHRoIiwic3ViTWVudSIsIm5leHRFbGVtZW50U2libGluZyIsImNvbnRhaW5zIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ1cGRhdGVOYXZCYXJTdHlsZXMiLCJzY3JvbGxZIiwiZGlzcGxheSIsImNvbG9yIiwiaGFuZGxlUmVzaXplIiwibGluayIsImxhbmd1YWdlTGluayIsInByZXZTY3JvbGxZIiwiY3VycmVudFNjcm9sbFkiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJuYXZCYXIyIiwiYXR0YWNoUGFnaW5hdGlvbkV2ZW50TGlzdGVuZXJzIiwiZSIsImdldEF0dHJpYnV0ZSIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJqc29uIiwiaW5uZXJIVE1MIiwiY29udGVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJjb250YWluZXJzIiwiY2FyZHNDb250YWluZXIiLCJ0YWJsZXRCcmVha3BvaW50IiwiY3VycmVudEV4cGFuZGVkQ2FyZCIsInVwZGF0ZUxheW91dCIsImNsb3NlQ3VycmVudENhcmQiLCJfY3VycmVudEV4cGFuZGVkQ2FyZCIsImNvbnRhaW5lciIsImRlc2NyaXB0aW9uQmxvY2siLCJyZXN1bWVuIiwic2hvd0xpbmsiLCJoaWRlTGluayIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJfcGFyZW50TGkkcHJldmlvdXNFbGUiLCJfcGFyZW50TGkkcHJldmlvdXNFbGUyIiwicGFyZW50TGkiLCJjbG9zZXN0IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImNhcmQiLCJjYXJkUG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXRQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0IiwibW9zdHJhckxpbmsiLCJvY3VsdGFyTGluayIsImRlc2NyaXBjaW9uSGlkZGVuIiwic3RhcnMiLCJub3RhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInN0YXIiLCJyZXNldFN0YXJzIiwicHJldmlvdXNTdGFyIiwiZXJyIiwiZiIsInZhbG9yTm90YSIsInBhcnNlSW50IiwiZGF0YXNldCIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJub3RhVmFsdWUiLCJlcnJvckRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=