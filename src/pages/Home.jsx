import seaImage from "../assets/img/sea-image.png"
import { PropertiesApi } from "../Api/PropertiesApi";
import { Link } from "react-router-dom";
import "../styles/home.css"

export function Home(){
    const locations = PropertiesApi();
    
    return <>
        <div className="image-container"> 
            <img src={seaImage} alt="first image"/>
            <div className="text-overlay">Chez vous, partout et ailleurs</div>
        </div>

        <div className="locations-container">
        {locations.map((location) => {
            return  (
            <Link key={location.id} to={`/location/${location.id}`} className="removeUnderLine">                         
                <div className="location-card">
              
                    <img className="image-card" src={location?.pictures[0]} alt="" />
                    <div className="title-card">{location.title}</div>
               
                </div>
                
            </Link>
            )
        })}
       </div>
        
    </>
}
