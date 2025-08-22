import React from 'react'

function AdminPanel() {
  return (
    <>
    <div className="container">
      <div className="row">
         <div className="col-lg-3 d-flex justify-content-center">
        <div className='shadow p-3 mt-4' style={{padding: '20px'}}>
          <h1 className='m-3 ms-4'>Dashboard</h1>
         <form className="d-flex " role="search">
        <input className="form-control"
         type="search" placeholder="Search"
          aria-label="Search"
          style={{ width: '80%'}}/>
        </form>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminPanel
