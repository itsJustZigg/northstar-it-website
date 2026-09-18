import { TextField } from "@mui/material"
import { useState } from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function CallToAction(){
    const[submitted, setSubmitted] = useState(false)


    function submitForm(e){
        e.preventDefault()
        setSubmitted(true)
    }
    
    return(
        <section className="call-to-action">
            <article className="cta-inner-box">
            {!submitted ? (
                <form id="contact-form">
                    <h1>Ready to solve your <br></br>technology challenges?</h1>
                    <TextField label="Full Name" variant="standard" margin="normal"></TextField>
                    <TextField label="Business Name" variant="standard" margin="normal"></TextField>
                    <TextField label="Email Address" variant="standard" margin="normal"></TextField>
                    <TextField label="Phone Number" variant="standard" margin="normal"></TextField>
                    <TextField label="What Can We Help You With?" 
                    variant="outlined" 
                    multiline
                    minRows={6}
                    maxRows={10}
                    margin="normal"></TextField>

                    <button onClick={submitForm}>Submit</button>
                </form>
            ) : (<div className="thanks-message"><CheckCircleIcon /> 
                    <h2>Thanks for Reaching Out! Someone will contact you shortly.</h2>
                </div>

            )}
            </article>
        </section>
    )
}