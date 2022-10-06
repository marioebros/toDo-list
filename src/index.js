import _ from "lodash";

// Testing out webpack initial setup of index.js
console.log("testing index.js webpack");

// Testing out DOM manipulation via webpack
const contentDiv = document.querySelector(".content");
const testH1 = document.createElement("h1");
testH1.textContent = "HELLO MUNDO...Test from Webpack.js DOM Manipulation";
contentDiv.appendChild(testH1);

// function component() {
//   const element = document.createElement("div");

// Lodash, now imported by this script
element.innerHTML = _.join(["Hello", "webpack"], " ");

// return element;

// document.body.appendChild(component());
