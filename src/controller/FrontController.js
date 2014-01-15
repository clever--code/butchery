HttpServlet = require('../libs/HttpServlet');

module.exports.getInstance = {
	start : function(){

		HttpServlet.getInstance.setMappingUri('GET', '/user/add/:id/:name/:email/:fone/:sexo', function(request, response){

			var userBean = new (require('../models/UserBean')).class();

			userBean.setId(request.params.id);
			userBean.setName(request.params.name);
			userBean.setEmail(request.params.email);
			userBean.setFone(request.params.fone);
			userBean.setSexo(request.params.sexo);

			var user = (require('../business/User')).getInstance;
			user.setNew(userBean);

			response.set('Content-Type', 'application/json');
			response.send(userBean.toString());

		});

		HttpServlet.getInstance.setMappingUri('GET', '/user/:id*', function(request, response){

			var userBean = new (require('../models/UserBean')).class();
			var user = (require('../business/User')).getInstance;
			var yourUser = user.getRecord(request.params.id);

			response.set('Content-Type', 'application/json');
			response.send(yourUser.getCollection());

		});

		HttpServlet.getInstance.setMappingUri('GET', '/users/:ids*', function(request, response){

			var userBean = new (require('../models/UserBean')).class();
			var user = (require('../business/User')).getInstance;
			var ids = (request.params.ids.split(','));
			var yourUser = user.getRecords(ids);

			response.set('Content-Type', 'application/json');
			response.send(yourUser.getCollection());

		});

		HttpServlet.getInstance.publishOnPort(8080, function(success, listen){
			console.log('Its application started successfully... YES!!!');
		});
	}
};