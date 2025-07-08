import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Hello, I’m Gaurav 👋</h1>
      <p>I’m a full-stack developer specializing in .NET, React, and MongoDB.</p>
      <p>Here's my portfolio, served with server-side rendering!</p>
    </div>
    </>
  )
}

export default App
