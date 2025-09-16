import React, { useState } from 'react';
import { Calendar, Image, Newspaper, Mic, Menu, X, LogOut, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import BlogsDash from '../components/BlogsDash';
import CoursesDashboard from '../components/CoursesDashboard';
import ContactDash from '../components/ContactDash';
import AddBlogs from '../components/AddBlogs';
import AddCourses from '../components/AddCourses';
import InquiryDash from '../components/InquiryDash';
import { useAuthStore } from '../../store/useAuthStore';


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
    { id: 'blogs', label: 'Blogs', icon: Calendar },
    { id: 'courses', label: 'Courses', icon: Plus },
    { id: 'contact', label: 'Contacts', icon: Image },
    { id: 'inquiries', label: 'Inquiries', icon: Plus },
    { id: 'add-blogs', label: 'Add Blogs', icon: Newspaper },
    { id: 'add-courses', label: 'Add Courses', icon: Plus },
  ];

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } min-h-screen flex flex-col relative`}>
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold">Admin Panel</h2>
          )}
          <button
            onClick={onToggleCollapse}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center rounded-lg transition-colors ${
                      isCollapsed
                        ? 'w-10 h-10 p-0 justify-center mx-auto'
                        : 'w-full gap-3 p-3'
                    } ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-800 text-gray-300'
                    }`}
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon size={isCollapsed ? 24 : 20} />
                    {!isCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Logout Button - Fixed at bottom */}
      <div className="sticky bottom-0 left-0 right-0 bg-gray-900 p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className={`rounded-lg transition-colors text-red-400 hover:bg-red-900/20 flex items-center ${
            isCollapsed ? 'w-10 h-10 p-0 justify-center mx-auto' : 'w-full gap-3 p-3'
          }`}
          title={isCollapsed ? 'Logout' : ''}
        >
          <LogOut size={isCollapsed ? 24 : 20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('blogss');
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
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className="flex-1 overflow-auto">
        {renderSection()}
      </main>
    </div>
  );
};

export default AdminDashboard;