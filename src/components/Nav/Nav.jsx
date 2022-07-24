import React, { useState } from 'react'
import "./Nav.scss";
export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      {openMenu && <div className="menu">
        <div className="links-container">
        <div className="btn-close" onClick={()=>setOpenMenu(false)}><i class="fa-solid fa-xmark"></i></div>
          <div className="links">
            <p>Home</p>
            <p>Genre</p>
            <p>TV Shows</p>
            <p>Movies</p>
          </div>
        </div>
      </div>}
      <div className="nav">
        <div className="left-side">
          <i class="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
          <h1>MOVIES
            <small>.HD</small>
          </h1>
        </div>

        <div className="search">
          <input type="text" placeholder='search movie' name="" id="" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

    </>

  )
}
