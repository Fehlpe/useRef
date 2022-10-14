import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UseState() {

  const [counter, setCounter] = useState(0);

  function increaseCounter(){
    setCounter(counter+1);
  }

  function showCounter(){
    alert(`O botão foi clicado: ${counter} vezes.`)
  }

  return (
    <>
      <h1>useRef</h1>
      <button onClick={increaseCounter}>Clicar</button>
      &nbsp;
      <button onClick={showCounter}>Quantas vezes o botão foi clicado</button>
      &nbsp;
      <Link to="/">Voltar</Link>
    </>
  )
}

export default UseState;
