define(["../dao/YourAppDAO", "../views/YourAppView"], function(YourAppDAO, YourAppView){
	var _this = {
			
			/**
			 * Example list of business
			 */
			getExempleList : function(){
				YourAppDAO.getExempleList(function(dataTable){
					var table = '';
					dataTable.forEach(function(exempleBean){
						table += YourAppView.getLineTableDemo(exempleBean);
					});
					$('#content tbody').html(table);
				});
				console.log(arguments);
			},
			
			/**
			 * Example of business method
			 */
			getStart: function(){
				$('#content').html(YourAppView.getTableDemo());
				$('#btnTarget').show();
				console.log('Yor App Start...');
				console.log(arguments[0]);
			},
			
			/**
			 * Demo Alert
			 */
			getAlert: function(){
				alert('Yes!!!');
			}
	
		};
	return _this;
});