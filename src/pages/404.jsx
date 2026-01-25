import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Link } from "react-router-dom"
import "../styles/404.css"

export const ErrorPage = () => {
    return (
        <>
            <Header />
            <main className="error-page">
                <div className="error-container">
                    <h1 className="error-code">404</h1>
                    <p className="error-message">
                        Oups! La page que <span className="line-break"><br /></span> 
                        vous demandez n'existe pas.
                    </p>
                    <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}
