var path = require('path'),
    fs = require('fs');
var fortune = require('./fortune.js'),
fortuna = require('./papel.js');

//Se crea otra ruta virtual
var _getGalleta = function (req, res) {
    console.log("> Se solicita fortuna...");
    // // Obtenemos el mensaje de la suerte
    fortuna.getFortune(function (fortunePaper) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        console.log("Mensaje de la galleta: " + fortunePaper);
        // Respondemos al Objeto
        res.end(fortunePaper);
    });
};
var _getAuthor = function (req, res) {
    res.end("Autor: Alan");
};
var _getFortune = function (req, res) {
    console.log('Se solicita fortuna....'.random);
    //NO Bloqueante
    fortune.getFortune(function (fortunePaperObj) {
        //Configurar el encabezado
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        console.log(`Contestando: ${fortunePaperObj}`.cyan);
        res.end(fortunePaperObj);
    });
};
//-----
// Objeto manejadores
var handler = {};
// Registro de manejadores en el Objeto manejadores
handler['/getauthor'] = _getAuthor;
handler['/getfortune'] = _getFortune;
handler['/getgalleta'] = _getGalleta;
// Exportando handler(Objeto manejador)
module.exports = handler;