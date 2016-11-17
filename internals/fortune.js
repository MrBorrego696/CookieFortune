/*var path = require('path'),
    fs = require('fs');*/
var Frase = [
    "<h1>Fortuna no encontrada: ¿Abortar, Reintentar o Ignorar?</h1>",
    "<h1>¿Puedes darme la dirección? (“¿A dónde?”) A tu corazón",
    "<h1>Si eres bueno para algo, nunca lo hagas gratis</h1>",
    "<h1>Ya era hora de que saliera de esa galleta</h1>",
    "<h1>No ignores los pequeños detalles. Ellos son la llave para el triunfo</h1>",
    "<h1>Vuelve después… Estoy durmiendo (Sí, las galletas de la fortuna también necesitamos dormir)</h1>",
    "<h1>Nunca te dificultes con las dificultades, hasta que las dificultades te dificulten a ti</h1>",
    "<h1>La fortuna que buscas se encuentra en otra galleta</h1>",
    "<h1>Un alíen de algún tipo se te aparecerá próximamente!</h1>",
    "<h1>Oops… Error en galleta.</h1>",
    "<h1>Aprender sin pensar es inútil, pensar sin aprender peligroso</h1>"];

module.exports = {
    obtenerFrase: function () {
        //Se obtiene el index de Frase
        var fraseAleatoria;
        fraseAleatoria = Math.random() * Frase.length;
        fraseAleatoria = Math.floor(fraseAleatoria);
        //Se guarda el index en una variable
        var mensaje = Frase[fraseAleatoria];
        return mensaje;
    }
};