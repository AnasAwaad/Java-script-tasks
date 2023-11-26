let sliderIndex = 0;
let circles = document.querySelectorAll(".circles .item");
let sliderItem = document.getElementsByClassName("slider-item");
let size = sliderItem.length;

function moveSlider(i) {
  sliderIndex += i;
  if (sliderIndex < 0) sliderIndex = size - 1;

  slider(sliderIndex);
}

function slider(idx) {
  //for prev button if index of array less than zero
  for (let i = 0; i < size; i++) {
    sliderItem[i].style.display = "none";
    circles[i].style.backgroundColor = "#a7a6a6";
  }
  //0 1 2 3 4 5 6 --> 0 1 2 3
  sliderItem[idx % size].style.display = "block";
  circles[idx % size].style.backgroundColor = "red";
  console.log(idx);
}

slider(0);

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function () {
    slider(i);
  });
}
