import { useState } from "react"

export function Collapse(props){
    const [active, setActive] = useState(false);
    const switchOpen = () => {
        setActive(!active)
    };
    return (
        <div className={`dropdown ${active ? "open" : ""}`}>
            <div className="dropdown-title" onClick={switchOpen}>
                <div className="dropdown-header">{props.title}</div>
                    <span className="dropdown-arrow-wrapper">
                        <i className="fa-solid fa-chevron-up dropdown-arrow"></i>
                    </span>            
            </div>
            <div className={`dropdown-content ${active ? "active-dropdown" : ""}`}>
                {props.children}
            </div>
        </div>
    )
}
