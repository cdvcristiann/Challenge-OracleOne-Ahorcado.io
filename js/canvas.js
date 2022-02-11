var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');


//PIZARRA
	pincel.globalAlpha = 0.4;
	pincel.fillStyle = '#FCD9B3';//propiedad para el color de la pizzarra
	pincel.fillRect(0,0,600,400);//funcion del tamaño y ubicacion de la p izarra

//TRONCO
	lineas(100,80,10,235, 'black')

//TRIANGULO
	pincel.fillStyle = 'black';
	pincel.beginPath();
	pincel.moveTo(105,300);
	pincel.lineTo(55,370);
	pincel.lineTo(150, 370);
	pincel.fill();

//PALO HORIZONTAL
	lineas(100,80,150,10, 'black')

//SOGA
	lineas(245,85,03,55, 'black')

//CIRCULO GRANDE CABEZA
	diseniarCabeza(245,160,25,'black');	

//CIRCULO CHICO CABEZA
	diseniarCabeza(245,160,20, '#FCD9B3');

//CUERPO
	lineas(245,185,04,60, 'black');


//BRAZO derecho	
	lineasDiagonales(296,160,'black',3,246,200);

//BRAZO izquierdo
	lineasDiagonales(189,159,'black',3,246,200);

//pierna derecho
	lineasDiagonales(290,275,'black',3,246,243);

//pierna derecho
  	lineasDiagonales(190,276,'black',3,246,243);

/*/guion
	lineasDiagonales(200,370,'black',3,220, 370);
	lineasDiagonales(250,370,'black  ',3,230, 370);
	lineasDiagonales(260,370,'red  ',3,280, 370);
	lineasDiagonales(310,370,'red  ',3,290, 370);*/


//looser derecha
	lineasDiagonales(350,100,'red',8,150,280);


//looser izquierdo
	lineasDiagonales(150,100,'red',8,350,280);


//ingresar texto


function ingresarTexto(x,y,colorRelleno,colorExterno,texto, estiloText){
	pincel.beginPath() //iniciar ruta
	pincel.strokeStyle=colorExterno; //color externo
	pincel.fillStyle=colorRelleno; //color de relleno
	pincel.font=estiloText;//estilo de texto
	pincel.fillText(texto,x,y); //texto con método fill
};

function diseniarCabeza(x,y,radio,color){
	pincel.fillStyle = color;
	pincel.beginPath();
	pincel.arc(x,y,radio,0,2*Math.PI);//245,160,25
	pincel.fill();
};

function lineas(x,y,z,w,color){		
		pincel.fillStyle = color;
		pincel.fillRect(x,y,z,w);
};

function lineasDiagonales(x,y, color, grosor,w,z){
	pincel.lineWidth = grosor;
	pincel.strokeStyle = color;
	pincel.beginPath();
	pincel.moveTo(x,y);
  	pincel.lineTo(w,z);
  	pincel.stroke();

};