import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
  const arr = JSON.parse(localStorage.getItem("todos"))
  const [todosArr, setTodosArr] = useState(arr);

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todosArr))
}, [todosArr])       

  const addTodo = (newStr) => {
    setTodosArr([
      ...todosArr,
      { title: newStr, status: false, id: Date.now() },
    ]);
  };

  const deleteTodo = (id) => {
    const newArr = todosArr.filter((item) => item.id !== id);
    setTodosArr(newArr);
  };

  const changeStatusTodo = (id) => {
    const newArr = todosArr.map((item) => {
      if(item.id === id) {
        return {...item, status: !item.status}
      }
      return item
    })
    setTodosArr(newArr)
  };

  const editTodo = (id, newStr) => {
    const newArr = todosArr.map((item)=> { 
      if (item.id === id) { 
        return {...item, title:newStr}
      }
      return item 
    })
    setTodosArr (newArr)
  }

  const resLength = todosArr.reduce((acc, item) => acc + item.status, 0);

  return (
    <div className="App">
      <Header compleated={resLength} length={todosArr.length} />
      <CreateTodo addTodo={addTodo} />
      <TodoContainer
        todosArr={todosArr}
        deleteTodo={deleteTodo}
        changeStatusTodo={changeStatusTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
