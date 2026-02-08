import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Location } from "./Location";


jest.mock("../../Api/PropertiesApiById", () => ({
    PropertiesApiById: jest.fn((id) => {
        if (id === "c67ab8a7") {
            return{
                id:"c67ab8a7",
                title:"Appartement cosy",  
                location: "Ile de France - Paris 17e",
            };
        }
        return null;
    }),
}));

describe("Location Page", () => {
    test("Vérifier que le titre et la localisation de location sont bien affichés ",() => {
        render (
            <MemoryRouter initialEntries={["/location/c67ab8a7"]}>
                <Routes>
                    <Route path="/location/:id" element ={<Location />} />
                </Routes>
            </MemoryRouter>
        );

        const locationTitle = screen.getByText("Appartement cosy");
        expect (locationTitle).toBeInTheDocument();

        const locationZone = screen.getByText("Ile de France - Paris 17e");
        expect (locationZone).toBeInTheDocument();
    
    });
    test ("redirection vers la page 404 au cas ou la location n'existe pas", () =>{
        render(
            <MemoryRouter initialEntries={["/location/error-id"]}>
                <Routes>
                    <Route path="/location/:id" element={<Location />} />
                    <Route path="/errorPage" element = {<div>Page d'erreur 404</div>} />
                </Routes>
            </MemoryRouter>
        );
        const errorPage =screen.getByText("Page d'erreur 404");
        expect (errorPage).toBeInTheDocument();
    });
});