require(["../helpers/RESTfulHelper", "../controller/YourAppController"],function (RESTfulHelper, YourAppController){
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
			 * Management Requirements
			 */
			service : function(){
				if((/#/g).test(document.URL)){
					var content = RESTfulHelper.parser((document.URL.split("#")[(document.URL.split("#").length-1)]));
					_this.reflection({"controller":content.controller, "content":content});
				}
				$('a').click(function(obj){
					if((/#/g).test(obj.target.getAttribute('href'))){
						var content = RESTfulHelper.parser(obj.target.getAttribute('href'));
						_this.reflection({"controller":content.controller, "content":content});
					}
				});
			}
			
	};
	_this.service();
});