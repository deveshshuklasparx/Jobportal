import React from 'react'
import './Employer.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Employer = () => {
  return (
    <>
               <Header/>
               <div className='employer-wrapper'>
               <div className="container">
        <h1>User Information</h1>
        <form action="#" method="post">
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required/>
            </div>
            <div className="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required/>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="graduationMarks">Graduation Marks</label>
                <input type="number" id="graduationMarks" name="graduationMarks" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
               </div>
                <Footer/>
               </>
  )
}

export default Employer