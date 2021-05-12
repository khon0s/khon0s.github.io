'use strict'

let btn = document.getElementById("btn");
btn.addEventListener("click", sendEmail);
let form = document.getElementById("myForms");
let btns = document.getElementById("btn");

let returnBtn = document.getElementById("return");
let mensaje = document.getElementById("text_area") ;
let emails = document.getElementById("email") ;
let nombres = document.getElementById("from_name") ;


function sendEmail(params){
    
    if( mensaje.value.trim() == "" ) return console.log("mensaje vacío");
    if( emails.value.trim() == "" ){ return console.log("email vacío")}
    if( nombres.value.trim() == "" ){ return console.log("nombre vacío")}

    let tempParams = {
        from_name: document.getElementById("from_name").value ,
        email: document.getElementById("email").value ,
        tel: document.getElementById("tel").value ,
        message: document.getElementById("text_area").value 
    };

    emailjs.send("service_8ex49ns","template_z2gup85", tempParams) 
    .then( function(res){
        console.log("success", res.status);
    } )

    console.log("eviando a recivido.html")

     // send to noIndex page .html /enviado/
  location.href = "https://www.kolovare.com/enviado.html";
}


