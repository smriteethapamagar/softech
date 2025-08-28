import React from 'react'

function EnquiryForm() {
  return (
    <div>
         <div className='d-flex justify-content-center contact'>
        <div className='text-center'>
          <h1>ENQUIRY FORM</h1>
          <p>We're here to help you take the next step in your IT journey. Fill in your details below and our <br />
            team will reach out to you shortly with more information</p>
          </div>
          </div>
          <div className="container mt-5 mb-5">
            <div className="border">
             
              <form>
                 <h5 className='pt-3 ps-5 fw-bold'>Personal Information</h5>
                 <div className='send'>
                <div className='form-group'>
                <label htmlFor="name" className='ps-5'>Your name <span className='text-danger'>*</span></label>
                <input type="text" id='name'className='form-control ms-5' placeholder='Abc' />
              </div>
              <div className='form-group'>
                <label htmlFor="phone" className='ps-5'>Phone Number <span className='text-danger'>*</span></label>
                <input type="number" id='phone'className='form-control ms-5' placeholder='Your Phone Number' />
              </div>
              <div className='form-group'>
                <label htmlFor="email" className='ps-5'>Email Address <span className='text-danger'>*</span></label>
                <input type="email" id='email' className='form-control ms-5' placeholder='Abc@def.com' />
              </div>
              </div>
              <h5 className='ps-5 fw-bold'>Academic Information</h5>
              <div className='send'>
              <div className='form-group'>
                <label htmlFor="" className='ps-5'>College/Institution Name <span className='text-danger'>*</span></label>
                <input type="text" className='form-control ms-5' placeholder='Your College / Institution Name' />
              </div>
              <div className='form-group'>
                <label htmlFor="academic" className='ps-5 pb-3'>Academic Status <span className='text-danger'>*</span></label>
                <div className='input-group'>
                  <select className="form-input ms-5 sen" id="academic">
                    <option selected>Select Academic Qualification</option>
                    <option value="plus2">+2</option>
                    <option value="see">SEE</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="masters">Masters</option>
                  </select>
                  <div className='input-group-append'>
                    <span><i class="fas fa-caret-down"></i></span>
                  </div>
                </div>
              </div>
              </div>
              <h5 className='ps-5 fw-bold'>Course Details</h5>
              <div className='send'>
              <div className='form-group'>
                <label htmlFor="" className='ps-5 pb-3'>Interested Course <span className='text-danger'>*</span></label>
                <div className='input-group'>
                  <select className="form-input ms-5 sen" id="interested">
                    <option value="mern stack">Mern Stack</option>
                    <option value="web development">Web Development</option>
                    <option value="php/laravel">PHP/Laravel</option>
                    <option value=".net">.Net</option>
                    <option value="javascript">Javascript</option>
                  </select>
                   <div className='input-group-append'>
                    <span><i class="fas fa-caret-down"></i></span>
                  </div>
                </div>
              </div>

                <div className='form-group'>
                <label htmlFor="" className='ps-5 pb-3'>Preferred Schedule <span className='text-danger'>*</span></label>
                <div className='input-group'>
                  <select className="form-input ms-5 sen" id="schedule">
                    <option value="">Morning (6-9)</option>
                    <option value="">Morning (10-5)</option>
                    <option value="">Afternoon (1-3)</option>
                    <option value="">Afternoon (4-7)</option>
                    
                  </select>
                   <div className='input-group-append'>
                    <span><i class="fas fa-caret-down"></i></span>
                  </div>
                </div>
              </div>

                <div className='form-group'>
                <label htmlFor="" className='ps-5 pb-3 pt-2'>Preferred Mode of Learning <span className='text-danger'>*</span></label>
                <div className='input-group'>
                  <select className="form-input ms-5 sen" id="learn">
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                   </select>
                   <div className='input-group-append'>
                    <span><i class="fas fa-caret-down"></i></span>
                  </div>
                </div>
              </div>
              </div>
              <h5 className='ps-5 fw-bold pt-3'>Additional Comments</h5>
              <div className='d-flex justify-content-between'>
                <div className='form-group'>
                   <label htmlFor="message" className='ps-5'>Any Queries?</label>
                   <textarea className="form-control ms-5 tp" id="message" 
                   placeholder='Open field where users can ask specific questions or add comments.'></textarea>
                </div>
                <div className='mt-auto'>
               <button type="submit" className="button">Submit</button>
               </div>
               </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default EnquiryForm
