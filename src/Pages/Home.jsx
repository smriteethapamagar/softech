import React from 'react'
import student from '../assets/student.jpg'
import java from '../assets/java.webp'
import mern from '../assets/mern.webp'
import net from '../assets/net.webp'
import python from '../assets/python.webp'
import qa from '../assets/qa.webp'
import web from '../assets/web.webp'
import study from '../assets/study.avif'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container">
    <div className="row">
        <div className="col-lg-6">
          <div className="badge text-bg mt-5" style={{ background: '#DAE7FF', color: '#014B88' }}>
            Boost Your Skills with Hands-on experience
          </div>

          <h1 className='mt-3'>Elevate Your Career Journey <br /> withs <span style={{ color: '#014B88' }}>Softech Foundation</span> </h1>
          <p style={{ color: 'gray' }}>Gain real-world experience through internships, collaborate with peers, <br />
            and achieve your academic goals together.
          </p>
          <Link type="button" className='p-2 rounded mb-3 text-decoration-none explore-btn' to="/courses"
          style={{ backgroundColor: '#014B88', color: 'white', border: 'none', alignItems: 'center' }} >
            Explore Our Courses<i className="bi bi-arrow-right ms-2" /></Link>

          <div>
            <p style={{ color: 'gray' }}>Popular Courses:
              <a href="" className="btn btn-outline ms-3 px-4 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}>Flutter</a>
              <a href="" className="btn btn-outline ms-3 px-4 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}>Flutter</a>
              <a href="" className="btn btn-outline ms-3 px-4 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}>Flutter</a>
              <a href="" className="btn btn-outline ms-3 px-4 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}>Flutter</a>
              <a href="" className="btn btn-outline px-4 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88', marginLeft: '133px', marginTop: '5px' }}>Flutter</a>
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={student} className='rounded-3 mt-4 float-end' alt="" width={570} height={400} />
        </div>


      <div className='d-flex justify-content-between py-2 gap-2 my-4' style={{ background: '#DAE7FF' }}>
        <div className="col">
          <h1 className='fw-bold ' style={{ color: '#014B88' }}>2500+</h1>
          <p className=''>Job Placements</p>
        </div>

        <div className="col">
          <h1 className='fw-bold ' style={{ color: '#014B88' }}>10+</h1>
          <p>Courses</p>
        </div>

        <div className="col">
          <h1 className='fw-bold ' style={{ color: '#014B88' }}>5,000+</h1>
          <p>Certified Students</p>
        </div>

        <div className="col">
          <h1 className='fw-bold ' style={{ color: '#014B88' }}>15+</h1>
          <p>Years Experience</p>
        </div>
      </div>

      <div>
        <h5>Featured Courses to Boost Your Skills</h5>
        <p style={{ color: 'gray' }}>Gain real-world experience through internships, collaborate with peers, <br />
           lorem
        </p>

        <div className='d-flex flex-wrap justify-content-between gap-5'>
          <div className='border'>
            <img src={java} alt="" width={300} />
            <p className='fw-bold px-4 pt-3' style={{ color: '#014B88' }}>Java Programming</p>
            <a href="" className="btn btn-outline ms-3 mb-3 px-3 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}><i className="bi bi-clock px-2"></i>2 Months</a>
          </div>

          <div className='border'>
            <img src={mern} alt="" width={300} />
            <p className='fw-bold px-4 pt-3' style={{ color: '#014B88' }}>MERN Stack Development</p>
            <a href="" className="btn btn-outline ms-3 mb-3 px-3 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}><i className="bi bi-clock px-2"></i>2 Months</a>
          </div>


          <div className='border'>
            <img src={net} alt="" width={300} />
            <p className='fw-bold px-4 pt-3' style={{ color: '#014B88' }}>.Net</p>
            <a href="" className="btn btn-outline ms-3 mb-3 px-3 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}><i className="bi bi-clock px-2"></i>3 Months</a>
          </div>

          <div className='border'>
            <img src={python} alt="" width={300} />
            <p className='fw-bold px-4 pt-3' style={{ color: '#014B88' }}>Python Training</p>
            <a href="" className="btn btn-outline ms-3 mb-3 px-3 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}><i className="bi bi-clock px-2"></i>3 Months</a>
          </div>

          <div className='border'>
            <img src={qa} alt="" width={300} />
            <p className='fw-bold px-4 pt-3' style={{ color: '#014B88' }}>QA Training</p>
            <a href="" className="btn btn-outline ms-3 mb-3 px-3 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}><i className="bi bi-clock px-2"></i>2.5 Months</a>
          </div>

          <div className='border'>
            <img src={web} alt="" width={300} />
            <p className='fw-bold px-4 pt-3' style={{ color: '#014B88' }}>Web Development</p>
            <a href="" className="btn btn-outline ms-3 mb-3 px-3 py-0 rounded-pill " style={{ background: '#DAE7FF', color: '#014B88' }}><i className="bi bi-clock px-2"></i>1.5 Months</a>
          </div>

        </div>
        <div className='d-flex justify-content-center'>
          <button type="button" className='p-2 rounded my-3' style={{ backgroundColor: '#014B88', color: 'white', border: 'none', alignItems: 'center' }} >View All Courses<i className="bi bi-arrow-right ms-2" /></button>
        </div>
      </div>

      <div className='d-flex' style={{ background: '#DAE7FF' }}>
        <div className="col-lg-6 m-5" >
          <h3 style={{ color: '#014B88' }}>Lorem Ipsum is simply dummy <br />
              text of the printing typing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Id itaque incidunt fuga voluptatibus nihil, possimus <br /> molestias
             odio eum, dignissimos culpa tenetur cum <br /> minus alias. Natus
             maxime deleniti modi aspernatur ullam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Temporibus nulla, hic itaque corporis expedita sapiente <br />
             alias vero quae exercitationem sed maxime dolorum. <br />
             Ducimus maiores eos, modi officia error illo rem?</p>
          <div className=''>
            <button type="button" className='p-2 rounded my-3' style={{ backgroundColor: '#014B88', color: 'white', border: 'none' }} >Learn more</button>
          </div>
        </div>
        <div className='col-lg-6 py-5'>
          <img src={study} className='float' alt="" width={400} height={300} />
        </div>
      </div>

        <div>
      <h1 className='mt-5'>Trusted By Leading Institutions</h1>
      <p style={{ color: 'gray' }}>Empowering over 15,000 students across 350+ educational institutions worldwide with cutting-edge training <br />
        and development programs.
      </p>
      <div className="pic">
        <img className='rounded border' src="https://www.collegenp.com/uploads/2022/03/NCIT-College-Notice.png" alt="" width={350} />
        <img className='rounded border' src="https://nagarjunacollege.edu.np/public/images/1808005683image_2024_06_11T10_38_33_606Z.png" alt="" width={350} />
        <img className='rounded border' src="https://lh4.googleusercontent.com/proxy/aWthuAFLuTsTTdx76p848v9FDK1c-B_AjYpH7berK9n93ZGUYfAQWQRXR7kfv_k-oB4jSqCRsw" alt="" width={300} />
        <img className='rounded border' src="https://deerwalk.edu.np/DWIT/assets/images/Deerwalk_College_Logo.png" alt="" width={300} />
         <img className='rounded border' src="https://lh4.googleusercontent.com/proxy/aWthuAFLuTsTTdx76p848v9FDK1c-B_AjYpH7berK9n93ZGUYfAQWQRXR7kfv_k-oB4jSqCRsw" alt="" width={300} />
        <img className='rounded border' src="https://deerwalk.edu.np/DWIT/assets/images/Deerwalk_College_Logo.png" alt="" width={300} />
        
      </div>
    </div>

      <div style={{ background: '#F1F1F1' }}>
        <p style={{ color: '#014B88' }} className='fw-bold mt-5 ms-5'>Testimonial</p>
        <h3 className='fw-bold ms-5 mb-5'>What our Clients say About us</h3>
        <div className='test'>
          <div className="border d-flex ">
            <img className='m-4' src="https://img.pikbest.com/photo/20241230/confident-asian-businesswoman-in-professional-attire-against-white-background_11321081.jpg!w700wp" alt="" width={200} />
            <div>
              <p className='fw-semibold mt-4'>"Exceptional Care and support"</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Dolor consequuntur ex quos praesentium earum sed ad
                 voluptates. Officia sint dolore, magni eum autem
                 praesentium tempora temporibus voluptate aliquam
                 architecto eligendi.</p>
              <div style={{ color: 'yellow' }}>
                <i className="bi bi-star-fill "></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <hr />
              <p> <span className='fw-bold'> Sneha Gurung.</span> Mern Stack Developer at <br />
                  Softech Foundation
              </p>
            </div>
          </div>

          <div className="border d-flex">
            <img className='m-4' src="https://e7.pngegg.com/pngimages/465/276/png-clipart-man-with-blue-dress-shirt-businessperson-businessman-tshirt-company.png" alt="" width={200} />
            <div>
              <p className='fw-semibold mt-4'>"Exceptional Care and support"</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Dolor consequuntur ex quos praesentium earum sed ad
                 voluptates. Officia sint dolore, magni eum autem
                 praesentium tempora temporibus voluptate aliquam
                 architecto eligendi.</p>
              <div style={{ color: 'yellow' }}>
                <i className="bi bi-star-fill "></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <hr />
              <p> <span className='fw-bold'> Amrit Gurung.</span> Laravel Developer at <br />
                  Softech Foundation
              </p>
            </div>
          </div>

          <div className="border d-flex">
            <img className='m-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiqL_zYvKQfwnI6h4NjjqOicf02aeysHX4w&s" alt="" width={200} />
            <div>
              <p className='fw-semibold mt-4'>"Exceptional Care and support"</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Dolor consequuntur ex quos praesentium earum sed ad
                 voluptates. Officia sint dolore, magni eum autem
                 praesentium tempora temporibus voluptate aliquam
                 architecto eligendi.</p>
              <div style={{ color: 'yellow' }}>
                <i className="bi bi-star-fill "></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <hr />
              <p> <span className='fw-bold'> Anish Thapa.</span> Mern Stack Developer at <br />
                  Softech Foundation
              </p>
            </div>
          </div>

          <div className="border d-flex">
            <img className='m-4' src="https://as1.ftcdn.net/jpg/02/80/95/94/1000_F_280959443_NouVlCu0KEb3ib1EtjkVobh3r4WSY7Gl.jpg" alt="" width={200} />
            <div>
              <p className='fw-semibold mt-4'>"Exceptional Care and support"</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Dolor consequuntur ex quos praesentium earum sed ad
                 voluptates. Officia sint dolore, magni eum autem
                 praesentium tempora temporibus voluptate aliquam
                 architecto eligendi.</p>
              <div style={{ color: 'yellow' }}>
                <i className="bi bi-star-fill "></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <hr />
              <p> <span className='fw-bold'> Sweta Rai.</span> Mern Stack Developer at <br />
                Softech Foundation
              </p>
            </div>
          </div>

        </div>
      </div>
       <div className='ms-5'>
        <p className='mt-5 m-0 ' style={{ color: '#014B88' }}>Together</p>
        <h4 className='fw-bold m-0'>Our Team</h4>
        <p style={{ color: 'gray' }}>Meet the passionate individuals behind.</p>
        <div className='team mb-4'>
          <div>
            <img src="https://latinbusinesstoday.com/wp-content/uploads/2012/10/Achievements-of-Hispanic-Business-Women.jpeg" alt="" width={300} />
            <p className='fw-bold m-0' style={{ color: '#014B88' }}>Name Here</p>
            <p className='fw-bold m-0'>.Net Developer</p>
            <p style={{ color: 'gray' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium tenetur natus provident corrupti unde.
              Aperiam, nesciunt fugiat saepe.</p>
            <div>
              <div className='d-flex gap-3' style={{ color: '#014B88' }}>
                <i className="bi bi-linkedin" />
                <i className="bi bi-twitter-x" />
                <i className="bi bi-globe" />
              </div>

            </div>
          </div>
          <div>
            <img src="https://latinbusinesstoday.com/wp-content/uploads/2012/10/Achievements-of-Hispanic-Business-Women.jpeg" alt="" width={300} />
            <p className='fw-bold m-0' style={{ color: '#014B88' }}>Name Here</p>
            <p className='fw-bold m-0'>.Net Developer</p>
            <p style={{ color: 'gray' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium tenetur natus provident corrupti unde.
              Aperiam, nesciunt fugiat saepe.</p>
            <div>
              <div className='d-flex gap-3' style={{ color: '#014B88' }}>
                <i className="bi bi-linkedin" />
                <i className="bi bi-twitter-x" />
                <i className="bi bi-globe" />
              </div>

            </div>
          </div>
          <div>
            <img src="https://latinbusinesstoday.com/wp-content/uploads/2012/10/Achievements-of-Hispanic-Business-Women.jpeg" alt="" width={300} />
            <p className='fw-bold m-0' style={{ color: '#014B88' }}>Name Here</p>
            <p className='fw-bold m-0'>.Net Developer</p>
            <p style={{ color: 'gray' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium tenetur natus provident corrupti unde.
              Aperiam, nesciunt fugiat saepe.</p>
            <div>
              <div className='d-flex gap-3' style={{ color: '#014B88' }}>
                <i className="bi bi-linkedin" />
                <i className="bi bi-twitter-x" />
                <i className="bi bi-globe" />
              </div>

            </div>
          </div>
          <div>
            <img src="https://latinbusinesstoday.com/wp-content/uploads/2012/10/Achievements-of-Hispanic-Business-Women.jpeg" alt="" width={300} />
            <p className='fw-bold m-0' style={{ color: '#014B88' }}>Name Here</p>
            <p className='fw-bold m-0'>.Net Developer</p>
            <p style={{ color: 'gray' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium tenetur natus provident corrupti unde.
              Aperiam, nesciunt fugiat saepe.</p>
            <div>
              <div className='d-flex gap-3' style={{ color: '#014B88' }}>
                <i className="bi bi-linkedin" />
                <i className="bi bi-twitter-x" />
                <i className="bi bi-globe" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='call'>
        <div className="col-lg-5 request">
          <h3 className='fw-bold'>Request a Callback</h3>
          <p style={{ color: 'gray' }}>We are to support you on your <br />
             journey with body childcare.</p>
          <p className='fw-bold m-0'><i className="bi bi-telephone icon"></i>Phone</p>
          <p className='ms-4' style={{ color: 'gray' }}>+977 XXXXXXXXXX</p>
          <p className='fw-bold m-0'><i className="bi bi-envelope icon"></i>Email Address</p>
          <p className='ms-4' style={{ color: 'gray' }}>yourmail@example.com</p>
          <p className='fw-bold m-0'><i className="bi bi-geo-alt icon"></i>Location</p>
          <p className='ms-4' style={{ color: 'gray' }}>Dillibazar pipalbot, <br />
             Kathmandu, NEPAL</p>
        </div>
        <div className="col-lg-7 my-4">

          <input type="text" className="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="visible-addon" />
          <input type="text" className="form-control" placeholder="Email Address" aria-label="emailaddress" aria-describedby="visible-addon" />
          <input type="text" className="form-control" placeholder="Course Interested in" aria-label="courses" aria-describedby="visible-addon" />
          <input type="number" className="form-control" placeholder="Phone Number" aria-label="phonenumber" aria-describedby="visible-addon" />
          <input type="text" className='form-control pb-5' placeholder='Messages' />
          <button type="button" className='p-2 rounded ms-3' style={{ background: '#014B88', color: 'white', border: 'none' }} >Send Message</button>
        </div>


      </div>

      <div>
        <h2 className='fw-bold mt-5 ms-5'>Why Choose Softech Foundation?</h2>
        <p className='ms-5' style={{ color: 'gray' }}>At Softech Foundation, we offer industry-aligned training with practical sessions
           and mentorship, designed to <br /> enhance your skills and boost your career prospects.
        </p>
        <div className='real'>
          <div className="shadow">
            <p className='one'>1</p>
            <h6 className='fw-bold' style={{ color: '#014B88' }}>Practical Experience</h6>
            <p style={{ color: 'gray' }}>Working on real projects allows <br /> learners to apply their
               skills in a <br /> practical setting and gain a <br /> better understanding
               of how <br /> technology is used in the <br /> industry.
            </p>
          </div>
          <div className="shadow">
            <p className='one'>2</p>
            <h6 className='fw-bold' style={{ color: '#014B88' }}>Skill Development</h6>
            <p style={{ color: 'gray' }}>We offer oppourtunities to <br /> enhance technical skills and <br /> acquire new ones.</p>
          </div>
          <div className="shadow">
            <p className='one'>3</p>
            <h6 className='fw-bold' style={{ color: '#014B88' }}>Industry Oriented Content</h6>
            <p style={{ color: 'gray' }}>We Provide insights into the latest <br />
               trends and innovations in the tech <br />
               industry. Explore emerging <br />
               technologies.</p>
          </div>
          <div className="shadow">
            <p className='one'>4</p>
            <h6 className='fw-bold' style={{ color: '#014B88' }}>Resume Enhancement</h6>
            <p style={{ color: 'gray' }}>Having a tech internship on your <br />
               resume demonstrates to future <br /> employers that can make you stand <br />
               out among other candidates and <br /> increase your chances of landing a <br />
               full-time job after graduation.</p>
          </div>
          <div className="shadow">
            <p className='one'>5</p>
            <h6 className='fw-bold' style={{ color: '#014B88' }}>Project Management Skills</h6>
            <p style={{ color: 'gray' }}>Internships immerse participants in <br />
               project-based work, fostering <br /> essential skills in project <br /> management, task priorization, and <br />
               adherence to deadlines within a <br /> professional setting.</p>
          </div>
          <div className="shadow">
            <p className='one'>6</p>
            <h6 className='fw-bold' style={{ color: '#014B88' }}>Industry Exposure</h6>
            <p style={{ color: 'gray' }}>We allow individuals to gain insights <br />
              into the tech industry's inner <br />
              workings. This exposure helps <br /> interns understand the dynamics of <br />
              the field, emerging trends, and the challenges faced by technology <br />
              companies.</p>
          </div>
        </div>
      </div>

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
      </div>
    </>
  )
}

export default Home
