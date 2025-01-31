import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Employer.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Employer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    graduationMarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gjtuzkc', 'template_91n1g3p', e.target, 'JK5QJLC-gN2Iow_Q6') // Replace with your service, template, and user IDs
      .then(
        (result) => {
          alert('Email sent successfully');
        },
        (error) => {
          alert('Error sending email');
        }
      );
  };

  return (
    <>
      <Header />
      <div className='employer-wrapper'>
        <div className="container">
          <h1>User Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="graduationMarks">Graduation Marks</label>
              <input
                type="number"
                id="graduationMarks"
                name="graduationMarks"
                required
                value={formData.graduationMarks}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Employer;
