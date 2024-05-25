// Script for navigation bar
import { newProduct, featureProduct } from "./products.js";

setProduct("products", featureProduct);
setProduct("NewProducts",newProduct);


function setProduct(id,array) {
  var htmlCode = "";
  var products = document.getElementById(id);
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
