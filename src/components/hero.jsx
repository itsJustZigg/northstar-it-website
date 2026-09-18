import heroImage from '../assets/hero-image/vitaly-gariev-E65p9f63Iv0-unsplash.jpg'

export default function Hero(){
    function scrollToForm(formId){
        const element = document.getElementById(formId)
        if(element){
            element.scrollIntoView({ behavior: 'smooth'})
        }
    }
    
    return(
    <section className="hero">
        <div className="hero-content">
            <h1>Technology that<br></br>works for your<br></br>business</h1>
            <p>Northstar IT helps growing businesses modernize their technology,<br></br>
                strengthen security, and build reliable IT systems that support their<br></br>
                goals.
            </p>
            <button onClick={() => scrollToForm('contact-form')}>Schedule a Consultation</button>
        </div>
        <div className="hero-img">
        <img src={heroImage}
        alt="IT consultant sitting down with client to discuss their IT needs"
        />
        </div>
    </section>
    )
}