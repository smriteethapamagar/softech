import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
   <div className="bg-dark text-white p-3" style={{ height: '100vh' }}>
      <h2>Admin Panel</h2>
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white text-decoration-none">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects" className="text-white text-decoration-none">Projects</Link>
        </li>
        <li>
          <Link to="/requests" className="text-white text-decoration-none">Requests</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
