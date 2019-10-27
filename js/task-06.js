"use strict";

const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputLength = input.value.length;
  console.log(inputLength);
  if (inputLength === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
