"use strict";

window.addEventListener("DOMContentLoaded", init);

let selectedColor;

async function init() {
  let response = await fetch("assets/peeps.svg");
  let mySvgData = await response.text();
  document.querySelector(".container").innerHTML = mySvgData;
  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  let colors = document.getElementsByName("color");

  Array.from(colors).forEach((el, i) => {
    el.addEventListener("change", e => {
      if (e.target.checked) {
        let value = e.target.getAttribute("value");
        document.querySelector("html").setAttribute("data-color", value);
        selectedColor = window.getComputedStyle(el).getPropertyValue("--selectedColor");
      }
    });
  });

  document.querySelector("#fill").addEventListener("click", fillColor);
}

function fillColor(e) {
  console.log(fillColor);

  e.target.style.fill = selectedColor;
}
