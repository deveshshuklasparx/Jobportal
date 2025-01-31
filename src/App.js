import React from "react";
import './App.css';
import Banner from "./component/Banner";
import Employee from "./component/Employee/Employee";
import Employer from "./component/Employer/Employer"
import Footer from "./component/footer/Footer";
import Contactus from "./component/Contactus/Contactus";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  
 
  return (
    <>
            <Router>
            <Routes>
            <Route path="/" element={<Banner/>}></Route>
                <Route path="/banner" element={<Banner/>}></Route>
                <Route path="/employee" element={<Employee/>} />
                <Route path="/employer" element={<Employer/>} />
                <Route path="/contactus" element={<Contactus/>} />

            </Routes>
      {/* <Banner/> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
