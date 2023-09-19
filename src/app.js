/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuse = document.getElementById("excuse");
  const btn = document.getElementById("btn");

  const who = [
    "My dog",
    "My goat",
    "My fish",
    "My bird",
    "My neighbor",
    "My grandpa",
    "My granny",
    "My toaster",
    "A unicorn",
    "A UFO",
    "Spiderman"
  ];

  const what = [
    "ate",
    "burned",
    "disappeared",
    "shredded",
    "teleported",
    "sold",
    "rented",
    "made toast with",
    "hid"
  ];

  const whatAvoid = [
    "my homework",
    "my presentation",
    "my uniform",
    "my backpack",
    "my money",
    "my ticket",
    "my exam"
  ];

  const when = [
    "yesterday",
    "this morning",
    "when I was coming here",
    "at some point",
    "while I was taking a shower"
  ];

  generateExcuse();

  btn.addEventListener("click", generateExcuse);

  function generateExcuse() {
    excuse.innerText = `${who[Math.floor(Math.random() * who.length)]} ${
      what[Math.floor(Math.random() * what.length)]
    } ${whatAvoid[Math.floor(Math.random() * whatAvoid.length)]} ${
      when[Math.floor(Math.random() * when.length)]
    }`;
  }
};
