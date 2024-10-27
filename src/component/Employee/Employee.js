// src/Employee.js
import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Employee.css'

const Employee = () => {
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            setMessage('Please select a file.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = (event) => {
            const fileData = event.target.result.split(',')[1]; // Get base64 string

            // Check if window.Email is defined
            if (!window.Email) {
                setMessage('Email service is not loaded. Please try again.');
                return;
            }
            // Sending email using SMTP.js
            window.Email.send({
                Host: "smtp.elasticemail.com", 
                Username: "deveshshukla1996@gmail.com",
                Password: "6BA27668E8AE31A41D68D836FC79F3C0F337",
                To: "srsaurabh95@gmail.com", // Use the input email
                From: "deveshshukla1996@gmail.com",
                Subject: "File Upload",
                Body: "You have received a new file.",
                Attachments: [
                    {
                        name: file.name,
                        data: fileData
                    }
                ]
            })
            .then(() => {
                setMessage('File uploaded and email sent successfully!');
                setFile(null); // Reset file after successful send
                setEmail(''); // Reset email field
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setMessage('Failed to send email. Please try again.');
            });
        };

        reader.readAsDataURL(file); // Convert file to base64
    };

    return (
      <>
      <Header/>
      <div className='employee-wrapper'>
        <div className="container">
            <h1>Upload Your File</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                {/* <input
                    type="file"
                    onChange={handleFileChange}
                    required
                /> */}
                 <div class="upload-area">
                <label for="file" class="upload-label">
                    Drag & Drop your files here or <span class="browse">Browse</span>
                    <input type="file"
                    onChange={handleFileChange}
                    required name="file" id="file"/>
                </label>
            </div>
                <button type="submit">Submit</button>
            </form>
            <div id="message">{message}</div>
        </div>

      </div>
              <Footer/></>
        
    );
};

export default Employee;
