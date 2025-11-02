import mountain from "../assets/img/mountain.png"

export const Apropos = ()=>{
    return <>
        <div>
            <img src={mountain} alt="Mountain image"/>
        </div>

        <div>
            <div>
            <h2>Fiabilité</h2> 
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
            <div>
            <h2>Respect</h2>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>
            </div>
            <div>
            <h2>Service</h2>
                    <p>La qualité du service est au coeur de notre engagement chez Kasa.
                    Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>
            </div>
            <div>
            <h2>Sécurité</h2>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
    </>
}