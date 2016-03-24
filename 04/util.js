function getDom(id) {
   return document.getElementById(id);
}

function addTodo(event) {
  console.log('todoStringField keyup!');

   if (event.keyCode !== 13) {
     event.stopPropagation();
     return;
   }

   var newTodo = todoStringField.value;
   todoStringField.value = "";

   console.log('새로운 todo:', newTodo);

   var listDom = getDom('todoList');

   listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});
}
