import React, { useState } from 'react';

function Avtorisation () {
  document.body.style='background :grey;';
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    
   
    if (username === 'yourUsername' && password === 'yourPassword') {
     
      alert('Login Successful!');
    } else {
    
      alert('Login Failed. Please check your credentials.');
    }
  };

  return (
    <div>
    <h1 className='text-center'>Login Form</h1>
   
    
      <form  className='text-center mt-5' onSubmit={handleSubmit}>
      <div >
        <div className='mt-3'  >
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='mt-3 ms-2' >
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className='btn btn-success mt-3'  type="submit"> მომხმარებლის ავტორიზაცია</button>
        </div>
      </form>
    </div>
   
  );
};

export default Avtorisation;
