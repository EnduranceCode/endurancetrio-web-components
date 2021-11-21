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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BulmaTabs\": () => (/* binding */ BulmaTabs)\n/* harmony export */ });\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\nclass BulmaTabs {\n  constructor(tabsOptionsList, tabsContainersList) {\n    this.tabsOptionsList = tabsOptionsList;\n    this.tabsContainersList = tabsContainersList;\n  }\n\n  init() {\n    let activeTabDataTarget;\n    let tabsDataTargetList = [];\n\n    Array.from(this.tabsOptionsList).forEach((tabsOption) => {\n      tabsDataTargetList.push(tabsOption.dataset.target);\n\n      tabsOption.addEventListener('click', () => {\n        this.toggle(tabsOption.dataset.target);\n      });\n\n      if (tabsOption.className.includes('is-active')) {\n        activeTabDataTarget = tabsOption.dataset.target;\n      }\n\n      const activeTabDataTargetFromUrl = window.location.hash.substring(1);\n      if (Array.from(this.tabsOptionsList).includes(activeTabDataTargetFromUrl)) {\n        activeTabDataTarget = activeTabDataTargetFromUrl;\n      }\n\n      this.toggle(activeTabDataTarget);\n    });\n\n    window.addEventListener('hashchange', () => {\n      activeTabDataTarget = window.location.hash.substring(1);\n\n      if (tabsDataTargetList.includes(activeTabDataTarget)) {\n        this.toggle(activeTabDataTarget);\n      }\n    });\n  }\n\n  toggle(dataTarget) {\n    Array.from(this.tabsContainersList).forEach((tabContainer) => {\n      tabContainer.style.display = tabContainer.id === dataTarget ? 'block' : 'none';\n      document\n        .querySelector(`[data-target=\"${tabContainer.id}\"]`)\n        .classList[tabContainer.id === dataTarget ? 'add' : 'remove']('is-active');\n    });\n\n    const windowUrl = new URL(document.URL);\n    windowUrl.hash = '#' + dataTarget;\n    document.location.href = windowUrl;\n\n    window.scroll(0, 0);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/bulma/BulmaTabs.js?");

/***/ }),

/***/ "./src/js/model/AgeGroups.js":
/*!***********************************!*\
  !*** ./src/js/model/AgeGroups.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AgeGroups\": () => (/* binding */ AgeGroups)\n/* harmony export */ });\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\nclass AgeGroups {\n  static officialTriathlonAgeGroups = [\n    { order: 1, name: 'BEN' },\n    { order: 2, name: 'INF' },\n    { order: 3, name: 'INI' },\n    { order: 4, name: 'JUV' },\n    { order: 5, name: 'CAD' },\n    { order: 6, name: 'JUN' },\n    { order: 7, name: 'ELITE' },\n    { order: 8, name: 'SUB23' },\n    { order: 9, name: 'SEN' },\n    { order: 10, name: 'V1' },\n    { order: 11, name: 'V2' },\n    { order: 12, name: 'V3' },\n    { order: 13, name: 'V4' },\n    { order: 14, name: 'V5' },\n    { order: 15, name: 'V6' },\n    { order: 16, name: 'V7' },\n    { order: 17, name: 'V7' },\n    { order: 18, name: 'V9' },\n    { order: 19, name: 'V10' },\n    { order: 19, name: '20-24' },\n    { order: 20, name: '25-29' },\n    { order: 21, name: '30-34' },\n    { order: 22, name: '35-39' },\n    { order: 23, name: '40-44' },\n    { order: 24, name: '45-49' },\n    { order: 25, name: '50-54' },\n    { order: 26, name: '55-59' },\n    { order: 27, name: '60-64' },\n    { order: 28, name: '65-69' },\n    { order: 29, name: '70-74' },\n    { order: 30, name: '75-79' },\n    { order: 31, name: '80-84' },\n    { order: 32, name: '85-89' },\n    { order: 33, name: '90-94' },\n    { order: 34, name: '95-99' },\n  ];\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/model/AgeGroups.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _service_RaceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/RaceService */ \"./src/js/service/RaceService.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\n\n\nconst raceComponents = Array.prototype.slice.call(document.querySelectorAll('[data-race-reference]'), 0);\n\nif (raceComponents.length > 0) {\n  raceComponents.forEach((component) => {\n    const raceReference = component.getAttribute('data-race-reference');\n    new _service_RaceService__WEBPACK_IMPORTED_MODULE_1__.RaceService().getResults(raceReference);\n  });\n}\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/script.js?");

/***/ }),

/***/ "./src/js/service/RaceService.js":
/*!***************************************!*\
  !*** ./src/js/service/RaceService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RaceService\": () => (/* binding */ RaceService)\n/* harmony export */ });\n/* harmony import */ var _model_AgeGroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/AgeGroups */ \"./src/js/model/AgeGroups.js\");\n/* harmony import */ var _model_RaceModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/RaceModel */ \"./src/js/model/RaceModel.js\");\n/* harmony import */ var _view_RaceResultsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/RaceResultsView */ \"./src/js/view/RaceResultsView.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\n\n\nclass RaceService {\n  static SAMPLE_DATA_FOLDER_URL =\n    'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/data/';\n\n  getResults(raceReference) {\n    this.getOverallResultsFromFile(raceReference, this.getRaceModel.bind(this));\n  }\n\n  getOverallResultsFromFile(raceReference, callback) {\n    const url = this.getUrl(raceReference);\n\n    fetch(url)\n      .then((response) => {\n        if (!response.ok) {\n          throw Error(response.statusText);\n        }\n        return response.json();\n      })\n      .then((overallResults) => {\n        callback(raceReference, overallResults);\n      });\n  }\n\n  getUrl(raceReference) {\n    return RaceService.SAMPLE_DATA_FOLDER_URL + raceReference + '.json';\n  }\n\n  getRaceModel(raceReference, overallResults) {\n    const raceModel = new _model_RaceModel__WEBPACK_IMPORTED_MODULE_1__.RaceModel(raceReference);\n    raceModel.results.overall = overallResults;\n\n    raceModel.ageGroupsList = this.getAgeGroups(overallResults);\n\n    /* Clone overallResults following the sugestion at https://stackoverflow.com/a/40283265 */\n    const overallResultsClone = overallResults.map((result) => {\n      return Object.assign({}, result);\n    });\n\n    raceModel.ageGroupsList.forEach((ageGroup) => {\n      const ageGroupResults = overallResultsClone.filter((result) => {\n        return result.ageGroup == ageGroup.name;\n      });\n\n      this.sortResultsDataByRank(ageGroupResults);\n      this.setAgeGroupRank(ageGroupResults);\n\n      raceModel.results[ageGroup.name] = ageGroupResults;\n    });\n\n    const raceResultsView = new _view_RaceResultsView__WEBPACK_IMPORTED_MODULE_2__.RaceResultsView(raceModel);\n    raceResultsView.render();\n  }\n\n  getAgeGroups(overallResultsData) {\n    const ageGroupsList = [];\n\n    overallResultsData.forEach((result) => {\n      const ageGroupObject = _model_AgeGroups__WEBPACK_IMPORTED_MODULE_0__.AgeGroups.officialTriathlonAgeGroups.find((officialAgeGroup) => {\n        return result.ageGroup == officialAgeGroup.name;\n      });\n\n      if (!ageGroupsList.includes(ageGroupObject)) {\n        ageGroupsList.push(ageGroupObject);\n      }\n    });\n\n    ageGroupsList.sort((a, b) => {\n      return a.order - b.order;\n    });\n\n    return ageGroupsList;\n  }\n\n  sortResultsDataByRank(resultsData) {\n    resultsData.sort((a, b) => {\n      return a.rank - b.rank;\n    });\n  }\n\n  setAgeGroupRank(resultsData) {\n    let rank = 1;\n    resultsData.forEach((result) => {\n      if (typeof result.rank == 'number') {\n        result.rank = rank;\n        rank = rank + 1;\n      }\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/service/RaceService.js?");

/***/ }),

/***/ "./src/js/vendor/naturalSort.js":
/*!**************************************!*\
  !*** ./src/js/vendor/naturalSort.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable */\n\n/*\n * Natural Sort algorithm for Javascript - Version 0.8.1 - Released under MIT license\n * Author: Jim Palmer (based on chunking idea from Dave Koelle)\n *\n * https://github.com/overset/javascript-natural-sort\n */\n\nfunction naturalSort (a, b) {\n    var re = /(^([+\\-]?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?(?=\\D|\\s|$))|^0x[\\da-fA-F]+$|\\d+)/g,\n        sre = /^\\s+|\\s+$/g,   // trim pre-post whitespace\n        snre = /\\s+/g,        // normalize all whitespace to single ' ' character\n        dre = /(^([\\w ]+,?[\\w ]+)?[\\w ]+,?[\\w ]+\\d+:\\d+(:\\d+)?[\\w ]?|^\\d{1,4}[\\/\\-]\\d{1,4}[\\/\\-]\\d{1,4}|^\\w+, \\w+ \\d+, \\d{4})/,\n        hre = /^0x[0-9a-f]+$/i,\n        ore = /^0/,\n        i = function(s) {\n            return (naturalSort.insensitive && ('' + s).toLowerCase() || '' + s).replace(sre, '');\n        },\n        // convert all to strings strip whitespace\n        x = i(a),\n        y = i(b),\n        // chunk/tokenize\n        xN = x.replace(re, '\\0$1\\0').replace(/\\0$/,'').replace(/^\\0/,'').split('\\0'),\n        yN = y.replace(re, '\\0$1\\0').replace(/\\0$/,'').replace(/^\\0/,'').split('\\0'),\n        // numeric, hex or date detection\n        xD = parseInt(x.match(hre), 16) || (xN.length !== 1 && Date.parse(x)),\n        yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null,\n        normChunk = function(s, l) {\n            // normalize spaces; find floats not starting with '0', string or 0 if not defined (Clint Priest)\n            return (!s.match(ore) || l == 1) && parseFloat(s) || s.replace(snre, ' ').replace(sre, '') || 0;\n        },\n        oFxNcL, oFyNcL;\n    // first try and sort Hex codes or Dates\n    if (yD) {\n        if (xD < yD) { return -1; }\n        else if (xD > yD) { return 1; }\n    }\n    // natural sorting through split numeric strings and default strings\n    for(var cLoc = 0, xNl = xN.length, yNl = yN.length, numS = Math.max(xNl, yNl); cLoc < numS; cLoc++) {\n        oFxNcL = normChunk(xN[cLoc] || '', xNl);\n        oFyNcL = normChunk(yN[cLoc] || '', yNl);\n        // handle numeric vs string comparison - number < string - (Kyle Adams)\n        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {\n            return isNaN(oFxNcL) ? 1 : -1;\n        }\n        // if unicode use locale comparison\n        if (/[^\\x00-\\x80]/.test(oFxNcL + oFyNcL) && oFxNcL.localeCompare) {\n            var comp = oFxNcL.localeCompare(oFyNcL);\n            return comp / Math.abs(comp);\n        }\n        if (oFxNcL < oFyNcL) { return -1; }\n        else if (oFxNcL > oFyNcL) { return 1; }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (naturalSort);\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/vendor/naturalSort.js?");

/***/ }),

/***/ "./src/js/view/RaceResultsTabView.js":
/*!*******************************************!*\
  !*** ./src/js/view/RaceResultsTabView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RaceResultsTabView\": () => (/* binding */ RaceResultsTabView)\n/* harmony export */ });\n/* harmony import */ var _RaceResultsTableView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RaceResultsTableView */ \"./src/js/view/RaceResultsTableView.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\nclass RaceResultsTabView {\n  static builTabsMenu(raceModel) {\n    const raceReference = raceModel.raceReference;\n\n    const tabsMenu = document.createElement('div');\n    tabsMenu.classList.add('tabs', 'is-boxed');\n\n    const ul = document.createElement('ul');\n\n    const li = document.createElement('li');\n    li.setAttribute('data-target', (raceReference + '-' + 'absolutos').toLowerCase());\n    li.classList.add('is-active');\n\n    const a = document.createElement('a');\n\n    a.appendChild(document.createTextNode('Absolutos'));\n    li.appendChild(a);\n    ul.appendChild(li);\n\n    raceModel.ageGroupsList.forEach((ageGroup) => {\n      const li = document.createElement('li');\n      li.setAttribute('data-target', (raceReference + '-' + ageGroup.name).toLowerCase());\n\n      const a = document.createElement('a');\n\n      a.appendChild(document.createTextNode(ageGroup.name));\n      li.appendChild(a);\n      ul.appendChild(li);\n    });\n\n    tabsMenu.appendChild(ul);\n    return tabsMenu;\n  }\n\n  static buildTabsContainer(raceModel) {\n    const raceReference = raceModel.raceReference;\n    const ageGroupsList = raceModel.ageGroupsList;\n    const overallResults = raceModel.results.overall;\n\n    const tabsContainer = document.createElement('div');\n\n    const section = document.createElement('section');\n    section.id = (raceReference + '-' + 'absolutos').toLowerCase();\n\n    const resultsTable = _RaceResultsTableView__WEBPACK_IMPORTED_MODULE_0__.RaceResultsTableView.buildResultsTable(overallResults);\n\n    section.appendChild(resultsTable);\n    tabsContainer.appendChild(section);\n\n    ageGroupsList.forEach((ageGroup) => {\n      const section = document.createElement('section');\n      section.id = (raceReference + '-' + ageGroup.name).toLowerCase();\n\n      const resultsTable = _RaceResultsTableView__WEBPACK_IMPORTED_MODULE_0__.RaceResultsTableView.buildResultsTable(raceModel.results[ageGroup.name]);\n\n      section.appendChild(resultsTable);\n      tabsContainer.appendChild(section);\n    });\n\n    return tabsContainer;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/view/RaceResultsTabView.js?");

/***/ }),

/***/ "./src/js/view/RaceResultsTableView.js":
/*!*********************************************!*\
  !*** ./src/js/view/RaceResultsTableView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RaceResultsTableView\": () => (/* binding */ RaceResultsTableView)\n/* harmony export */ });\n/* harmony import */ var _vendor_naturalSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/naturalSort */ \"./src/js/vendor/naturalSort.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\nclass RaceResultsTableView {\n  static buildResultsTable(resultsData) {\n    const tableContainer = document.createElement('div');\n    tableContainer.classList.add('table-container');\n\n    const table = document.createElement('table');\n    table.classList.add('table', 'is-fullwidth', 'is-striped', 'is-narrow', 'is-hoverable');\n\n    RaceResultsTableView.appendResultsTableBody(table, resultsData);\n\n    const resultsTableLabels = RaceResultsTableView.getResultsTableLabels(resultsData);\n    RaceResultsTableView.appendResultsTableHead(table, resultsTableLabels);\n\n    tableContainer.appendChild(table);\n\n    return tableContainer;\n  }\n\n  static getResultsTableLabels(resultsData) {\n    return Object.keys(resultsData[0]);\n  }\n\n  static appendResultsTableHead(table, columnsLabels) {\n    const thead = table.createTHead();\n    const tr = thead.insertRow();\n\n    columnsLabels.forEach((label, index) => {\n      const th = document.createElement('th');\n\n      if (index == 0) {\n        th.classList.add('results-table__th', 'results-table__th--sort-ascending');\n      } else {\n        th.classList.add('results-table__th', 'results-table__th--sort');\n      }\n\n      const textNode = document.createTextNode(label);\n      th.appendChild(textNode);\n      tr.appendChild(th);\n    });\n\n    RaceResultsTableView.enableRowSorting(table, tr.children);\n  }\n\n  static enableRowSorting(table, theadCells) {\n    for (let th of theadCells) {\n      th.onclick = () => {\n        const tableBody = table.tBodies[0];\n        const tableRows = tableBody.rows;\n\n        const sortDirection = th.classList.contains('results-table__th--sort-ascending') ? -1 : 1;\n        RaceResultsTableView.resetTheadCellsIcon(theadCells);\n\n        if (sortDirection == -1) {\n          th.classList.add('results-table__th--sort-descending');\n        } else {\n          th.classList.add('results-table__th--sort-ascending');\n        }\n\n        for (let tr of tableRows) {\n          Array.prototype.slice\n            .call(tableRows)\n            .sort((tr1, tr2) => {\n              const cellIndex = th.cellIndex;\n              _vendor_naturalSort__WEBPACK_IMPORTED_MODULE_0__[\"default\"].insensitive = true;\n              return sortDirection * (0,_vendor_naturalSort__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tr1.cells[cellIndex].textContent, tr2.cells[cellIndex].textContent);\n            })\n            .forEach((tr) => {\n              tableBody.appendChild(tableBody.removeChild(tr));\n            });\n        }\n      };\n    }\n  }\n\n  static resetTheadCellsIcon(theadCells) {\n    Array.from(theadCells).forEach((th) => {\n      if (\n        th.classList.contains('results-table__th--sort-ascending') ||\n        th.classList.contains('results-table__th--sort-descending')\n      ) {\n        th.classList.remove('results-table__th--sort-ascending', 'results-table__th--sort-descending');\n        th.classList.add('results-table__th--sort');\n      }\n    });\n  }\n\n  static appendResultsTableBody(table, resultsData) {\n    resultsData.forEach((result) => {\n      const tr = table.insertRow();\n\n      for (const key in result) {\n        const td = tr.insertCell();\n        const textNode = document.createTextNode(result[key]);\n        td.appendChild(textNode);\n      }\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/view/RaceResultsTableView.js?");

/***/ }),

/***/ "./src/js/view/RaceResultsView.js":
/*!****************************************!*\
  !*** ./src/js/view/RaceResultsView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RaceResultsView\": () => (/* binding */ RaceResultsView)\n/* harmony export */ });\n/* harmony import */ var _bulma_BulmaTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bulma/BulmaTabs */ \"./src/js/bulma/BulmaTabs.js\");\n/* harmony import */ var _RaceResultsTabView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RaceResultsTabView */ \"./src/js/view/RaceResultsTabView.js\");\n/*!\n * EnduranceTrio Race Results\n * Copyright 2021 Ricardo do Canto\n * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)\n */\n\n\n\n\nclass RaceResultsView {\n  raceModel;\n\n  constructor(raceModel) {\n    this.raceModel = raceModel;\n  }\n\n  render() {\n    const tabsOptions = _RaceResultsTabView__WEBPACK_IMPORTED_MODULE_1__.RaceResultsTabView.builTabsMenu(this.raceModel);\n    const tabsContainers = _RaceResultsTabView__WEBPACK_IMPORTED_MODULE_1__.RaceResultsTabView.buildTabsContainer(this.raceModel);\n\n    const raceResultContainer = document.querySelector(`[data-race-reference=\"${this.raceModel.raceReference}\"]`);\n\n    const progressIndicator = raceResultContainer.querySelector('.progress');\n    if (progressIndicator) {\n      progressIndicator.remove();\n    }\n\n    raceResultContainer.appendChild(tabsOptions);\n    raceResultContainer.appendChild(tabsContainers);\n\n    const bulmaTabs = new _bulma_BulmaTabs__WEBPACK_IMPORTED_MODULE_0__.BulmaTabs(tabsOptions.firstChild.children, tabsContainers.children);\n    bulmaTabs.init();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://endurancetrio-race-results/./src/js/view/RaceResultsView.js?");

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