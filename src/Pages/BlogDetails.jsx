import React from 'react'
import blogpic from '../assets/bd.png'
import photo1 from '../assets/bd1.png'
import photo2 from '../assets/bd2.png'
import { Link } from 'react-router-dom'

function BlogDetails() {
  return (
    <div>
       <div className='d-flex justify-content-center contact'>
        <div className='text-center'>
          <h1>TITLE</h1>
          <p>Sub Title here</p>
          </div>
          </div>
          <div className="container mt-4 mb-4">
            <div>
            <img className='blg' src={blogpic} alt="" />
            <p className='pt-3' style={{ color: 'gray' }}>
        <i className="bi bi-calendar-week ic"></i>14 June 2023</p>
        <h3>Pellentesque dignissim enim sit amet <br />
            venenatis cursus eget nunc.</h3>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
               et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  <br />
               aliquip ex ea commodo consequat aute irure dolor in reprehenderit. <br /> </p>

              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
               et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  <br />
               aliquip ex ea commodo consequat aute irure dolor in reprehenderit. <br /> </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
               et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  <br />
               aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
            </div>
            <div className='photo'>
              <img className='photo1' src={photo1} alt="" />
              <img className='photo2' src={photo2} alt="" />
            </div>
            <div>
              <h3 className='fw-bold pt-4 pb-3'>Latest Articles Updated Daily</h3>
              <p>With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that <br />
                 different approaches to online marketing are becoming available. One of these new approaches is <br />
                 performance marketing or digital performance marketing. Keep reading to learn all about <br />
                 performance marketing</p>
            </div>
            <div>
              <h3 className='fw-bold pt-2 pb-4'>Pellentesque dignissim enim sit amet <br />
                  venenatis cursus eget nunc.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
                     aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  <br />
                     aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  <br />
                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  <br />
                     aliquip ex ea commodo consequat aute irure dolor in reprehenderit.</p>
            </div>
            <hr />
            <div>
              <h3>Related Contents</h3>
              <div className='cont'>
                 <div className='border b1'>
                      <div className='box1'>
                      <img className='image' src="https://s39613.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg" alt="" />
                      <p className='pt-3' style={{ color: 'gray' }}><i className="bi bi-calendar-week ic"></i>21 April 2024</p>
                      <p className='font-weight:bold;'>velit esse cillum dolore eu fugiat nulla <br />
                         pariatur. Excepteur sint occaecat <br />
                         cupidatat</p>
                       <Link className='bb' style={{background: '#DAE7FF', color: '#014B88'}} to="/blogdetails">Read More <i className="bi bi-arrow-right"></i></Link>
                     </div>
                     </div>
                      <div className='border b1'>
                           <div className='box1'>
                           <img className='image' src="https://s39613.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg" alt="" />
                           <p className='pt-3' style={{ color: 'gray' }}><i className="bi bi-calendar-week ic"></i>21 April 2024</p>
                           <p className='font-weight:bold;'>velit esse cillum dolore eu fugiat nulla <br />
                              pariatur. Excepteur sint occaecat <br />
                              cupidatat</p>
                            <Link className='bb' style={{background: '#DAE7FF', color: '#014B88'}} to="/blogdetails">Read More <i className="bi bi-arrow-right"></i></Link>
                          </div>
                          </div>
                           <div className='border b1'>
                                <div className='box1'>
                                <img className='image' src="https://s39613.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg" alt="" />
                                <p className='pt-3' style={{ color: 'gray' }}><i className="bi bi-calendar-week ic"></i>21 April 2024</p>
                                <p className='font-weight:bold;'>velit esse cillum dolore eu fugiat nulla <br />
                                   pariatur. Excepteur sint occaecat <br />
                                   cupidatat</p>
                                 <Link className='bb' style={{background: '#DAE7FF', color: '#014B88'}} to="/blogdetails">Read More <i className="bi bi-arrow-right"></i></Link>
                               </div>
                               </div>
              </div>
            </div>

          </div>
         <hr />
         <div className='exp'>
        <div className='expp'>
          <h4>Ready to Transform Your Learning <br />
              Experience?</h4>
          <hr className='h' />
          <p>Join thousands of students who are already achieving their career goals with Softech <br />
            Foundation Join thousands of students who are already achieving their career goals</p>
          <button type="button" className='p-2 rounded border' style={{ background: '#014B88', color: 'white', border: 'none' }} >Get Started Now</button>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
