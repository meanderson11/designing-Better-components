/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import { data } from '../../../SpeakerData';\n\n\n\nconst {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\n\nconst delay = ms => new Promise(resolve => {\n  setTimeout(resolve, ms);\n});\n\nasync function handler(req, res) {\n  //res.status(200).send(JSON.stringify(data, null, 2));\n  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n\n  try {\n    const readFileData = await readFile(jsonFile);\n    await delay(1000);\n    const speakers = JSON.parse(readFileData).speakers;\n\n    if (speakers) {\n      res.setHeader(\"Content-Type\", \"application/json\");\n      res.status(200).send(JSON.stringify(speakers, null, 2));\n      console.log(\"GET /api/speakers status: 200\");\n    }\n  } catch (e) {\n    console.log(\"/api/speakers error\", e);\n    res.status(404).send(\"File Not Found on server\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25pbmctcmVhY3QtY29tcG9uZW50cy1wbHVyYWxzaWdodC1jb3Vyc2UvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanM/NzliOSJdLCJuYW1lcyI6WyJwcm9taXNpZnkiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJmcyIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkZpbGUiLCJwYXRoIiwicmVhZEZpbGVEYXRhIiwic3BlYWtlcnMiLCJKU09OIiwicGFyc2UiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJzZW5kIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFnQkMsbUJBQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csb0RBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxFQUFELElBQ1osSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWE7QUFDdkJDLFlBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQVY7QUFDRCxDQUZELENBREY7O0FBS2UsZUFBZUksT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDO0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxtREFBQSxDQUFhLElBQWIsRUFBbUIsU0FBbkIsQ0FBakI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFlBQVksR0FBRyxNQUFNWixRQUFRLENBQUNVLFFBQUQsQ0FBbkM7QUFDQSxVQUFNUixLQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTVcsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxFQUF5QkMsUUFBMUM7O0FBQ0EsUUFBSUEsUUFBSixFQUFjO0FBQ1pKLFNBQUcsQ0FBQ08sU0FBSixDQUFjLGNBQWQsRUFBOEIsa0JBQTlCO0FBQ0FQLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixJQUFJLENBQUNLLFNBQUwsQ0FBZU4sUUFBZixFQUF5QixJQUF6QixFQUErQixDQUEvQixDQUFyQjtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWjtBQUNEO0FBQ0YsR0FURCxDQVNFLE9BQU9DLENBQVAsRUFBVTtBQUNWRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0MsQ0FBbkM7QUFDQWIsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsMEJBQXJCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zcGVha2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uLy4uLy4uL1NwZWFrZXJEYXRhJztcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcblxuICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZShcIi4vXCIsIFwiZGIuanNvblwiKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XG4gICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XG4gICAgaWYgKHNwZWFrZXJzKSB7XG4gICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNwZWFrZXJzLCBudWxsLCAyKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkdFVCAvYXBpL3NwZWFrZXJzIHN0YXR1czogMjAwXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiL2FwaS9zcGVha2VycyBlcnJvclwiLCBlKTtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkZpbGUgTm90IEZvdW5kIG9uIHNlcnZlclwiKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/speakers/index.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();