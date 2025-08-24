import { Link } from 'react-router-dom'
import logo from '../assets/softechlogo.png'

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
    </>
  )
}

export default Header
