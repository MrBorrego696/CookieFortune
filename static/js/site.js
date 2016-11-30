Frase =
    [
        "Fortuna no encontrada: ¿Abortar, Reintentar o Ignorar?",
        "¿Puedes darme la dirección? (“¿A dónde?”) A tu corazón",
        "Si eres bueno para algo, nunca lo hagas gratis",
        "Ya era hora de que saliera de esa galleta",
        "No ignores los pequeños detalles. Ellos son la llave para el triunfo",
        "Vuelve después… Estoy durmiendo (Sí, las galletas de la fortuna también necesitamos dormir)",
        "Nunca te dificultes con las dificultades, hasta que las dificultades te dificulten a ti",
        "La fortuna que buscas se encuentra en otra galleta",
        "Un alíen de algún tipo se te aparecerá próximamente!",
        "Oops… Error en galleta.",
        "Aprender sin pensar es inútil, pensar sin aprender peligroso"];
//Se obtiene el index de Frase
var fortuna = function () {
    var fraseAleatoria;
    fraseAleatoria = Math.random() * Frase.length;
    fraseAleatoria = Math.floor(fraseAleatoria);
    //Se guarda el index en una variable
    var mensaje = Frase[fraseAleatoria];
    swal({
        title: "¡Galleta Abierta!",
        text: mensaje,
        imageUrl: "./img/cookie.png"
    });
    /*swal(mensaje);*/
};
//Asincrona
var getFortuneFromServer = function () {
    //Realizando la peticiión con Ajax
    //Variable pesitos ñ_ñ
    $.get("/getfortune", "", function (data, status) {
        console.log("> Estatus de Respuesta: " + status);
        if(status == 'succes'){
            swal({
            title: "¡Galleta Abierta!",
            text: data.message,
            imageUrl: "./img/cookie.png"
        });
        }else{
            fortuna();
        }
        
    });
};