import {useState} from 'react'
import React from 'react';
function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter===20) return;
    setCounter(counter + 1);
  };

  const subtractValue = () => {
    if(counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter: {counter}</h2>
      <button onClick={addValue}>Inc Value</button>
      <button onClick={subtractValue}>Dec Value</button>
    </>
  );
}

export default App;
