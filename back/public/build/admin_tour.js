(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin_tour"],{

/***/ "./assets/js/admin_tour.js":
/*!*********************************!*\
  !*** ./assets/js/admin_tour.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
document.addEventListener('DOMContentLoaded', function () {
  console.log('Admin Tour JS Loaded');

  // Identifica los campos por su ID o nombre generado por EasyAdmin
  var countrySelect = document.getElementById('Tour_pais');
  var citySelect = document.getElementById('Tour_ciudad');
  if (!countrySelect || !citySelect) {
    return;
  }

  // Función para actualizar ciudades desde la BD
  function updateCities(countryCode, currentCityId) {
    // Limpiar ciudad actual temporalmente mientras cargamos
    citySelect.innerHTML = '<option value="">Cargando...</option>';
    if (!countryCode) {
      citySelect.innerHTML = '<option value="">Seleccione un país primero</option>';
      return;
    }

    // Fetch ciudades de la BD filtradas por país
    fetch("/admin/api/cities?country=".concat(countryCode)).then(function (response) {
      return response.json();
    }).then(function (data) {
      citySelect.innerHTML = '';

      // Opción vacía por defecto
      var defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.text = 'Seleccione una ciudad...';
      citySelect.appendChild(defaultOption);

      // data es {id: nombre, ...}
      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          id = _Object$entries$_i[0],
          nombre = _Object$entries$_i[1];
        var option = document.createElement('option');
        option.value = id;
        option.text = nombre;
        if (id === String(currentCityId)) {
          option.selected = true;
        }
        citySelect.appendChild(option);
      }
    })["catch"](function (error) {
      console.error('Error fetching cities:', error);
      citySelect.innerHTML = '<option value="">Error al cargar ciudades</option>';
    });
  }

  // Listener para cambio de país
  countrySelect.addEventListener('change', function () {
    var countryCode = this.value;
    updateCities(countryCode, null);
  });

  // Ejecutar al cargar la página para filtrar las opciones iniciales
  var initialCountry = countrySelect.value;
  var initialCity = citySelect.value;
  if (initialCountry) {
    updateCities(initialCountry, initialCity);
  } else {
    // En "New", país vacío -> limpiar ciudad
    citySelect.innerHTML = '<option value="">Seleccione un país primero</option>';
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-from_js-node_modules_core-js_internals_check-cor-06316a","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--661e7d"], () => (__webpack_exec__("./assets/js/admin_tour.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDQTlCLFVBQVUsQ0FBQ0ksU0FBUyxHQUFHLHNEQUFzRDtFQUNqRjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbl90b3VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWRtaW4gVG91ciBKUyBMb2FkZWQnKTtcclxuXHJcbiAgICAvLyBJZGVudGlmaWNhIGxvcyBjYW1wb3MgcG9yIHN1IElEIG8gbm9tYnJlIGdlbmVyYWRvIHBvciBFYXN5QWRtaW5cclxuICAgIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVG91cl9wYWlzJyk7XHJcbiAgICBjb25zdCBjaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1RvdXJfY2l1ZGFkJyk7XHJcblxyXG4gICAgaWYgKCFjb3VudHJ5U2VsZWN0IHx8ICFjaXR5U2VsZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmNpw7NuIHBhcmEgYWN0dWFsaXphciBjaXVkYWRlcyBkZXNkZSBsYSBCRFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2l0aWVzKGNvdW50cnlDb2RlLCBjdXJyZW50Q2l0eUlkKSB7XHJcbiAgICAgICAgLy8gTGltcGlhciBjaXVkYWQgYWN0dWFsIHRlbXBvcmFsbWVudGUgbWllbnRyYXMgY2FyZ2Ftb3NcclxuICAgICAgICBjaXR5U2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+Q2FyZ2FuZG8uLi48L29wdGlvbj4nO1xyXG5cclxuICAgICAgICBpZiAoIWNvdW50cnlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNpdHlTZWxlY3QuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lIHVuIHBhw61zIHByaW1lcm88L29wdGlvbj4nO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGZXRjaCBjaXVkYWRlcyBkZSBsYSBCRCBmaWx0cmFkYXMgcG9yIHBhw61zXHJcbiAgICAgICAgZmV0Y2goYC9hZG1pbi9hcGkvY2l0aWVzP2NvdW50cnk9JHtjb3VudHJ5Q29kZX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2l0eVNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPcGNpw7NuIHZhY8OtYSBwb3IgZGVmZWN0b1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbi50ZXh0ID0gJ1NlbGVjY2lvbmUgdW5hIGNpdWRhZC4uLic7XHJcbiAgICAgICAgICAgICAgICBjaXR5U2VsZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRhdGEgZXMge2lkOiBub21icmUsIC4uLn1cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2lkLCBub21icmVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBub21icmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09PSBTdHJpbmcoY3VycmVudENpdHlJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2l0aWVzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGNpdHlTZWxlY3QuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJcIj5FcnJvciBhbCBjYXJnYXIgY2l1ZGFkZXM8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMaXN0ZW5lciBwYXJhIGNhbWJpbyBkZSBwYcOtc1xyXG4gICAgY291bnRyeVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnRyeUNvZGUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHVwZGF0ZUNpdGllcyhjb3VudHJ5Q29kZSwgbnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFamVjdXRhciBhbCBjYXJnYXIgbGEgcMOhZ2luYSBwYXJhIGZpbHRyYXIgbGFzIG9wY2lvbmVzIGluaWNpYWxlc1xyXG4gICAgY29uc3QgaW5pdGlhbENvdW50cnkgPSBjb3VudHJ5U2VsZWN0LnZhbHVlO1xyXG4gICAgY29uc3QgaW5pdGlhbENpdHkgPSBjaXR5U2VsZWN0LnZhbHVlO1xyXG5cclxuICAgIGlmIChpbml0aWFsQ291bnRyeSkge1xyXG4gICAgICAgIHVwZGF0ZUNpdGllcyhpbml0aWFsQ291bnRyeSwgaW5pdGlhbENpdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBFbiBcIk5ld1wiLCBwYcOtcyB2YWPDrW8gLT4gbGltcGlhciBjaXVkYWRcclxuICAgICAgICBjaXR5U2VsZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uZSB1biBwYcOtcyBwcmltZXJvPC9vcHRpb24+JztcclxuICAgIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY291bnRyeVNlbGVjdCIsImdldEVsZW1lbnRCeUlkIiwiY2l0eVNlbGVjdCIsInVwZGF0ZUNpdGllcyIsImNvdW50cnlDb2RlIiwiY3VycmVudENpdHlJZCIsImlubmVySFRNTCIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkZWZhdWx0T3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidGV4dCIsImFwcGVuZENoaWxkIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibGVuZ3RoIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJpZCIsIm5vbWJyZSIsIm9wdGlvbiIsIlN0cmluZyIsInNlbGVjdGVkIiwiZXJyb3IiLCJpbml0aWFsQ291bnRyeSIsImluaXRpYWxDaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==