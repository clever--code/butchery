define(function(){
	var _this = {
			
			/**
			 * @param value
			 * @returns {___anonymous363_392}
			 */
			parser : function(value){
				if(value != undefined){
					var content = value.replace('#','').split('/');
					var args = '';
					if(content.length > 2){ for(var i = 2; i<content.length; i++){ args += (!((i+1) === content.length))?content[i] + ',':content[i]; } }
					return {"controller":content[0], "obj":content[1],"args":args};
				} else{
					return {"controller":null, "obj":null,"args":null};
				}
			}
		};
	return _this;
});