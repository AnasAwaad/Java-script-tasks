let addCartbtn = document.querySelectorAll(".item .addCart");
let price = document.querySelectorAll(".item .price");
let shoppingCartIcon = document.querySelector(".shopping-cart-icon");
let shoppingCart = document.getElementById("cart");
let cart = document.querySelector(".add-cart-items ");
let cartItems=document.querySelector(".add-cart-items .items")
let itemImg=document.querySelectorAll("section .row img")
let itemTitle=document.querySelectorAll("section .row h2")
let itemPrice=document.querySelectorAll("section .row .price")
let TotalPrice = document.getElementById("totalPrice");



let totprice = 0;

addCartbtn.forEach(function (item, num) {
  item.addEventListener("click", function () {
    totprice += Number(price[num].textContent.substring(1));
    shoppingCartIcon.textContent++;
    cartItems.innerHTML+=` <div class="item">
    <div class="image">
      <img src=${itemImg[num].src} alt="">
    </div>
    <div class="desc">
      <div class="item-title">${itemTitle[num].textContent}</div>
      <div class="item-price">${itemPrice[num].textContent}</div>
    </div>
    </div>`
    
    TotalPrice.innerHTML = totprice+"$";
  });
});




shoppingCart.addEventListener("click",function(){
  cart.style.right = "0";
  
})