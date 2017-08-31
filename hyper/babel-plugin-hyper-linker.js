module.exports = function(babel) {
	var t = babel.types;
	return {
		name: 'babel-plugin-hyper-linker',
		visitor: {
			Program(path,state) {
				var string = this.file.opts.basename;
				if (string.indexOf("-handler") === -1) {
					path.node.body = [];
				} else {
					var source = t.stringLiteral(string);
					var xport = t.exportAllDeclaration(source);
					var body = [xport];
					path.node.body = body;
				}
			},
		}
	};
};