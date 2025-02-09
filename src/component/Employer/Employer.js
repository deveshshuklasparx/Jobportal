import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Employer.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import jobSeeker from "./../../assets/images/job-seeker.png"

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
      .sendForm('service_gjtuzkc', 'template_91n1g3p', e.target, 'JK5QJLC-gN2Iow_Q6')
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

          <div className='form-wrapper-emp'>
            <div className='form-info'>
            <img src={jobSeeker} alt="Job Seeker" className='job-seeker'/>

            <h1>User Information</h1>
            <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
          <form className='main-form' onSubmit={handleSubmit}>
            <div className="form-group user-box">
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
      </div>
      <Footer />
    </>
  );
};

export default Employer;
