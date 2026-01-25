import { useParams } from "react-router-dom";
import { Collapse } from "../components/Collapse";
import { PropertiesApiById } from "../Api/PropertiesApiById";
import { Navigate } from "react-router-dom";
import { Slider } from "../Components/Slider";
import { Star } from "../components/Star";
import '../styles/location.css';

const createArray = length => [...Array(length)];
const parseToInt = s => parseInt(s);

export const Location = () => {
    const locationRouteParam = useParams();
    const location = PropertiesApiById(locationRouteParam.id);

    if (!location) {
        return <Navigate to="/ErrorPage" />;
    }

    return (
        <>
            <div className="property-container">

                {location?.pictures && <Slider slides={location?.pictures} />}

                <div className="details-section">

                    {/* ----- Desktop HEADER ----- */}
                    <div className="header-row">
                        <div className="top-left">
                            <h1 className="property-title">{location?.title}</h1>
                            <p className="property-location">{location?.location}</p>
                        </div>

                        <div className="author author-desktop">
                            <p className="profil">
                                {location?.host?.name.split(" ")[0]}<br />
                                {location?.host?.name.split(" ")[1]}
                            </p>
                            <div className="author-avatar">
                                <img
                                    className="avatar"
                                    src={location?.host?.picture}
                                    alt={location?.host?.name}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ----- MOBILE Rating + Author ----- */}
                    <div className="rating-details">
                                            <div className="tags-rating">
                        <div className="tags">
                            {location?.tags?.map((tag, index) => (
                                <span className="tag" key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="rating-author-wrapper">
                        <div className="rating">
                            {createArray(5).map((_, i) => (
                                <Star
                                    key={i}
                                    selected={parseToInt(location?.rating) > i}
                                />
                            ))}
                        </div>

                        <div className="author mobile-author">
                            <p className="profil">
                                {location?.host?.name.split(" ")[0]}<br />
                                {location?.host?.name.split(" ")[1]}
                            </p>
                            <div className="author-avatar">
                                <img
                                    className="avatar"
                                    src={location?.host?.picture}
                                    alt={location?.host?.name}
                                />
                            </div>
                        </div>
                    </div>
                    </div>


                    {/* -------- COLLAPSE SECTION -------- */}
                    <div className="buttons-section">
                        <div className="collapse-wrapper">
                            <Collapse title="Description">
                                <p>{location?.description}</p>
                            </Collapse>
                        </div>

                        <div className="collapse-wrapper">
                            <Collapse title="Équipements">
                                <ul>
                                    {location?.equipments?.map((equip, i) => (
                                        <li key={i}>{equip}</li>
                                    ))}
                                </ul>
                            </Collapse>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
