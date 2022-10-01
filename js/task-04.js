const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log("Зменьшення: -1");
});
incrementBtn.addEventListener("click", (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log("Збільшення: +1");
});
