

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
  product_button.addEventListener("click", displayBasket);

// this function displays the basket when a product is added
  function displayBasket(e){
      e.preventDefault();
      let slide = document.querySelector(".slide");
      slide.style.display =  slide.style.display === "none"  ? "block" : "block" ;  
      
  }

  product_name.innerHTML= this.name ;
  product_price.innerHTML= this.price+" €";
  product_description.innerHTML= this.description;
  product_image.src= this.url ;
  product_image.style.width= "230px";


  container.appendChild(product_image);
  container.appendChild(product_name);
  container.appendChild(product_price);
  container.appendChild(product_description);
  container.appendChild(product_button);
  

  let section = document.querySelector("section");
  section.appendChild(container);

  // this functions adds the selected items to the basket/trolley
  function addTrolley(e){
    e.preventDefault();

    console.log("added to trolley");
    let yourBasket = document.createElement("div");
    yourBasket.classList.add("yourBasket");
    let deletePurchase = document.createElement("button");
    deletePurchase.innerHTML= "X" ;
    deletePurchase.classList.add("product__delete");
    deletePurchase.addEventListener("click", deletion);
    let slide = document.querySelector(".slide");
    let cloneImage = product_image.cloneNode(true);
    let cloneName = product_name.cloneNode(true);
    let clonePrice = product_price.cloneNode(true);
    yourBasket.appendChild(cloneImage);
    yourBasket.appendChild(cloneName);
    yourBasket.appendChild(clonePrice);
    yourBasket.appendChild(deletePurchase);
    slide.appendChild(yourBasket);

      function deletion(e){
          e.preventDefault();

          console.log("deleted product")
          this.parentElement.remove();

      }

   }

    }
}