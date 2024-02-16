/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const about = () => {
  const aboutPage = document.createElement("div");
  aboutPage.innerHTML = `<address>
  Written by <a href="https://github.com/ivan-s-s">Ivan S</a>.
  <br>Visit us at: Example.com<br>
  Street Box 564, Dangoland<br>
  Serbia, Beograd
  </address>`;

  return aboutPage;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DANGO_ARR: () => (/* binding */ DANGO_ARR),
/* harmony export */   DANGO_OBJ: () => (/* binding */ DANGO_OBJ)
/* harmony export */ });
/* harmony import */ var _assets_dango_041_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/dango-041.jpg */ "./src/assets/dango-041.jpg");
/* harmony import */ var _assets_dango_042_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/dango-042.jpg */ "./src/assets/dango-042.jpg");
/* harmony import */ var _assets_dango_043_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/dango-043.jpg */ "./src/assets/dango-043.jpg");
/* harmony import */ var _assets_dango_051_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/dango-051.jpg */ "./src/assets/dango-051.jpg");
/* harmony import */ var _assets_dango_052_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/dango-052.jpg */ "./src/assets/dango-052.jpg");
/* harmony import */ var _assets_dango_053_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/dango-053.jpg */ "./src/assets/dango-053.jpg");
/* harmony import */ var _assets_dango_061_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/dango-061.jpeg */ "./src/assets/dango-061.jpeg");
/* harmony import */ var _assets_dango_062_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/dango-062.jpg */ "./src/assets/dango-062.jpg");
/* harmony import */ var _assets_dango_063_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/dango-063.jpg */ "./src/assets/dango-063.jpg");
/* harmony import */ var _assets_dango_071_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/dango-071.jpg */ "./src/assets/dango-071.jpg");
/* harmony import */ var _assets_dango_072_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/dango-072.jpg */ "./src/assets/dango-072.jpg");
/* harmony import */ var _assets_dango_073_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/dango-073.jpg */ "./src/assets/dango-073.jpg");
/* harmony import */ var _assets_dango_081_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/dango-081.jpg */ "./src/assets/dango-081.jpg");
/* harmony import */ var _assets_dango_082_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/dango-082.jpg */ "./src/assets/dango-082.jpg");
/* harmony import */ var _assets_dango_083_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/dango-083.jpg */ "./src/assets/dango-083.jpg");
/* harmony import */ var _assets_dango_091_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/dango-091.jpg */ "./src/assets/dango-091.jpg");
/* harmony import */ var _assets_dango_092_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/dango-092.jpg */ "./src/assets/dango-092.jpg");
/* harmony import */ var _assets_dango_093_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/dango-093.jpg */ "./src/assets/dango-093.jpg");



















const DANGO_ARR = ['Anko', 'Hanami', 'Kusa', 'Goma', 'Chichi', 'Tsukimi'];

const DANGO_OBJ = [
  {
    title: 'Anko',
    text: 'Anko dango is commonly covered with sweetened red bean paste. Ingredients other than azuki are used on rare occasions. Other toppings for anko include zunda made from edamame paste and kurumi (walnut) paste.',
    imgs: [_assets_dango_041_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_dango_042_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_dango_043_jpg__WEBPACK_IMPORTED_MODULE_2__],
  },
  {
    title: 'Hanami',
    text: 'Hanami dango also known as sanshoku dango is eaten during hanami. It has three colors (pink, white and green), and is traditionally made during sakura-viewing season, hence the name (hanami means "flower viewing"; hana meaning "flower", and mi meaning "to see"). The order of the three colored dumplings is said to represent the order in which cherry blossoms bloom. Pink represents cherry buds, white represents cherry blossoms in full bloom, and green represents leafy cherry blossoms after they have fallen.',
    imgs: [_assets_dango_051_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_dango_052_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_dango_053_jpg__WEBPACK_IMPORTED_MODULE_5__],
  },
  {
    title: 'Kusa',
    text: 'Kusa dango or yomogi dango is mixed leaves of yomogi, like kusa mochi. It is often covered with anko.',
    imgs: [_assets_dango_061_jpeg__WEBPACK_IMPORTED_MODULE_6__, _assets_dango_062_jpg__WEBPACK_IMPORTED_MODULE_7__, _assets_dango_063_jpg__WEBPACK_IMPORTED_MODULE_8__],
  },
  {
    title: 'Goma',
    text: 'Sesame seed balls or goma dango is a variety of Japanese sweet treats known as dango. These small rice flour balls are filled with sweet red beans (anko) on the inside, while their exterior is crispy due to the process of deep-frying – first at low temperatures, then at high temperatures near the end of frying.',
    imgs: [_assets_dango_071_jpg__WEBPACK_IMPORTED_MODULE_9__, _assets_dango_072_jpg__WEBPACK_IMPORTED_MODULE_10__, _assets_dango_073_jpg__WEBPACK_IMPORTED_MODULE_11__],
  },
  {
    title: 'Chichi',
    text: 'Chichi dango is a slightly sweet, light treat usually eaten as a dessert.',
    imgs: [_assets_dango_081_jpg__WEBPACK_IMPORTED_MODULE_12__, _assets_dango_082_jpg__WEBPACK_IMPORTED_MODULE_13__, _assets_dango_083_jpg__WEBPACK_IMPORTED_MODULE_14__],
  },
  {
    title: 'Tsukimi',
    text: 'Tsukimi dango is white dango to eat during Tsukimi. It is traditionally made during autumn full moon (Mid-Autumn Festival).',
    imgs: [_assets_dango_091_jpg__WEBPACK_IMPORTED_MODULE_15__, _assets_dango_092_jpg__WEBPACK_IMPORTED_MODULE_16__, _assets_dango_093_jpg__WEBPACK_IMPORTED_MODULE_17__],
  },
];

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openTab: () => (/* binding */ openTab)
/* harmony export */ });
function openTab(e) {
  let i, content, links;

  content = document.getElementsByClassName("tabcontent");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  links = document.getElementsByClassName("tablink");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }

  document.getElementById(e.target.textContent.split(' ')[0]).style.display = "flex";
  e.currentTarget.className += " active";
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_dango_011_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/dango-011.jpg */ "./src/assets/dango-011.jpg");


const home = () => {
  const homePage = document.createElement('div');
  homePage.className = 'home df'; // 2 classes!

  const textBox = document.createElement('div');
  textBox.className = 'home__box';

  const imgBox = document.createElement('div');
  imgBox.className = 'home__box df df-c'; // 3 classes!

  const title = document.createElement('h2');
  title.className = 'home__box-t';
  title.textContent = 'Dango';

  const paragraph = document.createElement('p');
  paragraph.className = 'home__box-p';
  paragraph.textContent = 'Dango is a Japanese dumpling made from rice flour mixed with uruchi rice flour and glutinous rice flour. It is different from the method of making mochi, which is made after steaming glutinous rice. Dango is usually finished round shaped, three to five dango are often served on a skewer (skewered dango pieces called kushi-dango). Generally, dango comes under the category of wagashi, and is often served with green tea. It is eaten year-round, but the different varieties are traditionally eaten in given seasons.';

  const button = document.createElement('button');
  button.className = 'home__box-b';
  button.textContent = 'Order ONLINE';

  const img = new Image();
  img.className = 'div-img__img';
  img.src = _assets_dango_011_jpg__WEBPACK_IMPORTED_MODULE_0__;
  
  textBox.append(title, paragraph, button);
  imgBox.append(img);
  
  homePage.append(textBox, imgBox);

  return homePage;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


const menu = () => {
  const menuPage = document.createElement('div');
  menuPage.className = 'menu';

  const tabContainer = document.createElement('div');
  tabContainer.className = 'menu__tab-box df df-c'; // 3 classes

  for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.DANGO_ARR.length; i++) {
    const tabBtn = document.createElement('button');
    tabBtn.className = 'tablink';

    if (_data__WEBPACK_IMPORTED_MODULE_0__.DANGO_ARR[i] === _data__WEBPACK_IMPORTED_MODULE_0__.DANGO_ARR[0]) {
      tabBtn.className = 'tablink active';
    }

    tabBtn.textContent = `${_data__WEBPACK_IMPORTED_MODULE_0__.DANGO_ARR[i]} dango`;
    tabContainer.append(tabBtn);
  }

  menuPage.append(tabContainer);
  
  for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ.length; i++) {
    const tabcontent = document.createElement('div');
    tabcontent.className = 'tabcontent';
    tabcontent.id = `${_data__WEBPACK_IMPORTED_MODULE_0__.DANGO_ARR[i]}`;

    const tabtitle = document.createElement('h3');
    tabtitle.className = 'tabcontent-title';
    tabtitle.textContent = `${_data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ[i].title} dango`;
    
    const tabtext = document.createElement('p');
    tabtext.className = 'tabcontent-text';
    tabtext.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ[i].text;

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';

    for (let y = 0; y < _data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ[i].imgs.length; y++) {
      const picture = new Image();
      picture.src = _data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ[i].imgs[y];
      picture.className = 'dancoImgTab';
      picture.setAttribute('alt', `${_data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ[i]} dango`);
    
      imgDiv.append(picture);
    };

    if (_data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ[i] === _data__WEBPACK_IMPORTED_MODULE_0__.DANGO_OBJ[0]) {
      tabcontent.style.display = 'flex';
    } 

    tabcontent.append(tabtitle, tabtext, imgDiv);
    menuPage.append(tabcontent);
  };

  return menuPage;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/assets/dango-011.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-011.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af73c616846c5c953e63.jpg";

/***/ }),

/***/ "./src/assets/dango-041.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-041.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a65d7e3263fab2d63688.jpg";

/***/ }),

/***/ "./src/assets/dango-042.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-042.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169951e5869ebbf1bec1.jpg";

/***/ }),

/***/ "./src/assets/dango-043.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-043.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "103a71379f4fba6e71cc.jpg";

/***/ }),

/***/ "./src/assets/dango-051.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-051.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5145db8faaf3819fd2e5.jpg";

/***/ }),

/***/ "./src/assets/dango-052.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-052.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cc7f70304f3debadfb3.jpg";

/***/ }),

/***/ "./src/assets/dango-053.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-053.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "306e0078818a17869a74.jpg";

/***/ }),

/***/ "./src/assets/dango-061.jpeg":
/*!***********************************!*\
  !*** ./src/assets/dango-061.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7162a7e559273b044539.jpeg";

/***/ }),

/***/ "./src/assets/dango-062.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-062.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "613aac0bf0559342aed0.jpg";

/***/ }),

/***/ "./src/assets/dango-063.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-063.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca31a92b757396b643f7.jpg";

/***/ }),

/***/ "./src/assets/dango-071.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-071.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff0d97528c29beda9a6a.jpg";

/***/ }),

/***/ "./src/assets/dango-072.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-072.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e6dbebbe7a1af450c19.jpg";

/***/ }),

/***/ "./src/assets/dango-073.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-073.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bb693fbbe2116fd5e66.jpg";

/***/ }),

/***/ "./src/assets/dango-081.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-081.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2627b74999f2e1d55519.jpg";

/***/ }),

/***/ "./src/assets/dango-082.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-082.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "583c6f55ba64d32eec7e.jpg";

/***/ }),

/***/ "./src/assets/dango-083.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-083.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1af4075d7a223df6ceae.jpg";

/***/ }),

/***/ "./src/assets/dango-091.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-091.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67c87b9f05b7c0df430c.jpg";

/***/ }),

/***/ "./src/assets/dango-092.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-092.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a58faa2d78c8df14bd45.jpg";

/***/ }),

/***/ "./src/assets/dango-093.jpg":
/*!**********************************!*\
  !*** ./src/assets/dango-093.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0573212f62109164805.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");





const content = document.querySelector('#content');

document.querySelectorAll(".navBtn").forEach((element) =>
  element.addEventListener("click", () => {
    const tabContent = element.textContent;
    switch (tabContent) {
      case "Menu":
        content.textContent = "";
        content.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
        const addBtnsListeners = document.querySelectorAll('.tablink');
        addBtnsListeners.forEach((btn) => btn.onclick = _functions__WEBPACK_IMPORTED_MODULE_0__.openTab);
        break;
      case "About":
        content.textContent = "";
        content.append((0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])());
        break;
      default:
        content.textContent = "";
        content.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
        break;
    }
  })
);

document.querySelector('#content').append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNEbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCc0M7QUFDWjtBQUNBO0FBQ0U7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFJO0FBQzNCO0FBQ0Esd0RBQXdELCtDQUFPO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMENBQTBDLGlEQUFJLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LTAxLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Byb2plY3QtMDEvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTAxLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTAxLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC0wMS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3QtMDEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC0wMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC0wMS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtMDEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LTAxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC0wMS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LTAxLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRQYWdlLmlubmVySFRNTCA9IGA8YWRkcmVzcz5cclxuICBXcml0dGVuIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaXZhbi1zLXNcIj5JdmFuIFM8L2E+LlxyXG4gIDxicj5WaXNpdCB1cyBhdDogRXhhbXBsZS5jb208YnI+XHJcbiAgU3RyZWV0IEJveCA1NjQsIERhbmdvbGFuZDxicj5cclxuICBTZXJiaWEsIEJlb2dyYWRcclxuICA8L2FkZHJlc3M+YDtcclxuXHJcbiAgcmV0dXJuIGFib3V0UGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiaW1wb3J0IGltZ18wMSBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDQxLmpwZ1wiO1xyXG5pbXBvcnQgaW1nXzAyIGZyb20gXCIuL2Fzc2V0cy9kYW5nby0wNDIuanBnXCI7XHJcbmltcG9ydCBpbWdfMDMgZnJvbSBcIi4vYXNzZXRzL2RhbmdvLTA0My5qcGdcIjtcclxuaW1wb3J0IGltZ18xMSBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDUxLmpwZ1wiO1xyXG5pbXBvcnQgaW1nXzEyIGZyb20gXCIuL2Fzc2V0cy9kYW5nby0wNTIuanBnXCI7XHJcbmltcG9ydCBpbWdfMTMgZnJvbSBcIi4vYXNzZXRzL2RhbmdvLTA1My5qcGdcIjtcclxuaW1wb3J0IGltZ18yMSBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDYxLmpwZWdcIjtcclxuaW1wb3J0IGltZ18yMiBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDYyLmpwZ1wiO1xyXG5pbXBvcnQgaW1nXzIzIGZyb20gXCIuL2Fzc2V0cy9kYW5nby0wNjMuanBnXCI7XHJcbmltcG9ydCBpbWdfMzEgZnJvbSBcIi4vYXNzZXRzL2RhbmdvLTA3MS5qcGdcIjtcclxuaW1wb3J0IGltZ18zMiBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDcyLmpwZ1wiO1xyXG5pbXBvcnQgaW1nXzMzIGZyb20gXCIuL2Fzc2V0cy9kYW5nby0wNzMuanBnXCI7XHJcbmltcG9ydCBpbWdfNDEgZnJvbSBcIi4vYXNzZXRzL2RhbmdvLTA4MS5qcGdcIjtcclxuaW1wb3J0IGltZ180MiBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDgyLmpwZ1wiO1xyXG5pbXBvcnQgaW1nXzQzIGZyb20gXCIuL2Fzc2V0cy9kYW5nby0wODMuanBnXCI7XHJcbmltcG9ydCBpbWdfNTEgZnJvbSBcIi4vYXNzZXRzL2RhbmdvLTA5MS5qcGdcIjtcclxuaW1wb3J0IGltZ181MiBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDkyLmpwZ1wiO1xyXG5pbXBvcnQgaW1nXzUzIGZyb20gXCIuL2Fzc2V0cy9kYW5nby0wOTMuanBnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgREFOR09fQVJSID0gWydBbmtvJywgJ0hhbmFtaScsICdLdXNhJywgJ0dvbWEnLCAnQ2hpY2hpJywgJ1RzdWtpbWknXTtcclxuXHJcbmV4cG9ydCBjb25zdCBEQU5HT19PQkogPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBbmtvJyxcclxuICAgIHRleHQ6ICdBbmtvIGRhbmdvIGlzIGNvbW1vbmx5IGNvdmVyZWQgd2l0aCBzd2VldGVuZWQgcmVkIGJlYW4gcGFzdGUuIEluZ3JlZGllbnRzIG90aGVyIHRoYW4gYXp1a2kgYXJlIHVzZWQgb24gcmFyZSBvY2Nhc2lvbnMuIE90aGVyIHRvcHBpbmdzIGZvciBhbmtvIGluY2x1ZGUgenVuZGEgbWFkZSBmcm9tIGVkYW1hbWUgcGFzdGUgYW5kIGt1cnVtaSAod2FsbnV0KSBwYXN0ZS4nLFxyXG4gICAgaW1nczogW2ltZ18wMSwgaW1nXzAyLCBpbWdfMDNdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdIYW5hbWknLFxyXG4gICAgdGV4dDogJ0hhbmFtaSBkYW5nbyBhbHNvIGtub3duIGFzIHNhbnNob2t1IGRhbmdvIGlzIGVhdGVuIGR1cmluZyBoYW5hbWkuIEl0IGhhcyB0aHJlZSBjb2xvcnMgKHBpbmssIHdoaXRlIGFuZCBncmVlbiksIGFuZCBpcyB0cmFkaXRpb25hbGx5IG1hZGUgZHVyaW5nIHNha3VyYS12aWV3aW5nIHNlYXNvbiwgaGVuY2UgdGhlIG5hbWUgKGhhbmFtaSBtZWFucyBcImZsb3dlciB2aWV3aW5nXCI7IGhhbmEgbWVhbmluZyBcImZsb3dlclwiLCBhbmQgbWkgbWVhbmluZyBcInRvIHNlZVwiKS4gVGhlIG9yZGVyIG9mIHRoZSB0aHJlZSBjb2xvcmVkIGR1bXBsaW5ncyBpcyBzYWlkIHRvIHJlcHJlc2VudCB0aGUgb3JkZXIgaW4gd2hpY2ggY2hlcnJ5IGJsb3Nzb21zIGJsb29tLiBQaW5rIHJlcHJlc2VudHMgY2hlcnJ5IGJ1ZHMsIHdoaXRlIHJlcHJlc2VudHMgY2hlcnJ5IGJsb3Nzb21zIGluIGZ1bGwgYmxvb20sIGFuZCBncmVlbiByZXByZXNlbnRzIGxlYWZ5IGNoZXJyeSBibG9zc29tcyBhZnRlciB0aGV5IGhhdmUgZmFsbGVuLicsXHJcbiAgICBpbWdzOiBbaW1nXzExLCBpbWdfMTIsIGltZ18xM10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0t1c2EnLFxyXG4gICAgdGV4dDogJ0t1c2EgZGFuZ28gb3IgeW9tb2dpIGRhbmdvIGlzIG1peGVkIGxlYXZlcyBvZiB5b21vZ2ksIGxpa2Uga3VzYSBtb2NoaS4gSXQgaXMgb2Z0ZW4gY292ZXJlZCB3aXRoIGFua28uJyxcclxuICAgIGltZ3M6IFtpbWdfMjEsIGltZ18yMiwgaW1nXzIzXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnR29tYScsXHJcbiAgICB0ZXh0OiAnU2VzYW1lIHNlZWQgYmFsbHMgb3IgZ29tYSBkYW5nbyBpcyBhIHZhcmlldHkgb2YgSmFwYW5lc2Ugc3dlZXQgdHJlYXRzIGtub3duIGFzIGRhbmdvLiBUaGVzZSBzbWFsbCByaWNlIGZsb3VyIGJhbGxzIGFyZSBmaWxsZWQgd2l0aCBzd2VldCByZWQgYmVhbnMgKGFua28pIG9uIHRoZSBpbnNpZGUsIHdoaWxlIHRoZWlyIGV4dGVyaW9yIGlzIGNyaXNweSBkdWUgdG8gdGhlIHByb2Nlc3Mgb2YgZGVlcC1mcnlpbmcg4oCTIGZpcnN0IGF0IGxvdyB0ZW1wZXJhdHVyZXMsIHRoZW4gYXQgaGlnaCB0ZW1wZXJhdHVyZXMgbmVhciB0aGUgZW5kIG9mIGZyeWluZy4nLFxyXG4gICAgaW1nczogW2ltZ18zMSwgaW1nXzMyLCBpbWdfMzNdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDaGljaGknLFxyXG4gICAgdGV4dDogJ0NoaWNoaSBkYW5nbyBpcyBhIHNsaWdodGx5IHN3ZWV0LCBsaWdodCB0cmVhdCB1c3VhbGx5IGVhdGVuIGFzIGEgZGVzc2VydC4nLFxyXG4gICAgaW1nczogW2ltZ180MSwgaW1nXzQyLCBpbWdfNDNdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdUc3VraW1pJyxcclxuICAgIHRleHQ6ICdUc3VraW1pIGRhbmdvIGlzIHdoaXRlIGRhbmdvIHRvIGVhdCBkdXJpbmcgVHN1a2ltaS4gSXQgaXMgdHJhZGl0aW9uYWxseSBtYWRlIGR1cmluZyBhdXR1bW4gZnVsbCBtb29uIChNaWQtQXV0dW1uIEZlc3RpdmFsKS4nLFxyXG4gICAgaW1nczogW2ltZ181MSwgaW1nXzUyLCBpbWdfNTNdLFxyXG4gIH0sXHJcbl07IiwiZXhwb3J0IGZ1bmN0aW9uIG9wZW5UYWIoZSkge1xyXG4gIGxldCBpLCBjb250ZW50LCBsaW5rcztcclxuXHJcbiAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxpbmtcIik7XHJcbiAgZm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsaW5rc1tpXS5jbGFzc05hbWUgPSBsaW5rc1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC50ZXh0Q29udGVudC5zcGxpdCgnICcpWzBdKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxufSIsImltcG9ydCBiZyBmcm9tIFwiLi9hc3NldHMvZGFuZ28tMDExLmpwZ1wiO1xyXG5cclxuY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvbWVQYWdlLmNsYXNzTmFtZSA9ICdob21lIGRmJzsgLy8gMiBjbGFzc2VzIVxyXG5cclxuICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGV4dEJveC5jbGFzc05hbWUgPSAnaG9tZV9fYm94JztcclxuXHJcbiAgY29uc3QgaW1nQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW1nQm94LmNsYXNzTmFtZSA9ICdob21lX19ib3ggZGYgZGYtYyc7IC8vIDMgY2xhc3NlcyFcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdob21lX19ib3gtdCc7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnRGFuZ28nO1xyXG5cclxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcGFyYWdyYXBoLmNsYXNzTmFtZSA9ICdob21lX19ib3gtcCc7XHJcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0RhbmdvIGlzIGEgSmFwYW5lc2UgZHVtcGxpbmcgbWFkZSBmcm9tIHJpY2UgZmxvdXIgbWl4ZWQgd2l0aCB1cnVjaGkgcmljZSBmbG91ciBhbmQgZ2x1dGlub3VzIHJpY2UgZmxvdXIuIEl0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBtZXRob2Qgb2YgbWFraW5nIG1vY2hpLCB3aGljaCBpcyBtYWRlIGFmdGVyIHN0ZWFtaW5nIGdsdXRpbm91cyByaWNlLiBEYW5nbyBpcyB1c3VhbGx5IGZpbmlzaGVkIHJvdW5kIHNoYXBlZCwgdGhyZWUgdG8gZml2ZSBkYW5nbyBhcmUgb2Z0ZW4gc2VydmVkIG9uIGEgc2tld2VyIChza2V3ZXJlZCBkYW5nbyBwaWVjZXMgY2FsbGVkIGt1c2hpLWRhbmdvKS4gR2VuZXJhbGx5LCBkYW5nbyBjb21lcyB1bmRlciB0aGUgY2F0ZWdvcnkgb2Ygd2FnYXNoaSwgYW5kIGlzIG9mdGVuIHNlcnZlZCB3aXRoIGdyZWVuIHRlYS4gSXQgaXMgZWF0ZW4geWVhci1yb3VuZCwgYnV0IHRoZSBkaWZmZXJlbnQgdmFyaWV0aWVzIGFyZSB0cmFkaXRpb25hbGx5IGVhdGVuIGluIGdpdmVuIHNlYXNvbnMuJztcclxuXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLmNsYXNzTmFtZSA9ICdob21lX19ib3gtYic7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIE9OTElORSc7XHJcblxyXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5jbGFzc05hbWUgPSAnZGl2LWltZ19faW1nJztcclxuICBpbWcuc3JjID0gYmc7XHJcbiAgXHJcbiAgdGV4dEJveC5hcHBlbmQodGl0bGUsIHBhcmFncmFwaCwgYnV0dG9uKTtcclxuICBpbWdCb3guYXBwZW5kKGltZyk7XHJcbiAgXHJcbiAgaG9tZVBhZ2UuYXBwZW5kKHRleHRCb3gsIGltZ0JveCk7XHJcblxyXG4gIHJldHVybiBob21lUGFnZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7XHJcblxyXG4iLCJpbXBvcnQgeyBEQU5HT19BUlIsIERBTkdPX09CSiB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51UGFnZS5jbGFzc05hbWUgPSAnbWVudSc7XHJcblxyXG4gIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhYkNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudV9fdGFiLWJveCBkZiBkZi1jJzsgLy8gMyBjbGFzc2VzXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgREFOR09fQVJSLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCB0YWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRhYkJ0bi5jbGFzc05hbWUgPSAndGFibGluayc7XHJcblxyXG4gICAgaWYgKERBTkdPX0FSUltpXSA9PT0gREFOR09fQVJSWzBdKSB7XHJcbiAgICAgIHRhYkJ0bi5jbGFzc05hbWUgPSAndGFibGluayBhY3RpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYkJ0bi50ZXh0Q29udGVudCA9IGAke0RBTkdPX0FSUltpXX0gZGFuZ29gO1xyXG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZCh0YWJCdG4pO1xyXG4gIH1cclxuXHJcbiAgbWVudVBhZ2UuYXBwZW5kKHRhYkNvbnRhaW5lcik7XHJcbiAgXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBEQU5HT19PQkoubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhYmNvbnRlbnQuY2xhc3NOYW1lID0gJ3RhYmNvbnRlbnQnO1xyXG4gICAgdGFiY29udGVudC5pZCA9IGAke0RBTkdPX0FSUltpXX1gO1xyXG5cclxuICAgIGNvbnN0IHRhYnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRhYnRpdGxlLmNsYXNzTmFtZSA9ICd0YWJjb250ZW50LXRpdGxlJztcclxuICAgIHRhYnRpdGxlLnRleHRDb250ZW50ID0gYCR7REFOR09fT0JKW2ldLnRpdGxlfSBkYW5nb2A7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhYnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YWJ0ZXh0LmNsYXNzTmFtZSA9ICd0YWJjb250ZW50LXRleHQnO1xyXG4gICAgdGFidGV4dC50ZXh0Q29udGVudCA9IERBTkdPX09CSltpXS50ZXh0O1xyXG5cclxuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1nRGl2LmNsYXNzTmFtZSA9ICdpbWctY29udGFpbmVyJztcclxuXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IERBTkdPX09CSltpXS5pbWdzLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgIGNvbnN0IHBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgcGljdHVyZS5zcmMgPSBEQU5HT19PQkpbaV0uaW1nc1t5XTtcclxuICAgICAgcGljdHVyZS5jbGFzc05hbWUgPSAnZGFuY29JbWdUYWInO1xyXG4gICAgICBwaWN0dXJlLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7REFOR09fT0JKW2ldfSBkYW5nb2ApO1xyXG4gICAgXHJcbiAgICAgIGltZ0Rpdi5hcHBlbmQocGljdHVyZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChEQU5HT19PQkpbaV0gPT09IERBTkdPX09CSlswXSkge1xyXG4gICAgICB0YWJjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IFxyXG5cclxuICAgIHRhYmNvbnRlbnQuYXBwZW5kKHRhYnRpdGxlLCB0YWJ0ZXh0LCBpbWdEaXYpO1xyXG4gICAgbWVudVBhZ2UuYXBwZW5kKHRhYmNvbnRlbnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBtZW51UGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgb3BlblRhYiB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0XCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnRuXCIpLmZvckVhY2goKGVsZW1lbnQpID0+XHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgdGFiQ29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICBzd2l0Y2ggKHRhYkNvbnRlbnQpIHtcclxuICAgICAgY2FzZSBcIk1lbnVcIjpcclxuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChtZW51KCkpO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ0bnNMaXN0ZW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGluaycpO1xyXG4gICAgICAgIGFkZEJ0bnNMaXN0ZW5lcnMuZm9yRWFjaCgoYnRuKSA9PiBidG4ub25jbGljayA9IG9wZW5UYWIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQWJvdXRcIjpcclxuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChhYm91dCgpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChob21lKCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZChob21lKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==