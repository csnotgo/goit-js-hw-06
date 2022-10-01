const input = document.querySelector("input");
const symbols = input.getAttribute("data-length");

input.addEventListener("blur", (event) => {
  if (input.value.length < symbols) {
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
