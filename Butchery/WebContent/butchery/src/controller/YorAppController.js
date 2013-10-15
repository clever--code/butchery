define(["../business/YorAppBO"], function(YorAppBO){
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
				var content = _this.parser(obj.target.dataset.controller);
				_this.reflection({"controller":content.controller, "content":content});
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
			 * Define addEventListeners in DashBoard
			 */
			setEventListeners : function(){
				document.body.addEventListener('click',_this.objReflection);
			},

			/**
			 * Start Aplication
			 */
			getStart : function(){
				YorAppBO.getStart(arguments);
				_this.setEventListeners();
			}
			
	};
	return _this;
});