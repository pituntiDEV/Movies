import React from 'react'
import "./ScreeShot.scss";
export const ScreeShot = () => {
  return (
    <div className="screeShot">
    <h2>ScreeShot</h2>
     <div className='image-container container'>
        <img src="/assets/screenshot-1.jpg" alt="" />
        <img src="/assets/screenshot-2.jpg" alt="" />
        <img src="/assets/screenshot-3.jpg" alt="" />
        <img src="/assets/screenshot-4.jpg" alt="" />
     </div>
    </div>
  )
}
