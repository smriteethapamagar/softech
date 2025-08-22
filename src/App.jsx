import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Component/Sidebar'
import Dashboard from './Component/Dashboard'
import Projects from './Component/Projects'
import Requests from './Component/Requests'

function App() {
  return (
    <>
     <Header/>
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid p-4" style={{ marginLeft: '250px' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/requests" element={<Requests/>} />
          </Routes>
        </div>
      </div>
     <Footer/>
    </>
  )
}

export default App
