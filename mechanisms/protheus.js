function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	try{
			var aprovItemProvider = ServiceManager.getServiceInstance("CardService");
			var aprovItemLocator = aprovItemProvider.instantiate("com.datasul.technology.webdesk.dm.ws.CardServiceServiceLocator");
			var aprovItem = aprovItemLocator.getCardServicePort();
			
			var users = aprovItem.getAprovadorNivel(hAPI.getCardValue("current_level"),hAPI.getCardValue("numRequisicao"),hAPI.getCardValue("codigoItem"))
		
			if(users.getItem().size() == 1){
				userList.add(users.getItem().get(0).getColleagueId().toString() );
			}else if(users.getItem().size() == 0){
				throw "Nenhum aprovador encontrado";
			}else if(users.getItem().size() > 1){
				throw "Mais de um aprovador encontrado";
			}
		
	}catch(e){
		throw e;
	}
	
	return userList;

}