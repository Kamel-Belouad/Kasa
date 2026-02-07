import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
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
    test("affichage des cartes image+titre", () => {
        render (
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(3);

        const image = screen.getByAltText("Location 1");
        expect(image).toHaveAttribute("src", "pic1.jpg");


        const title = screen.getByText("Location 1");
        expect(title).toBeInTheDocument();
    });
    test("VERIFIER SI LE CLIC SUR UNE CARTE MENE BIEN A LA PAGE DE LA LOCATION", async () => {
        render(
        <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/location/:id" element ={<div>Page de Location</div>}/>
                </Routes>
        </MemoryRouter>
        );

        const cardLocation1 = screen.getByText("Location 1").closest("a");
        expect (cardLocation1).toBeInTheDocument();

        await userEvent.click(cardLocation1);

        const locationPage = screen.getByText("Page de Location");
        expect (locationPage).toBeInTheDocument();
    });

});