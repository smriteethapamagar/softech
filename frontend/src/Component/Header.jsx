import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import logo from '../assets/softechlogo.png'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.navbar-toggler')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = (e) => {
    e.stopPropagation()
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Close dropdown when mobile menu is toggled
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
    }
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header-sticky">
      <nav className="navbar navbar-expand-lg navbar-custom" data-bs-theme="dark" ref={mobileMenuRef}>
        <div className="container-fluid px-4">
          {/* Logo */}
          <Link className="navbar-brand logo-hover d-flex align-items-center" to="/">
            <img src={logo} alt="Softech Logo" className="logo-img" />
          </Link>

          {/* Mobile menu toggle */}
          <button 
            className="navbar-toggler border-0 p-0 ms-auto d-lg-none"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </div>
          </button>

          {/* Navigation menu */}
          <div className={`navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : 'collapse'}`}>
            <ul className="navbar-nav align-items-center gap-lg-4 gap-2">
              <li className="nav-item">
                <Link 
                  className="nav-link nav-link-custom" 
                  to="/blogs"
                  onClick={() => closeMobileMenu()}
                >
                  Blogs
                </Link>
              </li>
              
              <li className="nav-item dropdown position-relative" ref={dropdownRef}>
                <Link 
                  className="nav-link nav-link-custom dropdown-toggle-custom" 
                  to="/courses"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Courses
                  <i className={`bi bi-chevron-down dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}></i>
                </Link>
                
                <div className={`dropdown-menu-custom ${isDropdownOpen ? 'show' : ''}`}>
                  <Link 
                    className="dropdown-item-custom" 
                    to="/courses"
                    onClick={() => {
                    closeDropdown()
                    closeMobileMenu()
                  }}
                  >
                    All Courses
                  </Link>
                  <Link 
                    className="dropdown-item-custom" 
                    to="/coursedetails/web-development"
                    onClick={() => {
                    closeDropdown()
                    closeMobileMenu()
                  }}
                  >
                    <i className="bi bi-code-square me-2"></i>
                    Web Development
                  </Link>
                  <Link 
                    className="dropdown-item-custom" 
                    to="/coursedetails/data-science"
                    onClick={() => {
                    closeDropdown()
                    closeMobileMenu()
                  }}
                  >
                    <i className="bi bi-graph-up me-2"></i>
                    Data Science
                  </Link>
                  <Link 
                    className="dropdown-item-custom" 
                    to="/coursedetails/mobile-development"
                    onClick={() => {
                    closeDropdown()
                    closeMobileMenu()
                  }}
                  >
                    <i className="bi bi-phone me-2"></i>
                    Mobile Development
                  </Link>
                  <Link 
                    className="dropdown-item-custom" 
                    to="/coursedetails/ui-ux-design"
                    onClick={() => {
                    closeDropdown()
                    closeMobileMenu()
                  }}
                  >
                    <i className="bi bi-palette me-2"></i>
                    UI/UX Design
                  </Link>
                </div>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link nav-link-custom" 
                  to="/contactus"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              
              <li className="nav-item ms-lg-2">
                <Link 
                  className="btn btn-inquiry" 
                  to="/inquiryform"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="bi bi-envelope me-2"></i>
                  Send Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header