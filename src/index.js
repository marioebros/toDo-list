import _ from "lodash";
import { createList } from "./create-list.js";
import { loadBlank } from "./load-blank.js";
import { domManip } from "./dom-manip";

// Testing out webpack initial setup of index.js
console.log("testing index.js webpack");

// Call loadBlank upon first landing
loadBlank();

// Call DOM Manipulation module to control UI
domManip();

// TODO: Click event modeul HERE for todo and project creations

// Call create-list.js module file and apply some objects/properties  (this will eventually)
const myToDo = createList("Grocery Run", "Go get groceries", "10/15/2022");
const myToDo2 = createList("Work");
console.log("Show me properties on myToDo from index.js.....", myToDo);
console.log("Show me properties on myToDo2 from index.js.....", myToDo2);

// function component() {
//   const element = document.createElement("div");

// Lodash, now imported by this script
element.innerHTML = _.join(["Hello", "webpack"], " ");

// return element;

// document.body.appendChild(component());
