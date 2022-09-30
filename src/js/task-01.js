const categoriesEl = document.querySelectorAll("h2");
console.log("Number of categories:", categoriesEl.length);

const categoriesItem = document.querySelectorAll(".item");

categoriesItem.forEach((element) => {
  const el = element.querySelectorAll("li");
  const title = element.querySelector("h2");
  console.log("Category:", title.textContent);
  console.log("Elements:", el.length);
});
