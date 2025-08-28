import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import Blogs from './Pages/Blogs'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import BlogDetails from './Pages/BlogDetails'
import EnquiryForm from './Pages/EnquiryForm'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/coursedetails' element={<CourseDetails/>}/>
        <Route path='/blogdetails' element={<BlogDetails/>}/>
        <Route path='/inquiryform' element={<EnquiryForm/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
