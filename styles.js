(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
exports.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\n* {\n  font-family: \"Roboto\", sans-serif;\n}\nbody, html {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f6f6;\n}\nh1, h2 {\n  position: relative;\n  color: #322153;\n}\nh1::before, h2::before {\n  position: absolute;\n  content: \"\";\n  width: 50px;\n  height: 5px;\n  background-color: #84BD5A;\n  bottom: -10px;\n  border-radius: 5px;\n}\nlabel {\n  display: block;\n  width: 100%;\n  color: #666666;\n  margin-top: 24px;\n  margin-bottom: 6px;\n}\ntextarea {\n  display: block;\n  width: calc(100% - 24px);\n  height: 240px;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  position: relative;\n  flex: 1 1 0;\n}\ntextarea.ng-dirty.ng-invalid {\n  border-color: #8B0000;\n  outline-color: #8B0000;\n  margin-bottom: 6px;\n}\ninput[type=number] {\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 0 12px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n  position: relative;\n  flex: 1 1 0;\n  margin-left: -1px;\n}\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-symbol {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem 0 0 0.25rem;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: #ffffff;\n  width: 100%;\n  margin: 24px;\n}\n.column {\n  width: 40%;\n}\n.column:first-child {\n  margin-right: 32px;\n}\nosc-root {\n  display: flex;\n  justify-content: center;\n}\nosc-home {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: 1024px;\n}\n.xkcd {\n  max-width: 450px;\n  width: 100%;\n  height: auto;\n  margin: 24px auto;\n}\n.error-message {\n  color: #8B0000;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .card {\n    width: auto;\n    margin: 24px 24px 0;\n  }\n  .card:last-child {\n    margin-bottom: 24px;\n  }\n\n  .column {\n    display: flex;\n  }\n\n  osc-home {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":";AAAA,8EAAA;AAGA;EACI,iCAAA;AAAJ;AAGA;EACI,UAAA;EACA,SAAA;EACA,yBAAA;AAAJ;AAGA;EACI,kBAAA;EACA,cAAA;AAAJ;AAEI;EACI,kBAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;AAAR;AAIA;EACI,cAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AADJ;AAIA;EACI,cAAA;EACA,wBAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,sBAAA;EACA,4BAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;AADJ;AAGI;EACI,qBAAA;EACA,sBAAA;EACA,kBAAA;AADR;AAKA;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,sBAAA;EACA,4BAAA;EACA,yBAAA;EACA,kCAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;AAFJ;AAMI;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;AAHR;AAMI;EACI,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,yBAAA;EACA,kCAAA;AAJR;AAQA;EACI,aAAA;EACA,sBAAA;EACA,aAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;AALJ;AASA;EACI,UAAA;AANJ;AAQI;EACI,kBAAA;AANR;AAUA;EACI,aAAA;EACA,uBAAA;AAPJ;AAUA;EACI,aAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;AAPJ;AAUA;EACI,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAPJ;AAUA;EACI,cAAA;EACA,gBAAA;AAPJ;AAUA;EACI;IACI,WAAA;IACA,mBAAA;EAPN;EASM;IACI,mBAAA;EAPV;;EAWE;IACI,aAAA;EARN;;EAWE;IACI,aAAA;IACA,sBAAA;IACA,uBAAA;EARN;AACF","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n* {\n    font-family: 'Roboto', sans-serif;\n}\n\nbody, html {\n    padding: 0;\n    margin: 0;\n    background-color: #f6f6f6;\n}\n\nh1, h2 {\n    position: relative;\n    color: #322153;\n\n    &::before {\n        position: absolute;\n        content: \"\";\n        width: 50px;\n        height: 5px;\n        background-color: #84BD5A;\n        bottom: -10px;\n        border-radius: 5px;\n    }\n}\n\nlabel {\n    display: block;\n    width: 100%;\n    color: #666666;\n    margin-top: 24px;\n    margin-bottom: 6px;\n}\n\ntextarea {\n    display: block;\n    width: calc(100% - 24px);\n    height: 240px;\n    padding: 12px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    position: relative;\n    flex: 1 1 0;\n\n    &.ng-dirty.ng-invalid {\n        border-color: #8B0000;\n        outline-color: #8B0000;\n        margin-bottom: 6px;\n    }\n}\n\ninput[type='number'] {\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 0 12px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0 .25rem .25rem 0;\n    position: relative;\n    flex: 1 1 0;\n    margin-left: -1px;\n}\n\n.input {\n    &-group {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-items: stretch;\n        width: 100%;\n    }\n\n    &-symbol {\n        display: flex;\n        align-items: center;\n        padding: .375rem .75rem;\n        margin-bottom: 0;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #495057;\n        text-align: center;\n        white-space: nowrap;\n        background-color: #e9ecef;\n        border: 1px solid #ced4da;\n        border-radius: .25rem 0 0 .25rem;\n    }\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    padding: 24px;\n    background-color: #ffffff;\n    width: 100%;\n    margin: 24px;\n\n}\n\n.column {\n    width: 40%;\n\n    &:first-child {\n        margin-right: 32px;\n    }\n}\n\nosc-root {\n    display: flex;\n    justify-content: center;\n}\n\nosc-home {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    max-width: 1024px;\n}\n\n.xkcd {\n    max-width: 450px;\n    width: 100%;\n    height: auto;\n    margin: 24px auto;\n}\n\n.error-message {\n    color: #8B0000;\n    margin-top: 12px;\n}\n\n@media (max-width: 768px) {\n    .card {\n        width: auto;\n        margin: 24px 24px 0;\n\n        &:last-child {\n            margin-bottom: 24px;\n        }\n    }\n\n    .column {\n        display: flex;\n    }\n\n    osc-home {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n    }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elecash/Proyectos/os-calculator/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map