import React from 'react';

const style = {
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
}

const styleTodo = {
  li: "",
  row: "",
  text: ""
}



const HomePage = () => {
  const [todos, setTodos] = React.useState(["Learn React", "Grind Leetcode"])
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Todo"></input>
          <button className={style.button}></button>
        </form>
        <ul>
          <Todo></Todo>
        </ul>
          
        </div>
      </div>
    </div>
  );
};

const Todo = () => {
  return(
      <li className = {styleTodo.li}>
          <div className = {styleTodo.row}>
              <input type="checkbox" />
              <p className={styleTodo.text}>Todo</p>
          </div>
          <button></button>
      </li>
  )
}

export default HomePage;
