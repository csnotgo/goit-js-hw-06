function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const boxes = document.querySelector("#boxes");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const input = document.querySelector("input");

// function createBoxes(amount) {
//   const box = document.createElement("div");
//   box.style.width = 30 + "px";
//   box.style.height = 30 + "px";
//   box.style.backgroundColor = getRandomHexColor();
//   boxes.insertAdjacentElement("afterbegin", box);
// }

// input.addEventListener("change", (event) => {
//   event.currentTarget.value;
// });

// createBtn.addEventListener("click", createBoxes);
