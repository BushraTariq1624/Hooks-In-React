// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UseEffectHook from './assets/components/UseEffectHook'
import UseStateHook from './assets/components/UseStateHook'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <UseStateHook />,
      <UseEffectHook />
    </>
  )
}

export default App
