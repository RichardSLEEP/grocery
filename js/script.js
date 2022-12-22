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

// var laptopData = [
//   {
//     name: "山东贝贝南瓜",
//     description: "口感粉糯，质地软实。",
//     price: 18.8,
//     unit: "500g",
//     id: 1,
//     classify: "新鲜蔬菜",
//   },

//   {
//     name: "临海涌泉蜜桔",
//     description:
//       "单果重120-140克，无核，果形整齐，色泽亮丽，果皮细薄，肉质脆嫩，汁多化渣，风味浓郁，品质极佳。",
//     price: 6.99,
//     unit: "500g",
//     id: 2,
//     classify: "应季水果",
//   },
// ];

var list = [
  {
    name: "山东贝贝南瓜",
    description: "口感粉糯，质地软实。",
    price: 18.8,
    unit: "500g",
    id: 1,
    classify: "新鲜蔬菜",
  },

  {
    name: "临海涌泉蜜桔",
    description:
      "单果重120-140克，无核，果形整齐，色泽亮丽，果皮细薄，肉质脆嫩，汁多化渣，风味浓郁，品质极佳。",
    price: 6.99,
    unit: "500g",
    id: 2,
    classify: "应季水果",
  },
];

// saveData(list);
var thisId = 0;

function displayTableData() {
  var data = getData();
  console.log(data);

  var html = "<table border='1|1'class='table'>";
  setTimeout(() => {
    html += "<thead>";
    html += "<tr>";
    html += "<td>" + "农产品编号" + "</td>";
    html += "<td>" + "农产品名称" + "</td>";
    html += "<td>" + "介绍" + "</td>";
    html += "<td>" + "产品分类" + "</td>";
    html += "<td>" + "价格" + "</td>";
    html += "<td>" + "最小零售单元" + "</td>";
    html += "<td>" + "操作" + "</td>";
    html += "</tr>";
    html += "</thead>";
    // for (var i = 0; i < laptopData.length; i++) {
    //   var sno = i + 1;
    //   html += "<tr>";
    //   html += "<td>" + sno + "</td>";
    //   html += "<td>" + laptopData[i].name + "</td>";
    //   html += "<td>" + laptopData[i].description + "</td>";
    //   html += "<td>" + laptopData[i].classify + "</td>";
    //   html += "<td>" + laptopData[i].price + "</td>";
    //   html += "<td>" + laptopData[i].unit + "</td>";
    //   html +=
    //     "<td>" +
    //     `<button type="button" class="btn" onclick='removeItem(${laptopData[i].id})'>delete</button>` +
    //     "</td>";
    //   html +=
    //     "<td>" +
    //     `<button type="button" class="btn" onclick='getRow(${laptopData[i].id});getId(${laptopData[i].id})' >edit</button>` +
    //     "</td>";
    //   html += "</tr>";
    // }

    for (var i = 0; i < data.length; i++) {
      var sno = i + 1;
      data[i].id = sno;
      saveData(data);

      console.log(data[i].id);
      html += "<tr>";
      html += "<td>" + sno + "</td>";
      html += "<td>" + data[i].name + "</td>";
      html += "<td>" + data[i].description + "</td>";
      html += "<td>" + data[i].classify + "</td>";
      html += "<td>" + data[i].price + "</td>";
      html += "<td>" + data[i].unit + "</td>";
      html +=
        "<td>" +
        `<button type="button" class="btn" onclick='removeItem(${data[i].id})'>delete</button>` +
        "</td>";
      html +=
        "<td>" +
        // `<button type="button" class="btn" onclick='getRow(${data[i].id});getId(${data[i].id})' >edit</button>` +
        `<button type="button" class="btn" onclick='getRow(${data[i].id})'>edit</button>` +
        "</td>";
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("table").innerHTML = html;
  }, 200);
  // saveData(data);
}
displayTableData();

function addOnclick() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
  var unit = document.getElementById("unit").value;
  var classify = document.getElementById("classifyAnswer").value;

  var data = getData();

  if (name && description && price && unit && classify) {
    // let id = laptopData.length + 1;
    // laptopData.push({
    //   name: name,
    //   description: description,
    //   price: price,
    //   unit: unit,
    //   id: id,
    //   classify: classify,
    // });

    let id = data.length + 1;
    data.push({
      name: name,
      description: description,
      price: price,
      unit: unit,
      id: id,
      classify: classify,
    });

    saveData(data); //本地存储
    displayTableData();
    clearItems();
  } else {
    alert("请确保正确输入所有信息！");
  }
}

// 保存数据到本地存储
function saveData(data) {
  // 存储时要转换为字符型存储
  localStorage.setItem("list", JSON.stringify(data));
}

// 读取本地存储的数据
function getData() {
  var data = localStorage.getItem("list");
  // 因为本地存储的数据以字符型保存，我们获取过来要转换为对象形式
  if (data !== null) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function clearItems() {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("unit").value = "";
  // document.getElementById("classifyAnswer").value = "";
}

function removeItem(rec) {
  // console.log(rec);
  var data = getData();
  var filt = data.filter((a, i) => {
    if (rec == a.id) {
      data.splice(i, 1);
      // 保存修改后的数据到本地存储
      displayTableData();
      saveData(data);
    }
    // console.log(data);
  });

  displayTableData();
  // var filt = laptopData.filter((a, i) => {
  //   if (rec == a.id) {
  //     laptopData.splice(i, 1);
  //     // 保存修改后的数据到本地存储
  //     saveData(laptopData);
  //     displayTableData();
  //   }
  //   console.log(laptopData);
  // });
}

function getRow(rec) {
  // 获取该行的值
  thisId = rec;
  var data = getData();

  console.log(data[rec - 1].name);

  document.getElementById("name").value = data[rec - 1].name;
  document.getElementById("description").value = data[rec - 1].description;
  document.getElementById("price").value = data[rec - 1].price;
  document.getElementById("unit").value = data[rec - 1].unit;
  document.getElementById("classifyAnswer").value = data[rec - 1].classify;

  if (document.getElementById("classifyAnswer").value == "应季水果") {
    document.getElementById("fruit").checked = true;
    check(document.getElementById("fruit").value);
  }

  if (document.getElementById("classifyAnswer").value == "新鲜蔬菜") {
    document.getElementById("vegetable").checked = true;
    check(document.getElementById("vegetable").value);
  }

  if (document.getElementById("classifyAnswer").value == "有机产品") {
    document.getElementById("organic").checked = true;
    check(document.getElementById("organic").value);
  }
}

function editRow() {
  var data = getData();

  // laptopData[thisId - 1].name = document.getElementById("name").value;
  // console.log(laptopData[thisId - 1].name);

  // laptopData[thisId - 1].description =
  //   document.getElementById("description").value;
  // laptopData[thisId - 1].price = document.getElementById("price").value;
  // laptopData[thisId - 1].unit = document.getElementById("unit").value;
  // laptopData[thisId - 1].classify =
  //   document.getElementById("classifyAnswer").value;

  data[thisId - 1].name = document.getElementById("name").value;
  console.log(data[thisId - 1].name);

  data[thisId - 1].description = document.getElementById("description").value;
  data[thisId - 1].price = document.getElementById("price").value;
  data[thisId - 1].unit = document.getElementById("unit").value;
  data[thisId - 1].classify = document.getElementById("classifyAnswer").value;
  // 保存修改后的数据到本地存储
  saveData(data);
  displayTableData();
}

function check(radio) {
  document.getElementById("classifyAnswer").value = radio;
  console.log(document.getElementById("classifyAnswer").value);
}

var a = document.getElementById("blah");
function readUrl(input) {
  if (input.files) {
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = (e) => {
      a.src = e.target.result;
    };
  }
}
removeImg = () => {};
