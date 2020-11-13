import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Showcase from './components/Showcase/Showcase'
import Stats from './components/Stats/Stats'

function App() {
  return (
    <div className='App'>
      <Header />
      <Showcase />
      <Stats/>
    </div>
  )
}

export default App
