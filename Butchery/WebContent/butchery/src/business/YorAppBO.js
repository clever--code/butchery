define(["../dao/YorAppDAO"], function(YorAppDAO){
	var _this = {
			
			/**
			 * Example list of business
			 */
			getExempleList : function(){
				YorAppDAO.getExempleList(function(dataTable){
					var table = '';
					dataTable.forEach(function(exempleBean){
						table += '<tr><td>' + exempleBean.getId() + '</td><td>' + exempleBean.getName() + '</td></tr>';
					});
					$('#content tbody').html(table);
				});
				console.log(arguments);
			},
			
			/**
			 * Example of business method
			 */
			getStart: function(){
				$('#content').html('<table class="table table-hover"><thead><tr><th style="width:15px;">Id</th><th>Name</th></tr></thead><tbody></tbody></table>');
				console.log('Yor App Start...');
				console.log(arguments[0]);
			}
	
		};
	return _this;
});