require(["../controller/YourAppController"],function (YourAppController){
	"use strict";
	var _this = {
			
			/**
			 * @param obj
			 */
			reflection : function(rflt){
				try {
					(rflt.content.length == 1)?eval(rflt.controller + '.' + rflt.content.obj + '();'):eval(rflt.controller + '.' + rflt.content.obj + '(' + rflt.content.args + ');');
				} finally {}
			},
			
			/**
			 * @param value
			 * @returns {___anonymous363_392}
			 */
			parser : function(value){
				var content = value.replace('#','').split('/');
				var args = '';
				if(content.length > 2){ for(var i = 2; i<content.length; i++){ args += (!((i+1) === content.length))?content[i] + ',':content[i]; } }
				return {"controller":content[0], "obj":content[1],"args":args};
			},
			
			/**
			 * Management Requirements
			 */
			service : function(){
				if((/#/g).test(document.URL)){
					var content = _this.parser((document.URL.split("#")[(document.URL.split("#").length-1)]));
					_this.reflection({"controller":content.controller, "content":content});
				}
				$('a').click(function(obj){
					if((/#/g).test(obj.target.getAttribute('href'))){
						var content = _this.parser(obj.target.getAttribute('href'));
						_this.reflection({"controller":content.controller, "content":content});
					}
				});
			}
			
	};
	_this.service();
});