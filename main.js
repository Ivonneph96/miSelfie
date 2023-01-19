var hablando = window.webkitSpeechRecognition;  //API para convertir voz a texto
var hablando2 = new hablando();

function star(){
    document.getElementById("textbox").innerHTML="";
    hablando2.start();
}

hablando2.onresult = function(resultados){
    console.log(resultados);

    var contenido = resultados.results[0][0].transcript;
    console.log(contenido);

    document.getElementById("textbox").innerHTML= contenido;

    if (contenido == "Toma mi selfie") {
        reproducirVoz(); // reproduce el texto en voz
    }
}

function reproducirVoz(){
    var voz = window.speechSynthesis; // otra API para convertir el texto a voz

    fraseLeida = "tomando selfie ... di whisky";

    var diciendo = new SpeechSynthesisUtterance(fraseLeida); //es necesario el new porque con el primer var no se ejecuta

    voz.speak(diciendo); //speak está predefinida en la API

    Webcam.attach(camara); //aparecerá la cámara en el div



    setTimeout(function()
    {
        tomarFoto();
        guardar();
    }, 3000);
}

Webcam.set({ // función de la librería webcam
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90 //calidad de vista de la cámara
 });
 camara = document.getElementById("camera");

 function tomarFoto() {
    Webcam.snap(function(fotito){ //snap toma al foto
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+fotito+'">'; //pone la imagen que tomamos en el div
    });
 }

 function guardar() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click(); //hace click automático en la etiqueta de anclaje
 }