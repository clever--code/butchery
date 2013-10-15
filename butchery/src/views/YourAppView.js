define(function(){
	var _this = {
		getTableDemo: function(){
			return '<table class="table table-hover"><thead><tr><th style="width:15px;">Id</th><th>Name</th></tr></thead><tbody></tbody></table>';
		},
		
		getLineTableDemo: function(exempleBean){
			return '<tr><td>' + exempleBean.getId() + '</td><td>' + exempleBean.getName() + '</td></tr>';
		}
	};
	return _this;
});