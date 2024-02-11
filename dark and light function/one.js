let btn = document.querySelector("button");
let body = document.querySelector("body");
let state = "light";

btn.addEventListener("click", () => {
  if ((state = "light")) {
    body.style.backgroundColor = "white";
    state = "Dark";
  } else {
    body.style.backgroundColor = "black";
    state = "light";
  }
});
