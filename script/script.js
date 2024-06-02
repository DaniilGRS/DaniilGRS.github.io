let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll(".slide_Img");
  let images = document.querySelector(".slider");

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll(".slide_Img");
    images.style.transform = `translateX(0px)`;
    return;
  }

  images.style.transform = `translateX(-${currentSlide * 100}%)`;

  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[currentSlide].classList.add("active");

  if (currentSlide === imageCount.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(() => {
  startSlider();
}, 3000);


//Аккаунт
let register_btn = document.getElementById("register_btn");
let login_btn = document.getElementById("login_btn");

let register_form = document.getElementById("register_form");
let login_form = document.getElementById("login_form");


register_btn.addEventListener("click", function() {
  login_form.classList.toggle("active");
  register_form.classList.toggle("active");
});

login_btn.addEventListener("click", function() {
  register_form.classList.toggle("active");
  login_form.classList.toggle("active");
});
