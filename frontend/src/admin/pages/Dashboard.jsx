import React, { useState } from 'react';
import { Menu, X, LogOut, Plus, BookText, Contact, Code, FileQuestionMark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import BlogsDash from '../components/BlogsDash';
import CoursesDashboard from '../components/CoursesDashboard';
import ContactDash from '../components/ContactDash';
import AddBlogs from '../components/AddBlogs';
import AddCourses from '../components/AddCourses';
import InquiryDash from '../components/InquiryDash';
import { useAuthStore } from '../../store/useAuthStore';

// Custom CSS styles (add to your CSS file)
const customStyles = `
.sidebar {
  background-color: #1f2937;
  transition: width 0.3s ease;
  min-height: 100vh;
}

.sidebar-collapsed {
  width: 64px;
}

.sidebar-expanded {
  width: 256px;
}

.sidebar-item {
  transition: background-color 0.2s ease;
  border-radius: 0.5rem;
  border: none;
  color: #d1d5db;
}

.sidebar-item:hover {
  background-color: #374151;
  color: #ffffff;
}

.sidebar-item.active {
  background-color: #2563eb;
  color: #ffffff;
}

.sidebar-item:focus {
  box-shadow: none;
  outline: none;
}

.logout-btn {
  color: #f87171;
  transition: background-color 0.2s ease;
}

.logout-btn:hover {
  background-color: rgba(153, 27, 27, 0.2);
  color: #f87171;
}

.toggle-btn {
  transition: background-color 0.2s ease;
}

.toggle-btn:hover {
  background-color: #374151;
}
`;

// Sidebar Component
const Sidebar = ({ 
  activeSection, 
  onSectionChange, 
  isCollapsed, 
  onToggleCollapse 
}) => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/admin/login');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  const menuItems = [
    { id: 'blogs', label: 'Blogs', icon: BookText },
    { id: 'courses', label: 'Courses', icon: Code },
    { id: 'contact', label: 'Contacts', icon: Contact },
    { id: 'inquiries', label: 'Inquiries', icon: FileQuestionMark},
    { id: 'add-blogs', label: 'Add Blogs', icon: Plus },
    { id: 'add-courses', label: 'Add Courses', icon: Plus },
  ];

  return (
    <>
      <style>{customStyles}</style>
      <div className={`sidebar text-white d-flex flex-column position-relative ${
        isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'
      }`}>
        <div className="flex-grow-1 d-flex flex-column h-100">
          {/* Header */}
          <div className="p-3 border-bottom border-secondary d-flex align-items-center justify-content-between">
            {!isCollapsed && (
              <h2 className="h5 mb-0 fw-bold">Admin Panel</h2>
            )}
            <button
              onClick={onToggleCollapse}
              className="btn btn-sm toggle-btn p-2 rounded text-white"
              style={{ border: 'none' }}
            >
              {isCollapsed ? <Menu size={20} /> : <X size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-grow-1 overflow-auto">
            <ul className="list-unstyled p-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="mb-2">
                    <button
                      onClick={() => onSectionChange(item.id)}
                      className={`btn sidebar-item d-flex align-items-center ${
                        isCollapsed
                          ? 'justify-content-center p-2'
                          : 'w-100 p-3'
                      } ${
                        activeSection === item.id ? 'active' : ''
                      }`}
                      title={isCollapsed ? item.label : ''}
                      style={{
                        width: isCollapsed ? '40px' : '100%',
                        height: isCollapsed ? '40px' : 'auto'
                      }}
                    >
                      <Icon size={isCollapsed ? 24 : 20} />
                      {!isCollapsed && (
                        <span className="ms-3 fw-medium">{item.label}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Logout Button - Fixed at bottom */}
        <div className="position-sticky bottom-0 start-0 end-0 p-3 border-top border-secondary">
          <button
            onClick={handleLogout}
            className={`btn logout-btn rounded d-flex align-items-center ${
              isCollapsed 
                ? 'justify-content-center p-2' 
                : 'w-100 p-3'
            }`}
            title={isCollapsed ? 'Logout' : ''}
            style={{
              border: 'none',
              width: isCollapsed ? '40px' : '100%',
              height: isCollapsed ? '40px' : 'auto'
            }}
          >
            <LogOut size={isCollapsed ? 24 : 20} />
            {!isCollapsed && <span className="ms-3">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('blogs'); // Fixed typo: was 'blogss'
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'blogs':
        return <BlogsDash />;
      case 'courses':
        return <CoursesDashboard />;
      case 'contact':
        return <ContactDash />;
      case 'inquiries':
        return <InquiryDash />;
      case 'add-blogs':
        return <AddBlogs />;
      case 'add-courses':
        return <AddCourses />;
      default:
        return <BlogsDash />;
    }
  };

  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className="flex-grow-1 overflow-auto">
        {renderSection()}
      </main>
    </div>
  );
};

export default AdminDashboard;