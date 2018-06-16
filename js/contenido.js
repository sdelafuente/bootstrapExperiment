var today = new Date(); // Creo un nuevo objeto Fecha
var hourNow = today.getHours(); // Obtengo la hora del dia
var greeting;

if (hourNow > 18) {
    greeting = 'Buenas Tardes!';
} else if (hourNow > 12) {
    greeting = 'Buen día!';
} else if (hourNow >0 ) {
    greeting = 'Buenas Madrugadas!';
} else {
    greeting = 'Bienvenido';
}

document.write('<h3>' + greeting + '</h3>');
