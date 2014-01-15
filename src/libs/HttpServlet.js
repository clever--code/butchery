var express = require('../libs/express'), HttpServlet = express();

var factories = {

	mappingUriFactory : function(type, uri, callback){
		eval("HttpServlet." + type.toLowerCase() + "(uri,callback);");
	}

};

module.exports.getInstance = {

	setMappingUri : function(type, uri, callback){
		factories.mappingUriFactory(type, uri, callback);
	},
	
	publishOnPort : function(port, callback){
		var success, listen = {};
		try{
			listen = HttpServlet.listen(arguments[0]);
			success = true;
		} catch(e) {
			success = false;
			console.log(e);
		}
		(arguments.length == 2)?arguments[1](success, listen):'';
	}

};