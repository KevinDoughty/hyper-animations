module.exports = function(babel) {
	var t = babel.types;

	const importCode = function(id,string) {
		var local = t.identifier(id);
		var imported = t.identifier(id);
		var specifier = t.importSpecifier(local,imported);
		var specifiers = [specifier];
		var source = t.stringLiteral(string);
		var declaration = t.importDeclaration(specifiers, source)
		return declaration;
	}

	const subImportVisitor = {
		MemberExpression(path,state) { // scope.clamp(x,y,z); // clamp(x,y,z);
			var object = path.node.object;
			var property = path.node.property;
			if (t.isIdentifier(object) && t.isIdentifier(property)) {
				if (object.name === "scope") {
					if (property.name !== "addPropertiesHandler") {
						path.replaceWith( t.identifier(property.name) );
					}
				}
			}
		}
	}

	const subExportVisitor = { // record & remove expressionStatement for export
		ExpressionStatement(path,state) { // scope.debugFWH = testFWH; //
			var expression = path.node.expression;
			var type = expression.type;
			if (!t.isAssignmentExpression(expression)) return;
			var left = expression.left;
			var right = expression.right;
			if (!t.isMemberExpression(left)) return;
			var object = left.object;
			var property = left.property;
			if (t.isIdentifier(object) && t.isIdentifier(property)) {
				if (object.name === "scope") {
					var name = right.name;
					if (name) {
						this.lefty[property.name] = name; // state
						this.righty[name] = property.name; // state
						path.remove(); // scope.debugFWH = testFWH;
					}
				}
			}
		}
	};

	const secondSubExportVisitor = { // prefix vars with export

		MemberExpression(path,state) { // scope.addPropertiesHandler(a,b,c); //
			var object = path.node.object;
			var property = path.node.property;
			if (t.isIdentifier(object) && t.isIdentifier(property)) {
				if (object.name === "scope") {
					if (property.name === "addPropertiesHandler") {
						var args = path.parentPath.node.arguments;
						this.handlers.push( args );
						path.parentPath.remove();
					}
				}
			}
		},
		FunctionExpression(path,state) { // left and right must be named the same, i.e. scope.composeMatrix = composeMatrix;
			var parentScope = path.parentPath.scope.uid;
			if (this.scope !== parentScope) return;
			if (!path.parentPath || path.parentPath.node.type !== "CallExpression" || !path.parentPath.parentPath || path.parentPath.parentPath.node.type !== "VariableDeclarator") return;
			var callExpression = path.parentPath;
			var variableDeclarator = path.parentPath.parentPath;
			if (variableDeclarator.parentPath.node.type === "VariableDeclaration" && variableDeclarator.parentPath.parentPath && variableDeclarator.parentPath.parentPath.node.type === "ExportNamedDeclaration") return;
			var declarator = variableDeclarator.node;
			var local = declarator.id;
			if (!local) return;
			var kind = "var";
			var declarations = [declarator];
			var declaration = t.variableDeclaration(kind, declarations);
			var exported = callExpression.node;
			var specifiers = [];
			var result = t.exportNamedDeclaration(declaration, specifiers); // filter out above
			variableDeclarator.parentPath.replaceWith( result );
		},
		FunctionDeclaration(path,state) { // prefix functions with export
			if (path.parentPath.node.type === "ExportNamedDeclaration") return; // otherwise unterminated with new function declaration below
			var key = path.node.id.name;
			var value = this.righty[key];
			var parentScope = path.parentPath.scope.uid;
			if (value && this.scope === parentScope) {
				var local = t.identifier(key);//right.name); // testFWH
				var exported = t.identifier(value);//property.name); // debugFWH
				if (key === value) { // named the same
					var declaration = t.functionDeclaration(
						path.node.id,
						path.node.params,
						path.node.body
					);
					var specifiers = [t.exportSpecifier(local, exported)];
					var result = t.exportNamedDeclaration(declaration, specifiers); // filter out above
					path.replaceWith( result );
				} else { // not named the same
					var declarator = t.variableDeclarator(exported, local);
					var kind = "var";
					var declarations = [declarator];
					var declaration = t.variableDeclaration(kind, declarations);
					var specifiers = [t.exportSpecifier(exported, local)];
					var result = t.exportNamedDeclaration(declaration, specifiers); // filter out above
					path.insertBefore( result );
				}
			}
		},
	}

	return {
		name: 'babel-plugin-hyper-shuffle',
		visitor: {
			Program(path,state) {
				state.basename = this.file.opts.basename;
			},
			Identifier(path,state) {
				if (path.node.name === "WEB_ANIMATIONS_TESTING") {
					if (path.parentPath.node.type === "LogicalExpression" || path.parentPath.node.type === "IfStatement") {
						path.replaceWith( t.booleanLiteral(false) );
					}
				}
			},
			FunctionExpression(path,state) { ///////// OUTER IIFE
				var params = path.node.params;
				params.forEach( function(param) {
					if (param.name === "scope") {// || param.name === "shared" || param.name === "testing") {
						var body = path.node.body; // an array of Node
						var result = body.body ? body.body : body;
						var basename = state.basename.split("-").join("");
// 						console.log("$$$",state.basename,state.opts.basename);
// 						console.log("$$",this.basename,this.opts ? this.opts.basename : null);
// 						console.log("$",this.file ? this.file.opts ? this.file.opts.basename : null : null);
						var lefty = {};
						var righty = {};
						var handlers = [];
						var nodes = path.get("body");
						var scope = nodes.scope.uid;
						var helper = { scope:scope, lefty:lefty, righty:righty, basename:basename, handlers:handlers };
						path.traverse(subExportVisitor, helper); // TRAVERSE // record & remove expressionStatement
						path.traverse(subImportVisitor, helper); // TRAVERSE // imports
						path.traverse(secondSubExportVisitor, helper); // TRAVERSE // prefix functions & vars with export
						var source = "../hyper/hyper-linked.js"
						Object.keys(lefty).forEach( function(key) {
							var value = lefty[key];
							result.splice(0,0, importCode(key,source) );
						});
						var content = handlers.map( function(handler) {
							return t.arrayExpression(handler);
						});
						var array = t.arrayExpression(content);
						var id = t.identifier(basename);
						var declarator = t.variableDeclarator(id,array);
						var kind = "var";
						var declarations = [declarator];
						var declaration = t.variableDeclaration(kind, declarations);
						var specifiers = [];
						var last = t.exportNamedDeclaration(declaration, specifiers);
						result.splice(0,0,last);
						path.parentPath.parentPath.replaceWithMultiple( result );
					}
				});
			}
		}
	};
};
