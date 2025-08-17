import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
   const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === 'password') {
      alert('Login successful!');
    }
    else {
      alert('Invalid credentials');
    }
   }
  return (
   <div className='container m-5'>
    <div className='shadow'>
    <h2 className='pb-3'>Welcome Back</h2>
    <p className='go'><i className="bi bi-google gg"></i>Sign in with Google</p>
     <p>OR</p>
  
   <form action="" className='form' onSubmit={handleSubmit}>
    <div className='input-icon'>
      <i className="bi bi-envelope"></i>
      <input className='ps-5 aa' type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='input-icon'>
      <i className="bi bi-key"></i>
      <input className='ps-5 aa' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
   <button className='bn'>Sign In</button>
   
   </form>
   <p className='pt-3'>Don't have an account?<Link to={'/signup'}>Sign Up</Link></p>
   </div> 
   </div>
  )
}

export default Login
