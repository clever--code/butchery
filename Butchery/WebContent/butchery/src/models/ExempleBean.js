define(function(){
	return function(){
		this.config = (arguments.length == 1)?arguments[0]:{"id":"1", "name":""};
		
		this.setId = function(value){
			this.config.id = value;
		};
		
		this.getId = function(){
			return this.config.id;
		};
		
		this.setName = function(value){
			this.config.name = value;
		};
		
		this.getName = function(){
			return this.config.name;
		};
	};
});	
	
