document.addEventListener("DOMContentLoaded", function(){

  var today = new Date();
  var completedButtons = document.getElementsByClassName('todo-button');

  for (var i = 0; i < completedButtons.length; i++) {
    completedButtons[i].addEventListener('click', function(){
      this.classList.add("completed");
      this.classList.remove("not-completed");
      this.innerText = "Completed";
      this.parentNode.children[2].innerHTML = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
    });
  }
});
