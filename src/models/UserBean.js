module.exports.class = function(){

	this.id = '';
	this.name = '';
	this.email = '';
	this.fone = '';
	this.sexo = '';

	this.setId = function(value){
		this.id = value;
	};

	this.getId = function(){
		return this.id;
	};

	this.setName = function(value){
		this.name = value;
	};

	this.getName = function(){
		return this.name;
	};
	
	this.setEmail = function(value){
		this.email = value;
	};

	this.getEmail = function(){
		return this.email;
	};
	
	this.setFone = function(value){
		this.fone = value;
	};

	this.getFone = function(){
		return this.fone;
	};
	
	this.setSexo = function(value){
		this.sexo = value;
	};

	this.getSexo = function(){
		return this.sexo;
	};

	this.toString = function(){
		return {"id":this.id, "name":this.name, "email":this.email, "fone":this.fone, "sexo":this.sexo};
	};
};