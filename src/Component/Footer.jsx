import React from 'react'
import ISO from '../assets/ISO.png'
import logo from '../assets/softechlogo.png'

function Footer() {
  return (
    <>
    <div style={{background: '#014B88', color: 'white'}}>
    <div className='d-flex justify-content-between px-5 pt-5 m-5' >
      <div className="col-lg-3">
        <img src={logo} alt="" width={100}/>
        <p>We're an innovative IT company <br />
          providing tailored solutions in <br />
          software development, web <br /> design, 
          cybersecurity, cloud <br /> computing, and
          IT consulting.
        </p>
        <img src={ISO} alt="" className='' width={100}/>
        <p>ISO 9001:2015 Certified <br />
          Since 2018
        </p>
      </div>
      <div className="col-lg-3 p-3">
        <h3>COMPANY</h3>
        <ul className='list-unstyled p-2'>
          <li>About us</li>
          <li>Photo Gallery</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="col-lg-2 p-3">
        <h3>Quick Links</h3>
        <ul className='list-unstyled p-2'>
          <li>About us</li>
          <li>Course Offered</li>
          <li>Partners</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="col-lg-3 p-3">
        <h3>Contact Us</h3>
        <p>
          <i className="bi bi-geo-alt mx-1"></i>
          Nearby Baneshwor Futsal, Mid-Baneshwor <br />
          Kathmandu Nepal
        </p>
        <p>
          <i className="bi bi-envelope mx-1"></i>
          info@softechfoundation.com
          </p>
        <p>
          <i className="bi bi-telephone mx-1"></i>
          +977 9801057976 / +977 9801066911 / <br />
          +977 9801127340
        </p>
      </div>
      </div>
       <hr />
      <div className='d-flex justify-content-between'>
      <p className='ms-5'><i className="bi bi-c-circle mx-2"></i>2025 Softech Foundation</p>
        <div className='d-flex gap-4 me-5'>
         <i className="bi bi-instagram" />
         <i className="bi bi-linkedin" />
         <i className="bi bi-twitter" />
         <i className="bi bi-facebook" />
        </div>
     </div>
    </div>
    </>
  )
}

export default Footer
