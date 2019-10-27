"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

function createGallery(arr) {
  return arr.map(item => {
    const element = document.createElement("li");
    element.classList.add('gallery-list-item');
    element.insertAdjacentHTML(
      "beforeend",
      `<img src="${item.url}" alt="${item.alt}">`
    );
    return element;
  });
}

function fillGallery(arr) {
  return document.querySelector("#gallery").append(...createGallery(arr));
}

fillGallery(images);
