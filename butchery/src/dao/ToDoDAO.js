define(["../helpers/helpers", "../dao/DataBase/ToDoDataBase", "../models/ToDoBean"], function(helpers, ToDoDataBase, ToDoBean){
	return {
		
		getTodoList : function(callback){
			ToDoDataBase.getInstance(function(conn){
				var transaction = conn.transaction("ToDoList", "readwrite");
				var store = transaction.objectStore("ToDoList");
				
				var inquiry = store.openCursor();
				inquiry.onsuccess = function() {
					callback(inquiry.result);
				};
				conn.close();
			});
		},
		
		getTodoUrgentList : function(callback){
			ToDoDataBase.getInstance(function(conn){
				var transaction = conn.transaction("ToDoList", "readwrite");
				var store = transaction.objectStore("ToDoList");
				var index = store.index("by_urgent");
				
				var inquiry = index.openCursor(IDBKeyRange.only("true"));
				inquiry.onsuccess = function() {
					callback(inquiry.result);
				};
				conn.close();
			});
		},
		
		getTodoCancelledList : function(callback){
			ToDoDataBase.getInstance(function(conn){
				var transaction = conn.transaction("ToDoList", "readwrite");
				var store = transaction.objectStore("ToDoList");
				var index = store.index("by_enabled");
				
				var inquiry = index.openCursor(IDBKeyRange.only("true"));
				inquiry.onsuccess = function() {
					callback(inquiry.result);
				};
				conn.close();
			});
		}

	};
});