document.addEventListener("DOMContentLoaded", function(){

  document.getElementById('newToDoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createToDo(this.children[0].value);
  });
});

function createToDo(toDo){
  var today = new Date();
  var contentArea = document.getElementsByClassName('main-content');

  var row = document.createElement('div');
  row.classList.add("todo-row");
  var title = document.createElement("p");
  title.innerHTML = toDo;
  title.classList.add("todo-title");
  row.appendChild(title);
  row.appendChild(createButton(["todo-button", "not-completed"], "Not Completed"));
  var date = document.createElement('p');
  date.classList.add('todo-date');
  date.innerHTML = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  row.appendChild(date);
  contentArea[0].insertBefore(row, contentArea[0].children[contentArea[0].children.length - 1]);
  var lastToDoButton = contentArea[0].children[contentArea[0].children.length - 2].children[1];

  lastToDoButton.addEventListener('click', function(){
    this.classList.add("completed");
    this.classList.remove("not-completed");
    this.innerText = "Completed";
    countTodo();

  });

  countTodo();
}

function countTodo(){
  document.getElementById('remaining-tasks').innerHTML = document.getElementsByClassName('not-completed').length;
}

function createButton(classArr, buttonText){
  var button = document.createElement("button");
  for(var i=0; i < classArr.length ; i++){
    button.classList.add(classArr[i]);
  }
  button.innerText = buttonText;
  return button;
}
