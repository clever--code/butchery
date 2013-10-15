define(["../helpers/helpers", "../dao/DataBase/exempleList", "../models/ExempleBean"], function(helpers, exempleList, ExempleBean){
	return {
		
		getExempleList : function(callback){
			resultsList = new helpers.ArrayList();
			for(method in exempleList){
				exempleBean = new ExempleBean(exempleList[method]);
				resultsList.add(exempleBean);
			}
			callback(resultsList);
		}
	
	};
});