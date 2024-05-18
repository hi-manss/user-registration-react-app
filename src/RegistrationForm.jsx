import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegistrationPage.css'; // Import CSS file for styling

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    contact_number: '',
    email: '',
    day: '',
    month: '',
    year: '',
    password: '',
    confirm_password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    let errors = {};
    if (!formData.full_name) {
      errors.full_name = 'Full name is required';
    }
    if (!formData.contact_number || !/^\d{10}$/.test(formData.contact_number)) {
      errors.contact_number = 'Please enter a valid phone number';
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.day || !formData.month || !formData.year) {
      errors.date_of_birth = 'Please select a valid date of birth';
    }
    if (!formData.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password)) {
      errors.password = 'Password must contain at least 8 characters with upper and lower case letters and numbers';
    }
    if (formData.password !== formData.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      // If there are validation errors, display a toast and prevent submission
      setErrors(errors);
      toast.error('Failed to create user. Please check the form for errors.');
      return; // Prevent form submission
    }

    // If no errors, proceed with API call
    try {
      const response = await axios.post('https://fullstack-test-navy.vercel.app/api/users/create', formData);
      // console.log('Response:', response.data);
      if (response && response.data && response.data.description) {
        toast.success(response.data.description);
        setFormData({
          full_name: '',
          contact_number: '',
          email: '',
          day: '',
          month: '',
          year: '',
          password: '',
          confirm_password: ''
        });
        setErrors({});
      } else {
        toast.error('Unexpected response from server');
      }
    } catch (error) {
      // console.error('Error:', error.response ? error.response.data : error.message);
      toast.error(error.response?.data?.description || error.message || 'An error occurred');
    }
  };

  const handleCancel = () => {
    setFormData({
      full_name: '',
      contact_number: '',
      email: '',
      day: '',
      month: '',
      year: '',
      password: '',
      confirm_password: ''
    });
    setErrors({});
  };

  return (
    <div className="registration-container">
      <ToastContainer />
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder='Full Name*' />
          {errors.full_name && <span className="error">{errors.full_name}</span>}
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} placeholder='Contact Number*'/>
          {errors.contact_number && <span className="error">{errors.contact_number}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email*' />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <label>Date of Birth:</label>
        <div className="form-group birth-date-fields">
          <select style={{ border: "1px solid gray" }} name="day" value={formData.day} onChange={handleChange} pla>
            <option value="">Day*</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select style={{ border: "1px solid gray" }} name="month" value={formData.month} onChange={handleChange}>
            <option value="">Month*</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select style={{ border: "1px solid gray" }} name="year" value={formData.year} onChange={handleChange}>
            <option value="">Year*</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={2024 - i} value={2024 - i}>{2024 - i}</option>
            ))}
          </select>
        </div>
        {errors.date_of_birth && <span className="error">{errors.date_of_birth}</span>}
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password* '/>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} placeholder='Confirm Password*'/>
          {errors.confirm_password && <span className="error">{errors.confirm_password}</span>}
        </div>
        <div className='btnDiv'>
          <button type="button" className='canBtn' onClick={handleCancel}>Cancel</button>
          <button type="submit" className='subBtn'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
