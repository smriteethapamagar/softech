import React, { useState } from 'react'
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      course: '',
      phone: '',
      message: ''
    });
  };

  // Course data for better maintainability
  const courses = [
    { id: 1, name: 'Java Programming', image: java, duration: '2 Months' },
    { id: 2, name: 'MERN Stack Development', image: mern, duration: '2 Months' },
    { id: 3, name: '.Net Development', image: net, duration: '3 Months' },
    { id: 4, name: 'Python Training', image: python, duration: '3 Months' },
    { id: 5, name: 'QA Training', image: qa, duration: '2.5 Months' },
    { id: 6, name: 'Web Development', image: web, duration: '1.5 Months' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sneha Gurung',
      role: 'MERN Stack Developer',
      company: 'Softech Foundation',
      image: 'https://img.pikbest.com/photo/20241230/confident-asian-businesswoman-in-professional-attire-against-white-background_11321081.jpg!w700wp',
      quote: 'Exceptional Care and support'
    },
    {
      id: 2,
      name: 'Amrit Gurung',
      role: 'Laravel Developer',
      company: 'Softech Foundation',
      image: 'https://e7.pngegg.com/pngimages/465/276/png-clipart-man-with-blue-dress-shirt-businessperson-businessman-tshirt-company.png',
      quote: 'Outstanding learning experience'
    },
    {
      id: 3,
      name: 'Anish Thapa',
      role: 'MERN Stack Developer',
      company: 'Softech Foundation',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiqL_zYvKQfwnI6h4NjjqOicf02aeysHX4w&s',
      quote: 'Professional and comprehensive training'
    },
    {
      id: 4,
      name: 'Sweta Rai',
      role: 'MERN Stack Developer',
      company: 'Softech Foundation',
      image: 'https://as1.ftcdn.net/jpg/02/80/95/94/1000_F_280959443_NouVlCu0KEb3ib1EtjkVobh3r4WSY7Gl.jpg',
      quote: 'Great mentorship and guidance'
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: 'Practical Experience',
      description: 'Working on real projects allows learners to apply their skills in a practical setting and gain a better understanding of how technology is used in the industry.'
    },
    {
      id: 2,
      title: 'Skill Development',
      description: 'We offer opportunities to enhance technical skills and acquire new ones through comprehensive training programs.'
    },
    {
      id: 3,
      title: 'Industry Oriented Content',
      description: 'We provide insights into the latest trends and innovations in the tech industry. Explore emerging technologies.'
    },
    {
      id: 4,
      title: 'Resume Enhancement',
      description: 'Having a tech internship on your resume demonstrates expertise that makes you stand out among other candidates.'
    },
    {
      id: 5,
      title: 'Project Management Skills',
      description: 'Internships immerse participants in project-based work, fostering essential skills in project management and task prioritization.'
    },
    {
      id: 6,
      title: 'Industry Exposure',
      description: 'We allow individuals to gain insights into the tech industry\'s inner workings and understand emerging trends.'
    }
  ];

  const popularCourses = ['Flutter', 'React', 'Node.js', 'Python', 'Java'];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="badge-custom mb-4">
                  Boost Your Skills with Hands-on Experience
                </div>
                
                <h1 className="hero-title mb-4">
                  Elevate Your Career Journey <br />
                  with <span className="text-primary">Softech Foundation</span>
                </h1>
                
                <p className="hero-description mb-4">
                  Gain real-world experience through internships, collaborate with peers, 
                  and achieve your academic goals together.
                </p>
                
                <Link 
                  to="/courses" 
                  className="btn btn-primary btn-lg mb-4"
                >
                  Explore Our Courses
                  <span className="ms-2">→</span>
                </Link>
                
                <div className="popular-courses">
                  <p className="mb-2">Popular Courses:</p>
                  <div className="course-tags">
                    {popularCourses.map((course, index) => (
                      <span key={index} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="hero-image">
                <img 
                  src={student} 
                  alt="Students learning and collaborating" 
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h2 className="stat-number">2500+</h2>
                <p className="stat-label">Job Placements</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h2 className="stat-number">10+</h2>
                <p className="stat-label">Courses</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h2 className="stat-number">5,000+</h2>
                <p className="stat-label">Certified Students</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h2 className="stat-number">15+</h2>
                <p className="stat-label">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="courses-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Featured Courses to Boost Your Skills</h2>
            <p className="section-description">
              Gain real-world experience through internships, collaborate with peers, 
              and enhance your technical expertise.
            </p>
          </div>
          
          <div className="row g-4">
            {courses.map(course => (
              <div key={course.id} className="col-lg-4 col-md-6">
                <div className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={`${course.name} course`} />
                  </div>
                  <div className="course-content">
                    <h5 className="course-title">{course.name}</h5>
                    <div className="course-duration">
                      <span className="me-2">⏱</span>
                      {course.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/courses" className="btn btn-primary btn-lg">
              View All Courses
              <span className="ms-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h3 className="about-title">
                  Empowering Students with Quality Education and Training
                </h3>
                <p className="about-text">
                  We are dedicated to providing comprehensive training programs that bridge 
                  the gap between academic learning and industry requirements. Our experienced 
                  instructors and practical approach ensure students gain the skills needed 
                  for successful careers.
                </p>
                <p className="about-text">
                  With over 15 years of experience in the field, we have successfully trained 
                  thousands of students and helped them secure positions in leading technology 
                  companies across the globe.
                </p>
                <Link to="/about" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img src={study} alt="Students studying in a modern learning environment" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Institutions */}
      <section className="institutions-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Trusted By Leading Institutions</h2>
            <p className="section-description">
              Empowering over 15,000 students across 350+ educational institutions 
              worldwide with cutting-edge training and development programs.
            </p>
          </div>
          
          <div className="institutions-slider">
            <div className="d-flex gap-4 overflow-auto pb-3">
              {[
                "https://www.collegenp.com/uploads/2022/03/NCIT-College-Notice.png",
                "https://nagarjunacollege.edu.np/public/images/1808005683image_2024_06_11T10_38_33_606Z.png",
                "https://deerwalk.edu.np/DWIT/assets/images/Deerwalk_College_Logo.png"
              ].map((logo, index) => (
                <div key={index} className="institution-logo flex-shrink-0">
                  <img src={logo} alt={`Partner institution ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header mb-5">
            <p className="section-subtitle">Testimonials</p>
            <h2 className="section-title">What Our Students Say About Us</h2>
          </div>
          
          <div className="row g-4">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="col-lg-6">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <h6 className="testimonial-quote">"{testimonial.quote}"</h6>
                    <p className="testimonial-text">
                      The training program at Softech Foundation exceeded my expectations. 
                      The practical approach and industry-relevant curriculum helped me 
                      secure a great position in the tech industry.
                    </p>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-warning">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={`${testimonial.name} - ${testimonial.role}`} />
                    <div>
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-role">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <div className="section-header mb-5">
            <p className="section-subtitle">Together</p>
            <h2 className="section-title">Our Team</h2>
            <p className="section-description">
              Meet the passionate individuals behind our success.
            </p>
          </div>
          
          <div className="row g-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-card">
                  <div className="team-image">
                    <img 
                      src="https://latinbusinesstoday.com/wp-content/uploads/2012/10/Achievements-of-Hispanic-Business-Women.jpeg" 
                      alt="Expert instructor in software development"
                    />
                  </div>
                  <div className="team-content">
                    <h5 className="team-name">Expert Instructor</h5>
                    <p className="team-role">.Net Developer</p>
                    <p className="team-description">
                      Experienced professional with expertise in modern development 
                      technologies and industry best practices.
                    </p>
                    <div className="team-social">
                      <a href="#" aria-label="LinkedIn profile">🔗</a>
                      <a href="#" aria-label="Twitter profile">🐦</a>
                      <a href="#" aria-label="Website">🌐</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-info">
                <h3 className="contact-title">Request a Callback</h3>
                <p className="contact-description">
                  We are here to support you on your learning journey. 
                  Get in touch with us today.
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <h6>Phone</h6>
                      <p>+977 XXXXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <h6>Email Address</h6>
                      <p>yourmail@example.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <h6>Location</h6>
                      <p>Dillibazar Pipalbot,<br />Kathmandu, NEPAL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="course">Course Interested In (Optional)</label>
                  <input 
                    type="text" 
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="e.g., Web Development, Python, etc." 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control" 
                    rows="4" 
                    style={{ resize: 'none', height: 'auto' }}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Why Choose Softech Foundation?</h2>
            <p className="section-description">
              We offer industry-aligned training with practical sessions and mentorship, 
              designed to enhance your skills and boost your career prospects.
            </p>
          </div>
          
          <div className="row g-4">
            {whyChooseUs.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <div className="feature-number">{item.id}</div>
                  <h5 className="feature-title">{item.title}</h5>
                  <p className="feature-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h3 className="cta-title">
              Ready to Transform Your Learning Experience?
            </h3>
            <div className="cta-divider"></div>
            <p className="cta-description">
              Join thousands of students who are already achieving their career goals 
              with Softech Foundation. Start your journey today!
            </p>
            <Link to="/inquiryform" className="btn btn-light btn-lg">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        
      `}</style>
    </div>
  )
}

export default Home