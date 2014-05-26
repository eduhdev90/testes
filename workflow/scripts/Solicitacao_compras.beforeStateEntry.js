function beforeStateEntry(sequenceId){
	var numAtiv = getValue("WKNumState");
	var aprovAtiv = 6;
	
	if(numAtiv == aprovAtiv){
	
		var aprovItemProvider = ServiceManager.getServiceInstance("CardService");
		var aprovItemLocator = aprovItemProvider.instantiate("com.datasul.technology.webdesk.dm.ws.CardServiceServiceLocator");
		var aprovItem = aprovItemLocator.getCardServicePort(); 
		
		var sendApproval = false;
		var approved = false;
		if(hAPI.getCardValue("campo_valor") <= 30000){
			//2 niveis
			
			if(hAPI.getCardValue("solicitacao1") == "false" || hAPI.getCardValue("solicitacao2") == "false"){
				sendApproval = true;
			}else if(hAPI.getCardValue("current_level") == 2){
				sendApproval = true;
				approved = true;
			}
			
		}else if(hAPI.getCardValue("campo_valor") > 30000 && hAPI.getCardValue("campo_valor") <= 300000){
			//3 niveis
			
			if(hAPI.getCardValue("solicitacao1") == "false" || hAPI.getCardValue("solicitacao2") == "false" || hAPI.getCardValue("solicitacao3") == "false"){
				sendApproval = true;
			}else if(hAPI.getCardValue("current_level") == 3){
				sendApproval = true;
				approved = true;
			}
			
		}else{
			//5 niveis
			
			if(hAPI.getCardValue("solicitacao1") == "false" || hAPI.getCardValue("solicitacao2") == "false" || hAPI.getCardValue("solicitacao3") == "false" || hAPI.getCardValue("solicitacao4") == "false" || hAPI.getCardValue("solicitacao5") == "false"){
				sendApproval = true;
			}else if(hAPI.getCardValue("current_level") == 5){
				sendApproval = true;
				approved = true;
			}
			
		}
		
		if(sendApproval){
			aprovItem.approveItem(hAPI.getCardValue("vl_codigo"),hAPI.getCardValue("vl_seq"), approved)
		}else{
			hAPI.setCardValue("current_level",(parseInt(hAPI.getCardValue("current_level")) + 1));
		}

	}
	
}