// import { Link } from "react-router"
import { NavLink } from 'react-router-dom';
import northstarFooterLogo from '../assets/Northstar IT footer logo (3).svg'
import fbIcon from '../assets/social-icons/Facebook.svg'
import xIcon from '../assets/social-icons/Twitter.svg'
import instaIcon from '../assets/social-icons/Instagram.svg'
import linkedInIcon from '../assets/social-icons/LinkedIn.svg'
import ytIcon from '../assets/social-icons/YouTube.svg'


function Copyright(){
    return(
        <div className="footer-copyright">
            <p>Copyright © 2026 Northstar IT | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        </div>
    )
}

function AreasWeServe(){
    return(
        <div className="footer-areas-we-serve">
            <p>Areas We Serve</p>
            <p>Virginia Beach</p>
            <p>Chesapeake</p>
            <p>Norfolk</p>
            <p>Suffolk</p>
            <p>Portsmouth</p>
        </div>
    )
}

function Industries(){
    return(
        <div className="footer-industries">
            <p>Industries</p>
            <p>Law Firms</p>
            <p>Accounting Firms</p>
            <p>Architecture & Engineering</p>
            <p>Construction</p>
            <p>Insurance</p>
        </div>
    )
}

function Company(){
    return(
        <div className="footer-company">
        <p>Company</p>
        <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </nav>
        </div>
    )
}

function OurServices(){
    return(
    <div className="footer-services">
        <p>Our Services</p>
        <nav>
            <a href="">IT Consulting & Strategy</a>
            <a href="">IT Modernization</a>
            <a href="">Cybersecurity</a>
            <a href="">Cloud Solutions</a>
            <a href="">Network Infrastructure</a>
            <a href="">Backup & Disaster Recovery</a>
        </nav>
    </div>
    )
}

function SocialMediaIcons(){
    return(
        <nav className="social-icons">
            <a href="">
                <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="">
                <img src={xIcon} alt="Twitter" />
            </a>
            <a href="">
                <img src={instaIcon} alt="Instagram" />
            </a>
            <a href="">
                <img src={linkedInIcon} alt="LinkedIn" />
            </a>
            <a href="">
                <img src={ytIcon} alt="YouTube" />
            </a>
        </nav>
    )
}

export default function Footer(){
    return(
        <footer>
            <div className="footer-main">
                <div className="footer-brand">
                    <img src={northstarFooterLogo}></img>
                    <p>Practical IT solutions that help<br></br> businesses work smarter, run reliably,<br></br> and grow</p>
                    <SocialMediaIcons />
                </div>
                <div className="footer-nav">
                    <OurServices />
                    <Company />
                    <Industries />
                    <AreasWeServe />
                </div>
            </div>
            <Copyright />
        </footer>
    )
}