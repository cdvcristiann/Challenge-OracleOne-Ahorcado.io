var palabraLoser = document.getElementById('palabra');
var gameOver = document.getElementById('gameOver');

function dibujarGuiones() {
        let palabraConvertida = palabra.replace(/[a-z]/gm, "_ ");
        palabraGuiones = palabraConvertida;
        cambiarGuion = palabraGuiones;
        return cambiarGuion;
      };


function cambiarGuionesPalabras(letras, guion){
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };
  for(var i=0;i<palabra.length;i++){
    if (palabra[i] == letras) {
        cambiarGuion = cambiarGuion.replaceAt(i * 2, letras);
    }
  };
  if(errores == 1){
    gameOver.innerHTML = '¡¡GAME OVER!!';
    palabraLoser.innerHTML = 'la palabra era: ' + palabra;

    lineasDiagonales(350,100,'red',8,150,280);
    lineasDiagonales(150,100,'red',8,350,280);
    
    swal({
              icon: "error",
              title: '¡¡GAME OVER!!',
              text: 'la palabra era: ' + palabra,
          }).then((value) => {
            if(value){
              window.location.href = "https://cdvcristiann.github.io/";
            }
          });
  }
  if((cambiarGuion.replace(/ /g, ""))==palabra){
    swal({
              icon: "success",
              title: '¡¡WINNER!!',
              text: 'la palabra era: ' + palabra,
          }).then((value) => {
            if(value){
              window.location.href = "https://cdvcristiann.github.io/";
            }
          });
        }

  console.log(cambiarGuion);
  return cambiarGuion;    
};

function dibujarColgado(errores){   
    switch (errores) {
    case 9:
      lineas(100,80,10,235, 'black');
      console.log(errores);
      break;
    case 8:
      lineas(100,80,150,10, 'black');
      console.log(errores);
      break;
    case 7:
      lineas(245,85,03,55, 'black');
      console.log(errores);
      break;
    case 6:
      diseniarCabeza(245,160,25,'black');
      diseniarCabeza(245,160,20, '#FCD9B3');
      console.log(errores);
      break;
    case 5:
      lineas(245,185,04,60, 'black');
      console.log(errores);
      break;
    case 4:
      lineasDiagonales(296,160,'black',3,246,200);
      console.log(errores);
      break;
    case 3:
      lineasDiagonales(189,159,'black',3,246,200);
      console.log(errores);
      break;
    case 2:
      lineasDiagonales(290,275,'black',3,246,243);
      console.log(errores);
      break;
    case 1:
      lineasDiagonales(190,276,'black',3,246,243);
      console.log(errores);
      break;
    case 0:
    
      console.log(errores);
      break;
    };
};


function letrasRepetidas(letra, letras){
  if (letra.test(letrasIngresadas)) {
    if (!letra.test(letraRepetida)) {
    letraRepetida += letras + '-';
    letraRep.innerHTML = 'LETRAS REPETIDAS : ' + letraRepetida
    }
  }else{    
      letrasIngresadas += letras + '-';
  }
};
