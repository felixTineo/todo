import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { color, font } from '../styles';
const bgHero = require('../images/hero-1.jpg');


const Main = () => {
  const todos = useSelector(state => state.todos);
  return(
    <main>
      <style jsx>{`
        main{
          background: url(${bgHero})top center no-repeat;
          background-size: cover;
          height: 100vh;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      `}
      </style>
    </main>
  )
}

export default Main;
