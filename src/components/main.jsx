import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RM_TODO, SET_THEME } from '../store/actions';
import themes from '../themes';
import { color, font } from '../styles';
const bgHero = require('../images/ocean.jpg');

const Clock = () => {
  const [clock, setClock] = useState(Date.now());
  useEffect(()=> {
    const interval = setInterval(()=> {
      setClock(Date.now());
    },1000)
    return ()=> clearInterval(interval);
  },[]);
  return(
    <div>
      <p>{new Date(clock).toLocaleTimeString('en-EN',{ hour:"2-digit", minute:'2-digit' })}</p>
      <small>{new Date(clock).toLocaleDateString()}</small>
      <style jsx>{`
          div{
            position: absolute;
            bottom: .5rem;
            left: .5rem;
            color: #fff;
            font-family: Orbitron;
          }
          p{
            margin: 0;
            font-size: 2.5rem;
          }
          small{
            font-size: 1.8rem;
          }
      `}
      </style>
    </div>
  )
}

const Todo = ({ id, todo, date, index }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.themes.current);
  return(
    <li className="animated fadeIn">
      <div>{index}</div>
      <p>
        <button onClick={()=> dispatch({ type: RM_TODO, id })} title="Borrar" id={id}>X</button>
        {todo}
      </p>
      <style jsx>{`
          li{
            display: flex;
            align-items: center;
            margin-top: 1rem;
          }
          div{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #fff;
            color: ${theme.prim};
            font-family: ${font.logo};
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
          }
          p{
            margin: 0;
            margin-left: .5rem;
            background: #fff;
            padding: .5rem;
            min-width: 90%;
            position: relative;
            border-radius: 3px;
          }
          button{
            position: absolute;
            top: .2rem;
            right: 0;
            font-size: 11px;
            background: transparent;
            color: ${theme.prim};
            border: none;
          }
      `}
      </style>
    </li>
  )
}

const BtnTheme = ({ name, bgHero }) => {
  const dispatch = useDispatch();
  return(
    <button onClick={()=> dispatch({ type: SET_THEME, theme: name })}>
      <span>{name}</span>
      <img src={bgHero} alt=""/>
      <style jsx>{`
        button{
          flex-grow: 1;
          border: none;
          position: relative;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: blur(2px);
          transition: 250ms ease;
        }
        button:hover img{
          filter: none;
        }
        button:hover span{
          background: #000;
        }
        span{
          position: absolute;
          color: #fff;
          z-index:20;
          transition: 250ms ease;
        }
      `}
      </style>
    </button>
  )
}

const Themes = () => {
  const visible = useSelector(state => state.themes.visible);
  return(
    <div>
      {console.log(themes)}
      {
        themes.map(theme => <BtnTheme {...theme} />)
      }
      <style jsx>{`
        div{
          background: rgba(0, 0, 0, .5);
          position: absolute;
          bottom:${visible ? '0' : '-10vh'};
          right:0;
          height: 10vh;
          width: 75%;
          z-index: 50;
          transition: 250ms ease;
          display: flex;
        }
      `}
      </style>
    </div>
  )
}

const Main = () => {
  const todos = useSelector(state => state.todos);
  const theme = useSelector(state => state.themes.current);
  return(
    <main>
      <ul id="todos">
        {
          todos.map((todo, i) => <Todo index={i + 1} key={todo.id} {...todo} />)
        }
      </ul>
      <Clock />
      <Themes />
      <style jsx>{`
        main{
          background: url(${theme.bgHero})top center no-repeat;
          background-size: cover;
          height: 100vh;
          display: flex;
          align-items: center;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        ul{
          margin: 0;
          padding: 0;
          list-style: none;
          margin-top: 20vh;
          width: 50%;
          height: 65vh;
          overflow-y: scroll;
        }
        ul::-webkit-scrollbar{
          width: 0;
        }
      `}
      </style>
    </main>
  )
}

export default Main;
