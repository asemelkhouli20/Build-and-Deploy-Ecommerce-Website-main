// Script for navigation bar
import { newProduct, featureProduct } from "./products.js";
import { featuresItem } from "./features.js";
import { getHead } from "./header.js";
import { footerContent } from "./footer.js";
import { newslettersContent } from "./newsletters.js";

function setFooter() {
  const footer = document.getElementById("footer");
  const newsletters = document.getElementById("newsletters");

  newsletters.innerHTML = newslettersContent;
  footer.innerHTML = footerContent;
}
function setHead(active) {
  const header = document.getElementById("header");
  header.innerHTML = getHead(active);
}

function setProduct(id) {
  var array = newProduct;
  if (id == "products") {
    array = featureProduct;
  }
  var htmlCode = "";
  const products = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    var ratingHtml = "";
    for (let j = 0; j < item.rating; j++) {
      ratingHtml += '<i class="fas fa-star"></i>';
    }

    var item = `
      <div class="pro" onclick="
       window.location.href = 'sproduct.html?id=${item.image}';
      ">
        <img src="css/img/products/${item.image}.jpg" />
        <div class="des">
          <span>${item.brand}</span>
          <h5>${item.title}</h5>
          <div class="star">${ratingHtml}</div>
          <h4>${item.price}</h4>
        </div>
        <a href="#">
          <i class="fal fa-shopping-cart cart"></i>
        </a>
      </div>

    `;
    htmlCode += item;
  }
  products.innerHTML = htmlCode;
}

function storeItemAndNavigate(index, id) {
  var array = newProduct;
  if (id === "products") {
    array = featureProduct;
  }
  var item = array[index];
  localStorage.setItem("product", JSON.stringify(item));
  window.location.href = "sproduct.html";
}

function setFeatures() {
  const feature = document.getElementById("feature");
  var htmlCode = "";
  for (let i = 0; i < featuresItem.length; i++) {
    var item = featuresItem[i];
    htmlCode += `
      <div class="fe-box">
        <img src="img/features/${item.image}" alt="${item.title} img" />
        <h6>${item.title}</h6>
      </div>
      `;
  }
  feature.innerHTML = htmlCode;
}

export function setHome() {
  setProduct("products");
  setProduct("NewProducts");
  setFeatures();
  setHead("activeHome");
  setFooter();
}
export function setShop() {
  setHead("activeShop");
  setFooter();
  setProduct("products");
  setProduct("NewProducts");
}

export function setContact() {
  setHead("activeContact");
  setFooter();
}

export function setBlog() {
  setHead("activeBlog");
  setFooter();
}

export function setAbout() {
  setHead("activeAbout");
  setFooter();
}

export function setCart() {
  setHead("");
  setFooter();
}

export function setProductDetails() {
  setHead("");
  setFooter();
  setProduct("products");
}
