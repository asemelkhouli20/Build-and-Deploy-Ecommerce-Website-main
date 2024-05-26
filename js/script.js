// Script for navigation bar
import { newProduct, featureProduct } from "./products.js";
import { featuresItem } from "./features.js";

setProduct("products", featureProduct);
setProduct("NewProducts", newProduct);
setFeatures();
function setProduct(id, array) {
  var htmlCode = "";
  const products = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    var ratingHtml = "";
    for (let j = 0; j < item.rating; j++) {
      ratingHtml += '<i class="fas fa-star"></i>';
    }
    var item = `
      <div class="pro">
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
  feature.innerHTML = htmlCode
}
