import React from 'react'
import './Employee.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Employee = () => {
  return (
    <>
    <Header/>
    <div class="employee-wrapper ">
      <div className="container">
        <h1>Upload Your File</h1>
        <form action="#" method="post" enctype="multipart/form-data">
            <div class="upload-area">
                <label for="file" class="upload-label">
                    Drag & Drop your files here or <span class="browse">Browse</span>
                    <input type="file" name="file" id="file" required/>
                </label>
            </div>
            <button type="submit">Upload</button>
        </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Employee