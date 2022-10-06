import { loadBlank } from "./load-blank";

// DOM manipulation to display the UI components
export function domManip() {
  // DOM for Heading
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement("h1");
  heading.textContent = "ToDo WebApp";
  contentDiv.appendChild(heading);

  // DOM for the Default project load
  const projectsInfoDiv = document.createElement("div");
  projectsInfoDiv.textContent = loadBlank().projectTitle;
  contentDiv.appendChild(projectsInfoDiv);
}
