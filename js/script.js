let searchForm = document.querySelector(".search-form");
// 指定Dom 命名赋值
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active"); // 确保每次只有一个被激活
  searchForm.classList.remove("active");
  cart.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// document.cookie =
//   "userName=" +
//   encodeURI("tom") +
//   "; expires=" +
//   new Date("2033-01-01").toUTCString() +
//   "; path=/; domain=x.com; secure";

// console.log(document.cookie);

// login cookie

function getCookie(u_name) {
  var u_value = document.cookie;
  var u_start = u_value.indexOf(" " + u_name + "=");
  if (u_start == -1) {
    u_start = u_value.indexOf(u_name + "=");
  }
  if (u_start == -1) {
    u_value = null;
  } else {
    u_start = u_value.indexOf("=", u_start) + 1;
    var u_end = u_value.indexOf(";", u_start);
    if (u_end == -1) {
      u_end = u_value.length;
    }
    u_value = unescape(u_value.substring(u_start, u_end));
  }
  return u_value;
}

function setCookie(u_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var u_value =
    escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = u_name + "=" + u_value;
}

function checkCookie() {
  var username = getCookie("username");
  if (username != null && username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your username:", "");
    if (username != null && username != "") {
      setCookie("username", username, 365);
    }
  }
}
