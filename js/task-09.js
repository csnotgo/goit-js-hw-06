function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const text = document.querySelector("span");

btn.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = body.style.backgroundColor;
});
