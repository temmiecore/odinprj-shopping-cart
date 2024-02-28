import { useState } from 'react'
import Header from './components/header/Header'
import Homepage from './components/homepage/Homepage'

// Change <a> tags to <links> in:
// Button.jsx
// Nav.jsx
// Header.jsx

function App() {
  return (
    <div className="app">
    <Header headerTitle="Shop Name"/>
    <Homepage/>
    </div>
  )
}

export default App
