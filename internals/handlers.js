var path = require('path'),
    fs = require('fs');
var fortuna = require('./fortune.js');
// Creando manejadores,manejadores = funciones
var _getAuthor = function (req, res) {
    res.end("Autor: Alan");
};
var _getFortune = function (req, res) {
     /*frase = ["<h1>Cualquier sueño que merezca ser vivido es un sueño por el que merece la pena luchar – Profesor X.</h1>",
      "<h1>Nuestra propia naturaleza puede ser una carga y a veces una maldición – Adam Warlock",
      "<h1>Si eres bueno para algo, nunca lo hagas gratis –  The Joker</h1>",
      "<h1>No tiene nada de malo sentir miedo, siempre y cuando no te dejes vencer - Captain America</h1>",
      "<h1>A veces, la verdad no es suficiente. A veces la gente merece más. A veces la gente merece que recompensen su fe - Batman</h1>",
      "<h1>No es quien soy debajo… sino mis acciones lo que me definen - Batman</h1>"];
 
     var fraseAleatoria;
     fraseAleatoria = Math.random() * frase.length;
     fraseAleatoria = Math.floor(fraseAleatoria);
     var mensaje = frase[fraseAleatoria];
     res.end(mensaje);*/

    var fraseObtenida = fortuna.obtenerFrase();
    res.end(fraseObtenida);
};
//-----
// Objeto manejadores
var handler = {};
// Registro de manejadores en el Objeto manejadores
handler['/getauthor'] = _getAuthor;
handler['/getfortune'] = _getFortune;
// Exportando handler(Objeto manejador)
module.exports = handler;