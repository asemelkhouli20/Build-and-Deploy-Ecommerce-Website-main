export function getHead(active) {
  const activeWho = {
    activeHome: "",
    activeShop: "",
    activeBlog: "",
    activeAbout: "",
    activeContact: "",
  };

  if (activeWho.hasOwnProperty(active)) {
    activeWho[active] = "active";
  }

  return `
<a href="index.html"><img src="css/img/logo.png" class="logo" alt="logo" /></a>
      <div>
        <ul id="navbar">
          <li><a class="${activeWho.activeHome}" href="index.html">Home</a></li>
          <li><a class="${activeWho.activeShop}" href="shop.html">Shop</a></li>
          <li><a class="${activeWho.activeBlog}" href="blog.html">Blog</a></li>
          <li><a class="${activeWho.activeAbout}" href="about.html">About</a></li>
          <li><a class="${activeWho.activeContact}" href="contact.html">Contact Us</a></li>
          <li id="lg-bug">
            <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
          </li>
          <i id="close" class="far fa-times"></i>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
        <i id="bar" class="fas fa-outdent"></i>
      </div>

`;
}
