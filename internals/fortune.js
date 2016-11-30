
var fortunePapers = [
    "Fortuna no encontrada: ¿Abortar, Reintentar o Ignorar?",
    "¿Puedes darme la dirección? (“¿A dónde?”) A tu corazón.",
    "Si eres bueno para algo, nunca lo hagas gratis.",
    "Ya era hora de que saliera de esa galleta.",
    "No ignores los pequeños detalles. Ellos son la llave para el triunfo.",
    "Vuelve después… Estoy durmiendo (Sí, las galletas de la fortuna también necesitamos dormir).",
    "Nunca te dificultes con las dificultades, hasta que las dificultades te dificulten a ti.",
    "La fortuna que buscas se encuentra en otra galleta.",
    "Un alíen de algún tipo se te aparecerá próximamente!",
    "Oops… Error en galleta.",
    "Aprender sin pensar es inútil, pensar sin aprender peligroso."];

module.exports = {
    "getFortune": function (cb) {
        //Logica que obtiene un mensaje aleatorio
        var selector = Math.floor(Math.random() * (fortunePapers.length - 0)+0);
        var fortuneMessage = fortunePapers[selector];
        // Armando Objeto Respuesta
        // Convertir en cadena escrita el Objeto Json
        var fortunePaperObj = JSON.stringify({
            "Cookie": fortuneMessage
        });
        //Ejecutp el callback pasandole el parametro fortunePaper
        cb(fortunePaperObj);
    }
};