import React from 'react'
import './App.css'
import NewImage from './Components/NewImage'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getdata' element={<NewImage />} />
      </Routes>
    </>
  )
}

export default App