import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Edit, Trash2, Eye, Search, Plus, Calendar, User, Tag, Image as ImageIcon, Filter, X, AlertCircle } from 'lucide-react';
import { useBlogStore } from '../../store/useBlogStore';

const BlogsDash = () => {
  const { 
    blogs, 
    loading, 
    error, 
    fetchBlogs, 
    deleteBlog, 
    updateBlog 
  } = useBlogStore();

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const [editFormData, setEditFormData] = useState({
    title: '',
    subTitle: '',
    content: '',
    tags: '',
    category: '',
    titleImage: '',
    secondImage: ''
  });

  // Validation errors
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const cats = [...new Set(blogs.map(blog => blog.category || 'General'))];
    return cats.sort();
  }, [blogs]);

  // Memoized filtered and sorted blogs
  const processedBlogs = useMemo(() => {
    let filtered = blogs.filter(blog => {
      const matchesSearch = 
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.subTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        blog.content?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || blog.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort blogs
    filtered.sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      // Handle date sorting
      if (sortBy === 'createdAt' || sortBy === 'updatedAt') {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      // Handle string sorting
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });

    return filtered;
  }, [blogs, searchTerm, selectedCategory, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(processedBlogs.length / itemsPerPage);
  const paginatedBlogs = processedBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy, sortOrder]);

  // Form validation
  const validateForm = useCallback((formData) => {
    const errors = {};
    
    if (!formData.title?.trim()) {
      errors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      errors.title = 'Title must be at least 3 characters';
    }
    
    if (!formData.content?.trim()) {
      errors.content = 'Content is required';
    } else if (formData.content.trim().length < 10) {
      errors.content = 'Content must be at least 10 characters';
    }
    
    // Validate URLs if provided
    if (formData.titleImage && !isValidUrl(formData.titleImage)) {
      errors.titleImage = 'Please enter a valid URL';
    }
    
    if (formData.secondImage && !isValidUrl(formData.secondImage)) {
      errors.secondImage = 'Please enter a valid URL';
    }
    
    return errors;
  }, []);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setEditFormData({
      title: blog.title || '',
      subTitle: blog.subTitle || '',
      content: blog.content || '',
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
      category: blog.category || 'General',
      titleImage: blog.titleImage || '',
      secondImage: blog.secondImage || ''
    });
    setValidationErrors({});
    setShowEditModal(true);
  };

  const handleDelete = (blog) => {
    setSelectedBlog(blog);
    setShowDeleteModal(true);
  };

  const handleView = (blog) => {
    setSelectedBlog(blog);
    setShowViewModal(true);
  };

  const confirmDelete = async () => {
    if (selectedBlog) {
      try {
        await deleteBlog(selectedBlog._id);
        setShowDeleteModal(false);
        setSelectedBlog(null);
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    
    const errors = validateForm(editFormData);
    setValidationErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    if (selectedBlog) {
      const blogData = {
        ...editFormData,
        tags: editFormData.tags
          .split(',')
          .map(tag => tag.trim())
          .filter(tag => tag)
      };
      
      try {
        await updateBlog(selectedBlog._id, blogData);
        setShowEditModal(false);
        setSelectedBlog(null);
        setValidationErrors({});
      } catch (err) {
        console.error('Update failed:', err);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getAuthorName = (author) => {
    if (typeof author === 'object' && author?.name) {
      return author.name;
    }
    return 'Unknown Author';
  };

  const truncateContent = (content, maxLength = 100) => {
    if (!content) return 'No content';
    return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortBy('createdAt');
    setSortOrder('desc');
  };

  // Calculate statistics
  const stats = useMemo(() => {
    return {
      total: blogs.length,
      withImages: blogs.filter(b => b.titleImage).length,
      tagged: blogs.filter(b => b.tags && b.tags.length > 0).length,
      totalViews: blogs.reduce((sum, blog) => sum + (blog.views || 0), 0),
      filtered: processedBlogs.length
    };
  }, [blogs, processedBlogs.length]);

  if (loading && blogs.length === 0) {
    return (
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '400px'}}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col">
          <h1 className="h3 mb-3">Blog Management</h1>
          
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <AlertCircle size={16} className="me-2" />
              {error}
              <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            </div>
          )}

          {/* Search and Filters */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text">
                      <Search size={16} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search blogs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="col-md-2">
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div className="col-md-2">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="createdAt">Created Date</option>
                    <option value="updatedAt">Updated Date</option>
                    <option value="title">Title</option>
                    <option value="views">Views</option>
                  </select>
                </div>
                
                <div className="col-md-2">
                  <select
                    className="form-select"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                  </select>
                </div>
                
                <div className="col-md-2">
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-outline-secondary"
                      onClick={clearFilters}
                      title="Clear Filters"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row g-3 mb-4">
            <div className="col-md-2">
              <div className="card border-primary">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">{stats.total}</h5>
                  <p className="card-text text-muted mb-0">Total Blogs</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card border-success">
                <div className="card-body text-center">
                  <h5 className="card-title text-success">{stats.withImages}</h5>
                  <p className="card-text text-muted mb-0">With Images</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card border-warning">
                <div className="card-body text-center">
                  <h5 className="card-title text-warning">{stats.tagged}</h5>
                  <p className="card-text text-muted mb-0">Tagged</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card border-info">
                <div className="card-body text-center">
                  <h5 className="card-title text-info">{stats.totalViews}</h5>
                  <p className="card-text text-muted mb-0">Total Views</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card border-secondary">
                <div className="card-body text-center">
                  <h5 className="card-title text-secondary">{stats.filtered}</h5>
                  <p className="card-text text-muted mb-0">Filtered Results</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card border-dark">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">{categories.length}</h5>
                  <p className="card-text text-muted mb-0">Categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            All Blogs ({stats.filtered} of {stats.total})
          </h5>
          {(searchTerm || selectedCategory) && (
            <small className="text-muted">
              <Filter size={14} className="me-1" />
              Filters active
            </small>
          )}
        </div>
        <div className="card-body p-0">
          {paginatedBlogs.length === 0 ? (
            <div className="text-center p-5">
              <div className="mb-3">
                <Search size={48} className="text-muted" />
              </div>
              <h5 className="text-muted">No blogs found</h5>
              <p className="text-muted">
                {searchTerm || selectedCategory ? 'Try adjusting your search terms' : 'Start by creating your first blog post'}
              </p>
            </div>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th style={{width: '50px'}}>Image</th>
                      <th>Title & Content</th>
                      <th>Author</th>
                      <th>Category</th>
                      <th>Tags</th>
                      <th>Views</th>
                      <th>Created</th>
                      <th style={{width: '120px'}}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedBlogs.map((blog) => (
                      <tr key={blog._id}>
                        <td>
                          {blog.titleImage ? (
                            <img
                              src={blog.titleImage}
                              alt={blog.title}
                              className="rounded"
                              style={{
                                width: '40px',
                                height: '40px',
                                objectFit: 'cover'
                              }}
                            />
                          ) : (
                            <div 
                              className="bg-light rounded d-flex align-items-center justify-content-center"
                              style={{width: '40px', height: '40px'}}
                            >
                              <ImageIcon size={20} className="text-muted" />
                            </div>
                          )}
                        </td>
                        <td>
                          <div>
                            <h6 className="mb-1">{blog.title}</h6>
                            {blog.subTitle && (
                              <div className="text-primary small mb-1">{blog.subTitle}</div>
                            )}
                            <small className="text-muted">
                              {truncateContent(blog.content, 60)}
                            </small>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <User size={16} className="me-2 text-muted" />
                            <span>{getAuthorName(blog.author)}</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-secondary">{blog.category || 'General'}</span>
                        </td>
                        <td>
                          <div className="d-flex flex-wrap gap-1">
                            {blog.tags?.slice(0, 2).map((tag, index) => (
                              <span key={index} className="badge bg-light text-dark">
                                <Tag size={12} className="me-1" />
                                {tag}
                              </span>
                            ))}
                            {blog.tags?.length > 2 && (
                              <span className="badge bg-secondary">
                                +{blog.tags.length - 2}
                              </span>
                            )}
                            {(!blog.tags || blog.tags.length === 0) && (
                              <span className="text-muted small">No tags</span>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Eye size={14} className="me-1 text-muted" />
                            {blog.views || 0}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center text-muted">
                            <Calendar size={16} className="me-2" />
                            <div>
                              <div>{formatDate(blog.createdAt).split(',')[0]}</div>
                              <small>{formatDate(blog.createdAt).split(',')[1]}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="btn-group" role="group">
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => handleView(blog)}
                              title="View"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => handleEdit(blog)}
                              title="Edit"
                            >
                              <Edit size={14} />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDelete(blog)}
                              title="Delete"
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="card-footer">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-muted">
                      Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, processedBlogs.length)} of {processedBlogs.length} results
                    </div>
                    <nav>
                      <ul className="pagination pagination-sm mb-0">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button 
                            className="page-link" 
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button 
                              className="page-link" 
                              onClick={() => setCurrentPage(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button 
                            className="page-link" 
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Edit Modal - Enhanced */}
      {showEditModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Blog</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <form onSubmit={handleUpdateBlog}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mb-3">
                        <label className="form-label">Title *</label>
                        <input
                          type="text"
                          className={`form-control ${validationErrors.title ? 'is-invalid' : ''}`}
                          value={editFormData.title}
                          onChange={(e) => setEditFormData({...editFormData, title: e.target.value})}
                          required
                        />
                        {validationErrors.title && (
                          <div className="invalid-feedback">{validationErrors.title}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                          className="form-select"
                          value={editFormData.category}
                          onChange={(e) => setEditFormData({...editFormData, category: e.target.value})}
                        >
                          <option value="General">General</option>
                          <option value="Technology">Technology</option>
                          <option value="Lifestyle">Lifestyle</option>
                          <option value="Business">Business</option>
                          <option value="Travel">Travel</option>
                          <option value="Food">Food</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subtitle</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editFormData.subTitle}
                      onChange={(e) => setEditFormData({...editFormData, subTitle: e.target.value})}
                      placeholder="Optional subtitle"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Content *</label>
                    <textarea
                      className={`form-control ${validationErrors.content ? 'is-invalid' : ''}`}
                      rows="8"
                      value={editFormData.content}
                      onChange={(e) => setEditFormData({...editFormData, content: e.target.value})}
                      required
                    ></textarea>
                    {validationErrors.content && (
                      <div className="invalid-feedback">{validationErrors.content}</div>
                    )}
                    <div className="form-text">
                      Characters: {editFormData.content.length}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Title Image URL</label>
                        <input
                          type="url"
                          className={`form-control ${validationErrors.titleImage ? 'is-invalid' : ''}`}
                          value={editFormData.titleImage}
                          onChange={(e) => setEditFormData({...editFormData, titleImage: e.target.value})}
                          placeholder="https://example.com/image.jpg"
                        />
                        {validationErrors.titleImage && (
                          <div className="invalid-feedback">{validationErrors.titleImage}</div>
                        )}
                        {editFormData.titleImage && (
                          <div className="mt-2">
                            <img 
                              src={editFormData.titleImage} 
                              alt="Title preview" 
                              className="img-thumbnail"
                              style={{maxWidth: '150px', maxHeight: '100px'}}
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Second Image URL</label>
                        <input
                          type="url"
                          className={`form-control ${validationErrors.secondImage ? 'is-invalid' : ''}`}
                          value={editFormData.secondImage}
                          onChange={(e) => setEditFormData({...editFormData, secondImage: e.target.value})}
                          placeholder="https://example.com/image.jpg"
                        />
                        {validationErrors.secondImage && (
                          <div className="invalid-feedback">{validationErrors.secondImage}</div>
                        )}
                        {editFormData.secondImage && (
                          <div className="mt-2">
                            <img 
                              src={editFormData.secondImage} 
                              alt="Second preview" 
                              className="img-thumbnail"
                              style={{maxWidth: '150px', maxHeight: '100px'}}
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Tags</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editFormData.tags}
                      onChange={(e) => setEditFormData({...editFormData, tags: e.target.value})}
                      placeholder="technology, web development, react"
                    />
                    <div className="form-text">
                      Separate multiple tags with commas. Preview: {
                        editFormData.tags.split(',').map(tag => tag.trim()).filter(tag => tag).join(', ')
                      }
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Updating...
                      </>
                    ) : (
                      'Update Blog'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal - Enhanced */}
      {showDeleteModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">
                  <Trash2 size={20} className="me-2" />
                  Confirm Delete
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-start">
                  {selectedBlog?.titleImage && (
                    <img
                      src={selectedBlog.titleImage}
                      alt={selectedBlog.title}
                      className="rounded me-3"
                      style={{width: '60px', height: '60px', objectFit: 'cover'}}
                    />
                  )}
                  <div>
                    <p>Are you sure you want to delete this blog?</p>
                    <p><strong>"{selectedBlog?.title}"</strong></p>
                    {selectedBlog?.subTitle && (
                      <p className="text-muted">Subtitle: {selectedBlog.subTitle}</p>
                    )}
                    <div className="alert alert-warning">
                      <AlertCircle size={16} className="me-2" />
                      This action cannot be undone. The blog and associated images will be permanently deleted.
                    </div>
                  </div>
                </div>
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
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 size={16} className="me-2" />
                      Delete Blog
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Modal - Enhanced */}
      {showViewModal && selectedBlog && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <Eye size={20} className="me-2" />
                  Blog Details
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowViewModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* Blog Header */}
                <div className="border-bottom pb-3 mb-4">
                  <div className="row">
                    <div className="col-md-8">
                      <h2 className="mb-2">{selectedBlog.title}</h2>
                      {selectedBlog.subTitle && (
                        <h5 className="text-primary mb-3">{selectedBlog.subTitle}</h5>
                      )}
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span className="badge bg-secondary fs-6">
                        {selectedBlog.category || 'General'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="row text-muted small">
                    <div className="col-md-6">
                      <User size={14} className="me-1" />
                      By {getAuthorName(selectedBlog.author)}
                    </div>
                    <div className="col-md-3">
                      <Calendar size={14} className="me-1" />
                      {formatDate(selectedBlog.createdAt)}
                    </div>
                    <div className="col-md-3">
                      <Eye size={14} className="me-1" />
                      {selectedBlog.views || 0} views
                    </div>
                  </div>
                </div>

                {/* Title Image */}
                {selectedBlog.titleImage && (
                  <div className="mb-4 text-center">
                    <img
                      src={selectedBlog.titleImage}
                      alt={selectedBlog.title}
                      className="img-fluid rounded shadow-sm"
                      style={{maxHeight: '300px'}}
                    />
                  </div>
                )}

                {/* Tags */}
                {selectedBlog.tags?.length > 0 && (
                  <div className="mb-4">
                    <h6 className="text-muted mb-2">
                      <Tag size={16} className="me-1" />
                      Tags:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedBlog.tags.map((tag, index) => (
                        <span key={index} className="badge bg-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="border-top pt-4 mb-4">
                  <h6 className="text-muted mb-3">Content:</h6>
                  <div 
                    style={{
                      whiteSpace: 'pre-wrap', 
                      lineHeight: '1.6',
                      fontSize: '1.1rem'
                    }} 
                    className="mb-4"
                  >
                    {selectedBlog.content}
                  </div>
                </div>

                {/* Second Image */}
                {selectedBlog.secondImage && (
                  <div className="text-center border-top pt-4">
                    <h6 className="text-muted mb-3">Additional Image:</h6>
                    <img
                      src={selectedBlog.secondImage}
                      alt="Additional content"
                      className="img-fluid rounded shadow-sm"
                      style={{maxHeight: '250px'}}
                    />
                  </div>
                )}

                {/* Blog Metadata */}
                <div className="row mt-4 pt-3 border-top">
                  <div className="col-md-6">
                    <small className="text-muted">
                      <strong>Created:</strong> {formatDate(selectedBlog.createdAt)}
                    </small>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <small className="text-muted">
                      <strong>Last Updated:</strong> {formatDate(selectedBlog.updatedAt || selectedBlog.createdAt)}
                    </small>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowViewModal(false)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => {
                    setShowViewModal(false);
                    handleEdit(selectedBlog);
                  }}
                >
                  <Edit size={16} className="me-2" />
                  Edit Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsDash;