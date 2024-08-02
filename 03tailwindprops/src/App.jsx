import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Dhaval",
    age : 21
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username = "ChaiaurCode" />
    <Card username = "Dhaval" btnText = "Visit me"/>
    <Card username= "HEllo" btnText="Onclick go to profile"/>

    </>
  )
}

export default App
