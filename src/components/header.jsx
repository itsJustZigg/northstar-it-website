import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import logo from '../assets/header-logo/Northstar IT (180 x 110 px).svg'
import { NavLink } from 'react-router-dom';

export default function Header(){
    const[menuOpen, setMenuOpen] = useState(false)
    

    function scrollToForm(formId){
        const element = document.getElementById(formId)
        if(element){
            element.scrollIntoView({ behavior: 'smooth'})
        }
    }


    return(
        <>
        <nav className="navbar">
        <div className='nav-header'>
            <img src={logo}
            alt="the northstar next to the company name Northstar IT" />
            <div className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon />
            </div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li key="home">
                <NavLink to="/"
                >
                <span>Home</span>
                </NavLink>
            </li>
            <li key="about">
                <NavLink to="/about"
                >
                <span>About</span>
                </NavLink>
            </li>
            <li key="services">
                <NavLink to="/services"
                >
                <span>Services</span>
                </NavLink>
            </li>
            <li key="contact">
                <NavLink to="/contact"
                >
                <span>Contact</span>
                </NavLink>
            </li>
            <button onClick={() => scrollToForm('contact-form')}>Schedule a Consultation</button>
        </ul>
        </nav>
        <div className={`nav-overlay ${menuOpen ? "active": ""}`}
        onClick={() => setMenuOpen(false)}></div>
        </>
    )
}