"use strict";

let btn = document.querySelector(".btn");
let box = document.querySelector(".box");


function active(){
  box.classList.add("active");
}

function hide(){
  box.classList.remove("active");
}


btn.addEventListener("mouseenter", () => {
  btn.textContent = "الغاء المتابعة ";
  btn.style.backgroundColor = "red";
  btn.style.color = "#fff";
});

btn.addEventListener("mouseleave", () => {
  btn.textContent = "متابعة";
  btn.style.backgroundColor = "transparent";
  btn.style.color = "#000";
});




