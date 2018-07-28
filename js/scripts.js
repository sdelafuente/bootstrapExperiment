var mensaje = "Bienvenido a la página de ejercicios con Bootstrap/Js!"
var fechaActual = new Date();
var objFecha = document.getElementById('fecha');

objFecha.textContent = formatDate(fechaActual);


function cargarMensaje() {
    var elBienvenida = document.getElementById('bienvenida');
    elBienvenida.textContent =  mensaje;
}
cargarMensaje();

function tamanioObjecto(ancho,alto,profundo){
    var area = ancho * alto;
    var volumen = area * profundo;
    var forma = [area,volumen];
    return forma;
}

var areaUno = tamanioObjecto(4,3,5)[0];
var volumenUno = tamanioObjecto(4,3,5)[1];

/* Objeto Literal */
var hotel = {
    nombre: 'Grand Budapest',
    habitaciones: 50,
    reservas: 21,
    habitacionesDisponibles: function (){
        return this.habitaciones - this.reservas;
    }
};

var bicicleta = new Object();
bicicleta.rodado = 22;
bicicleta.marca = "X-Calibur";
bicicleta.medidas = 18.1;

// localStorage.setItem('bicicleta',JSON.stringify(bicicleta));

function Bicicleta(rodado,medidas,marca) {
    this.rodado = rodado;
    this.medidas = medidas;
    this.marca = marca;

    this.devolverInfo = function (){
        return this.marca + ' ' + this.rodado;
    };
}

miBici = new Bicicleta(28,1.80,'Imperial');

function formatDate(date) {
  var monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
// localStorage.setItem('miBici',JSON.stringify(miBici));

// localStorage.setItem('Pi',JSON.stringify(Math.PI));
