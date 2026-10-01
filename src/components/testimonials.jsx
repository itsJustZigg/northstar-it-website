import { useState } from "react"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import sarahProfile from '../assets/testimonial-profile-pics/nussbaum-law-IOvsEAEjnDE-unsplash.jpg'
import davidProfile from '../assets/testimonial-profile-pics/lucas-favre-_kwpH8O-dNo-unsplash.jpg'
import jennProfile from '../assets/testimonial-profile-pics/podmatch-2mMhaoBGjCs-unsplash.jpg'


function TestimonialCard({profileUrl, name, jobTitle, review}){
    return(
        <>
        <article className="testimonial-card">
            <div className="testimonial-profile">
                <img src={profileUrl}
                    alt="profile picture of business owner who left a review for Northstar IT"/>
                <div className="testimonial-profile-info">
                    <h3>{name}</h3>
                    <h5>{jobTitle}</h5>
                </div>
            </div>
            <p>{review}</p>
        </article>
        </>
    )
}

export default function Testimonials(){
    const testimonials = [
        {profileUrl: sarahProfile, name: "Sarah Mitchell", jobTitle: "Managing Partner, Mitchell & Associates", review: '"Northstar IT replaced several outdated systems and made the transition seamless. We finally have technology we can rely on."'},
        {profileUrl: davidProfile, name: "David Reynolds", jobTitle: "Operations Director, Harbor Design Group", review: '"Northstar IT helped us standardize our accounts, devices, and software. Onboarding new employees is now much simpler."'},
        {profileUrl: jennProfile, name: "Jennifer Carter", jobTitle: "Office Manager, Carter & Cole CPAs", review: '"Northstar IT identified our biggest cybersecurity gaps and helped us put practical protections in place— without disrupting our workflow."'}
    ]
    
    return(
        <>
        <section className="testimonials">
        <div className="testimonials-gallery">
            {testimonials.map(item => <TestimonialCard profileUrl={item.profileUrl}
            name={item.name}
            jobTitle={item.jobTitle}
            review={item.review}></TestimonialCard>)}
        </div>

        <div className="carousel-container">
               <div className="carousel-buttons">
                   <ArrowCircleLeftIcon fontSize="large" /> <ArrowCircleRightIcon fontSize="large"/>
               </div>
                    {testimonials.map(item => <TestimonialCard profileUrl={item.profileUrl}
                    name={item.name}
                    jobTitle={item.jobTitle}
                    review={item.review}></TestimonialCard>)}
           </div>
        </section>
        
        </>
    )
}