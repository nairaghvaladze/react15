import React, { useState } from 'react';
import {Form, FormControl, FormLabel} from "react-bootstrap";

import "./style.css";


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
   
    
      <Form  className='text-center mt-5 avtform' onSubmit={handleSubmit}>
      <div >
        <div className='mt-3'  >
          <FormLabel>Username</FormLabel>
          <FormControl
            type="text"
            name="username"
            placeholder='username'
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='mt-3 ' >
          <FormLabel>Password</FormLabel>
          <FormControl className="form-control"
            type="password"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className='btn btn-success mt-3'  type="submit"> მომხმარებლის ავტორიზაცია</button>
        </div>
      </Form>
    </div>
   
  );
};

export default Avtorisation;
