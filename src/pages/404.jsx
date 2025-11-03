import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const ErrorPage = ()=>{
    return <>
    <Header/>
    <main>
        <div>
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas</p>
            <button>Retourner sur la page d'accueil</button>
        </div>
    </main>
   
    <h1>ERROR 404</h1>
    <Footer/>
    </>
}