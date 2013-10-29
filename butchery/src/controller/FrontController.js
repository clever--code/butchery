require(["../helpers/RESTfulHelper", "../controller/ToDoController"],function (RESTfulHelper, ToDoController){
	"use strict";
	var _this = {
			
			/**
			 * @param obj
			 */
			reflection : function(rflt){
				try { (rflt.content.length == 1)?eval(rflt.controller + '.' + rflt.content.obj + '();'):eval(rflt.controller + '.' + rflt.content.obj + '(' + rflt.content.args + ');'); } finally {}
			},
			
			/**
			 * 
			 */
			locationHashChanged : function(event) {
				var content = RESTfulHelper.parser(location.hash);
				_this.reflection({"controller":content.controller, "content":content});
				try { event.preventDefault(); } catch (e) {}
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
