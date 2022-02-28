btnIniciar.addEventListener("click",function(event){
  event.preventDefault();
    btnJuego()
    btnPausa()    
   
});


btnAgregarPalabra.addEventListener("click",function(event){
  event.preventDefault();
    swal("Ingrese la palabra a agregar: ", {
      content: "input",
    })
    .then((value) => {
      lista.push(value);
      alertaPalabraAg.innerHTML = 'La Palabra '+ value + ' agregada con EXITO'
      console.log(lista)
    });    
   
});

function onKeyDownHandler(event) {
  event.preventDefault();
  input.value = ' '
    var key = event.which || event.keyCode;
    var keyL = event.key
    if((key >= 65 && key <= 90) && (keyL == keyL.toUpperCase())){
      var letras =  String.fromCharCode(key).toLowerCase();      
      var letra = new RegExp(letras, 'i')
      var cambioGuion = cambiarGuionesPalabras(letras, guion);

      letrasRepetidas(letra, letras)
        
      letraIng.innerHTML = 'LETRAS INGRESADAS : ' + letrasIngresadas;
      console.log(' letras ingresadas  : ' + letrasIngresadas)
      
      if(letra.test(palabra)){
        capturar.innerHTML = cambioGuion;
        
      }else{
        errores--
        dibujarColgado(errores)
        console.log(errores) 
      };
      
            
    }else if (key == 8 || key == 9 || key == 13 || key == 16 || key == 17 || key == 18 || key == 19 || key == 20 || key == 27 || key ==33 || key == 32 || key == 34 || key == 35 ||key == 32 ||key == 36 || key == 37 || key == 38 || key == 39 || key == 40 || key == 44 || key == 45 ||key == 46 || (key >= 112 && key <= 123)) {
      console.log('has precionado una letra especial como shif, espacio o enter')
    }
    else{
    alert('solo letras MAYUSCULAS, no se permiten caracteres especiales ni numeros')
  };
};


function btnPausa() {   
    if (btnIniciar.innerHTML == 'Iniciar Juego'){
       btnIniciar.innerHTML = 'Pausa'
       console.log(btnIniciar.innerHTML)
    }
    else{
      btnIniciar.innerHTML = 'Iniciar Juego'
      console.log(btnIniciar.innerHTML)
      }
}

function btnJuego(){
  if (juego.style.display == "none") {
        juego.style.display = "block";
    } else {
        juego.style.display = "none";
    }
}