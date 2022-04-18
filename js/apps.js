// HIDDEN FONTAWSOME OF NAVBAR IN LARGE WINDOW
var navIcons = document.querySelectorAll(".header .row ul li a i");
window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    navIcons.forEach((e) => {
      e.style.display = "none";
    });
  } else {
    navIcons.forEach((e) => {
      e.style.display = "block";
    });
  }
});

// DISPLAY NAVGIATION BAR ON CLICK APPLICATION FONTAWESOME
var app = document.querySelector(".application");
app.onclick = function () {
  app.classList.toggle("active");
  document.querySelector(".header .row ul").classList.toggle("active");
};

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
  if (window.innerWidth < 768) {
    document.querySelector(".header").classList.remove("active");
  }
});
// SHOW SKILL CONTENT
var arrows = document.querySelectorAll(
  ".skills .row .skill-box .skill-all > i"
);
arrows.forEach((e) => {
  e.addEventListener("click", () => {
    arrows.forEach((arr) => {
      arr.parentElement.parentElement.children[1].classList.remove("active");
      arr.style.transform = "rotate(0deg)";
    });
    e.parentElement.parentElement.children[1].classList.add("active");
    e.style.transform = "rotate(180deg)";
  });
});
// WORK FILTER IN QUALIFACTION
var boxes = document.querySelectorAll(".qualifaction .row li");
var titles = document.querySelectorAll(".qualifaction .row .tit");
titles.forEach((e) => {
  e.addEventListener("click", () => {
    titles.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    boxes.forEach((box) => {
      box.style.display = "none";
    });
    document.querySelectorAll("." + e.dataset.kind).forEach((ele) => {
      ele.style.display = "flex";
    });
  });
});
// VIEW MORE IN SERVICES SECTION
var links = document.querySelectorAll(".services .row .services-box a");
var closes = document.querySelectorAll(".services .info-box .inforamtion > i");
links.forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector("." + e.parentElement.dataset.box)
      .classList.add("active");
  });
});
closes.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.classList.remove("active");
  });
});
// SWIPER PORTOFLIO
var swiperportoflio = new Swiper(".portoflio-swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
// TESTMONIAL SWIPER
var swiper = new Swiper(".testmonial-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
// GOUP BUTTON
var goup = document.querySelector(".goup");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    goup.classList.add("active");
  } else {
    goup.classList.remove("active");
  }
});
goup.onclick = function () {
  window.scrollTo(0, 0);
};
// DARK MODE
var navIcon = document.querySelector(".nav-moon");
var moonIcon = document.querySelector(".nav-moon .moon");
var sunIcon = document.querySelector(".nav-moon .sun");
navIcon.onclick = function (e) {
  if (e.target.classList.contains("moon")) {
    document.body.classList.add("dark-mood");
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    document.body.classList.remove("dark-mood");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
};
