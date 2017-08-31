(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hyper-animations"] = factory();
	else
		root["hyper-animations"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_box_handler__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_box_handler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color_handler__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dimension_handler__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_font_weight_handler__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_number_handler__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_position_handler__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shadow_handler__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_shape_handler__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_transform_handler__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_visibility_handler__ = __webpack_require__(11);
/* unused harmony namespace reexport */


















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxType", function() { return boxType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensionType", function() { return dimensionType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyper_linked_js__ = __webpack_require__(0);
/**
 * Copyright 2016 Kevin Doughty. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *		 http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//import scope from "./hyper-scope.js";
//import scope from "hyper-scope";
//import { test } from "hyper-scope";
//export * from "./hyper-linked.js";


var boxType = {
	parse: __WEBPACK_IMPORTED_MODULE_0__hyper_linked_js__["a" /* boxhandler */][0][0],
	merge: __WEBPACK_IMPORTED_MODULE_0__hyper_linked_js__["a" /* boxhandler */][0][1],
	properties: __WEBPACK_IMPORTED_MODULE_0__hyper_linked_js__["a" /* boxhandler */][0][2]

	/*
 var dimensionhandler = [[parseSizePairList, mergeNonNegativeSizePairList, ['background-size']],
 [parseLengthOrPercent, mergeDimensionsNonNegative, ['border-bottom-width', 'border-image-width', 'border-left-width', 'border-right-width', 'border-top-width', 'flex-basis', 'font-size', 'height', 'line-height', 'max-height', 'max-width', 'outline-width', 'width']],
 [parseLengthOrPercent, mergeDimensions, ['border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius', 'bottom', 'left', 'letter-spacing', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'min-height', 'min-width', 'outline-offset', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'perspective', 'right', 'shape-margin', 'text-indent', 'top', 'vertical-align', 'word-spacing']]];
 */

};var dimensionTypes = {};
dimensionhandler.forEach(function (handlers, index) {
	handlers.forEach(function (handler) {
		dimensionTypes[handler] = index;
	});
});

var dimensionType = function dimensionType(property) {
	var number = dimensionTypes[property];
	var handlerArray = dimensionhandler[number]; // parser, merger, properties

	// 	parse:hyper.dimensionhandler
	// 	merge:
	// 	properties:
	return {
		parser: handlerArray[0],
		merger: handlerArray[1],
		properties: handlerArray[2],
		zero: function zero(value) {
			return 0;
			// 		return {px : 0};
		},
		add: function add(base, delta) {
			return 0;
			// 		if (delta === null || delta === undefined) {
			// 			delta = {}; // bug fix / hack. transformType does this too. So should the rest. If element is removed from dom, CompositedPropertyMap can"t applyAnimatedValues when additive. Lack of a transform also has this problem
			// 		}
			// 		if (base === null || base === undefined) {
			// 			base = {}; // bug fix / hack. transformType does this too. So should the rest. If element is removed from dom, CompositedPropertyMap can"t applyAnimatedValues when additive. Lack of a transform also has this problem
			// 		}
			// 		var out = {};
			// 		for (let value in base) {
			// 			out[value] = base[value] + (delta[value] || 0);
			// 		}
			// 		for (let value in delta) {
			// 			if (value in base) {
			// 				continue;
			// 			}
			// 			out[value] = delta[value];
			// 		}
			// 		console.log("length add base:",base);
			// 		console.log("length add delta:",delta);
			// 		console.log("length add out:",out);
			// 		return out;
		},
		subtract: function subtract(base, delta) {
			return 0;
			// 		var inverse = this.inverse(delta);
			// 		var result = this.add(base,inverse);
			// 		console.log("length subtract base:",base);
			// 		console.log("length subtract delta:",delta);
			// 		console.log("length subtract out:",result);
			// 		return result;
		},
		interpolate: function interpolate(from, to, f) {
			var out = {};
			for (var value in from) {
				out[value] = interp(from[value], to[value], f);
			}
			for (var _value in to) {
				if (_value in out) {
					continue;
				}
				out[_value] = interp(0, to[_value], f);
			}
			return out;
		},
		output: function output(value) {
			return value;
			// 		if (!features) features = detectFeatures(); // !!!
			// 		var s = "";
			// 		var singleValue = true;
			// 		console.log("length output stringified:",JSON.stringify(value));
			// 		for (let item in value) {
			// 			if (s === "") {
			// 				s = value[item] + item;
			// 			} else if (singleValue) {
			// 				if (value[item] !== 0) {
			// 					s = features.calcFunction +
			// 							"(" + s + " + " + value[item] + item + ")";
			// 					singleValue = false;
			// 				}
			// 			} else if (value[item] !== 0) {
			// 				s = s.substring(0, s.length - 1) + " + " + value[item] + item + ")";
			// 			}
			// 		}
			// 		console.log("length output pre:",value);
			// 		console.log("length output post:",s);
			// 		return s;
		},
		input: function input(value) {
			var result = handlerArray[0](value);
			console.log("%s input:%s; result:%s;", property, value, result);
			return result;
			return value;
			// 		var result = lengthType.consumeValueFromString(value);
			// 		console.log("length input pre:",value);
			// 		if (result) {
			// 			console.log("length input post:",result.value);
			// 			return result.value;
			// 		}
			// 		console.log("length input undefined");
			// 		return undefined;
		}
	};
};

dimensionType("left").input("qwerf");

// var scope = require("hyper-scope");
// var shared = require("hyper-shared");

//var clamps = require("number-handler").clamp;

var propertyHandlers = {};

function toCamelCase(property) {
	return property.replace(/-(.)/g, function (_, c) {
		return c.toUpperCase();
	});
}
function addPropertyHandler(parser, merger, property) {
	propertyHandlers[property] = propertyHandlers[property] || [];
	propertyHandlers[property].push([parser, merger]);
}
function addPropertiesHandler(parser, merger, properties) {
	for (var i = 0; i < properties.length; i++) {
		var property = properties[i];
		addPropertyHandler(parser, merger, toCamelCase(property));
	}
}
//webAnimations1.addPropertiesHandler = addPropertiesHandler;

function parserForProperty(property) {
	return propertyHandlers[property][0];
}
function mergerForProperty(property) {
	return propertyHandlers[property][1];
}
var test = "it's time to get hyper";

//console.log(test,scope);
// console.log("webAnimations1:%s;",JSON.stringify(Object.keys(webAnimations1)));
// console.log("webAnimationsNext:%s;",JSON.stringify(Object.keys(webAnimationsNext)));
// console.log("webAnimationsShared:%s;",JSON.stringify(Object.keys(webAnimationsShared)));


// module.exports = {
// // 	webAnimations1:webAnimations1,
// // 	webAnimationNext:webAnimationsNext,
// // 	webAnimationsShared:webAnimationsShared,
// 	typeOfProperty: getCssOnlyType
// };

//export var debug = test;
//export default test;
//export default test;
//scope.typeOfProperty = true;//getCssOnlyType;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boxhandler; });
/* unused harmony export parseBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyper_hyper_linked_js__ = __webpack_require__(0);
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var boxhandler = [[parseBox, mergeBoxes, ['clip']]];



function consumeLengthPercentOrAuto(string) {
  return consumeLengthOrPercent(string) || consumeToken(/^auto/, string);
}
function parseBox(string) {
  var result = consumeList([ignore(consumeToken.bind(null, /^rect/)), ignore(consumeToken.bind(null, /^\(/)), consumeRepeated.bind(null, consumeLengthPercentOrAuto, /^,/), ignore(consumeToken.bind(null, /^\)/))], string);
  if (result && result[0].length == 4) {
    return result[0];
  }
}


function mergeComponent(left, right) {
  if (left == 'auto' || right == 'auto') {
    return [true, false, function (t) {
      var result = t ? left : right;
      if (result == 'auto') {
        return 'auto';
      }
      // FIXME: There's probably a better way to turn a dimension back into a string.
      var merged = mergeDimensions(result, result);
      return merged[2](merged[0]);
    }];
  }
  return mergeDimensions(left, right);
}

function wrap(result) {
  return 'rect(' + result + ')';
}

var mergeBoxes = mergeWrappedNestedRepeated.bind(null, wrap, mergeComponent, ', ');

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export colorhandler */
/* unused harmony export mergeColors */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyper_hyper_linked_js__ = __webpack_require__(0);
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var colorhandler = [[parseColor, mergeColors, ['background-color', 'border-bottom-color', 'border-left-color', 'border-right-color', 'border-top-color', 'color', 'outline-color', 'text-decoration-color']]];



var canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
canvas.width = canvas.height = 1;
var context = canvas.getContext('2d');

function parseColor(string) {
  string = string.trim();
  // The context ignores invalid colors
  context.fillStyle = '#000';
  context.fillStyle = string;
  var contextSerializedFillStyle = context.fillStyle;
  context.fillStyle = '#fff';
  context.fillStyle = string;
  if (contextSerializedFillStyle != context.fillStyle) return;
  context.fillRect(0, 0, 1, 1);
  var pixelColor = context.getImageData(0, 0, 1, 1).data;
  context.clearRect(0, 0, 1, 1);
  var alpha = pixelColor[3] / 255;
  return [pixelColor[0] * alpha, pixelColor[1] * alpha, pixelColor[2] * alpha, alpha];
}

function mergeColors(left, right) {
  return [left, right, function (x) {
    function clamp(v) {
      return Math.max(0, Math.min(255, v));
    }
    if (x[3]) {
      for (var i = 0; i < 3; i++) {
        x[i] = Math.round(clamp(x[i] / x[3]));
      }
    }
    x[3] = numberToString(clamp(0, 1, x[3]));
    return 'rgba(' + x.join(',') + ')';
  }];
}

consumeColor = consumeParenthesised.bind(null, parseColor);


if (false) {
  testing.parseColor = parseColor;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dimensionhandler */
/* unused harmony export mergeDimensions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyper_hyper_linked_js__ = __webpack_require__(0);
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var dimensionhandler = [[parseSizePairList, mergeNonNegativeSizePairList, ['background-size']], [parseLengthOrPercent, mergeDimensionsNonNegative, ['border-bottom-width', 'border-image-width', 'border-left-width', 'border-right-width', 'border-top-width', 'flex-basis', 'font-size', 'height', 'line-height', 'max-height', 'max-width', 'outline-width', 'width']], [parseLengthOrPercent, mergeDimensions, ['border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius', 'bottom', 'left', 'letter-spacing', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'min-height', 'min-width', 'outline-offset', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'perspective', 'right', 'shape-margin', 'text-indent', 'top', 'vertical-align', 'word-spacing']]];








function parseDimension(unitRegExp, string) {
  string = string.trim().toLowerCase();

  if (string == '0' && 'px'.search(unitRegExp) >= 0) return { px: 0 };

  // If we have parenthesis, we're a calc and need to start with 'calc'.
  if (!/^[^(]*$|^calc/.test(string)) return;
  string = string.replace(/calc\(/g, '(');

  // We tag units by prefixing them with 'U' (note that we are already
  // lowercase) to prevent problems with types which are substrings of
  // each other (although prefixes may be problematic!)
  var matchedUnits = {};
  string = string.replace(unitRegExp, function (match) {
    matchedUnits[match] = null;
    return 'U' + match;
  });
  var taggedUnitRegExp = 'U(' + unitRegExp.source + ')';

  // Validating input is simply applying as many reductions as we can.
  var typeCheck = string.replace(/[-+]?(\d*\.)?\d+/g, 'N').replace(new RegExp('N' + taggedUnitRegExp, 'g'), 'D').replace(/\s[+-]\s/g, 'O').replace(/\s/g, '');
  var reductions = [/N\*(D)/g, /(N|D)[*/]N/g, /(N|D)O\1/g, /\((N|D)\)/g];
  var i = 0;
  while (i < reductions.length) {
    if (reductions[i].test(typeCheck)) {
      typeCheck = typeCheck.replace(reductions[i], '$1');
      i = 0;
    } else {
      i++;
    }
  }
  if (typeCheck != 'D') return;

  for (var unit in matchedUnits) {
    var result = eval(string.replace(new RegExp('U' + unit, 'g'), '').replace(new RegExp(taggedUnitRegExp, 'g'), '*0'));
    if (!isFinite(result)) return;
    matchedUnits[unit] = result;
  }
  return matchedUnits;
}

function mergeDimensionsNonNegative(left, right) {
  return mergeDimensions(left, right, true);
}

function mergeDimensions(left, right, nonNegative) {
  var units = [],
      unit;
  for (unit in left) {
    units.push(unit);
  }for (unit in right) {
    if (units.indexOf(unit) < 0) units.push(unit);
  }

  left = units.map(function (unit) {
    return left[unit] || 0;
  });
  right = units.map(function (unit) {
    return right[unit] || 0;
  });
  return [left, right, function (values) {
    var result = values.map(function (value, i) {
      if (values.length == 1 && nonNegative) {
        value = Math.max(value, 0);
      }
      // Scientific notation (e.g. 1e2) is not yet widely supported by browser vendors.
      return numberToString(value) + units[i];
    }).join(' + ');
    return values.length > 1 ? 'calc(' + result + ')' : result;
  }];
}


var lengthUnits = 'px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc';
var parseLength = parseDimension.bind(null, new RegExp(lengthUnits, 'g'));
var parseLengthOrPercent = parseDimension.bind(null, new RegExp(lengthUnits + '|%', 'g'));
var parseAngle = parseDimension.bind(null, /deg|rad|grad|turn/g);

consumeLengthOrPercent = consumeParenthesised.bind(null, parseLengthOrPercent);


var consumeLength = consumeParenthesised.bind(null, parseLength);
var consumeSizePair = consumeRepeated.bind(undefined, consumeLength, /^/);
var consumeSizePairList = consumeRepeated.bind(undefined, consumeSizePair, /^,/);


var parseSizePairList = function parseSizePairList(input) {
  var result = consumeSizePairList(input);
  if (result && result[1] == '') {
    return result[0];
  }
};

var mergeNonNegativeSizePair = mergeNestedRepeated.bind(undefined, mergeDimensionsNonNegative, ' ');
var mergeNonNegativeSizePairList = mergeNestedRepeated.bind(undefined, mergeNonNegativeSizePair, ',');

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fontweighthandler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyper_hyper_linked_js__ = __webpack_require__(0);
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

//var clamp = require("clamp");
//import { clamp } from "number-handler";

var fontweighthandler = [[parse, merge, ['font-weight']]];



//   function testFWH() {
//     return true;
//   }
//   testFWH("poiu");

function parse(string) {
  var out = Number(string);
  if (isNaN(out) || out < 100 || out > 900 || out % 100 !== 0) {
    return;
  }
  return out;
}

function toCss(value) {
  value = Math.round(value / 100) * 100;
  value = clamp(100, 900, value);
  if (value === 400) {
    return 'normal';
  }
  if (value === 700) {
    return 'bold';
  }
  return String(value);
}

function merge(left, right) {
  return [left, right, toCss];
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export numberhandler */
/* unused harmony export numberToString */
/* unused harmony export clamp */
/* unused harmony export parseNumber */
/* unused harmony export mergeNumbers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyper_hyper_linked_js__ = __webpack_require__(0);
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var numberhandler = [[parseNumber, clampedMergeNumbers(0, Infinity), ['border-image-width', 'line-height']], [parseNumber, clampedMergeNumbers(0, 1), ['opacity', 'shape-image-threshold']], [parseNumber, mergeFlex, ['flex-grow', 'flex-shrink']], [parseNumber, mergePositiveIntegers, ['orphans', 'widows']], [parseNumber, round, ['z-index']]];




function numberToString(x) {
  return x.toFixed(3).replace('.000', '');
}
function clamp(min, max, x) {
  return Math.min(max, Math.max(min, x));
}
function parseNumber(string) {
  if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(string)) return Number(string);
}
function mergeNumbers(left, right) {
  return [left, right, numberToString];
}

// FIXME: This should probably go in it's own handler.

function mergeFlex(left, right) {
  if (left == 0) return;
  return clampedMergeNumbers(0, Infinity)(left, right);
}

function mergePositiveIntegers(left, right) {
  return [left, right, function (x) {
    return Math.round(clamp(1, Infinity, x));
  }];
}

function clampedMergeNumbers(min, max) {
  return function (left, right) {
    return [left, right, function (x) {
      return numberToString(clamp(min, max, x));
    }];
  };
}

function round(left, right) {
  return [left, right, Math.round];
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export positionhandler */
/* unused harmony export consumePosition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyper_hyper_linked_js__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var positionhandler = [[parseOrigin.bind(null, 3), mergeOffsetList, ['transform-origin']], [parseOrigin.bind(null, 2), mergeOffsetList, ['perspective-origin']], [parsePositionList, mergePositionList, ['background-position', 'object-position']]];




function negateDimension(dimension) {
  var result = {};
  for (var k in dimension) {
    result[k] = -dimension[k];
  }
  return result;
}

function consumeOffset(string) {
  return consumeToken(/^(left|center|right|top|bottom)\b/i, string) || consumeLengthOrPercent(string);
}

var offsetMap = {
  left: { '%': 0 },
  center: { '%': 50 },
  right: { '%': 100 },
  top: { '%': 0 },
  bottom: { '%': 100 }
};

function parseOrigin(slots, string) {
  var result = consumeRepeated(consumeOffset, /^/, string);
  if (!result || result[1] != '') return;
  var tokens = result[0];
  tokens[0] = tokens[0] || 'center';
  tokens[1] = tokens[1] || 'center';
  if (slots == 3) {
    tokens[2] = tokens[2] || { px: 0 };
  }
  if (tokens.length != slots) {
    return;
  }
  // Reorder so that the horizontal axis comes first.
  if (/top|bottom/.test(tokens[0]) || /left|right/.test(tokens[1])) {
    var tmp = tokens[0];
    tokens[0] = tokens[1];
    tokens[1] = tmp;
  }
  // Invalid if not horizontal then vertical.
  if (!/left|right|center|Object/.test(tokens[0])) return;
  if (!/top|bottom|center|Object/.test(tokens[1])) return;
  return tokens.map(function (position) {
    return (typeof position === 'undefined' ? 'undefined' : _typeof(position)) == 'object' ? position : offsetMap[position];
  });
}

var mergeOffsetList = mergeNestedRepeated.bind(null, mergeDimensions, ' ');
function consumePosition(string) {
  var result = consumeRepeated(consumeOffset, /^/, string);
  if (!result) {
    return;
  }

  var tokens = result[0];
  var out = [{ '%': 50 }, { '%': 50 }];
  var pos = 0;
  var bottomOrRight = false;

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token == 'string') {
      bottomOrRight = /bottom|right/.test(token);
      pos = { left: 0, right: 0, center: pos, top: 1, bottom: 1 }[token];
      out[pos] = offsetMap[token];
      if (token == 'center') {
        // Center doesn't accept a length offset.
        pos++;
      }
    } else {
      if (bottomOrRight) {
        // If bottom or right we need to subtract the length from 100%
        token = negateDimension(token);
        token['%'] = (token['%'] || 0) + 100;
      }
      out[pos] = token;
      pos++;
      bottomOrRight = false;
    }
  }
  return [out, result[1]];
}


function parsePositionList(string) {
  var result = consumeRepeated(consumePosition, /^,/, string);
  if (result && result[1] == '') {
    return result[0];
  }
}

var mergePositionList = mergeNestedRepeated.bind(null, mergeOffsetList, ', ');

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shadowhandler */
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var shadowhandler = [[parseShadowList, mergeShadowList, ['box-shadow', 'text-shadow']]];


function consumeShadow(string) {
  var shadow = {
    inset: false,
    lengths: [],
    color: null
  };
  function consumePart(string) {
    var result = consumeToken(/^inset/i, string);
    if (result) {
      shadow.inset = true;
      return result;
    }
    var result = consumeLengthOrPercent(string);
    if (result) {
      shadow.lengths.push(result[0]);
      return result;
    }
    var result = consumeColor(string);
    if (result) {
      shadow.color = result[0];
      return result;
    }
  }
  var result = consumeRepeated(consumePart, /^/, string);
  if (result && result[0].length) {
    return [shadow, result[1]];
  }
}

function parseShadowList(string) {
  var result = consumeRepeated(consumeShadow, /^,/, string);
  if (result && result[1] == '') {
    return result[0];
  }
}

function mergeShadow(left, right) {
  while (left.lengths.length < Math.max(left.lengths.length, right.lengths.length)) {
    left.lengths.push({ px: 0 });
  }while (right.lengths.length < Math.max(left.lengths.length, right.lengths.length)) {
    right.lengths.push({ px: 0 });
  }if (left.inset != right.inset || !!left.color != !!right.color) {
    return;
  }
  var lengthReconstitution = [];
  var colorReconstitution;
  var matchingLeft = [[], 0];
  var matchingRight = [[], 0];
  for (var i = 0; i < left.lengths.length; i++) {
    var mergedDimensions = mergeDimensions(left.lengths[i], right.lengths[i], i == 2);
    matchingLeft[0].push(mergedDimensions[0]);
    matchingRight[0].push(mergedDimensions[1]);
    lengthReconstitution.push(mergedDimensions[2]);
  }
  if (left.color && right.color) {
    var mergedColor = mergeColors(left.color, right.color);
    matchingLeft[1] = mergedColor[0];
    matchingRight[1] = mergedColor[1];
    colorReconstitution = mergedColor[2];
  }
  return [matchingLeft, matchingRight, function (value) {
    var result = left.inset ? 'inset ' : ' ';
    for (var i = 0; i < lengthReconstitution.length; i++) {
      result += lengthReconstitution[i](value[0][i]) + ' ';
    }
    if (colorReconstitution) {
      result += colorReconstitution(value[1]);
    }
    return result;
  }];
}

function mergeNestedRepeatedShadow(nestedMerge, separator, left, right) {
  var leftCopy = [];
  var rightCopy = [];
  function defaultShadow(inset) {
    return { inset: inset, color: [0, 0, 0, 0], lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }] };
  }
  for (var i = 0; i < left.length || i < right.length; i++) {
    var l = left[i] || defaultShadow(right[i].inset);
    var r = right[i] || defaultShadow(left[i].inset);
    leftCopy.push(l);
    rightCopy.push(r);
  }
  return mergeNestedRepeated(nestedMerge, separator, leftCopy, rightCopy);
}

var mergeShadowList = mergeNestedRepeatedShadow.bind(null, mergeShadow, ', ');

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shapehandler */
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var shapehandler = [[parseShape, mergeShapes, ['shape-outside']]];


var consumeLengthOrPercent = consumeParenthesised.bind(null, parseLengthOrPercent);
var consumeLengthOrPercentPair = consumeRepeated.bind(undefined, consumeLengthOrPercent, /^/);

var mergeSizePair = mergeNestedRepeated.bind(undefined, mergeDimensions, ' ');
var mergeSizePairList = mergeNestedRepeated.bind(undefined, mergeSizePair, ',');

function parseShape(input) {
  var circle = consumeToken(/^circle/, input);
  if (circle && circle[0]) {
    return ['circle'].concat(consumeList([ignore(consumeToken.bind(undefined, /^\(/)), consumeLengthOrPercent, ignore(consumeToken.bind(undefined, /^at/)), consumePosition, ignore(consumeToken.bind(undefined, /^\)/))], circle[1]));
  }
  var ellipse = consumeToken(/^ellipse/, input);
  if (ellipse && ellipse[0]) {
    return ['ellipse'].concat(consumeList([ignore(consumeToken.bind(undefined, /^\(/)), consumeLengthOrPercentPair, ignore(consumeToken.bind(undefined, /^at/)), consumePosition, ignore(consumeToken.bind(undefined, /^\)/))], ellipse[1]));
  }
  var polygon = consumeToken(/^polygon/, input);
  if (polygon && polygon[0]) {
    return ['polygon'].concat(consumeList([ignore(consumeToken.bind(undefined, /^\(/)), optional(consumeToken.bind(undefined, /^nonzero\s*,|^evenodd\s*,/), 'nonzero,'), consumeSizePairList, ignore(consumeToken.bind(undefined, /^\)/))], polygon[1]));
  }
}

function mergeShapes(left, right) {
  if (left[0] !== right[0]) return;
  if (left[0] == 'circle') {
    return mergeList(left.slice(1), right.slice(1), ['circle(', mergeDimensions, ' at ', mergeOffsetList, ')']);
  }
  if (left[0] == 'ellipse') {
    return mergeList(left.slice(1), right.slice(1), ['ellipse(', mergeNonNegativeSizePair, ' at ', mergeOffsetList, ')']);
  }
  if (left[0] == 'polygon' && left[1] == right[1]) {
    return mergeList(left.slice(2), right.slice(2), ['polygon(', left[1], mergeSizePairList, ')']);
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transformhandler */
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var transformhandler = [[parseTransform, mergeTransforms, ['transform']]];


// This returns a function for converting transform functions to equivalent
// primitive functions, which will take an array of values from the
// derivative type and fill in the blanks (underscores) with them.
var _ = null;
function cast(pattern) {
  return function (contents) {
    var i = 0;
    return pattern.map(function (x) {
      return x === _ ? contents[i++] : x;
    });
  };
}

function id(x) {
  return x;
}

var Opx = { px: 0 };
var Odeg = { deg: 0 };

// type: [argTypes, convertTo3D, convertTo2D]
// In the argument types string, lowercase characters represent optional arguments
var transformFunctions = {
  matrix: ['NNNNNN', [_, _, 0, 0, _, _, 0, 0, 0, 0, 1, 0, _, _, 0, 1], id],
  matrix3d: ['NNNNNNNNNNNNNNNN', id],
  rotate: ['A'],
  rotatex: ['A'],
  rotatey: ['A'],
  rotatez: ['A'],
  rotate3d: ['NNNA'],
  perspective: ['L'],
  scale: ['Nn', cast([_, _, 1]), id],
  scalex: ['N', cast([_, 1, 1]), cast([_, 1])],
  scaley: ['N', cast([1, _, 1]), cast([1, _])],
  scalez: ['N', cast([1, 1, _])],
  scale3d: ['NNN', id],
  skew: ['Aa', null, id],
  skewx: ['A', null, cast([_, Odeg])],
  skewy: ['A', null, cast([Odeg, _])],
  translate: ['Tt', cast([_, _, Opx]), id],
  translatex: ['T', cast([_, Opx, Opx]), cast([_, Opx])],
  translatey: ['T', cast([Opx, _, Opx]), cast([Opx, _])],
  translatez: ['L', cast([Opx, Opx, _])],
  translate3d: ['TTL', id]
};

function parseTransform(string) {
  string = string.toLowerCase().trim();
  if (string == 'none') return [];
  // FIXME: Using a RegExp means calcs won't work here
  var transformRegExp = /\s*(\w+)\(([^)]*)\)/g;
  var result = [];
  var match;
  var prevLastIndex = 0;
  while (match = transformRegExp.exec(string)) {
    if (match.index != prevLastIndex) return;
    prevLastIndex = match.index + match[0].length;
    var functionName = match[1];
    var functionData = transformFunctions[functionName];
    if (!functionData) return;
    var args = match[2].split(',');
    var argTypes = functionData[0];
    if (argTypes.length < args.length) return;

    var parsedArgs = [];
    for (var i = 0; i < argTypes.length; i++) {
      var arg = args[i];
      var type = argTypes[i];
      var parsedArg;
      if (!arg) parsedArg = { a: Odeg,
        n: parsedArgs[0],
        t: Opx }[type];else parsedArg = { A: function A(s) {
          return s.trim() == '0' ? Odeg : parseAngle(s);
        },
        N: parseNumber,
        T: parseLengthOrPercent,
        L: parseLength }[type.toUpperCase()](arg);
      if (parsedArg === undefined) return;
      parsedArgs.push(parsedArg);
    }
    result.push({ t: functionName, d: parsedArgs });

    if (transformRegExp.lastIndex == string.length) return result;
  }
};

function numberToLongString(x) {
  return x.toFixed(6).replace('.000000', '');
}

function mergeMatrices(left, right) {
  if (left.decompositionPair !== right) {
    left.decompositionPair = right;
    var leftArgs = makeMatrixDecomposition(left);
  }
  if (right.decompositionPair !== left) {
    right.decompositionPair = left;
    var rightArgs = makeMatrixDecomposition(right);
  }
  if (leftArgs[0] == null || rightArgs[0] == null) return [[false], [true], function (x) {
    return x ? right[0].d : left[0].d;
  }];
  leftArgs[0].push(0);
  rightArgs[0].push(1);
  return [leftArgs, rightArgs, function (list) {
    var quat = quat(leftArgs[0][3], rightArgs[0][3], list[5]);
    var mat = composeMatrix(list[0], list[1], list[2], quat, list[4]);
    var stringifiedArgs = mat.map(numberToLongString).join(',');
    return stringifiedArgs;
  }];
}

function typeTo2D(type) {
  return type.replace(/[xy]/, '');
}

function typeTo3D(type) {
  return type.replace(/(x|y|z|3d)?$/, '3d');
}

function mergeTransforms(left, right) {
  var matrixModulesLoaded = makeMatrixDecomposition && true;

  var flipResults = false;
  if (!left.length || !right.length) {
    if (!left.length) {
      flipResults = true;
      left = right;
      right = [];
    }
    for (var i = 0; i < left.length; i++) {
      var type = left[i].t;
      var args = left[i].d;
      var defaultValue = type.substr(0, 5) == 'scale' ? 1 : 0;
      right.push({ t: type, d: args.map(function (arg) {
          if (typeof arg == 'number') return defaultValue;
          var result = {};
          for (var unit in arg) {
            result[unit] = defaultValue;
          }return result;
        }) });
    }
  }

  var isMatrixOrPerspective = function isMatrixOrPerspective(lt, rt) {
    return lt == 'perspective' && rt == 'perspective' || (lt == 'matrix' || lt == 'matrix3d') && (rt == 'matrix' || rt == 'matrix3d');
  };
  var leftResult = [];
  var rightResult = [];
  var types = [];

  if (left.length != right.length) {
    if (!matrixModulesLoaded) return;
    var merged = mergeMatrices(left, right);
    leftResult = [merged[0]];
    rightResult = [merged[1]];
    types = [['matrix', [merged[2]]]];
  } else {
    for (var i = 0; i < left.length; i++) {
      var leftType = left[i].t;
      var rightType = right[i].t;
      var leftArgs = left[i].d;
      var rightArgs = right[i].d;

      var leftFunctionData = transformFunctions[leftType];
      var rightFunctionData = transformFunctions[rightType];

      var type;
      if (isMatrixOrPerspective(leftType, rightType)) {
        if (!matrixModulesLoaded) return;
        var merged = mergeMatrices([left[i]], [right[i]]);
        leftResult.push(merged[0]);
        rightResult.push(merged[1]);
        types.push(['matrix', [merged[2]]]);
        continue;
      } else if (leftType == rightType) {
        type = leftType;
      } else if (leftFunctionData[2] && rightFunctionData[2] && typeTo2D(leftType) == typeTo2D(rightType)) {
        type = typeTo2D(leftType);
        leftArgs = leftFunctionData[2](leftArgs);
        rightArgs = rightFunctionData[2](rightArgs);
      } else if (leftFunctionData[1] && rightFunctionData[1] && typeTo3D(leftType) == typeTo3D(rightType)) {
        type = typeTo3D(leftType);
        leftArgs = leftFunctionData[1](leftArgs);
        rightArgs = rightFunctionData[1](rightArgs);
      } else {
        if (!matrixModulesLoaded) return;
        var merged = mergeMatrices(left, right);
        leftResult = [merged[0]];
        rightResult = [merged[1]];
        types = [['matrix', [merged[2]]]];
        break;
      }

      var leftArgsCopy = [];
      var rightArgsCopy = [];
      var stringConversions = [];
      for (var j = 0; j < leftArgs.length; j++) {
        var merge = typeof leftArgs[j] == 'number' ? mergeNumbers : mergeDimensions;
        var merged = merge(leftArgs[j], rightArgs[j]);
        leftArgsCopy[j] = merged[0];
        rightArgsCopy[j] = merged[1];
        stringConversions.push(merged[2]);
      }
      leftResult.push(leftArgsCopy);
      rightResult.push(rightArgsCopy);
      types.push([type, stringConversions]);
    }
  }

  if (flipResults) {
    var tmp = leftResult;
    leftResult = rightResult;
    rightResult = tmp;
  }

  return [leftResult, rightResult, function (list) {
    return list.map(function (args, i) {
      var stringifiedArgs = args.map(function (arg, j) {
        return types[i][1][j](arg);
      }).join(',');
      if (types[i][0] == 'matrix' && stringifiedArgs.split(',').length == 16) types[i][0] = 'matrix3d';
      return types[i][0] + '(' + stringifiedArgs + ')';
    }).join(' ');
  }];
}

if (false) testing.parseTransform = parseTransform;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export visibilityhandler */
// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var visibilityhandler = [[String, merge, ['visibility']]];


function merge(left, right) {
  if (left != 'visible' && right != 'visible') return;
  return [0, 1, function (x) {
    if (x <= 0) return left;
    if (x >= 1) return right;
    return 'visible';
  }];
}

/***/ })
/******/ ]);
});