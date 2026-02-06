import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";

jest.mock("../../Api/PropertiesApi", () => ({
  PropertiesApi: jest.fn(() => [
    { id: "1", title: "Location 1", pictures: ["pic1.jpg"] },
    { id: "2", title: "Location 2", pictures: ["pic2.jpg"] },
    { id: "3", title: "Location 3", pictures: ["pic3.jpg"] },

  ]),
}));

describe ("Home Page", () => {
    test("image de la bannière et affichage du texte",() =>{
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const firstImage = screen.getByAltText("first image");
        expect (firstImage).toBeInTheDocument();

        const firstImageText = screen.getByText(/Chez vous, partout et ailleurs/i);
        expect (firstImageText).toBeInTheDocument();
    });

});