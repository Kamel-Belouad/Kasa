import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../components/header/Header";
import logo from "../../assets/img/logo.png";

test("Affichage du Header avec le logo et les liens de navigation", () =>{
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

     //LOGO
    const logoImage = screen.getByAltText("logo");
    expect (logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", logo);

    //LES LIENS
    expect(screen.getByText("Accueil").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("À propos").closest("a")).toHaveAttribute("href", "/apropos");
});

