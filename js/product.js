
import { showproduct } from "./showproduct.js";
import { prams } from "./varibles.js";

showproduct();


const textSearch = document.querySelector("#text_search");
const buttonSearch = document.querySelector("#search");
const search = () => {
  prams.q = textSearch.value;
}
textSearch.addEventListener("change", () => {
  search();
  showproduct();
})
buttonSearch.addEventListener("click", () => {
  search();
  showproduct();
})

const selectSort = document.querySelector(".op");

selectSort.addEventListener("change", () => {
  let value = selectSort.value;
  switch (value) {
    case "mac-dinh":
      prams.sort = "";
      prams.order = "";
      break;
    case "gia-thap-den-cao":
      prams.sort = "price";
      prams.order = "asc";
      break;
    case "gia-cao-den-thap":
      prams.sort = "price";
      prams.order = "desc";
      break;
    case "giam-gia-nhieu":
      prams.sort = "discountPercentage";
      prams.order = "desc";
      break;
    default:
      break;
  }
  showproduct();
})

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const num = document.querySelector(".number");

next.addEventListener("click", () => {
  prams.page = prams.page + 1;
  num.innerHTML = prams.page;
  showproduct();
});

prev.addEventListener("click", () => {
  if(prams.page > 1) {
    prams.page = prams.page - 1;
    num.innerHTML = prams.page;
    showproduct();
  }
})