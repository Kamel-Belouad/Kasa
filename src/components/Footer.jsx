import logo from "../assets/logo.png"
export const Footer = ()=>{
    return (
    <footer>
        <div>
            <img src={logo}  alt="footer"/>
            <p><i className="fa-regular fa-copyright"></i>2020 Kasa. All rights reserved</p>
        </div>
    </footer> 
    )
}