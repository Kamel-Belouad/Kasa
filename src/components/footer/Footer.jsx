import logo from "../../assets/img/logo.png";
import "../../styles/footer.css";

export const Footer = ()=>{
    return (
    <footer className="footer">
        <div className="footer-content">
            <img src={logo} className="logo-footer" alt="footer"/>
            <p className="footer-text"><i className="fa-regular fa-copyright"></i>2020 Kasa. All rights reserved</p>
        </div>
    </footer> 
    )
}