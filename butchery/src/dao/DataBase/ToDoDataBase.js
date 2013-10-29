define(function(){
	var _this = {
			
			getInstance: function(callback){
				var request = indexedDB.open("ToDoList", 1);
				request.onupgradeneeded = function() {
					_this.init(request.result);
				};
				request.onsuccess = function() {
					callback(request.result);
				};
			},
			
			init: function(db){
				var store = db.createObjectStore("ToDoList", {
					keyPath : "title"
				});
				store.createIndex("by_urgent", "urgent");
				store.createIndex("by_enabled", "enabled");
				
				//initial data
				store.put({
					title : "Go to japan",
					plannedTo : "Someday",
					urgent : "true",
					enabled : "false"
				});
				store.put({
					title : "Buy a bladder caramel",
					plannedTo : "When der",
					urgent : "false",
					enabled : "false"
				});
				store.put({
					title : "Trample President Dilma",
					plannedTo : "As soon as possible",
					urgent : "true",
					enabled : "true"
				});
			},
			
			deleteDatabase: function(name){
				indexedDB.deleteDatabase(name);
			}
		};
//	_this.deleteDatabase("ToDoList");
	return _this;
});