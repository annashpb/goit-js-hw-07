"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

function createListItems(arr) {
  return arr.map(item => {
    const element = document.createElement("li");
    element.textContent = item;
    return element;
  });
}

function fillList() {
  return document
    .querySelector("#ingredients")
    .append(...createListItems(ingredients));
}

fillList();
