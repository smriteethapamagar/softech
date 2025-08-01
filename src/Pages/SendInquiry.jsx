import React from 'react'

function SendInquiry() {
  return (
    <>
      <div className='container border top'>
      <div className='head'>
      <h2>Get In Touch With Us</h2>
      <p style={{ color: 'gray' }}>For More information About Our Product & Services Please Feel Free To Drop Us An <br />
        Email.Our Staff Alv</p>
        </div>
        <div className='register'>
      <div className="col-lg-4 add">
        <h4 className='mt-5'><i className="bi bi-geo-alt-fill"></i>Address</h4>
        <p>mid Baneshwor Kathmandu <br />
          Nepal</p>
        <h4><i className="bi bi-telephone-fill"></i>Phone</h4>
        <p>Mobile: +(977)546-6789 <br />
          Hotline: +(977)456-6789
        </p>
        <h4><i className="bi bi-clock-fill"></i>Working Time</h4>
        <p>Monday-Friday: 9:00 - <br />
          22:00 <br />
          Saturday-Sunday: 9:00 - <br />
          21:00</p>
      </div>
      
      <div className="col-lg-8 ">
        <form>
           <div>
            <label className="form-label mt-5 mb-0">Your name</label>
            <input type="text" className="form-control ms-0" id="" placeholder='Enter Your Name.'/>
          </div>
         <div>
            <label className="form-label mb-0">Phone Number</label>
            <input type="number" className="form-control ms-0" id="" placeholder='Your Phone Number.'/>
          </div>
          <div className="mb-3">
            <label className="form-label mb-0">Email address</label>
            <input type="text" className="form-control ms-0" id="" placeholder='Abc@def.com'/>
          </div>
          <div className="mb-3">
            <label className="form-label mb-0">Course</label>
            <input type="text" className="form-control ms-0" id="" placeholder='Your Subject'/>
          </div>
           <div className="mb-3">
            <label className="form-label mb-0">Message</label>
            <input type="text" className="form-control py-5 pt-0 ms-0" id="" placeholder='Hi! I would like to ask about..'/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default SendInquiry
