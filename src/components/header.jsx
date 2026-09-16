import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import logo from '../assets/header-logo/Northstar IT (2).svg'

export default function Header(){
    const[menuOpen, setMenuOpen] = useState(false)
    
    return(
        <nav className="navbar">
        <div className='nav-header'>
            <img src={logo}
            alt="the northstar next to the company name Northstar IT" />
            <div className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon />
            </div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li key="home">Home</li>
            <li key="about">About</li>
            <li key="services">Services</li>
            <li key="contact">Contact</li>
            <button>Schedule a Consultation</button>
        </ul>
        
        </nav>
    )
}