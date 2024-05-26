var main = document.getElementById("main-img");
var item = document.getElementsByClassName("small-img");
console.log(item.length);
for (let i = 0; i < item.length; i++) {
  item[i].onclick = function () {
    main.src = item[i].src;
  };
}
item[1].onclick = function () {
  main.src = item[1].src;
};

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (id) {
    main.src = `css/img/products/${id}.jpg`;
  }
};
