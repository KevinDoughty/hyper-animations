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
hyper.dimensionhandler.forEach( function(handlers,index) {
	handlers.forEach( function(handler) {
		dimensionTypes[handler] = index;
	});
});

export const dimensionType = function(property) {
	const number = dimensionTypes[property];
	const handlerArray = hyper.dimensionhandler[number]; // parser, merger, properties
	
// 	parse:hyper.dimensionhandler
// 	merge:
// 	properties:
	return {
		parser: handlerArray[0],
		merger: handlerArray[1],
		properties: handlerArray[2],
		zero: function(value) {
			return 0;
		},
		add: function(a,b) {
			return 0;
		},
		subtract: function(a,b) {
			return 0;
		},
		interpolate: function(from, to, progress) {
			return to;
		},
		output: function(value) {
			return value;
		},
		input: function(value) {
			const result = handlerArray[0](value);
			console.log("%s input:%s; result:%s;",property,value,result);
			return result;
		}
	}
};

//dimensionType("left").input("asdf");
