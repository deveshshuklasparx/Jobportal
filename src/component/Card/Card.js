import React from 'react'
import './Card.css'
import workImg from "./../../../src/assets/images/work.png"
import workExpImg from "./../../../src/assets/images/work-exp.png"

const Card = () => {
  return (
    <>
    <div className="card-sections-wrap container">
               <figure>
                  <img className="blob-img" alt="work-image" src={workImg}/>
               </figure>
               <div className="right-card">
                  
                  <h2 className="card-heading">
                     No software needed
                  </h2>
                  <p className="card-para">All our scanners are plug and play. You don’t need to download or install any
                     software or apps with any of our scanners.</p>
               </div>
    </div>
    <div className="card-sections-wrap container">
               <figure>
                  <img className="blob-img" alt="working-men" src={workExpImg}/>
               </figure>
               <div className="right-card">
                  
                  <h2 className="card-heading">
                     No software needed
                  </h2>
                  <p className="card-para">All our scanners are plug and play. You don’t need to download or install any
                     software or apps with any of our scanners.</p>
               </div>
    </div>
    </>
)
}

export default Card