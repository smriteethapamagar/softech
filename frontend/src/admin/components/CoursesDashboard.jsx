import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Search, Plus } from 'lucide-react';
import useCourseStore from '../../store/useCourseStore';

const CoursesDashboard = () => {
  const courses = useCourseStore((s) => s.courses);
  const loading = useCourseStore((s) => s.loading);
  const error = useCourseStore((s) => s.error);
  const createCourse = useCourseStore((s) => s.createCourse);
  const updateCourse = useCourseStore((s) => s.updateCourse);
  const deleteCourse = useCourseStore((s) => s.deleteCourse);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [formData, setFormData] = useState({
    courseName: '',
    timetable: '',
    classDays: '',
    skillLevel: 'Beginner',
    languageOrProgram: '',
    description: '',
    whatWillILearn: '',
    lessons: '',
    image: ''
  });

  useEffect(() => {
    // Call directly from store to avoid function identity changes causing re-subscribes
    useCourseStore.getState().fetchCourses();
  }, []);

  // Filter courses based on search
  const filteredCourses = courses.filter(course =>
    course.courseName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.languageOrProgram?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      courseName: '',
      timetable: '',
      classDays: '',
      skillLevel: 'Beginner',
      languageOrProgram: '',
      description: '',
      whatWillILearn: '',
      lessons: '',
      image: ''
    });
  };

  const handleCreate = () => {
    resetForm();
    setIsEditing(false);
    setShowModal(true);
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setFormData({
      courseName: course.courseName || '',
      timetable: course.timetable || '',
      classDays: course.classDays || '',
      skillLevel: course.skillLevel || 'Beginner',
      languageOrProgram: course.languageOrProgram || '',
      description: course.description || '',
      whatWillILearn: course.whatWillILearn || '',
      lessons: course.lessons?.toString() || '',
      image: course.image || ''
    });
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (selectedCourse) {
      await deleteCourse(selectedCourse._id);
      setShowDeleteModal(false);
      setSelectedCourse(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const courseData = {
      ...formData,
      lessons: parseInt(formData.lessons)
    };
    
    try {
      if (isEditing) {
        await updateCourse(selectedCourse._id, courseData);
      } else {
        await createCourse(courseData);
      }
      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  const getSkillColor = (level) => {
    switch (level) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'secondary';
    }
  };

  if (loading && courses.length === 0) {
    return (
      <div className="container-fluid p-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Courses Dashboard</h2>
        <button className="btn btn-primary" onClick={handleCreate}>
          <Plus size={16} className="me-2" />
          Add Course
        </button>
      </div>

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      {/* Search */}
      <div className="mb-4">
        <div className="input-group" style={{maxWidth: '400px'}}>
          <span className="input-group-text">
            <Search size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Courses Table */}
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Course Name</th>
                  <th>Language</th>
                  <th>Skill Level</th>
                  <th>Lessons</th>
                  <th>Schedule</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course._id}>
                    <td>
                      <div>
                        <h6 className="mb-0">{course.courseName}</h6>
                        {course.description && (
                          <small className="text-muted">
                            {course.description.substring(0, 60)}...
                          </small>
                        )}
                      </div>
                    </td>
                    <td>{course.languageOrProgram || '-'}</td>
                    <td>
                      <span className={`badge bg-${getSkillColor(course.skillLevel)}`}>
                        {course.skillLevel}
                      </span>
                    </td>
                    <td>{course.lessons}</td>
                    <td>
                      <div>
                        <small>{course.timetable}</small>
                        {course.classDays && (
                          <div><small className="text-muted">{course.classDays}</small></div>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleEdit(course)}
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(course)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center p-4">
              <p className="text-muted">No courses found</p>
            </div>
          )}
        </div>
      </div>

      {/* Course Form Modal */}
      {showModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEditing ? 'Edit Course' : 'Add Course'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mb-3">
                        <label className="form-label">Course Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.courseName}
                          onChange={(e) => setFormData({...formData, courseName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Skill Level</label>
                        <select
                          className="form-select"
                          value={formData.skillLevel}
                          onChange={(e) => setFormData({...formData, skillLevel: e.target.value})}
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Language/Program</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.languageOrProgram}
                          onChange={(e) => setFormData({...formData, languageOrProgram: e.target.value})}
                          placeholder="e.g., JavaScript, Python"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Number of Lessons *</label>
                        <input
                          type="number"
                          className="form-control"
                          value={formData.lessons}
                          onChange={(e) => setFormData({...formData, lessons: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Timetable *</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.timetable}
                          onChange={(e) => setFormData({...formData, timetable: e.target.value})}
                          placeholder="e.g., 10:00 AM - 12:00 PM"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Class Days</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.classDays}
                          onChange={(e) => setFormData({...formData, classDays: e.target.value})}
                          placeholder="e.g., Mon, Wed, Fri"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">What Will I Learn</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      value={formData.whatWillILearn}
                      onChange={(e) => setFormData({...formData, whatWillILearn: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                      type="url"
                      className="form-control"
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : (isEditing ? 'Update' : 'Create')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Course</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete "{selectedCourse?.courseName}"?</p>
                <p className="text-muted">This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={confirmDelete}
                  disabled={loading}
                >
                  {loading ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesDashboard;