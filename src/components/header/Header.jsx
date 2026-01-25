import logo from "../../assets/img/logo.png";

import { NavLink } from "react-router-dom"
import "../../styles/header.css";


export const Header = ()=>{
    return (
    <header className="header">
    <img className="logo" src={logo} alt="logo"/>
        <nav className="nav-list">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
        <NavLink to="/apropos" className={({ isActive }) => (isActive ? 'active' : '')}>À propos</NavLink>
        </nav>
    </header>
    )
}