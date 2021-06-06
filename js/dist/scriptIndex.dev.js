"use strict";

var boje = ["red", "orange", "yellow", "green", "blue", "purple"];
var trenutna = 0;

function dugaJun() {
  var heder = document.getElementsByClassName("header")[0];
  trenutna = (trenutna + 1) % boje.length;
  heder.style.backgroundColor = boje[trenutna];
}

setInterval(dugaJun, 500);