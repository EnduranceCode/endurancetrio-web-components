/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/css/style.scss?");

/***/ }),

/***/ "./src/js/bulma/BulmaTabs.js":
/*!***********************************!*\
  !*** ./src/js/bulma/BulmaTabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BulmaTabs\": () => (/* binding */ BulmaTabs)\n/* harmony export */ });\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\nclass BulmaTabs {\n  constructor(tabsMenuList, tabsContentList) {\n    this.tabsMenuList = tabsMenuList;\n    this.tabsContentList = tabsContentList;\n  }\n\n  init() {\n    Array.from(this.tabsMenuList).forEach((child) => {\n      child.addEventListener('click', () => {\n        this.toggle(child.dataset.target);\n      });\n\n      if (child.className.includes('is-active')) {\n        this.toggle(child.dataset.target);\n      }\n    });\n  }\n\n  toggle(targetId) {\n    Array.from(this.tabsContentList).forEach((contentElement) => {\n      contentElement.style.display = contentElement.id === targetId ? 'block' : 'none';\n      document\n        .querySelector(`[data-target=\"${contentElement.id}\"]`)\n        .classList[contentElement.id === targetId ? 'add' : 'remove']('is-active');\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/bulma/BulmaTabs.js?");

/***/ }),

/***/ "./src/js/model/AgeGroups.js":
/*!***********************************!*\
  !*** ./src/js/model/AgeGroups.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AgeGroups\": () => (/* binding */ AgeGroups)\n/* harmony export */ });\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\nclass AgeGroups {\n  static officialAgeGroups = [\n    { order: 1, name: 'BEN' },\n    { order: 2, name: 'INF' },\n    { order: 3, name: 'INI' },\n    { order: 4, name: 'JUV' },\n    { order: 5, name: 'CAD' },\n    { order: 6, name: 'JUN' },\n    { order: 7, name: 'ELITE' },\n    { order: 8, name: 'SUB23' },\n    { order: 9, name: 'SEN' },\n    { order: 10, name: 'V1' },\n    { order: 11, name: 'V2' },\n    { order: 12, name: 'V3' },\n    { order: 13, name: 'V4' },\n    { order: 14, name: 'V5' },\n    { order: 15, name: 'V6' },\n    { order: 16, name: 'V7' },\n    { order: 17, name: 'V7' },\n    { order: 18, name: 'V9' },\n    { order: 19, name: 'V10' },\n    { order: 19, name: '20-24' },\n    { order: 20, name: '25-29' },\n    { order: 21, name: '30-34' },\n    { order: 22, name: '35-39' },\n    { order: 23, name: '40-44' },\n    { order: 24, name: '45-49' },\n    { order: 25, name: '50-54' },\n    { order: 26, name: '55-59' },\n    { order: 27, name: '60-64' },\n    { order: 28, name: '65-69' },\n    { order: 29, name: '70-74' },\n    { order: 30, name: '75-79' },\n    { order: 31, name: '80-84' },\n    { order: 32, name: '85-89' },\n    { order: 33, name: '90-94' },\n    { order: 34, name: '95-99' },\n  ];\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/model/AgeGroups.js?");

/***/ }),

/***/ "./src/js/model/RaceModel.js":
/*!***********************************!*\
  !*** ./src/js/model/RaceModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RaceModel\": () => (/* binding */ RaceModel)\n/* harmony export */ });\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\nclass RaceModel {\n  raceReference = '';\n  raceData = {};\n  ageGroupsList = [];\n  results = {\n    overall: [],\n  };\n\n  constructor(raceReference) {\n    this.raceReference = raceReference;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/model/RaceModel.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _service_RaceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/RaceService */ \"./src/js/service/RaceService.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\n\n\nconst overallResultsTables = Array.prototype.slice.call(document.querySelectorAll('[data-result-reference]'), 0);\n\nif (overallResultsTables.length > 0) {\n  overallResultsTables.forEach((table) => {\n    const overallResultsReference = table.getAttribute('data-result-reference');\n    new _service_RaceService__WEBPACK_IMPORTED_MODULE_1__.RaceService().getResults(overallResultsReference);\n  });\n}\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/script.js?");

/***/ }),

/***/ "./src/js/service/RaceService.js":
/*!***************************************!*\
  !*** ./src/js/service/RaceService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RaceService\": () => (/* binding */ RaceService)\n/* harmony export */ });\n/* harmony import */ var _model_AgeGroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/AgeGroups */ \"./src/js/model/AgeGroups.js\");\n/* harmony import */ var _model_RaceModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/RaceModel */ \"./src/js/model/RaceModel.js\");\n/* harmony import */ var _view_RaceResultsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/RaceResultsView */ \"./src/js/view/RaceResultsView.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\n\n\nclass RaceService {\n  static SAMPLE_DATA_FOLDER_URL =\n    'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/data/';\n\n  raceModel;\n\n  getResults(raceReference) {\n    this.getResultsFromFile(raceReference, this.buildRaceData.bind(this));\n  }\n\n  getUrl(raceReference) {\n    return RaceService.SAMPLE_DATA_FOLDER_URL + raceReference + '.json';\n  }\n\n  getResultsFromFile(raceReference, callback) {\n    const url = this.getUrl(raceReference);\n\n    fetch(url)\n      .then((response) => {\n        if (!response.ok) {\n          throw Error(response.statusText);\n        }\n        return response.json();\n      })\n      .then((overallResultsData) => {\n        callback(raceReference, overallResultsData);\n      });\n  }\n\n  buildRaceData(raceReference, overallResultsData) {\n    this.raceModel = new _model_RaceModel__WEBPACK_IMPORTED_MODULE_1__.RaceModel(raceReference);\n\n    this.raceModel.raceResults.ageGroupsList = this.getAgeGroups(overallResultsData);\n\n    debugger;\n  }\n\n  getAgeGroups(overallResultsData) {\n    const ageGroupsList = [];\n\n    overallResultsData.forEach((result) => {\n      let ageGroupObject = _model_AgeGroups__WEBPACK_IMPORTED_MODULE_0__.AgeGroups.officialAgeGroups.find((officialAgeGroup) => {\n        return result.ageGroup == officialAgeGroup.name;\n      });\n\n      if (!ageGroupsList.includes(ageGroupObject)) {\n        ageGroupsList.push(ageGroupObject);\n      }\n    });\n\n    ageGroupsList.sort((a, b) => {\n      return a.order - b.order;\n    });\n\n    return ageGroupsList;\n  }\n\n  buildRaceResultsView(raceResults) {\n    new _view_RaceResultsView__WEBPACK_IMPORTED_MODULE_2__.RaceResultsView.displayResults();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/service/RaceService.js?");

/***/ }),

/***/ "./src/js/utils/ResultsTable.js":
/*!**************************************!*\
  !*** ./src/js/utils/ResultsTable.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResultsTable\": () => (/* binding */ ResultsTable)\n/* harmony export */ });\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\nclass ResultsTable {\n  static getResultsTableLabels(resultsData) {\n    return Object.keys(resultsData[0]);\n  }\n\n  static populateResultsTableHead(table, columnsLabel) {\n    let thead = table.createTHead();\n    let tr = thead.insertRow();\n\n    columnsLabel.forEach((label) => {\n      let th = document.createElement('th');\n      let value = document.createTextNode(label);\n      th.appendChild(value);\n      tr.appendChild(th);\n    });\n  }\n\n  static populateResultsTableBody(table, resultsData) {\n    resultsData.forEach((element) => {\n      let tr = table.insertRow();\n\n      for (const key in element) {\n        let td = tr.insertCell();\n        let value = document.createTextNode(element[key]);\n        td.appendChild(value);\n      }\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/utils/ResultsTable.js?");

/***/ }),

/***/ "./src/js/utils/ResultsTabs.js":
/*!*************************************!*\
  !*** ./src/js/utils/ResultsTabs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResultsTabs\": () => (/* binding */ ResultsTabs)\n/* harmony export */ });\n/* harmony import */ var _ResultsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsTable */ \"./src/js/utils/ResultsTable.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\nclass ResultsTabs {\n  static populateTabsList(ageGroupsResultsTabList, overallResultsReference, ageGroupsList) {\n    ageGroupsList.forEach((ageGroup) => {\n      const a = document.createElement('a');\n      a.appendChild(document.createTextNode(ageGroup.name));\n\n      const li = document.createElement('li');\n      li.appendChild(a);\n      li.setAttribute('data-target', (overallResultsReference + ageGroup.name).toLowerCase());\n      ageGroupsResultsTabList.appendChild(li);\n    });\n\n    ageGroupsResultsTabList.firstChild.classList.add('is-active');\n  }\n\n  static populateTabsContent(ageGroupsResultsTabContent, overallResultsReference, ageGroupsList, resultsMap) {\n    ageGroupsList.forEach((ageGroup) => {\n      const table = document.createElement('table');\n      table.classList.add('table', 'is-fullwidth', 'is-striped', 'is-narrow', 'is-hoverable');\n      _ResultsTable__WEBPACK_IMPORTED_MODULE_0__.ResultsTable.populateResultsTableBody(table, resultsMap.get(overallResultsReference + '-' + ageGroup.name));\n      _ResultsTable__WEBPACK_IMPORTED_MODULE_0__.ResultsTable.populateResultsTableHead(\n        table,\n        _ResultsTable__WEBPACK_IMPORTED_MODULE_0__.ResultsTable.getResultsTableLabels(resultsMap.get(overallResultsReference))\n      );\n\n      const div = document.createElement('div');\n      div.classList.add('table-container');\n      div.appendChild(table);\n\n      const section = document.createElement('section');\n      section.id = (overallResultsReference + ageGroup.name).toLowerCase();\n      section.classList.add('tab-content');\n\n      section.appendChild(div);\n\n      ageGroupsResultsTabContent.appendChild(section);\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/utils/ResultsTabs.js?");

/***/ }),

/***/ "./src/js/view/RaceResultsView.js":
/*!****************************************!*\
  !*** ./src/js/view/RaceResultsView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RaceResultsView\": () => (/* binding */ RaceResultsView)\n/* harmony export */ });\n/* harmony import */ var _utils_ResultsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ResultsTable */ \"./src/js/utils/ResultsTable.js\");\n/* harmony import */ var _utils_ResultsTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ResultsTabs */ \"./src/js/utils/ResultsTabs.js\");\n/* harmony import */ var _model_AgeGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/AgeGroups */ \"./src/js/model/AgeGroups.js\");\n/* harmony import */ var _bulma_BulmaTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bulma/BulmaTabs */ \"./src/js/bulma/BulmaTabs.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\n\n\n\nclass RaceResultsView {\n  static SAMPLE_DATA_FOLDER_URL =\n    'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/data/';\n\n  resultsMap = new Map();\n  resultsTableLabels = new Map();\n  ageGroupsMap = new Map();\n\n  getUrl(overallResultsReference) {\n    return RaceResultsView.SAMPLE_DATA_FOLDER_URL + overallResultsReference + '.json';\n  }\n\n  getOverallResults(overallResultsReference, callbackFunction) {\n    const url = this.getUrl(overallResultsReference);\n\n    fetch(url)\n      .then((response) => {\n        if (!response.ok) throw Error(response.statusText);\n        return response.json();\n      })\n      .then((overallResultsData) => {\n        this.resultsMap.set(overallResultsReference, overallResultsData);\n        callbackFunction(overallResultsReference);\n      });\n  }\n\n  buildResultsView(overallResultsReference) {\n    this.buildOverallResultsView(overallResultsReference);\n\n    this.setAgeGroups(overallResultsReference);\n    this.setAgeGroupsResults(overallResultsReference);\n\n    this.buildAgeGroupsResultsView(overallResultsReference);\n  }\n\n  setAgeGroups(overallResultsReference) {\n    const overallResultsData = this.resultsMap.get(overallResultsReference);\n    const officialAgeGroups = _model_AgeGroups__WEBPACK_IMPORTED_MODULE_2__.AgeGroups.officialAgeGroups;\n    const ageGroups = [];\n\n    overallResultsData.forEach((result) => {\n      let ageGroupObject = officialAgeGroups.find((element) => {\n        return element.name == result.ageGroup;\n      });\n\n      if (!ageGroups.includes(ageGroupObject)) {\n        ageGroups.push(ageGroupObject);\n      }\n    });\n\n    ageGroups.sort((a, b) => {\n      return a.order - b.order;\n    });\n\n    this.ageGroupsMap.set(overallResultsReference, ageGroups);\n  }\n\n  setAgeGroupsResults(overallResultsReference) {\n    const ageGroups = this.ageGroupsMap.get(overallResultsReference);\n\n    ageGroups.forEach((ageGroup) => {\n      const ageGroupResultsData = this.resultsMap.get(overallResultsReference).filter((element) => {\n        return element.ageGroup == ageGroup.name;\n      });\n\n      this.sortResultsDataByRank(ageGroupResultsData);\n\n      this.setAgeGroupRank(ageGroupResultsData);\n\n      this.resultsMap.set(overallResultsReference + '-' + ageGroup.name, ageGroupResultsData);\n    });\n  }\n\n  sortResultsDataByRank(resultsData) {\n    resultsData.sort((a, b) => {\n      return a.rank - b.rank;\n    });\n  }\n\n  setAgeGroupRank(resultsData) {\n    let rank = 1;\n    resultsData.forEach((result) => {\n      if (typeof result.rank == 'number') {\n        result.rank = rank;\n        rank = rank + 1;\n      }\n    });\n  }\n\n  buildOverallResultsView(overallResultsReference) {\n    const overallResultsTable = document.querySelector(`[data-result-reference='${overallResultsReference}']`);\n    const overallResultsData = this.resultsMap.get(overallResultsReference);\n\n    this.resultsTableLabels.set(overallResultsReference, _utils_ResultsTable__WEBPACK_IMPORTED_MODULE_0__.ResultsTable.getResultsTableLabels(overallResultsData));\n    _utils_ResultsTable__WEBPACK_IMPORTED_MODULE_0__.ResultsTable.populateResultsTableBody(overallResultsTable, overallResultsData);\n    _utils_ResultsTable__WEBPACK_IMPORTED_MODULE_0__.ResultsTable.populateResultsTableHead(overallResultsTable, this.resultsTableLabels.get(overallResultsReference));\n  }\n\n  buildAgeGroupsResultsView(overallResultsReference) {\n    const ageGroupsResultsTabList = document.getElementById(overallResultsReference + '-LST');\n    const ageGroupsResultsTabContent = document.getElementById(overallResultsReference + '-DIV');\n    const ageGroupsList = this.ageGroupsMap.get(overallResultsReference);\n\n    _utils_ResultsTabs__WEBPACK_IMPORTED_MODULE_1__.ResultsTabs.populateTabsList(ageGroupsResultsTabList, overallResultsReference, ageGroupsList);\n    _utils_ResultsTabs__WEBPACK_IMPORTED_MODULE_1__.ResultsTabs.populateTabsContent(\n      ageGroupsResultsTabContent,\n      overallResultsReference,\n      ageGroupsList,\n      this.resultsMap\n    );\n\n    new _bulma_BulmaTabs__WEBPACK_IMPORTED_MODULE_3__.BulmaTabs(ageGroupsResultsTabList.children, ageGroupsResultsTabContent.children).init();\n  }\n\n  displayResults() {\n    const overallResultsTables = Array.prototype.slice.call(document.querySelectorAll('[data-result-reference]'), 0);\n\n    if (overallResultsTables.length > 0) {\n      overallResultsTables.forEach((table) => {\n        const overallResultsReference = table.getAttribute('data-result-reference');\n        this.getOverallResults(overallResultsReference, this.buildResultsView.bind(this));\n      });\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/view/RaceResultsView.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;