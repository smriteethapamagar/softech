import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import logo from '../assets/softechlogo.png'
import SendInquiry from '../Pages/SendInquiry'
import Home from '../Pages/Home'

function Header() {
  return (
    <>
     <header className=''>
       <nav className="navbar navbar-expand-lg" style={{background: '#014B88'}} data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" width={120} />
            </a>
               <Link className='text-decoration-none' to={'/certificate'} style={{color:'#ffffff', paddingLeft: '650px'}}>Certificate</Link>
               <Link className='text-decoration-none' to={'/Courses'} style={{color:'#ffffff'}}>Courses  </Link>
               <Link className='text-decoration-none' to={'/contactus'} style={{color:'#ffffff'}}>Contact Us</Link>
               <Link className="btn btn-outline-success" type="submit" style={{backgroundColor: '#ffffff', color: '#014B88'}} to="/sendinquiry">Send Inquiry</Link> 
            </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sendinquiry' element={<SendInquiry />} />
      </Routes> 
    </>
  )
}

export default Header
