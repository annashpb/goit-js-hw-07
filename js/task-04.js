"use strict";

const refs = {
  btns: document.querySelector("#counter"),
  field: document.querySelector("#value")
};

const state = {
  counter: 0,

  increment() {
    this.counter += 1;
  },

  decrement() {
    this.counter -= 1;
  }
};

function handleClick({ target }) {
  state[target.dataset.action]();
  refs.field.textContent = state.counter;
}

refs.btns.addEventListener("click", handleClick);
