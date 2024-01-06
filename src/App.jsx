import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "./navbar/NavBar"
import Home from "./home/Home"
import DiscussionCard from './discussions/DiscussionCard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='discussions' element={<DiscussionCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
