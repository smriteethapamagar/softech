import React from 'react'
import picture from '../assets/coursepic1.png' 
import picture1 from '../assets/coursepic2.png'

function CourseDetails() {
  return (
    <div>
       <div className='d-flex justify-content-center contact'>
        <div className='text-center'>
          <h1>Explore Our Courses</h1>
          <p>Upskill in tech with hands-on, industry-relevant programs <br />
          designed by experts.</p>
          </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mt-5 mb-3">
                <img className='tt' src={picture}  alt="" />
              </div>
              <div className="col-lg-4 mt-5">
                <div className='border ms-5' style={{background: '#DAE7FF'}}>
                <div className='pp'>
                  <img className='mb-3' src={picture1} alt="" />
                  <button type="button" className='pt rounded border' 
                  style={{ background: '#014B88', color: 'white', border: 'none' }} >ENROLL NOW</button>
                    </div>
                  <div className='d-flex justify-content-between'>
                    <p className='ms-2'>11:00 Pm-6:00Pm</p>
                    <p className='mx-2'>Start Date</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <p className='ms-2'>Skill Level</p>
                    <p className='mx-2'>Basic</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <p className='ms-2'>ClassName Day</p>
                    <p className='mx-2'>Monday-Friday</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <p className='ms-2'>Language</p>
                    <p className='mx-2'>Html</p>
                  </div>
              </div>
              </div>
            </div>
            <div>
            <h4 className='mt-4 mb-3'>Web Development Fully Complete <br />
                Guideline</h4>
                <div className='d-flex '>
                <p><i className="bi bi-file-earmark-bar-graph-fill ii"></i>Lesson 10</p>
                <p><i className="bi bi-clock-fill ii ms-4"></i>9.00AM-01.00PM</p>
                </div>
                <hr />
                </div>
                <div>
                  <h5 className='fw-bold mt-3 mb-3'>COURSE DESCRIPTION</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />
                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
                     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />
                     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim..</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />
                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
                     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum..</p>
                </div>
                <div>
                  <h5 className='fw-bold mt-3 mb-3'>What Will I Learn From This Course?</h5>
                  <p className='mb-5'>Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, <br />
                     interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. <br />
                     Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis Nullam <br />
                     sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum</p>
                </div>
          </div>
    </div>
  )
}

export default CourseDetails
