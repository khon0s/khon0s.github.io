'use sctrict'
import { Item } from "./item.js";
import { bigPP } from "./item.js";
import { total, totality } from "./item.js";

  let basket = document.getElementById("basket");
  let slide = document.querySelector(".slide");
  let slide__del = document.querySelector(".slide__del");
  let slide__button = document.querySelector(".slide__button");

  // events 
  basket.addEventListener("click", displayBasket );
  slide__del.addEventListener("click", displayBasket );
  slide__button.addEventListener("click", checkOut );
 
 // main functions, uses the objectand its method to post on the web an item.
  function fillProduct(url, name, price, description){
    if(name.trim() == "" || price.trim() == "" || description.trim() == "" ){ return console.log("error input");}
    if(typeof name !== "string" || typeof price !== "string" || typeof description !== "string" ){ return console.log("error input format");}

    return new Item(url, name, price, description).post() ;
  }

  // list of products on the web;
  const producto1 = new Item("./img/helado-higos-m.jpg",  "Rey Bonbón", "5,00", "Helado de choclate, fresas y nata.").post();
  fillProduct("./img/fresa.jpg",  "Tres Mentas", "4,50", "Tres bolas de menta con nueces");
  fillProduct("./img/cono.jpg", "Barquito" ,"7,00","Helado en cono casero");
  fillProduct("./img/limon.jpg", "Tarta al limón" ,"3,50","Tarta de queso y limón");
  fillProduct("./img/bolita.jpg", "Natalis" ,"4,75","Helado de nata");
  fillProduct("./img/chesscake.jpg", "Cheese cake" ,"6,00","Tarta de queso casera");
  fillProduct("./img/cupcake.jpg", "Pink Lady" ,"3,50","Cupcake de fresa");
  fillProduct("./img/panacota.jpg", "El rey" ,"3,00","Flan casero");
  fillProduct("./img/pudding.jpg", "Pudding" ,"6,00","Pudding con fruta");
  fillProduct("./img/guindilla.jpg", "Pastelito" ,"5,00","Pastelito para compartir.");
  fillProduct("./img/temptation.jpg", "Temptation" ,"15,00","Tarta para compartir...o no");
  fillProduct("./img/chococake.jpg", "Cake Choco" ,"5,00","Pieza de chocolate");
  

  // on click the slide is displayed or hidden, depending on its previous state.
function displayBasket(){
  slide.style.display =  slide.style.display === "none"  ? "block" : "none";          
}

 // function to refresh the total price .
 function refreshPrice(){

  function getSum(totality, n){
    return totality + n 
  }
  let y = bigPP.map( n =>  parseFloat(n.replace( ",", "." ), 1000)).reduce( getSum, 0 ).toFixed(2);
  total.innerHTML= (y.toString().replace(".",",")) +" €" ;
}


// function to buy products added on the basket(slide). GTM

function checkOut(e){
e.preventDefault();

  let allNames = [];
  let allPrices = [];

  let pName = this.parentNode.querySelectorAll(".product__name") ;
  let pPrice = this.parentNode.querySelectorAll(".product__price") ;

  if( pName.length < 1  ) return console.log("Bascket is Empty")

    for( let i = 0; i < pName.length ; i++ ){
      allNames.push(pName[i].innerText )
    }

    for( let i = 0; i < pPrice.length ; i++ ){

      let index = bigPP.indexOf(pPrice[i]) ;
      bigPP.splice(index, 1) ;
      refreshPrice()

     let numPrice =  parseFloat(pPrice[i].innerText.replace("," ,
      ".").split(" ").shift()).toFixed(2) 
  
     allPrices.push(numPrice)
    }

for( let i = 0 ; i < allNames.length ; i++ ){

window.dataLayer = window.dataLayer || []; 
dataLayer.push({ ecommerce: null }); 
window.dataLayer.push({ 
  'event': 'purchase', 
  'ecommerce': {
    "actionField": {
      "id": parseInt(Math.random()*10000)
    },
   'items': {
     'item_name': allNames[i], 
     'price': allPrices[i] ,
     "quantity": 1
   }
 }
});
}

let clearing = document.querySelectorAll(".yourBasket")
   clearing.forEach( e => e.remove() )

   // send to noIndex page .html /thanks/
   location.href = "https://www.kolovare.com/gracias.html";

}






