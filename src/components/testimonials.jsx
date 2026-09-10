import { useState } from "react"

function TestimonialCard({profileUrl, name, jobTitle, review}){
    return(
        <>
        <article className="testimonial-card">
            <img src={profileUrl} 
            alt="profile picture of business owner who left a review for Northstar IT"/>
            <h3>{name}</h3>
            <h4>{jobTitle}</h4>
            <p>{review}</p>
        </article>
        </>
    )
}

export default function Testimonials(){
    const testimonials = [
        {profileUrl: "", name: "Sarah Mitchell", jobTitle: "Managing Partner, Mitchell & Associates", review: "Northstar IT replaced several outdated systems and made the transition seamless. We finally have technology we can rely on."},
        {profileUrl: "", name: "David Reynolds", jobTitle: "Operations Director, Harbor Design Group", review: "Northstar IT helped us standardize our accounts, devices, and software. Onboarding new employees is now much simpler."},
        {profileUrl: "", name: "Jennifer Carter", jobTitle: "Office Manager, Carter & Cole CPAs", review: "Northstar IT identified our biggest cybersecurity gaps and helped us put practical protections in place— without disrupting our workflow."}
    ]
    
    return(
        <section className="testimonials">
        {testimonials.map(item => <TestimonialCard profileUrl={item.profileUrl} 
        name={item.name} 
        jobTitle={item.jobTitle}
        review={item.review}></TestimonialCard>)}
        </section>
    )
}