// Elementos

var radio = document.querySelector("manual-btn");

let cont = 1;

const dataFutura = new Date("November 11, 2024 00:00").getTime();

let days, hours, minutes, seconds;

setInterval(function () {
  let dataAtual = new Date().getTime();

  let totalSeconds = (dataFutura - dataAtual)/1000
  
  days = parseInt(totalSeconds/86400);
  totalSeconds = totalSeconds%86400;

  hours = parseInt(totalSeconds/3600);
  totalSeconds = totalSeconds%3600;

  minutes = parseInt(totalSeconds/60);
  seconds = parseInt(totalSeconds%60);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
},1000);

// checked marca o radial
document.getElementById("radio1").checked = true;

// Funções

setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  cont++;

  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}

const swiper = new Swiper('.product-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive Breakpoints
  breakpoints: {
    0:{
      slidesPerView: 1
    },
    620:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    }
  }

});

