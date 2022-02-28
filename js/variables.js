var lista = ['zapatillas','zapallo','manzana', 'zanahoria','hotel','playa','cama','silla','bicicleta', 'auto', 'camion', 'camioneta','barco', 'arbol','heladera','jarra','termo','baño','jabon','cepillo'];
let palabraGuiones = "";

const random = Math.floor(Math.random() * lista.length);
var palabra = lista[random];
let guionesPalabras = '';
var letraRep = document.getElementById("letraRepetida")
let letraRepetida = ' ';
var letraIng = document.getElementById('letraIngresada')
let letrasIngresadas = ' ';

var alertaPalabraAg = document.getElementById('alert')

letraRep.innerHTML = letraRepetida;

var btnAgregarPalabra = document.getElementById('btnAgregarPalabra')

var guion = dibujarGuiones()

var capturar = document.getElementById("guion")

capturar.innerHTML = guion;
console.log(capturar.innerHTML)
var cambiarPalabra = capturar.innerHTML
var errores = 10

var input = document.getElementById('input')

var btnIniciar = document.getElementById('btnIniciar')

console.log(btnIniciar.innerHTML)

   
var juego = document.getElementById('juego')
juego.style.display = "none";