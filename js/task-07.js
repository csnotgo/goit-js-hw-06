const input = document.querySelector("input");
const text = document.querySelector("span");

input.addEventListener("change", (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
  console.log(event.currentTarget.value);
});
