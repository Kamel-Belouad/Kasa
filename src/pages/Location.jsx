import { useParams, Navigate } from "react-router-dom";
import { PropertiesApi } from "../Api/PropertiesApi";

export const Location = () => {
    const { id } = useParams();
    const properties = PropertiesApi(); 
      const location = properties.find(p => p.id === id); // cherche la propriété correspondant à l'id
       
        if (!properties.length) return <p>Chargement...</p>; // si les données pas encore chargées
        if (!location) return <Navigate to="/ErrorPage" />;

  return (
    <div>
        <h1>{location?.title}</h1>

        <div>
            <p>
                {location?.host?.name.split(" ")[0]}<br />
                {location?.host?.name.split(" ")[1]}
            </p>
            <div>
                  <img src={location?.host?.picture}
                    alt={"Photo of " + location?.host?.name}/>
                 
            </div>
        </div>
        <p>{location?.location}</p>
        <div>
            <div>
               {location?.tags?.map((tag, index) => (
                  <span key={index}>
                    {tag}
                  </span>
                ))} 
            </div>
        </div>
    
    </div>
  );
};
