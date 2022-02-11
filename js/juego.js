var entrada = document.querySelector('#entrada');
entrada.addEventListener('input', entradainput);
var palabra = 'daniel';
agregarGuin();

function entradainput(letra){
	letra = this.value
	var letraEntrada = new RegExp(letra, 'i');
		if (letraEntrada.test(palabra) && letra.length > 0){
			ingresarTexto(201,360,'black', 'blue', letra, "bold 20px arial")
		}

	};
	

function agregarGuin(){
	var n = 200;
	var x = 220; 

	var textX = 201;
	var textoY = 360;
	for(var i = 0; i < palabra.length; i = i+2){
		lineasDiagonales(n,370,'black',3,x, 370);
		ingresarTexto(textX,textoY,'black', 'blue', palabra.replaceAll(palabra[i], ' ')[i], "bold 20px arial");
		
		n += 50;
		x += 10;

		textX += 35;

		for(var j = i + 1; j < palabra.length; j++){	
			ingresarTexto(textX,textoY,'red', 'blue', palabra.replaceAll(palabra[j], ' ')[j], "bold 20px arial")
			lineasDiagonales(n,370,'black',3,x, 370);
			
			n += 10;
			x += 50;
			textX += 25;
			break 

		}

	}
};
