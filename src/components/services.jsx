import strategyIcon from '../assets/service-icons/iconoir--strategy.svg'
import serverIcon from '../assets/service-icons/iconoir--server.svg'
import securityIcon from '../assets/service-icons/Password.svg'
import cloudIcon from '../assets/service-icons/arcticons--vivo-cloud.svg'
import networkIcon from '../assets/service-icons/Wifi.svg'
import databaseIcon from '../assets/service-icons/Database.svg'


function ServiceCard({iconUrl, heading, description, callToAction}){
    return(
        <article className="service-card">
            <img src={iconUrl} />
            <h3>{heading}</h3>
            <p>{description}</p>
            <p>{callToAction}</p>
        </article>
    )
}

export default function Services(){
    const services = [
        {
            iconUrl: strategyIcon, 
            heading: "IT Consulting & Strategy", 
            description: "Get expert guidance to make smarter technology decisions for your business.", 
            callToAction: "Learn More"
        },
        {
            iconUrl: serverIcon, 
            heading: "IT Modernization", 
            description: "Replace outdated technology with modern, reliable solutions.", 
            callToAction: "Learn More"
        },
        {
            iconUrl: securityIcon, 
            heading: "Cybersecurity", 
            description: "Protect your business from threats and keep sensitive data secure.", 
            callToAction: "Learn More"
        },
        {
            iconUrl: cloudIcon, 
            heading: "Cloud Solutions", 
            description: "Move your systems and data to the cloud securely and efficiently.", 
            callToAction: "Learn More"
        },
        {
            iconUrl: networkIcon, 
            heading: "Network Infrastructure", 
            description: "Build a reliable network that keeps your business connected.", 
            callToAction: "Learn More"
        },
        {
            iconUrl: databaseIcon, 
            heading: "Backup & Disaster Recovery", 
            description: "Protect critical data and recover quickly when problems arise.", 
            callToAction: "Learn More"
        }
    ]

    return(
        <section className="services">
            <div className="services-header">
                <h2>What We Do</h2>
                <p>We help businesses solve IT challenges and implement <br></br>practical solutions that make technology
                    easier to manage and support long-term growth.
                </p>
            </div>
            <div className="services-cards">
                {
                    services.map(service =>
                        <ServiceCard iconUrl={service.iconUrl}
                        heading={service.heading}
                        description={service.description}
                        callToAction={service.callToAction}/>)
                }
            </div>
        </section>
    )
}