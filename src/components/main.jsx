import React from 'react';
const bgHero = require('../images/hero-1.jpg');

const Main = () => {

  return(
    <main>

      <style jsx>{`
        main{
          background: url(${bgHero})top center no-repeat;
          background-size: cover;
          height: 100vh;
        }
      `}
      </style>
    </main>
  )
}

export default Main;
