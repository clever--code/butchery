define(function(){
	var _this = {
		getTable: function(){
			return '<table class="table table-hover"><thead><tr><th>Event</th><th>Urgent</th><th>Planned To</th><th>Canceled</th></tr></thead><tbody></tbody></table>';
		},
		
		getLineTable: function(toDoBean){
			return '<tr><td>' + toDoBean.getTitle() + '</td><td>' + toDoBean.getUrgent() + '</td><td>' + toDoBean.getPlannedTo() + '</td><td>' + toDoBean.getEnabled() + '</td></tr>';
		}
	};
	return _this;
});