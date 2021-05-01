'use strict'

let btn = document.getElementById("btn");
btn.addEventListener("click", sendEmail);
let form = document.getElementById("myForms");
let btns = document.getElementById("btn");

let returnBtn = document.getElementById("return");

returnBtn.addEventListener("click", function(){
    
})


function sendEmail(params){
 

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
}


btns.addEventListener("click", sendEmail )