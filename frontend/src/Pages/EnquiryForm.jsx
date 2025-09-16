import React, { useState } from 'react';

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    academicStatus: '',
    interestedCourse: '',
    preferredSchedule: '',
    learningMode: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! Your enquiry has been submitted.');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '2rem 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem'
    },
    subtitle: {
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.5'
    },
    formContainer: {
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '2rem'
    },
    section: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '1rem'
    },
    grid: {
      display: 'grid',
      gap: '1rem'
    },
    grid3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    grid2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    required: {
      color: '#dc2626'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '1rem',
      transition: 'border-color 0.2s, box-shadow 0.2s'
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '1rem',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      fontWeight: '500',
      padding: '0.75rem 2rem',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    buttonHover: {
      backgroundColor: '#2563eb'
    },
    submitContainer: {
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>ENQUIRY FORM</h1>
        <p style={styles.subtitle}>
          We're here to help you take the next step in your IT journey. Fill in your details below and our 
          team will reach out to you shortly with more information.
        </p>
      </div>

      {/* Form */}
      <div style={styles.formContainer}>
        
        {/* Personal Information */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Personal Information</h3>
          <div style={{...styles.grid, ...styles.grid3}}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Your Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Phone Number <span style={styles.required}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Email Address <span style={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Academic Information</h3>
          <div style={{...styles.grid, ...styles.grid2}}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                College/Institution Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                placeholder="Your college/institution name"
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Academic Status <span style={styles.required}>*</span>
              </label>
              <select
                name="academicStatus"
                value={formData.academicStatus}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              >
                <option value="">Select Academic Qualification</option>
                <option value="see">SEE</option>
                <option value="plus2">+2</option>
                <option value="bachelor">Bachelor</option>
                <option value="masters">Masters</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Course Details</h3>
          <div style={{...styles.grid, ...styles.grid3}}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Interested Course <span style={styles.required}>*</span>
              </label>
              <select
                name="interestedCourse"
                value={formData.interestedCourse}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              >
                <option value="">Select a course</option>
                <option value="mern-stack">MERN Stack</option>
                <option value="web-development">Web Development</option>
                <option value="php-laravel">PHP/Laravel</option>
                <option value="dotnet">.NET</option>
                <option value="javascript">JavaScript</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Preferred Schedule <span style={styles.required}>*</span>
              </label>
              <select
                name="preferredSchedule"
                value={formData.preferredSchedule}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              >
                <option value="">Select schedule</option>
                <option value="morning-6-9">Morning (6:00 - 9:00)</option>
                <option value="morning-10-1">Morning (10:00 - 1:00)</option>
                <option value="afternoon-1-4">Afternoon (1:00 - 4:00)</option>
                <option value="evening-4-7">Evening (4:00 - 7:00)</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Learning Mode <span style={styles.required}>*</span>
              </label>
              <select
                name="learningMode"
                value={formData.learningMode}
                onChange={handleInputChange}
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              >
                <option value="">Select mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Comments */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Additional Comments</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Any Queries?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Open field where users can ask specific questions or add comments."
              style={styles.textarea}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.textarea)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div style={styles.submitContainer}>
          <button
            type="button"
            onClick={handleSubmit}
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;