import { showproduct } from "./showproduct.js"
import { prams } from "./varibles.js"
const num = document.querySelector(".number");
const fetchApi1 = () => {
  fetch('https://data-0t5n.onrender.com/categories')
    .then(res => res.json())
    .then(data => {
      if(data) {
        let cate = data.map((item) => {
          return `
            <div class="category__item">
              ${item}
            </div>
          `
        })
        const category = document.querySelector(".category__list");
        category.innerHTML = cate.join("");
        const item = document.querySelectorAll(".category__item");
        for (let i = 0; i < item.length; i++) {
          item[i].addEventListener("click", () => {
            for (let k = 0; k < item.length; k++) {
              item[k].classList.remove("active");
            }
            item[i].classList.toggle("active");
            console.log(item[i].innerText);
            prams.category = item[i].innerText.toLowerCase();
            prams.page = 1;
            num.innerHTML = prams.page;
            showproduct();
          })
        }
      }
      else {
        let load = " <h2>Đang tải dữ liệu xin vui long đợi trong giây lát...</h2>"
        const product = document.querySelector(".product__list");
        product.innerHTML = load;  
      }
    })
}
fetchApi1();
