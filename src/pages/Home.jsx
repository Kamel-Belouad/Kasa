import seaImage from "../assets/img/sea-image.png"
import { PropertiesApi } from "../api/PropertiesApi"
import { Link } from "react-router-dom";
export function Home(){
    const locations = PropertiesApi();
    
    return <>
        <div>
            <img src={seaImage} alt="first image"/>
            <div>Chez vous, partout et ailleurs</div>
        </div>
        
        {locations.map((location) => {
            return  (
            <Link to={`/location/${location.id}`}>                         
                <div>
                    <img src={location?.pictures[0]} alt="" />
                    <div>{location.title}</div>
                </div>
            </Link>
            )
        })}
       
        
    </>
}
