import React, { useState } from 'react';
import "./style.css";

function  Registration() {
 document.body.style='background :grey;';

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data or display a success message
      alert('Registration Successful!');
    }
  };

  return (
    <div>
      <h1 className='text-center'>Registration Form</h1>
      <form onSubmit={handleSubmit} className='text-center mt-5'>
        <div className='mt-3'>
          <label >Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-control", {errors.username ? 'error' : ''}
          />
          {errors.username && <div className="error-text">{errors.username}</div>}
        </div>
        <div className='mt-3 '>
          <label className='pe-4 me-2'> Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-text">{errors.email}</div>}
        </div>
        <div className='mt-3'>
          <label className='pe-1'>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <div className="error-text">{errors.password}</div>}
        </div>
        <button className='btn btn-success mt-3' type="submit">მომხმარებლსი რეგისტრაცია</button>
      </form>
    </div>
  );
};

export default Registration;
