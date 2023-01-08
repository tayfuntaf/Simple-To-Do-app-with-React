import React from "react";
import style from "../style.module.css";
import shortid from "shortid";

function Form({ todo, setTodo, todoList, setTodoList }) {

    const handleChange = (event) => {
        setTodo(event.target.value);
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id:shortid.generate()}]);
        console.log(todoList);
        setTodo("")
        
    }

  return (
    <div className={style.todoform}>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange ={handleChange} className={style.todoinput} placeholder="Add Todo Item"></input>
        <button type="submit" className={style.todobuttons}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
