console.log('todos.js');

var todoStringField = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;

todoStringField.addEventListener('keyup', addTodo);
