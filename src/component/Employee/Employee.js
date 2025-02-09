import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Employee.css";
import upload from "./../../assets/images/upload.png";

const Employee = () => {
    const [email, setEmail] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedFileUrl, setUploadedFileUrl] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setFileName(file ? file.name : ""); 
    };

    const uploadFileToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "your_upload_preset"); 

        try {
            setIsUploading(true);
            const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || "Upload failed");
            }

            setUploadedFileUrl(data.secure_url); // Store uploaded file URL
            setIsUploading(false);
            return data.secure_url;
        } catch (error) {
            console.error("Cloudinary upload error:", error.message);
            alert("File upload failed: " + error.message);
            setIsUploading(false);
            return null;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Please upload a file.");
            return;
        }

        const fileUrl = await uploadFileToCloudinary(selectedFile);
        if (!fileUrl) {
            alert("File upload failed.");
            return;
        }

        const templateParams = {
            user_email: email,
            file_url: fileUrl,
        };

        try {
            await emailjs.send(
                "service_gjtuzkc",
                "template_91n1g3p",
                templateParams,
                "JK5QJLC-gN2Iow_Q6"
            );
            alert("File sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email.");
        }
    };

    return (
        <>
            <Header />
            <div className="employee-wrapper">
                <div className="container">
                    <div className="upload-left">
                        <h1>Upload Your File</h1>
                        <img src={upload} alt="Job Seeker" className="job-seeker" />
                    </div>
                    <form className="upload-right-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            name="email"
                        />
                        <div className="upload-area">
                            <label htmlFor="file" className="upload-label">
                                Drag & Drop your files here or <span className="browse">Browse</span>
                                <input type="file" required name="file" id="file" onChange={handleFileChange} />
                                {fileName && (
                            <p className="file-name">
                                <strong>Selected File:</strong> {fileName}
                            </p>
                        )}
                            </label>
                        </div>

                        

                        {uploadedFileUrl && (
                            <p className="file-link">
                                <strong>Uploaded File:</strong> 
                                <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer">
                                    {fileName}
                                </a>
                            </p>
                        )}

                        <button type="submit" disabled={isUploading}>
                            {isUploading ? "Uploading..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Employee;
