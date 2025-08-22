import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import logo from '../assets/softechlogo.png'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Blogs from '../Pages/Blogs'
import BlogDetails from '../Pages/BlogDetails'
import EnquiryForm from '../Pages/EnquiryForm'
import ContactUs from '../Pages/ContactUs'
import Courses from '../Pages/Courses'
import CourseDetails from '../Pages/CourseDetails'
import AdminPanel from '../Pages/AdminPanel'

function Header() {
  return (
    <>
     <header className=''>
       <nav className="navbar navbar-expand-lg" style={{background: '#014B88'}} data-bs-theme="dark">
          <div className="container">
            <Link className="navbar-brand logo-hover" to="/">
              <img src={logo} alt="logo" width={120} />
            </Link>
               <Link className='text-decoration-none hov' to={'/blogs'} style={{color:'#ffffff', marginLeft:'650px'}}>Blogs</Link>
               <div className='dropdown'>
               <Link className='text-decoration-none dropdown-toggle hov' to={'/courses'} style={{color: 'white'}}>Courses  </Link>
               <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                <Link className='dropdown-item' to={'/coursedetails'}>Course 1</Link>
                <Link className='dropdown-item' to={'/coursedetails'}>Course 2</Link>
                <Link className='dropdown-item' to={'/coursedetails'}>Course 3</Link>
                <Link className='dropdown-item' to={'/coursedetails'}>Course 4</Link>
               </div>
               </div>
               <Link className='text-decoration-none hov' to={'/contactus'} style={{color:'#ffffff'}}>Contact Us</Link>
               <Link className="btn btn-outline-success hvr" type="submit" style={{backgroundColor: '#ffffff', color: '#014B88'}} to="/enquiryform">Send Inquiry</Link> 
            </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminpanel' element={<AdminPanel/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/coursedetails' element={<CourseDetails/>}/>
        <Route path='/blogdetails' element={<BlogDetails/>}/>
        <Route path='/enquiryform' element={<EnquiryForm/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes> 
    </>
  )
}

export default Header
