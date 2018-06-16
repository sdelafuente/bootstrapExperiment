var colores;
var coloresDos;
colores = ['Negro','Blanco','Custom'];
coloresDos = new Array('Negro','Blanco','Custom');

var el = document.getElementById('colors');
el.textContent = colores[0];

var el2 = document.getElementById('colores');
el2.textContent = coloresDos[1];

coloresDos[2] = 'Rojo'

var el3 = document.getElementById('coloresTres');
el3.textContent = coloresDos[2];
