import { newProduct } from "./products.js";

setCart();
function setCart() {
  
  var html = document.getElementById("cart-table");
  var htmlContent = ""
  for (let i = 0; i < newProduct.length; i++) {
  var item = newProduct[i];
  htmlContent += `
        <tr>
          <td>
            <a href="#">
              <i class="far fa-times-circle"></i>
            </a>
          </td>
          <td>
            <img src="css/img/products/${item.image}.jpg">
          </td>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>
            <input type="number" value="1">
          </td>
          <td>${item.price}</td>
        </tr>
    `;

  }
  html.innerHTML += htmlContent;
}
