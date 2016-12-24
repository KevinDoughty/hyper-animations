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
webAnimations1.addPropertiesHandler = addPropertiesHandler;

function parserForProperty(property) {
	return propertyHandlers[property][0];
}
function mergerForProperty(property) {
	return propertyHandlers[property][1];
}

console.log("it's time to get hyper!");
console.log("webAnimations1:%s;",JSON.stringify(Object.keys(webAnimations1)));
console.log("webAnimationsNext:%s;",JSON.stringify(Object.keys(webAnimationsNext)));
console.log("webAnimationsShared:%s;",JSON.stringify(Object.keys(webAnimationsShared)));


module.exports = {
	webAnimations1:webAnimations1,
	webAnimationNext:webAnimationsNext,
	webAnimationsShared:webAnimationsShared,
	typeOfProperty: getCssOnlyType
};