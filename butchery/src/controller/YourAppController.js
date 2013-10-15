define(["../helpers/RESTfulHelper", "../business/YourAppBO"], function(RESTfulHelper, YourAppBO){
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
			 * @param obj
			 */
			objReflection : function(obj){
				var content = RESTfulHelper.parser(obj.target.dataset.controller);
				if(content.controller != null){
					_this.reflection({"controller":content.controller, "content":content});
				}
			},
			
			/**
			 * Define addEventListeners in DashBoard
			 */
			setEventListeners : function(){
				document.body.addEventListener('click',_this.objReflection);
			},

			/**
			 * Start Aplication
			 */
			getStart : function(){
				YourAppBO.getStart(arguments);
			}
			
	};
	_this.setEventListeners();
	return _this;
});