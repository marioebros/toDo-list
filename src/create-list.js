// Creating an array for ToDo, if needed later on
let toDoArray = [];

// Factory function to create ToDo list
export const createList = (
  Title,
  Description,
  DueDate,
  Priority,
  CheckList
) => {
  console.log("Called createList module... creating ToDo now");
  console.log({ Title, Description, DueDate, Priority, CheckList });
  console.log("Pushing this object to the toDoArray...");
  // TODO: Remove below two lines of code if array is not needed
  toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
  console.log(toDoArray);
  return { Title, Description, DueDate, Priority, CheckList };
};
