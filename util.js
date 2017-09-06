$(function(){
frases=['Lorem ipsum dolor sit amet,',
	'consectetur adipiscing elit,',
	'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];
rand=parseInt(Math.random()*3);
rand2=parseInt(Math.random()*3);
sombras=['0 0 6px #FF0000',
	'2px -2px 3px #00ff00',
	'4px 4px 10px #0000ff'];
$("#frase").html(frases[rand]);
$("#frase").css('text-shadow',sombras[rand2]);

menu('servidor.htm');

})

function menu(html){

   $.ajax({
     type: "GET",
     url: html,
     success: function(data) {
           $('article').html(data);
			}
   });
}

function jq(){
	sel=$('#selection option:selected').text();	
	op1=parseInt($.trim($("#op1").val()));
	op2=parseInt($.trim($("#op2").val()));
	if (isNaN(op1)) op1=0;
	if (isNaN(op2)) op2=0;
	console.log(op1);
	if(op1!=0 && op2!=0){	
		switch(sel) {
			case 'Suma':
				$("#res").val(op1+op2);
				break;
			case 'Resta':
				$("#res").val(op1-op2);
				//code block
				break;
			case 'Multiplicacion':
				$("#res").val(op1*op2);
				break;
			case 'Division':
				$("#res").val(op1/op2);
				//code block
				break;
			default:
				console.log('default');
		}	
	}else{
	alert('Operador 1 y Operador 2 deben estar cargados y ser distintos de cero');
	}	
}

function printForm(){
	apellido=$.trim($("#apellido").val());
	nombre=$.trim($("#nombre").val());
	legajo=$.trim($("#legajo").val());
	turno=$('input[name=turno]:checked').val();
	comision=$('#comision option:selected').text();	
	console.log(apellido+'-'+nombre+'-'+legajo+'-'+turno+'-'+comision);	
	
	if(apellido!='' && nombre !='' && legajo!=''){
	html='<table class="basic-grey">';
	html+='<tr><td>Apellido:</td><td>'+apellido+'</td></tr>';
	html+='<tr><td>Nombre:</td><td>'+nombre+'</td></tr>';
	html+='<tr><td>Legajo:</td><td>'+legajo+'</td></tr>';
	html+='<tr><td>Turno:</td><td>'+turno+'</td></tr>';
	html+='<tr><td>Comisión:</td><td>'+comision+'</td></tr>';
	html+='</table><br>';
	html+='<a href="javascript:void(0)" onclick="menu(\'cliente.htm\');">Volver al formulario</a><br>';
	html+='<a href="http://localhost">Inicio</a><br>';
	$('#result').html(html);
	}else{
	alert('Deben completarse todos los campos antes de enviarse el formulario');	
	}
}





