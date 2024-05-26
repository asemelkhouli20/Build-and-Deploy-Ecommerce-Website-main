import { blogContent } from "./blog.js";

export function getBlogs() {
  var ratingHtml = "";
  for (let i = 0; i < blogContent.length; i++) {
    var item = blogContent[i];
    var value = `
  <div class="blog-box">
    <div class="blog-img">
      <img src="${item.image}" />
    </div>
    <div class="blog-details">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
      <a href="#">CONTINUE READING</a>
    </div>
    <h1>${item.date}</h1>
  </div>
  `;
    ratingHtml += value;
  }
  return ratingHtml;
}
