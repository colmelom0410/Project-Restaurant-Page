/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_profile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/profile.png */ \"./src/images/profile.png\");\n\n\n\nfunction loadPage(){\n\n    console.log(\"ABOUT PAGE CHECK!\");\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"ABOUT\";\n\n    const profile = document.createElement('img');\n    profile.src = _images_profile_png__WEBPACK_IMPORTED_MODULE_0__;\n    \n    const pContent = document.createElement('p');\n    pContent.textContent = \"About Description\";\n\n    const divContent = document.querySelector('#content');\n\n    divContent.appendChild(headline);\n    divContent.appendChild(profile);\n    divContent.appendChild(pContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXRQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEOzs7QUFHaEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnREFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0UGFnZS5qcz9hM2MzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9maWxlSW1hZ2UgZnJvbSAnLi9pbWFnZXMvcHJvZmlsZS5wbmcnO1xuXG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCl7XG5cbiAgICBjb25zb2xlLmxvZyhcIkFCT1VUIFBBR0UgQ0hFQ0shXCIpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJBQk9VVFwiO1xuXG4gICAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2ZpbGUuc3JjID0gcHJvZmlsZUltYWdlO1xuICAgIFxuICAgIGNvbnN0IHBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBDb250ZW50LnRleHRDb250ZW50ID0gXCJBYm91dCBEZXNjcmlwdGlvblwiO1xuXG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQocENvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/aboutPage.js\n");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_profile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/profile.png */ \"./src/images/profile.png\");\n\n\n\nfunction loadPage(){\n\n    console.log(\"HOME PAGE CHECK!\");\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"HOME!\";\n    \n    const profile = document.createElement('img');\n    profile.src = _images_profile_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    const pContent = document.createElement('p');\n    pContent.textContent = 'Home Description';\n\n    const divContent = document.querySelector('#content');\n\n    divContent.appendChild(headline);\n    divContent.appendChild(profile);\n    divContent.appendChild(pContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0Q7OztBQUdoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnREFBWTs7QUFFOUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZVBhZ2UuanM/OWExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZmlsZUltYWdlIGZyb20gJy4vaW1hZ2VzL3Byb2ZpbGUucG5nJztcblxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpe1xuXG4gICAgY29uc29sZS5sb2coXCJIT01FIFBBR0UgQ0hFQ0shXCIpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJIT01FIVwiO1xuICAgIFxuICAgIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9maWxlLnNyYyA9IHByb2ZpbGVJbWFnZTtcblxuICAgIGNvbnN0IHBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBDb250ZW50LnRleHRDb250ZW50ID0gJ0hvbWUgRGVzY3JpcHRpb24nO1xuXG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQocENvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/homePage.js\n");

/***/ }),

/***/ "./src/images/profile.png":
/*!********************************!*\
  !*** ./src/images/profile.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266dfc0c652ba1d078ea.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPage.js */ \"./src/aboutPage.js\");\n\n\n\n\n\n(0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst home = document.querySelector('#home');\nconst menu = document.querySelector('#menu');\nconst about = document.querySelector('#about');\nconst contents = document.querySelector('#content');\n\nfunction removeContent(){\n    while (contents.hasChildNodes()){\n        contents.removeChild(contents.firstChild);\n    }\n}\n\nhome.addEventListener('click', ()=>{\n    removeContent();\n    (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\nmenu.addEventListener('click', ()=>{\n    removeContent();\n    (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\nabout.addEventListener('click', ()=>{\n    removeContent();\n    (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxQztBQUNBO0FBQ0U7OztBQUd2Qyx3REFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdEQUFRO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLHdEQUFRO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLHlEQUFTO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZVBhZ2UuanMnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudVBhZ2UuanMnO1xuaW1wb3J0IGFib3V0UGFnZSBmcm9tICcuL2Fib3V0UGFnZS5qcyc7XG5cblxuaG9tZVBhZ2UoKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XG5jb25zdCBjb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbnRlbnQoKXtcbiAgICB3aGlsZSAoY29udGVudHMuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgY29udGVudHMucmVtb3ZlQ2hpbGQoY29udGVudHMuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgaG9tZVBhZ2UoKTtcbn0pO1xubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcmVtb3ZlQ29udGVudCgpO1xuICAgIG1lbnVQYWdlKCk7XG59KTtcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgYWJvdXRQYWdlKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_profile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/profile.png */ \"./src/images/profile.png\");\n\n\n\nfunction loadPage(){\n\n    console.log(\"MENU PAGE CHECK!\");\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"MENU!\";\n\n    const profile = document.createElement('img');\n    profile.src = _images_profile_png__WEBPACK_IMPORTED_MODULE_0__;\n    \n    const pContent = document.createElement('p');\n    pContent.textContent = 'Menu Description';\n\n    const divContent = document.querySelector('#content');\n\n    divContent.appendChild(headline);\n    divContent.appendChild(profile);\n    divContent.appendChild(pContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0Q7OztBQUdoRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGdEQUFZO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanM/MzYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZmlsZUltYWdlIGZyb20gJy4vaW1hZ2VzL3Byb2ZpbGUucG5nJztcblxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpe1xuXG4gICAgY29uc29sZS5sb2coXCJNRU5VIFBBR0UgQ0hFQ0shXCIpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJNRU5VIVwiO1xuXG4gICAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2ZpbGUuc3JjID0gcHJvZmlsZUltYWdlO1xuICAgIFxuICAgIGNvbnN0IHBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBDb250ZW50LnRleHRDb250ZW50ID0gJ01lbnUgRGVzY3JpcHRpb24nO1xuXG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQocENvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menuPage.js\n");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;