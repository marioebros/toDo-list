import _ from "lodash";
import { createList } from "./create-list.js";
import { loadBlank } from "./load-blank.js";
import {
  displayDefaultProject,
  displayTheForm,
  addItemToChecklist,
  clearForm,
} from "./dom-manip.js";
import "./styles.css";

// Call loadBlank upon first landing
loadBlank();

// Call DOM Manipulation module to load default project
// domManip();

// Click Events Module
let clickEventModule = function () {
  // Click Event for displaying the form
  const addNewToDo = document.querySelector(".add-todo-button");
  addNewToDo.addEventListener("click", displayTheForm);

  // Click Event for adding an item to the checklist on the form
  const addToChecklist = document.querySelector(".add-to-checklist");
  addToChecklist.addEventListener("click", addItemToChecklist);

  // Click Event to clear the form
  const clearButton = document.querySelector(".reset-button");
  clearButton.addEventListener("click", clearForm);
};

// Call create-list.js module file and apply some objects/properties  (this will eventually be replaced by UI input)
const myToDo = createList(
  "Grocery Run",
  "Go get groceries",
  "10/15/2022",
  "Low",
  "Meats, Eggs, Millk"
);
const myToDo2 = createList(
  "Work",
  "Do Odin Project work",
  "10/20/2022",
  "Medium",
  "Read Module, Finish ToDo Project"
);
console.log("Show me properties on myToDo from index.js.....", myToDo);
console.log("Show me properties on myToDo2 from index.js.....", myToDo2);

// Lodash, now imported by this script
element.innerHTML = _.join(["Hello", "webpack"], " ");

// return element;

// document.body.appendChild(component());
