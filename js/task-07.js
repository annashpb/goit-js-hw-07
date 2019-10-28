"use strict";

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.setAttribute("step", 1);
range.setAttribute("min", 0);
text.style.fontSize = "18px";
range.value = Number.parseInt(text.style.fontSize);

range.addEventListener("input", () => {
  text.style.fontSize = `${range.value}px`;
});
