document.addEventListener("DOMContentLoaded", function(){

  document.getElementById('newToDoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createToDo(this.children[0].value);
  });
});

function createToDo(toDo){
  var contentSection = document.getElementById('main-content');

  var row = document.createElement('div');
  row.classList.add("todo-row");

  row.appendChild(createP(["todo-title"], toDo));
  row.appendChild(createButton(["todo-button", "not-completed"], "Not Completed"));

  var today = new Date();
  var dateString = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  row.appendChild(createP(["todo-date"], dateString));

  contentSection.insertBefore(row, contentSection.children[contentSection.children.length - 1]);
  var lastToDoButton = contentSection.children[contentSection.children.length - 2].children[1];

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

function createP(classArr, text){
  var p = document.createElement("p");
  for(var i=0; i < classArr.length ; i++){
    p.classList.add(classArr[i]);
  }
  p.innerHTML = text;
  return p;
}
