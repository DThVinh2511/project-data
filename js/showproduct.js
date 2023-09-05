import { prams } from "./varibles.js"
export const showproduct = () => {
  console.log(prams.page);
  const limit = "8";
  let categories = "";
  if(prams.category !== "") {
    categories = `&category=${prams.category}`;
  }
  let api = `https://data-0t5n.onrender.com/products?q=${prams.q}${categories}&_sort=${prams.sort}&_order=${prams.order}&_page=${prams.page}&_limit=${limit}`;
  console.log(api);
  fetch(api)
    .then(res => res.json())
    .then(data => {
      let pro = data.map(item => {
        return `
          <div class="product__item">
            <div class="product__image">
              <img src="${item.thumbnail}" alt="${item.title}">
            </div>
            <div class="product__title">
              ${item.title}
            </div>
            <div class="product__discountPercentage">${item.discountPercentage}%</div>
            <div class="price__stock"> 
              <span class="product__price">
              ${item.price}$
              </span>
              <span class="product__stock">
                Còn lại: ${item.stock} sản phẩm
              </span>
            </div>
          </div>
        `
      })
      const product = document.querySelector(".product__list");
      product.innerHTML = pro.join("");
    })
}