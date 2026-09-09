import { Link } from "react-router"

function Copyright(){
    return(
        <>
        <p>Copyright © 2026 Northstar IT | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        </>
    )
}

function AreasWeServe(){
    return(
        <>
        <p>Areas We Serve</p>
        <p>Virginia Beach</p>
        <p>Chesapeake</p>
        <p>Norfolk</p>
        <p>Suffolk</p>
        <p>Portsmouth</p>
        </>
    )
}

function Industries(){
    return(
        <>
        <p>Industries</p>
        <p>Law Firms</p>
        <p>Accounting Firms</p>
        <p>Architecture & Engineering</p>
        <p>Construction</p>
        <p>Insurance</p>
        </>
    )
}

function Company(){
    return(
        <>
        <p>Company</p>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
        </nav>
        </>
    )
}

function OurServices(){
    return(
    <>
        <p>Our Services</p>
        <nav>
            <a href="">IT Consulting & Strategy</a>
            <a href="">IT Modernization</a>
            <a href="">Cybersecurity</a>
            <a href="">Cloud Solutions</a>
            <a href="">Network Infrastructure</a>
            <a href="">Backup & Disaster Recovery</a>
        </nav>
    </>
    )
}

function SocialMediaIcons(){
    return(

        <nav>
            <a href="">
                <img src="" alt="Facebook" />
            </a>
            <a href="">
                <img src="" alt="Twitter" />
            </a>
            <a href="">
                <img src="" alt="Instagram" />
            </a>
            <a href="">
                <img src="" alt="LinkedIn" />
            </a>
            <a href="">
                <img src="" alt="YouTube" />
            </a>
        </nav>
    )
}

export default function Footer(){
    return(
        <footer>
            <img src="src\assets\Northstar IT footer logo (3).svg"></img>
            <p>Practical IT solutions that help businesses work smarter, run reliably, and grow</p>
            <SocialMediaIcons />
            <OurServices />
            <Company />
            <Industries />
            <AreasWeServe />
            <Copyright />
        </footer>
    )
}