function Result({resultNumber, resultLabel}){
    return(
        <>
        <dt>{resultNumber}</dt>
        <dd>{resultLabel}</dd>
        </>
    )
}

export default function ClientResults(){
    const results = [
        {resultNumber: "99%", resultLabel: "Customer Satisfaction"},
        {resultNumber: "152+", resultLabel: "Systems Upgraded"},
        {resultNumber: "125+", resultLabel: "Businesses Supported"},
        {resultNumber: "400+", resultLabel: "IT Issues Resolved"}
    ]
    
    return(
        <section>
            <h2>Our Results in Numbers</h2>
            <p>From improving everyday workflows to strengthening IT infrastructure, we help businesses get more from their technology.</p>
            <dl>
                {results.map(item => <Result resultNumber={item.resultNumber} resultLabel={item.resultLabel}/>)}
            </dl>
        </section>
    )
}