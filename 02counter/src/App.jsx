import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  // let counter = 15;

  const addValue = () =>{
    // counter = counter + 1;
    if(counter + 1 > 20){
      alert('Limit exceed')
    }else{
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
    }

  }

  const removeValue = () => {
    if(counter - 1 < 0){
      alert('Value cannot be negative')
    }else{
      setCounter(counter - 1)
      console.log(counter);

    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
