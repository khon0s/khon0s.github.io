'use strict'

let btn = document.getElementById("btn");
btn.addEventListener("click", sendEmail);
let form = document.getElementById("myForms");
let btns = document.getElementById("btn");

let returnBtn = document.getElementById("return");

returnBtn.addEventListener("click", function(){
    
})


function sendEmail(params){
    let mensaje = document.getElementById("text_area")
    let emailList = document.getElementById("email").value == ""
 
    if( mensaje.value == "" ) return console.log("mensaje vacío");
    if( emailList.value == "" ) return console.log("email vacío");

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
   
    form.reset()

     // send to noIndex page .html /enviado/
   location.href = "https://www.kolovare.com/enviado.html";
}


btns.addEventListener("click", sendEmail )