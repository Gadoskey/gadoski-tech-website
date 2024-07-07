let myArray =  getData() || [];
  /*{
    number: '',
    name: '',
    description: '',
    date: ''
  }] || getData(data);*/
addAllHTML();
function addAllHTML() {
  let computedHTML = "";
  for (i = 0; i < myArray.length; i++) {
    const { name, description, date } = myArray[i];
    const word = `
      <div class="serialNumber">${i + 1}</div>
      <div>${name}</div>
      <div>${description}</div>
      <div>${date}</div>
      <button class = "deleteButton">
      Delete Task</button>
      `;
    computedHTML += word;
  }
  document.querySelector(".finalText").innerHTML = computedHTML;
  document.querySelectorAll(".deleteButton").forEach((deleteButton, index) =>
  {
    deleteButton.addEventListener("click", () => 
    {
      myArray.splice(index, 1);
      addAllHTML();
      saveData(myArray);
    });
  });
}
/* this code now uses for each loop above for the delete button
<button class = "insideButton" onclick="
        myArray.splice(${i}, 1);
        addAllHTML();
        saveData(myArray);
      ">Delete Task</button>
        `;
    computedHTML += word;
  }
  document.querySelector(".finalText").innerHTML = computedHTML;
*/
function addTodo() {
  const inputElement = document.querySelector(".inputClass");
  const name = inputElement.value;
  const taskClass = document.querySelector(".taskClass");
  const description = taskClass.value;
  const dateElement = document.querySelector(".dateInput");
  const date = dateElement.value;
  myArray.push({
    name,
    date,
    description
    });
  inputElement.value = "";
  taskClass.value = "";
  addAllHTML();
  saveData(myArray);
}
document.getElementById("input").addEventListener("keydown", (event) => 
{
  if (event.key === "Enter") {
    addTodo();
  }
});
function saveData(data)
{

  localStorage.setItem("data", JSON.stringify(data));
}
function getData()
{
  return JSON.parse(localStorage.getItem("data")) || [];
}
document.getElementById("resetButton").addEventListener("click", (event) =>
{
  myArray = [];
  localStorage.removeItem("data");
  addAllHTML();
});
document.getElementById("addButton").addEventListener("click", addTodo);

addAllHTML();