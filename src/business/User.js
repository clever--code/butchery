var userDao = (require('../dao/UserDAO')).getInstance;

module.exports.getInstance = {

	setNew : function(userBean){
		userDao.userPersist(userBean);
	},

	getRecord : function(id){
		return userDao.userFindById([id]);
	},

	getRecords : function(ids){
		return userDao.userFindById(ids);
	},

	getAll : function(){

	}
};