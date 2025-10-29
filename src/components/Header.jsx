import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"

export const Header = ()=>{
    return (
    <header>
    <img src={logo} alt="logo"/>
        <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
        <NavLink to="/apropos" className={({ isActive }) => (isActive ? 'active' : '')}>A propos</NavLink>
        </nav>
    </header>
    )
}