import TodoItem from "../TodoItem/TodoItem";
import "./TodoContainer.css";

function TodoContainer(props) {
  return (
    <div className="wrapper">
      {props.todosArr.length ? (
       props.todosArr.map((el) => (
        <TodoItem
          key={el.id}
          id={el.id}
          title={el.title}
          status={el.status}
          deleteTodo={props.deleteTodo}
          changeStatusTodo={props.changeStatusTodo}
          editTodo={props.editTodo}
        />
      )) 
       
      ) : 
      <h1>isjdsijd</h1>}
    </div>
  );
}

export default TodoContainer;

// const arr = [1,2,3,4,5,6]

// arr.forEach( ( el ) => {
//   alert(el)
// })

// alert(1)
// alert(2)
// alert(3)
