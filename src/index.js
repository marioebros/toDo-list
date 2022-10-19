import _ from "lodash";
import { createList } from "./create-list.js";
import { loadBlank } from "./load-blank.js";
import {
  displayDefaultProject,
  displayTheForm,
  addItemToChecklist,
  clearForm,
  displayToDo,
} from "./dom-manip.js";
import "./styles.css";

// Call loadBlank upon first landing
loadBlank();

// Call DOM Manipulation module to load default project
// domManip();

// Call displayToDo on 1st landing
displayToDo();

// Click Events Module
let clickEventsModule = (function () {
  // Click Event for displaying the form
  const addNewToDo = document.querySelector(".add-todo-button");
  addNewToDo.addEventListener("click", displayTheForm);

  // Click Event for adding an item to the checklist on the form
  const addToChecklist = document.querySelector(".add-to-checklist");
  addToChecklist.addEventListener("click", addItemToChecklist);

  // Click Event to clear the form
  const clearButton = document.querySelector(".reset-button");
  clearButton.addEventListener("click", clearForm);

  // Click Event to submit a new todo form to project
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", createToDo);
})();
