import { useState } from "react";
import css from "./CreateTodo.module.css"

function CreateTodo(props) {
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue(''); 
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={submit} className={css.wrapper}>
      <input value={value} onChange={handleChange} type="text" placeholder="Add some text..." />
      <button>+Add</button>
    </form>
  );
}

export default CreateTodo;