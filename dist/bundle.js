/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dndForMobile.js":
/*!*****************************!*\
  !*** ./src/dndForMobile.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dndForMobile = function dndForMobile(ball, field) {
  ball.addEventListener('touchstart', function (e) {
    e.preventDefault();
  });
  ball.addEventListener('touchmove', function (e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    ball.style.top = "".concat(touch.pageY - ball.offsetWidth / 2, "px");
    ball.style.left = "".concat(touch.pageX - ball.offsetHeight / 2, "px");
  });
  ball.addEventListener('touchend', function (e) {
    var touch = e.changedTouches[0];
    var ballLeft = parseInt(ball.style.left);
    var ballTop = parseInt(ball.style.top);
    if (ballLeft > field.offsetLeft + field.offsetWidth) {
      ball.style.left = "".concat(field.offsetLeft + field.offsetWidth - touch.radiusX, "px");
    }
    ;
    if (ballLeft < field.offsetLeft) {
      ball.style.left = "".concat(field.offsetLeft, "px");
    }
    ;
    if (ballTop < field.offsetTop) {
      ball.style.top = "".concat(field.offsetTop, "px");
    }
    ;
    if (ballTop > field.offsetTop + field.offsetHeight) {
      ball.style.top = "".concat(field.offsetTop + field.offsetHeight - touch.radiusY, "px");
    }
    ;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dndForMobile);

/***/ }),

/***/ "./src/dndForWeb.js":
/*!**************************!*\
  !*** ./src/dndForWeb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dndForWeb = function dndForWeb(ball, field) {
  var coordX;
  var coordY;
  ball.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/html', 'dragstart');
    coordX = e.offsetX;
    coordY = e.offsetY;
  });
  field.addEventListener('dragover', function (e) {
    e.preventDefault();
  });
  ball.addEventListener('drag', function (e) {
    ball.style.display = 'none';
    ball.style.cursor = 'move';
  });
  field.addEventListener('dragenter', function (e) {
    ball.style.cursor = 'move';
  });
  field.addEventListener('dragleave', function (e) {
    ball.style.cursor = 'not-allowed';
  });
  field.addEventListener('drop', function (e) {
    ball.style.top = e.pageY - coordY + 'px';
    ball.style.left = e.pageX - coordX + 'px';
  });
  ball.addEventListener('dragend', function (e) {
    ball.style.display = 'block';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dndForWeb);

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dndForWeb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dndForWeb */ "./src/dndForWeb.js");
/* harmony import */ var _dndForMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dndForMobile */ "./src/dndForMobile.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./style.css");



var ball = document.getElementById('ball-id');
var field = document.getElementById('field-id');
(0,_dndForMobile__WEBPACK_IMPORTED_MODULE_1__["default"])(ball, field);
(0,_dndForWeb__WEBPACK_IMPORTED_MODULE_0__["default"])(ball, field);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map