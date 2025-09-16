import React from 'react';
import ISO from '../assets/ISO.png';
import logo from '../assets/softechlogo.png';

function Footer() {
  return (
    <footer style={{ background: '#014B88', color: 'white', marginTop: '80px' }}>
      <div className="container-fluid px-3 px-md-5 py-5">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-12 col-md-6 col-lg-4 footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Softech Logo" width={120} className="mb-3" />
            </div>
            <p className="mb-5">
              We're an innovative IT company providing tailored solutions in 
              software development, web design, cybersecurity, 
              cloud computing, and IT consulting.
            </p>
            <div className="mt-4 d-flex align-items-center">
              <img src={ISO} alt="ISO 9001:2015 Certified" width={60} className="me-3" />
              <div>
                <div>ISO 9001:2015 Certified</div>
                <div className="text-white-50">Since 2018</div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-3 col-lg-2 footer-section">
            <h3 className="h5 mb-3">COMPANY</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/about" className="text-white text-decoration-none">About us</a></li>
              <li className="mb-2"><a href="/gallery" className="text-white text-decoration-none">Photo Gallery</a></li>
              <li className="mb-2"><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/careers" className="text-white text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2 footer-section">
            <h3 className="h5 mb-3">QUICK LINKS</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/about" className="text-white text-decoration-none">About us</a></li>
              <li className="mb-2"><a href="/courses" className="text-white text-decoration-none">Courses</a></li>
              <li className="mb-2"><a href="/partners" className="text-white text-decoration-none">Partners</a></li>
              <li><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h3 className="h5 mb-3">CONTACT US</h3>
            <div className="mb-3">
              <div className="d-flex align-items-start">
                <i className="bi bi-geo-alt mt-1 me-2"></i>
                <div>
                  Nearby Baneshwor Futsal,<br />
                  Mid-Baneshwor, Kathmandu, Nepal
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:info@softech.edu.np" className="text-white text-decoration-none">
                  info@softech.edu.np
                </a>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone me-2"></i>
                <div>
                  <a href="tel:+97714780099" className="text-white text-decoration-none d-block">+977-1-4780099</a>
                  <a href="tel:+97714780100" className="text-white text-decoration-none">+977-1-4780100</a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="social-links d-flex gap-3 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row border-top border-secondary pt-4 mt-4">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="mb-3 mb-md-0 text-center text-md-start text-white-50">
                &copy; {new Date().getFullYear()} Softech Foundation. All Rights Reserved.
              </p>
              <div className="text-center text-md-end">
                <a href="/privacy" className="text-white-50 text-decoration-none me-3">Privacy Policy</a>
                <a href="/terms" className="text-white-50 text-decoration-none">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
