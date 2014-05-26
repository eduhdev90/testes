
// valor teste para funcao retorn float;
var valorSolicitacao = retornaFloat('100.200.500,00');


// função que baseado no valor solicitado cria regra dos acordeões;
$(function() {
	if(valorSolicitacao > 0 && valorSolicitacao < 30001){
		$('.nl3').css('display','none');
		$('.nl4').css('display','none');
		$('.nl5').css('display','none');
	}
	if(valorSolicitacao > 30001 && valorSolicitacao < 300000){
		$('.nl4').css('display','none');
		$('.nl5').css('display','none');
	}
	if(valorSolicitacao > 300001 && valorSolicitacao < 1000000){
	}
	if(valorSolicitacao > 1000000){
	}	
});

// função cria acordeao e ja carrega data atual para confirmação ou rejeição de solicitação;
$(function() {
   $( "#accordion" ).accordion();
   $('.data_aprov').datepicker({dateFormat:"dd/mm/yy"}).datepicker("setDate",new Date());
});
// função que habilita campo para descricao da rejeicao;
function motivoRejeicao () {
  $('.motivo').css('display','block');
}

// funcao que garante valor do motivo vazio ao selecionar que aceita a solicitacao;
function motivoAceita () {
  $('.motivo').css('display','none');
  $('.desc_motivo').val('');
}

 
 //transforma padrao numero para js 
 function retornaFloat(x){
                var conRetFloat = true;
                var xTotal = 0;
                if(x != "" && x != null){
                                var xTotalDecimal = x.split(",")[1];
                                if(isNaN(xTotalDecimal)){
                                                conRetFloat = false;
                                }
                                var xTotalInteiroCPonto = x.split(",")[0];
                                var xTotalInteiroSplit = xTotalInteiroCPonto.split(".");
                                var xTotalInteiroSPonto = "";
                               
                                var contSplit0 = 0;
                                while(contSplit0 < xTotalInteiroSplit.length){
                                                xTotalInteiroSPonto += xTotalInteiroSplit[contSplit0];
                                                contSplit0++;
                                }
                                if(isNaN(xTotalInteiroSPonto)){
                                                conRetFloat = false;
                                }
                                xTotal = parseFloat(xTotalInteiroSPonto+"."+xTotalDecimal);
                                if(conRetFloat == false){
                                                xTotal = Number.NaN;
                                }
                }
                $('#vl_total').val(xTotal);
                return xTotal;
}
 
 