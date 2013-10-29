define(["../helpers/RESTfulHelper", "../business/ToDoBO"], function(RESTfulHelper, ToDoBO){
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
				ToDoBO.getStart(arguments);
			},
			
			/**
			 * Get List
			 */
			getToDoList : function(){
				ToDoBO.getToDoList(arguments);
			},
			
			/**
			 * Get Urgent List
			 */
			getUrgent : function(){
				ToDoBO.getUrgent(arguments);
			},
			
			/**
			 * Get Cancelled List
			 */
			getCancelled : function(){
				ToDoBO.getCancelled(arguments);
			}
			
	};
	_this.setEventListeners();
	_this.getStart();
	return _this;
});