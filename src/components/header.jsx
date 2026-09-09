export default function Header(){
    return(
        <>
        <nav className="navbar">
        <img src="src\assets\header-logo\Northstar IT (2).svg"
        alt="the northstar next to the company name Northstar IT" />
        <ul>
            <li key="home">Home</li>
            <li key="about">About</li>
            <li key="services">Services</li>
            <li key="contact">Contact</li>
            <button>Schedule a Consultation</button>
        </ul>
        </nav>
        </>
    )
}