import React from 'react';
import "./sidebr.css";
import Logo from "../../assets/logo.svg";


const Sidebr = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__manu">
          <ul className="nav__list">

            <li className="nav__items">
              <a href="#home" className="nav__link">
                <i className='icon-home'></i>
              </a>
            </li>

            <li className="nav__items">
              <a href="#about" className="nav__link">
                <i className='icon-graduation'></i>
              </a>
            </li>

            <li className="nav__items">
              <a href="#services" className="nav__link">
              <i className='icon-briefcase'></i>
              </a>
            </li>

            <li className="nav__items">
              <a href="#portfolio" className="nav__link">
              <i className='icon-note'></i>
              </a>
            </li>

            <li className="nav__items">
              <a href="#projects" className="nav__link">
              <i className='icon-layers'></i>
              </a>
            </li>

            <li className="nav__items">
              <a href="#contct" className="nav__link">
              <i className='icon-bubble'></i>
              </a>
            </li>
            
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        {/* <span className="copyright">&copy; 2023 - 2024.</span> */}
      </div>
    </aside>
  )
}

export default Sidebr
