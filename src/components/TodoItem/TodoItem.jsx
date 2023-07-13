import { useState } from "react";
import css from "./TodoItem.module.css";

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(true);
  const [inpValue, setInpValue] = useState(props.title);

  const handleDel = () => {
    props.deleteTodo(props.id);
  };

  const handleCheckbox = () => {
    props.changeStatusTodo(props.id);
  };

  const handleChange = (e) => {
    setInpValue(e.target.value);
  }

  const handleSave = () => {
    // code here 
    props.editTodo(props.id, inpValue)
    setIsEdit(true)
  }
  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <label>
          <input
            type="checkbox"
            checked={props.status}
            onChange={handleCheckbox}
          />
          <span className={props.status ? css.compleate : ""}>
            {props.title}
          </span>
        </label>
      ) : (
        <input
          value={inpValue}
          onChange={handleChange}
          type="text"
          placeholder="Enter some text..."
        />
      )}
      <div className="actions">
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Edit</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
        <button onClick={handleDel}>Del</button>
      </div>
    </div>
  );
}

export default TodoItem;
