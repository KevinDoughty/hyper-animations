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
import * as hyper from "./hyper-linked.js";

export const boxType = {
	parse:hyper.boxhandler[0][0],
	merge:hyper.boxhandler[0][1],
	properties:hyper.boxhandler[0][2]
}



/*
var dimensionhandler = [[parseSizePairList, mergeNonNegativeSizePairList, ['background-size']],
[parseLengthOrPercent, mergeDimensionsNonNegative, ['border-bottom-width', 'border-image-width', 'border-left-width', 'border-right-width', 'border-top-width', 'flex-basis', 'font-size', 'height', 'line-height', 'max-height', 'max-width', 'outline-width', 'width']],
[parseLengthOrPercent, mergeDimensions, ['border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius', 'bottom', 'left', 'letter-spacing', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'min-height', 'min-width', 'outline-offset', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'perspective', 'right', 'shape-margin', 'text-indent', 'top', 'vertical-align', 'word-spacing']]];
*/

const dimensionTypes = {};
dimensionhandler.forEach( function(handlers,index) {
	handlers.forEach( function(handler) {
		dimensionTypes[handler] = index;
	});
});

export const dimensionType = function(property) {
	const number = dimensionTypes[property];
	const handlerArray = dimensionhandler[number]; // parser, merger, properties
	
// 	parse:hyper.dimensionhandler
// 	merge:
// 	properties:
	return {
		parser: handlerArray[0],
		merger: handlerArray[1],
		properties: handlerArray[2],
		zero: function(value) {
			return 0;
	// 		return {px : 0};
		},
		add: function(base, delta) {
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
		subtract: function(base,delta) {
			return 0;
	// 		var inverse = this.inverse(delta);
	// 		var result = this.add(base,inverse);
	// 		console.log("length subtract base:",base);
	// 		console.log("length subtract delta:",delta);
	// 		console.log("length subtract out:",result);
	// 		return result;
		},
		interpolate: function(from, to, f) {
			var out = {};
			for (let value in from) {
				out[value] = interp(from[value], to[value], f);
			}
			for (let value in to) {
				if (value in out) {
					continue;
				}
				out[value] = interp(0, to[value], f);
			}
			return out;
		},
		output: function(value) {
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
		input: function(value) {
			const result = handlerArray[0](value);
			console.log("%s input:%s; result:%s;",property,value,result);
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
	}
};

dimensionType("left").input("qwerf");


// var scope = require("hyper-scope");
// var shared = require("hyper-shared");

//var clamps = require("number-handler").clamp;

var propertyHandlers = {};

function toCamelCase(property) {
	return property.replace(/-(.)/g, function(_, c) {
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
