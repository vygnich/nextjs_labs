"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client?9bbd":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.tsx&appDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.tsx&appDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_developeruvidest_Desktop_next_nextjs_lab1_src_app_api_auth_nextauth_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.tsx */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/developeruvidest/Desktop/next/nextjs_lab1/src/app/api/auth/[...nextauth]/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_developeruvidest_Desktop_next_nextjs_lab1_src_app_api_auth_nextauth_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZkZXZlbG9wZXJ1dmlkZXN0JTJGRGVza3RvcCUyRm5leHQlMkZuZXh0anNfbGFiMSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkZXZlbG9wZXJ1dmlkZXN0JTJGRGVza3RvcCUyRm5leHQlMkZuZXh0anNfbGFiMSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbGFiMS8/Mjg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZGV2ZWxvcGVydXZpZGVzdC9EZXNrdG9wL25leHQvbmV4dGpzX2xhYjEvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZGV2ZWxvcGVydXZpZGVzdC9EZXNrdG9wL25leHQvbmV4dGpzX2xhYjEvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.tsx&appDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.tsx":
/*!**************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _modules_auth_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/auth/auth */ \"(rsc)/./src/modules/auth/auth.ts\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modules_auth_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDc0M7QUFDWTtBQUlsRCxNQUFNRSxVQUFVRiwwREFBUUEsQ0FBQ0MsMkRBQVdBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbGFiMS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c3g/YjFiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL21vZHVsZXMvYXV0aC9hdXRoJztcblxuXG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/modules/auth/auth.ts":
/*!**********************************!*\
  !*** ./src/modules/auth/auth.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   checkAuth: () => (/* binding */ checkAuth),\n/* harmony export */   getUserAuth: () => (/* binding */ getUserAuth)\n/* harmony export */ });\n/* harmony import */ var _modules_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/db */ \"(rsc)/./src/modules/db.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(rsc)/./node_modules/next/dist/api/navigation.react-server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client?9bbd\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_5__.PrismaClient();\nconst authOptions = {\n    callbacks: {\n        session: async function AuthUser({ session }) {\n            let user = await _modules_db__WEBPACK_IMPORTED_MODULE_0__.db.user.findUnique({\n                where: {\n                    email: session.user.email\n                }\n            });\n            if (!user) {\n                user = await _modules_db__WEBPACK_IMPORTED_MODULE_0__.db.user.create({\n                    data: {\n                        email: session.user.email,\n                        name: session.user.name\n                    }\n                });\n            }\n            return {\n                ...session,\n                user: {\n                    ...user\n                }\n            };\n        }\n    },\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst getUserAuth = async ()=>{\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(authOptions);\n    return session;\n};\nconst checkAuth = async ()=>{\n    const session = await getUserAuth();\n    if (!session) (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(\"/api/auth/signin\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHZ0M7QUFDVztBQUNtQztBQUN2QjtBQUNBO0FBQ1Y7QUFLN0MsTUFBTU0sU0FBUyxJQUFJRCx3REFBWUE7QUFZeEIsTUFBTUUsY0FBZ0M7SUFDekNDLFdBQVc7UUFDUEMsU0FBUyxlQUFlQyxTQUFVLEVBQUVELE9BQU8sRUFBRTtZQUN6QyxJQUFJRSxPQUFPLE1BQU1YLDJDQUFFQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztnQkFDaENDLE9BQU87b0JBQ0hDLE9BQU9MLFFBQVFFLElBQUksQ0FBQ0csS0FBSztnQkFDN0I7WUFDSjtZQUNBLElBQUksQ0FBQ0gsTUFBSztnQkFDTkEsT0FBTyxNQUFNWCwyQ0FBRUEsQ0FBQ1csSUFBSSxDQUFDSSxNQUFNLENBQUM7b0JBQ3hCQyxNQUFNO3dCQUNGRixPQUFPTCxRQUFRRSxJQUFJLENBQUNHLEtBQUs7d0JBQ3pCRyxNQUFNUixRQUFRRSxJQUFJLENBQUNNLElBQUk7b0JBQzNCO2dCQUNKO1lBQ0o7WUFDQSxPQUFRO2dCQUNSLEdBQUdSLE9BQU87Z0JBQ05FLE1BQU07b0JBQ0YsR0FBR0EsSUFBSTtnQkFDWDtZQUNSO1FBQUU7SUFDTjtJQUNBTyxXQUFXO1FBQ1BmLHNFQUFjQSxDQUFDO1lBQ1hnQixVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDbEQ7UUFDQXBCLHNFQUFjQSxDQUFDO1lBQ1hlLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQzNDO0tBQ0g7SUFDREMsUUFBUVAsUUFBUUMsR0FBRyxDQUFDTyxlQUFlO0FBQ3ZDLEVBQUM7QUFFTSxNQUFNQyxjQUFjO0lBQ3ZCLE1BQU1wQixVQUFVLE1BQU1QLDJEQUFnQkEsQ0FBQ0s7SUFDdkMsT0FBT0U7QUFDWCxFQUFFO0FBRUssTUFBTXFCLFlBQVk7SUFDckIsTUFBTXJCLFVBQVUsTUFBTW9CO0lBQ3RCLElBQUksQ0FBQ3BCLFNBQVNSLHlEQUFRQSxDQUFDO0FBQzNCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbGFiMS8uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC50cz84MmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQGF1dGgvcHJpc21hLWFkYXB0ZXInO1xuaW1wb3J0IHsgQWRhcHRlciB9IGZyb20gJ25leHQtYXV0aC9hZGFwdGVycyc7XG5pbXBvcnQge2RifSBmcm9tIFwiQC9tb2R1bGVzL2RiXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEZWZhdWx0U2Vzc2lvbiwgZ2V0U2VydmVyU2Vzc2lvbiwgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiQC9tb2R1bGVzL3NjaGVtYS9hY2NvdW50XCJcbmltcG9ydCB7ZmFrZXJ9IGZyb20gXCJAZmFrZXItanMvZmFrZXJcIjtcblxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZGVjbGFyZSBtb2R1bGUgJ25leHQtYXV0aCcge1xuICAgIGludGVyZmFjZSBTZXNzaW9uIHtcbiAgICAgICAgdXNlcjogVXNlcjtcbiAgICB9XG59XG5leHBvcnQgdHlwZSBBdXRoU2Vzc2lvbiA9IHtcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIHVzZXI6IFVzZXI7XG4gICAgfSB8IG51bGw7XG59O1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zIDpOZXh0QXV0aE9wdGlvbnMgID0ge1xuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBzZXNzaW9uOiBhc3luYyBmdW5jdGlvbiBBdXRoVXNlciAoeyBzZXNzaW9uIH0pIHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsISxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKCF1c2VyKXtcbiAgICAgICAgICAgICAgICB1c2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnVzZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pfSxcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcbiAgICAgICAgfSksXG4gICAgICAgIEdpdEh1YlByb3ZpZGVyKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQhLFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUIVxuICAgICAgICB9KVxuICAgIF0sXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJBdXRoID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICByZXR1cm4gc2Vzc2lvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJBdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uKSByZWRpcmVjdCgnL2FwaS9hdXRoL3NpZ25pbicpO1xufTsiXSwibmFtZXMiOlsiZGIiLCJyZWRpcmVjdCIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsIkdpdEh1YlByb3ZpZGVyIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwiQXV0aFVzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJnZXRVc2VyQXV0aCIsImNoZWNrQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/modules/auth/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/modules/db.ts":
/*!***************************!*\
  !*** ./src/modules/db.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client?9bbd\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kdWxlcy9kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZDO0FBRXRDLE1BQU1DLEtBQUssSUFBSUQsd0RBQVlBLEdBQUU7QUFFcEMsaUVBQWVDLEVBQUVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbGFiMS8uL3NyYy9tb2R1bGVzL2RiLnRzPzIyNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZXhwb3J0IGNvbnN0IGRiID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGRiIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/modules/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.tsx&appDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdeveloperuvidest%2FDesktop%2Fnext%2Fnextjs_lab1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();