import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

const tarea = new Todo('Meet with Jonah at the cafe!');

todoList.nuevoTodo( tarea );
tarea.completado = true;

console.log( todoList )

crearTodoHtml( tarea );