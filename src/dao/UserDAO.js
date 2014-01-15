module.exports.getInstance = {
	userPersist : function(userBean){
		console.log("Persisting: ", userBean.toString());
	},

	userFindById : function(idList){
		var arrayList = new (require('../helpers/ArrayList')).class();
		idList.forEach(function(id){
			var userBean = new (require('../models/UserBean')).class();
			userBean.setId(id);
			userBean.setName('Name to ' + id);
			userBean.setEmail('Email to ' + id);
			userBean.setFone('Fone to ' + id);
			userBean.setSexo('Sexo to ' + id);
			arrayList.add(userBean.toString());
		});
		return arrayList;
	}
};