import { TextField } from "@mui/material"

export default function CallToAction(){
    return(
        <section className="call-to-action">
            <article className="cta-inner-box">
                <form>
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

                    <button>Schedule a Consultation</button>
                </form>
            </article>
        </section>
    )
}