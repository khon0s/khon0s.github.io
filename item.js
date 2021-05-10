let bigPP = [] ;
let total = document.querySelector(".slide__total");
let totality = 0 ;

export class Item{
    constructor(url, name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
        this.url = url;
    }
   post(){
   // here the CONTAINER of the product is created along with its children.
  let container = document.createElement("DIV");
  container.classList.add("container");
  let product_name = document.createElement("h4");
  product_name.classList.add("product__name");
  let product_price = document.createElement("p");
  product_price.classList.add("product__price");
  let product_description = document.createElement("P");
  product_description.classList.add("product__description")
  let product_image = document.createElement("IMG");
  product_image.classList.add("product__image");
  let product_button = document.createElement("BUTTON");
  product_button.classList.add("product__button");
  product_button.innerHTML= "Añadir";
  product_button.addEventListener("click", addTrolley);
 


  product_name.innerHTML= this.name ;
  product_price.innerHTML= this.price+" €";
  product_description.innerHTML= this.description;
  product_image.src= this.url ;
  product_image.style.width= "98%";

  container.appendChild(product_image);
  container.appendChild(product_name);
  container.appendChild(product_price);
  container.appendChild(product_description);
  container.appendChild(product_button);
  

  let section = document.querySelector("section");
  section.appendChild(container);

  // function to refresh the total price .
  function refreshPrice(){

    function getSum(totality, n){
      return totality + n 
    }
    let y = bigPP.map( n =>  parseFloat(n.replace( ",", "." ), 1000)).reduce( getSum, 0 ).toFixed(2);
    total.innerHTML= (y.toString().replace(".",",")) +" €" ;
  }

  // this functions adds the selected items to the basket/trolley
  function addTrolley(e){
    e.preventDefault();

    window.dataLayer = window.dataLayer || []; 
    window.dataLayer.push({ 
     'event': 'addToCart', 
     'products': [{
            'name': this.parentNode.querySelector(".product__name").innerText   ,
            'price': this.parentNode.querySelector(".product__price").innerText 
          }]
    });
    

    let yourBasket = document.createElement("div");
    yourBasket.classList.add("yourBasket");

    let deletePurchase = document.createElement("div");
    deletePurchase.innerHTML= "X" ;
    deletePurchase.classList.add("product__delete");
    deletePurchase.addEventListener("click", deletion);

    let slide = document.querySelector(".slide");
    let cloneImage = product_image.cloneNode(true);
     cloneImage.style.width = "25%" ;
    let cloneName = product_name.cloneNode(true);
    let clonePrice = product_price.cloneNode(true);
  
    // refresh price on basket
    function morePP(M){
    bigPP.push(M.innerHTML);
    return bigPP 
    }
    morePP(clonePrice)

    let trio = document.createElement("div");
    trio.classList.add("trio");

    let imgIMG = document.createElement("div");

    yourBasket.appendChild(imgIMG);
      trio.appendChild( cloneImage );
    trio.appendChild(cloneName);
    trio.appendChild(clonePrice);
    trio.appendChild(deletePurchase);
  
    yourBasket.appendChild(trio);

    slide.appendChild(yourBasket);

    (function addScore(){
     let score = document.getElementById("score");
     score.innerHTML ++
     ( score.innerHTML < 1 ) ? score.style.display="none" :  score.style.display="block" ;
     return score.innerHTML  ;
    })()

      function deletion(e){
            
            // thie block refreshes downwards the total price .
           let removePP = this.parentElement.querySelector(".product__price").innerHTML ;
           let index = bigPP.indexOf(removePP) ;
           bigPP.splice(index, 1) ;
           refreshPrice()

          this.parentElement.parentElement.remove();
          
          // reduces the number of articles in the basket
          (function minusScore(e){
            let score = document.getElementById("score");
            score.innerHTML --
            (score.innerHTML < 1 ) ? score.style.display= "none" : score ;

            return  score.innerHTML && bigPP ;
          })()
      }
      refreshPrice()
    
   }
         
    }

    
}