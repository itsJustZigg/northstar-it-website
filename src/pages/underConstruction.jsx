import ConstructionIcon from '@mui/icons-material/Construction';

export default function UnderConstruction(){
    return(
    <div className="under-construction-container">
        <ConstructionIcon sx={{ fontSize: 400}}/>
        <h1>Sorry, this page is still under construction. Come back soon!</h1>
    </div>
    )
}