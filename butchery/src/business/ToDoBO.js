define(["../dao/ToDoDAO", "../models/ToDoBean", "../views/ToDoView"], function(ToDoDAO, ToDoBean, ToDoView){
	var _this = {

			/**
			 * ToDoList Start
			 */
			getStart : function(){
				$('#content').html(ToDoView.getTable());
				console.log('ToDoList Start...');
				this.getToDoList();
			},
			
			/**
			 * List events list
			 */
			getToDoList : function(){
				var table = '';
				ToDoDAO.getTodoList(function(resultSet){
					if (resultSet) {
						table += ToDoView.getLineTable(new ToDoBean(resultSet.value));
						resultSet.continue();
					} else{
						$('#content tbody').html(table);
					}
				});
				$('.navbar-nav li').removeClass('active');
				$('#menuAllEvents').addClass('active');
			},
			
			/**
			 * List events list urgent
			 */
			getUrgent : function(){
				var table = '';
				ToDoDAO.getTodoUrgentList(function(resultSet){
					if (resultSet) {
						table += ToDoView.getLineTable(new ToDoBean(resultSet.value));
						resultSet.continue();
					} else{
						$('#content tbody').html(table);
					}
				});
				$('.navbar-nav li').removeClass('active');
				$('#menuUrgent').addClass('active');
			},
			
			/**
			 * List events list cancelled
			 */
			getCancelled : function(){
				var table = '';
				ToDoDAO.getTodoCancelledList(function(resultSet){
					if (resultSet) {
						table += ToDoView.getLineTable(new ToDoBean(resultSet.value));
						resultSet.continue();
					} else{
						$('#content tbody').html(table);
					}
				});
				$('.navbar-nav li').removeClass('active');
				$('#menuCancelled').addClass('active');
			}
	
		};
	return _this;
});