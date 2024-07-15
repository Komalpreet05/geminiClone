import './App.css'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  darkMode ? document.querySelector("body").setAttribute('data-theme', 'dark') : document.querySelector("body").setAttribute('data-theme', 'light');
  return (
    <>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />

    </>
  )
}

export default App
