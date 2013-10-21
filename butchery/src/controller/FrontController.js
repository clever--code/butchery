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
			 * 
			 */
			locationHashChanged : function() {
				var content = RESTfulHelper.parser(location.hash);
				_this.reflection({"controller":content.controller, "content":content});
			},
			
			/**
			 * Management Requirements
			 */
			service : function(){
				window.addEventListener("hashchange", _this.locationHashChanged, false);
				if(location.hash != ''){ _this.locationHashChanged(); }
			}
			
	};
	_this.service();
});
