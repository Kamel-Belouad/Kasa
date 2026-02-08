import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Location } from "./Location";
import { PropertiesApiById } from "../../Api/PropertiesApiById";

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
