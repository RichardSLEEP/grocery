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

var laptopData = [
  {
    name: "山东贝贝南瓜",
    description: "口感粉糯，质地软实。",
    price: 18.8,
    unit: "500g",
    id: 1,
  },

  {
    name: "临海涌泉蜜桔",
    description:
      "单果重120-140克，无核，果形整齐，色泽亮丽，果皮细薄，肉质脆嫩，汁多化渣，风味浓郁，品质极佳。",
    price: 6.99,
    unit: "500g",
    id: 2,
  },
];

var thisId = 0;

function displayTableData() {
  var html = "<table border='1|1'class='table'>";
  setTimeout(() => {
    html += "<thead>";
    html += "<tr>";
    html += "<td>" + "农产品编号" + "</td>";
    html += "<td>" + "农产品名称" + "</td>";
    html += "<td>" + "介绍" + "</td>";
    html += "<td>" + "价格" + "</td>";
    html += "<td>" + "最小零售单元" + "</td>";
    html += "<td>" + "操作" + "</td>";
    html += "</tr>";
    html += "</thead>";
    for (var i = 0; i < laptopData.length; i++) {
      var sno = i + 1;
      html += "<tr>";
      html += "<td>" + sno + "</td>";
      html += "<td>" + laptopData[i].name + "</td>";
      html += "<td>" + laptopData[i].description + "</td>";
      html += "<td>" + laptopData[i].price + "</td>";
      html += "<td>" + laptopData[i].unit + "</td>";
      html +=
        "<td>" +
        `<button type="button" class="btn" onclick='removeItem(${laptopData[i].id})'>delete</button>` +
        "</td>";
      html +=
        "<td>" +
        `<button type="button" class="btn" onclick='getRow(${laptopData[i].id});getId(${laptopData[i].id})' >edi</button>` +
        "</td>";
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("table").innerHTML = html;
  }, 200);
}
displayTableData();

function addOnclick() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
  var unit = document.getElementById("unit").value;

  if (name && description && price && unit) {
    let id = laptopData.length + 1;
    laptopData.push({
      name: name,
      description: description,
      price: price,
      unit: unit,
      id: id,
    });
    displayTableData();
    clearItems();
  }
}

function clearItems() {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("unit").value = "";
}

function removeItem(rec) {
  console.log(rec);

  var filt = laptopData.filter((a, i) => {
    if (rec == a.id) {
      laptopData.splice(i, 1);
      displayTableData();
    }
    console.log(laptopData);
  });
}

function getRow(rec) {
  // 获取该行的值
  thisId = rec;
  console.log(laptopData[rec - 1].name);

  document.getElementById("name").value = laptopData[rec - 1].name;
  document.getElementById("description").value =
    laptopData[rec - 1].description;
  document.getElementById("price").value = laptopData[rec - 1].price;
  document.getElementById("unit").value = laptopData[rec - 1].unit;
}

function editRow() {
  laptopData[thisId - 1].name = document.getElementById("name").value;
  console.log(laptopData[thisId - 1].name);

  laptopData[thisId - 1].description = document.getElementById("description").value;
  laptopData[thisId - 1].price = document.getElementById("price").value;
  laptopData[thisId - 1].unit = document.getElementById("unit").value;
  displayTableData();
}
