import Hero from "../components/hero";
import Industries from "../components/industries";
import Testimonials from "../components/testimonials";
import ClientResults from "../components/clientResults";
import Services from "../components/services";
import CallToAction from "../components/callToAction";

export default function Home(){
    return(
        <>
        <Hero />
        <Industries />
        <Testimonials />
        <ClientResults />    
        <Services />    
        <CallToAction />
        </>
    )
}