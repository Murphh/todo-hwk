document.addEventListener("DOMContentLoaded", function(){

  //adds listener for when form is submitted
  document.getElementById('newToDoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //function call to create a new todo item based on form
    createToDo(this.children[0].value);
  });
});

//function for creating new todo item
function createToDo(toDo){
  //selects the content area of the page
  var contentSection = document.getElementById('main-content');

  //creates a new todo container and gives it correct classes
  var row = document.createElement('div');
  row.classList.add("todo-row");

  //creates a p tag with the todo title and adds to the todo container
  //creates a button for saying youve completed the task/
  //and adds it to the container
  row.appendChild(createP(["todo-title"], toDo));
  row.appendChild(createButton(["todo-button", "not-completed"], "Not Completed"));

  //creates a p tag showing the date you add the task to the todo around
  //adds it to the container
  var today = new Date();
  var dateString = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  row.appendChild(createP(["todo-date"], dateString));

  //inserts container before the form at the end
  contentSection.insertBefore(row, contentSection.children[contentSection.children.length - 1]);

  //adds an event listener to the newly added button
  var lastToDoButton = contentSection.children[contentSection.children.length - 2].children[1];
  lastToDoButton.addEventListener('click', function(){
    //when button clicked change it in the following way
    this.classList.add("completed");
    this.classList.remove("not-completed");
    this.innerText = "Completed";
    //after ticking one off, count how many you currently have
    countTodo();

  });
  //after adding todo count how many you currently have
  countTodo();
}

//function that counts how many uncompleted tasks you have
function countTodo(){
  document.getElementById('remaining-tasks').innerHTML = document.getElementsByClassName('not-completed').length;
}

//function for creating button, you supply an array of classes, and button text
function createButton(classArr, buttonText){
  var button = document.createElement("button");
  for(var i=0; i < classArr.length ; i++){
    button.classList.add(classArr[i]);
  }
  button.innerText = buttonText;
  return button;
}

//function for creating p tag, supply array of classes and p text
function createP(classArr, text){
  var p = document.createElement("p");
  for(var i=0; i < classArr.length ; i++){
    p.classList.add(classArr[i]);
  }
  p.innerHTML = text;
  return p;
}
