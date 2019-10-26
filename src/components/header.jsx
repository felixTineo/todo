import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { font, color } from '../styles';
import { ADD_TODO, ON_THEMES } from '../store/actions';
import uuid from 'uuid/v1';
import { ocean, sunset } from '../themes';

const TodoCreator = () => {
  const theme = useSelector(state => state.themes.current);
  const todoRef = useRef(null);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => state.todos);
  useEffect(()=> {
    todoRef.current.focus();
    const todosContainer = document.getElementById('todos');
    todosContainer.scrollTo(0, todosContainer.scrollHeight + 200);
  },[todos]);

  const onTodo = (e) => {
    if(e.keyCode === 13 && !e.shiftKey){
      e.preventDefault();
      const newTodo = {
        id: uuid(),
        todo,
        date: Date.now(),
      }
      dispatch({ type: ADD_TODO, todo: newTodo });
      setTodo('');
    }
  }
  return (
    <form onSubmit={onTodo}>
      <textarea placeholder="Agrega una tarea a tus pendientes" onKeyDown={onTodo} value={todo} onChange={(e)=> setTodo(e.currentTarget.value)} ref={todoRef} />
      <button title="Agregar" type="submit">next</button>
      <svg viewBox="0 0 100 40" width="100px" height="40px">
        <polygon fill={theme.prim} points="0,0 50,40 100,0" />
      </svg>
      <style jsx>{`
        form{
          width: 50vw;
          padding: .5rem .5rem 0;
          align-items: center;
          border-radius: 3px;
          position: relative;
          height: 70px;
        }
        textarea{
          resize: none;
          width: 100%;
          border: none;
          border-radius: 3px;
          padding: .2rem;
          font-family: Roboto;
        }
        button{
          font-family: ${font.logo};
          height: 40px;
          width: 40px;
          border: none;
          border-radius: 50%;
          background: transparent;
          color: #fff;
          margin-top: .3rem;
          font-size: 1rem;
          position: absolute;
          left: calc(50% - 20px);
          bottom: -30px;
          z-index: 50;
          border: 1px solid #fff;
        }
        button:hover{
          background: ${theme.sec};
        }
        svg{
          position: absolute;
          bottom: -50px;
          left: calc(50% - 50px);
        }
      `}
      </style>
    </form>
  )
}

const Header = () => {
  const theme = useSelector(state => state.themes.current);
  const dispatch = useDispatch();
  return(
    <header className="animated fadeInDown">
      <div className="logo_main">
        <div className="logo-text">
          <h1>Next</h1>
          <ul>
            <li className="skew" />
            <li className="skew" />
            <li>to-do</li>
          </ul>
        </div>
        <svg viewBox="0 0 30 60" width="30" height="60">
          <polygon fill="#fff" points="0,0 30,30 0,60" />
        </svg>
      </div>
      <TodoCreator />
      <button onClick={()=> dispatch({ type: ON_THEMES })}>Theme</button>
      <style jsx>{`
        header{
          padding: 10px 15px;
          font-family: 'Staatliches';
          color: #fff;
          display: flex;
          position: fixed;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          ${theme.bgHeader};
          user-select: none;
          z-index:100;
        }
        h1{
          margin: 0;
          font-size: 3.5rem;
          line-height: 2.7rem;
        }
        p{
          margin: 0;
        }
        .logo_main{
          display: flex;
        }
        ul{
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        li{
          margin-left: .3rem;
        }
        .skew{
          transform: skewX(-10deg);
          width: 1rem;
          height: 1rem;
          background: #fff;
        }
        svg{
          margin-left: .5rem;
        }
        button{
          padding: 10px;
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          font-size: 1.5rem;
          transition: 250ms ease;
        }
        button:focus{
          outline: none;
        }
        button:hover{
          background: ${theme.sec};
          cursor: pointer;
        }
      `}
      </style>
    </header>
  )
}

export default Header;
