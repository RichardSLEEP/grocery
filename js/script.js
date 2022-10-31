let searchForm = document.querySelector(".search-form");
// 指定Dom 命名赋值
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};

let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
  searchForm.classList.remove("active");
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

// 购物车

let shoppingCartBtn = document.querySelector("#icon-shopping-cart");
let productCartArea = document.querySelector("#product-cart-area"); //购物车区域

let shoppingCart = document.querySelector(".shopping-cart-area");
let cartContentMenu = document.querySelectorAll(".cart-menu-items h2");
let cartCloseButton = document.querySelector(".cart-close-btn button");
let shoppingCartContentsArea = document.querySelectorAll(
  ".shopping-cart-contents-area"
);

// 产品
let featuredProducts = document.querySelectorAll(".product-wrap");
let productImage = document.querySelectorAll(".product-img img");
let productPrice = document.querySelectorAll(".f-product-price");
let productDiscount = document.querySelectorAll(".discount");
let productName = document.querySelectorAll(".product-name");
let currentPrice = document.querySelectorAll(".f-cur-price");
let productUnit = document.querySelectorAll(".f-product-unit");
let addToCartBtn = document.querySelectorAll(".add-to-cart-btn p");
let cartContentArea = document.querySelector(".cart-contents-area");
let shoppingCartArea = document.querySelector(".shopping-cart-wrap");
// 购买订单TODO

let controllScrolling = document.querySelector("html");

// item counter
let countSelectedItem = 0;
let countFavoriteItem = 0;
let countAddToBuyItem = 0;
let countBuyProductSl = 0;
let countTotalWeight = 0;
let countTotalPieces = 0;
let countTotalAmount = 0;
let countTotalDozen = 0;

// store event data
let addedToCart = [];
let addedForBuy = [];
let newCartContent = [];
let addedToFavorite = [];
let newfavoriteItem = [];
let shoppingCartItem = [];
let storeShopItemsIndex = [];

let isSelectedItemActive = true;

// 折扣后价格
(function () {
  for (let i = 0; i < featuredProducts.length; i++) {
    let oldPrice = productPrice[i].textContent;
    let discount = productDiscount[i].textContent;

    let newPrice = oldPrice - Math.round(oldPrice * (discount / 100));

    currentPrice[i].textContent = newPrice;
  }
})(); //需要的参数

// 根本没有执行？？？
shoppingCartBtn.onclick = () => {
  // 添加类 active-cart 激活
  productCartArea.classList.add("active-cart");
  controllScrolling.style.overflow = "hidden";
};

// 添加新产品元素
// create elements for selected product content
function createSelectedProductsContent(
  image,
  name,
  price,
  unit,
  discount,
  preservative,
  time
) {
  let newCartContent = document.createElement("div");
  newCartContent.setAttribute("class", "cart-content");

  let newCartImageArea = document.createElement("div");
  newCartImageArea.setAttribute("class", "cart-image-area");

  let newCartDetails = document.createElement("div");
  newCartDetails.setAttribute("class", "cart-details");

  //children of newCartImageArea
  let newImage = document.createElement("img");
  newImage.src = image;

  newCartImageArea.appendChild(newImage);

  // childrens of newCartDetails
  let newHeading2 = document.createElement("h2");
  newHeading2.textContent = "Product Details";

  let newPara = [];
  let newStrong = [];

  for (let i = 0; i < 6; i++) {
    newPara[i] = document.createElement("p");
    newStrong[i] = document.createElement("strong");
  }

  newStrong[0].textContent = "Product name: ";
  newStrong[1].textContent = "Price: ";
  newStrong[2].textContent = "Discount: ";
  newStrong[3].textContent = "Quantity: ";
  newStrong[4].textContent = "Preservatives: ";
  newStrong[5].textContent = "Added Time: ";

  for (let i = 0; i < 6; i++) {
    newPara[i].appendChild(newStrong[i]);
  }

  let newInput = document.createElement("input");
  newInput.setAttribute("type", "number");
  newPara[3].appendChild(newInput);

  let newQuantitySpan = document.createElement("span");
  newQuantitySpan.innerHTML = `${unit}`;
  newQuantitySpan.style.paddingLeft = "0.4rem";
  newPara[3].appendChild(newQuantitySpan);

  let newSpan = [];
  for (let i = 0; i < 3; i++) {
    newSpan[i] = document.createElement("span");
  }

  newSpan[0].textContent = name;
  newSpan[1].textContent = price + `Tk/${unit}`;
  newSpan[2].textContent = discount + "%";

  for (let i = 0; i < 3; i++) {
    newPara[i].appendChild(newSpan[i]);
  }

  let preservativeSpan = document.createElement("span");
  preservativeSpan.textContent = preservative;

  let timeSpan = document.createElement("span");
  timeSpan.textContent = time;

  newPara[4].appendChild(preservativeSpan);
  newPara[5].appendChild(timeSpan);

  let newShoppingButton = [];

  for (let i = 0; i < 2; i++) {
    newShoppingButton[i] = document.createElement("button");
  }

  newShoppingButton[0].textContent = "Add to Buy";
  newShoppingButton[1].textContent = "Remove Item";

  newShoppingButton[0].setAttribute("class", "add-to-buy-btn");
  newShoppingButton[1].setAttribute("class", "remove-item-btn");

  // adding children to parent element
  newCartDetails.appendChild(newHeading2);

  for (let i = 0; i < 6; i++) {
    newCartDetails.appendChild(newPara[i]);
  }

  for (let i = 0; i < 2; i++) {
    newCartDetails.appendChild(newShoppingButton[i]);
  }

  newCartContent.appendChild(newCartImageArea);
  newCartContent.appendChild(newCartDetails);

  return newCartContent;
}

// 获取添加时间
// get product added time
function getAddedTime() {
  let dt = new Date();

  let dd = dt.getDate();
  let mm = dt.getMonth() + 1;
  let yyyy = dt.getFullYear();

  let HH = dt.getHours();
  let MM = dt.getMinutes();
  let XM = null;

  HH >= 12 ? (XM = "PM") : (XM = "AM");

  if (HH > 12) {
    HH -= 12;
  }

  if (HH == 0) {
    HH = 12;
  }

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  if (HH < 10) {
    HH = "0" + HH;
  }

  if (MM < 10) {
    MM = "0" + MM;
  }

  let format = `${dd}/${mm}/${yyyy}  ${HH}:${MM} ${XM}`;
  return format;
}

// add items to selected products
function addItemsToSelectedProducts(productIndex) {
  addToCartBtn[productIndex].style.background = "orangered";
  addToCartBtn[productIndex].innerHTML =
    '<span class="icon-cart-arrow-down"></span> Added';
  let productCartImage = productImage[productIndex].src;
  let productCartName = productName[productIndex].textContent;
  let productCartPrice = productPrice[productIndex].textContent;
  let productCartUnit = productUnit[productIndex].textContent;
  let productCartDiscount = productDiscount[productIndex].textContent;
  let preservativeName = "No";
  let addedTime = getAddedTime();
  newCartContent[productIndex] = createSelectedProductsContent(
    productCartImage,
    productCartName,
    productCartPrice,
    productCartUnit,
    productCartDiscount,
    preservativeName,
    addedTime
  );
  cartContentArea.insertBefore(
    newCartContent[productIndex],
    cartContentArea.firstChild
  );
}

// remove Items to selected products
function removeItemsToSelectedProducts(productIndex) {
  addToCartBtn[productIndex].style.background = "#459122";
  addToCartBtn[productIndex].innerHTML =
    '<span class="icon-cart-plus"></span> Add to Cart';
  cartContentArea.removeChild(newCartContent[productIndex]);
}

// 产生购物车物品
// create shopping cart item
function createShoppingCartItem(
  itemName,
  itemPrice,
  itemUnit,
  itemDiscount,
  presentPrice,
  itemQuantity
) {
  let newParentDiv = document.createElement("div");
  newParentDiv.setAttribute("class", "shopping-details");

  let newChildDiv = [];

  for (let i = 0; i < 8; i++) {
    newChildDiv[i] = document.createElement("div");
  }

  newChildDiv[0].setAttribute("class", "product-sl");
  newChildDiv[1].setAttribute("class", "product-name");
  newChildDiv[2].setAttribute("class", "regular-price");
  newChildDiv[3].setAttribute("class", "discount");
  newChildDiv[4].setAttribute("class", "present-price");
  newChildDiv[5].setAttribute("class", "product-quantity");
  newChildDiv[6].setAttribute("class", "total-amount");
  newChildDiv[7].setAttribute("class", "remove-item-btn");

  let newChildPara = [];

  for (let i = 0; i < 7; i++) {
    newChildPara[i] = document.createElement("p");
  }

  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove";
  removeBtn.setAttribute("class", "remove-shop-item");

  let totalPrice = itemQuantity * presentPrice;
  totalPrice = totalPrice.toFixed(2);

  newChildPara[1].innerHTML = itemName;
  newChildPara[2].innerHTML = itemPrice + `Tk/${itemUnit}`;
  newChildPara[3].innerHTML = itemDiscount + `%`;
  newChildPara[4].innerHTML = presentPrice + `Tk/${itemUnit}`;
  newChildPara[5].innerHTML = itemQuantity + ` ${itemUnit}`;
  newChildPara[6].innerHTML = totalPrice + ` Tk`;

  for (let i = 0; i < 7; i++) {
    newChildDiv[i].appendChild(newChildPara[i]);
  }

  newChildDiv[7].appendChild(removeBtn);

  for (let i = 0; i < 8; i++) {
    newParentDiv.appendChild(newChildDiv[i]);
  }

  return newParentDiv;
}

// 产品添加到购物车区域
// add items to shopping cart area
function addItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
  totalAddToBuyCounter.innerHTML = ++countAddToBuyItem;
  buyBtn.style.background = "crimson";
  buyBtn.innerHTML = "Added";

  let getQuantity = Number(itemQuantity.value);
  let getItemName = productName[itemIndex].textContent;
  let getItemPrice = productPrice[itemIndex].textContent;
  let getItemUnit = productUnit[itemIndex].textContent;
  let getItemDiscount = productDiscount[itemIndex].textContent;
  let getPresentPrice = getItemPrice - (getItemDiscount / 100) * getItemPrice;

  getPresentPrice = getPresentPrice.toFixed(2);
  shoppingCartItem[itemIndex] = createShoppingCartItem(
    getItemName,
    getItemPrice,
    getItemUnit,
    getItemDiscount,
    getPresentPrice,
    getQuantity
  );
  shoppingDetailsContent.appendChild(shoppingCartItem[itemIndex]);

  if (getItemUnit === "kg") {
    countTotalWeight += getQuantity;
  } else if (getItemUnit === "dzn") {
    countTotalDozen += getQuantity;
  } else if (getItemUnit === "pcs") {
    countTotalPieces += getQuantity;
  }

  countTotalAmount += getPresentPrice * getQuantity;
}

// 从购物车区域移除
// remove items to shopping cart area
function removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
  totalAddToBuyCounter.innerHTML = --countAddToBuyItem;
  buyBtn.style.background = "#267247";
  buyBtn.innerHTML = "Add to Buy";

  let getQuantity = Number(itemQuantity.value);
  let getItemPrice = productPrice[itemIndex].textContent;
  let getItemUnit = productUnit[itemIndex].textContent;
  let getItemDiscount = productDiscount[itemIndex].textContent;
  let getPresentPrice = getItemPrice - (getItemDiscount / 100) * getItemPrice;

  shoppingDetailsContent.removeChild(shoppingCartItem[itemIndex]);

  if (getItemUnit === "kg") {
    countTotalWeight -= getQuantity;
  } else if (getItemUnit === "dzn") {
    countTotalDozen -= getQuantity;
  } else if (getItemUnit === "pcs") {
    countTotalPieces -= getQuantity;
  }

  countTotalAmount -= getPresentPrice * getQuantity;
  itemQuantity.value = "";
}

// controll product serial number
function setProductSl() {
  let sl = 0;
  let shopItems = shoppingDetailsContent.children;
  for (let i = 0; i < shopItems.length; i++) {
    shopItems[i].children[0].children[0].innerHTML = ++sl;
  }
}

// remove shop itmes index from array
function removeShopItemsIndex(index) {
  for (let i = 0; i < storeShopItemsIndex.length; i++) {
    if (storeShopItemsIndex[i] === index) {
      for (let j = i; j < storeShopItemsIndex.length; j++) {
        storeShopItemsIndex[j] = storeShopItemsIndex[j + 1];
      }
    }
  }
  storeShopItemsIndex.length--;
}

// remove selected product item
function removeSelectedProduct(productIndex) {
  removeItemsToSelectedProducts(productIndex);
  if (newfavoriteItem[productIndex] !== undefined) {
    deactiveFavoriteItemAddToCartBtn(productIndex);
  }
  --countSelectedItem;
  totalSelectedCounter.innerHTML = countSelectedItem;
  cartIconProductCounter.innerHTML = countSelectedItem;
  displayBuyingHeader(countSelectedItem);
  displayCartCounter(countSelectedItem);
  addedToCart[productIndex] = false;
}

// remove shopping cart product
function removeShoppingCartProduct(productIndex) {
  let addToBuyBtn = newCartContent[productIndex].children[1].children[7];
  let itemQuantity =
    newCartContent[productIndex].children[1].children[4].children[1];
  removeItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
  displayBuyingDetailsFooter(countAddToBuyItem);
  displayBuyingHeader(countSelectedItem);
  itemQuantity.removeAttribute("disabled");
  removeShopItemsIndex(productIndex);
  setProductSl();
  addedForBuy[productIndex] = false;
}

// add product to shopping cart area
function addProductToShoppingCart(productIndex) {
  let addToBuyBtn = newCartContent[productIndex].children[1].children[7];
  let itemQuantity =
    newCartContent[productIndex].children[1].children[4].children[1];
  addItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
  displayBuyingDetailsFooter(countAddToBuyItem);
  itemQuantity.setAttribute("disabled", "true");
  storeShopItemsIndex.push(productIndex);
  setProductSl();
}

// shopping items controll area
function controlShoppingProductItems(itemIndex) {
  let itemQuantity =
    newCartContent[itemIndex].children[1].children[4].children[1];
  if (
    addedForBuy[itemIndex] === false &&
    itemQuantity.value !== "" &&
    itemQuantity.value > 0
  ) {
    addProductToShoppingCart(itemIndex);
    let shopItemRemoveBtn = shoppingCartItem[itemIndex].children[7].children[0];
    shopItemRemoveBtn.addEventListener("click", function () {
      removeShoppingCartProduct(itemIndex);
    });
    addedForBuy[itemIndex] = true;
  } else if (
    addedForBuy[itemIndex] === true &&
    itemQuantity.value !== "" &&
    itemQuantity.value > 0
  ) {
    removeShoppingCartProduct(itemIndex);
  } else {
    if (itemQuantity.value === "") {
      alert("Please fill the quantity of your item");
    } else {
      alert("Please enter a valid quantity of your item");
    }
  }
}

// control selected product items
function controlSelectedProductItems(itemIndex) {
  if (addedToCart[itemIndex] === false) {
    addItemsToSelectedProducts(itemIndex);
    if (newfavoriteItem[itemIndex] !== undefined) {
      activeFavoriteItemAddToCartBtn(itemIndex);
    }

    let selectedProductRemoveBtn =
      newCartContent[itemIndex].children[1].children[8];

    selectedProductRemoveBtn.onclick = () => {
      removeSelectedProduct(itemIndex);

      // remove shopping cart item
      if (addedForBuy[itemIndex] === true) {
        removeShoppingCartProduct(itemIndex);
      }
    };
    ++countSelectedItem;
    totalSelectedCounter.innerHTML = countSelectedItem;
    cartIconProductCounter.innerHTML = countSelectedItem;
    addedToCart[itemIndex] = true;
  } else {
    removeSelectedProduct(itemIndex);

    // remove shopping cart item
    if (addedForBuy[itemIndex] === true) {
      removeShoppingCartProduct(itemIndex);
    }
  }

  let addToBuyBtn = newCartContent[itemIndex].children[1].children[7];

  addToBuyBtn.onclick = () => {
    controlShoppingProductItems(itemIndex);
  };

  displayBuyingHeader(countSelectedItem);
  displayCartCounter(countSelectedItem);
}

// controll product items and product cart area
(function () {
  for (let i = 0; i < addToCartBtn.length; i++) {
    // actions while click 'Add to Cart' button
    addToCartBtn[i].addEventListener("click", function () {
      controlSelectedProductItems(i);
    });

    // actions while click favorite icon
    favoriteIcon[i].addEventListener("click", function () {
      controlFavoriteProductItems(i);
    });
  }
})();

// 购物车结束
