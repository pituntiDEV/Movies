import React from 'react'
import "./Dowload.scss"
export const Dowload = () => {
  return (
    <div>
        <div className='server-container'>
            <div className='server'>
                <p>Server1</p>
                <p>English</p>
                <p>480p</p>
                <p className='btn-download'>Dowload</p>
            </div>
            <div className='server'>
                <p>Server2</p>
                <p>English</p>
                <p>720p</p>
                <p className='btn-download'>Dowload</p>
            </div>
            <div className='server'>
                <p>Server3</p>
                <p>English</p>
                <p>1080p</p>
                <p className='btn-download'>Dowload</p>
            </div>
            <div className='server'>
                <p>Server4</p>
                <p>English</p>
                <p>4K</p>
                <p className='btn-download'>Dowload</p>
            </div>
        </div>
    </div>
  )
}
