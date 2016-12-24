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

var webpack = require('webpack');
var path = require('path');

var location = path.join(__dirname, "src");

var files = [
	"hyper-animations", //"property-interpolation",

	"handler-utils",
	"matrix-interpolation",
	"matrix-decomposition",

	"box-handler",
	"color-handler",
	"dimension-handler",
	"font-weight-handler",
	"number-handler",
	"position-handler",
	"shadow-handler",
	"shape-handler",
	"transform-handler",
	"visibility-handler"
]
var entry = files.map( function(file) {
	return path.join(location,file);
});

module.exports = {
	entry: entry,
	output: {
		filename: "hyper-animations.js",
		library: "hyper-animations",
		libraryTarget: "umd"
	},
	resolve: {
		root: path.resolve('./src'),
		extensions: [".js"]
	},
	plugins: [
		new webpack.ProvidePlugin({
			webAnimationsShared: "webAnimationsShared",
			webAnimations1: "webAnimations1",
			webAnimationsNext: "webAnimationsNext",
			webAnimationsTesting: "webAnimationsTesting",
			"WEB_ANIMATIONS_TESTING": "WEB_ANIMATIONS_TESTING"
		})
	]
}