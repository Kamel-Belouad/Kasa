import { useState } from "react";
import "../styles/apropos.css"

export function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
 <div className={`collapse ${isOpen ? "open" : ""}`}>
  <div className="collapse-header" onClick={toggleOpen}>
    {props.title}
    <span className="dropdown-arrow-wrapper">
      <i className={`fa-solid fa-chevron-up dropdown-arrow ${isOpen ? "open" : ""}`}></i>
    </span>
  </div>
  <div className="collapse-content"> {props.children} </div>
   
 
</div>

  );
}
