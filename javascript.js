'use sctrict'
import { Item } from "./item.js";


window.onload = function(){

  

  let basket = document.getElementById("basket");
  let slide = document.querySelector(".slide");
 
 
  // events 
  basket.addEventListener("click", displayBasket);
 
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



}