import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes,Route } from "react-router-dom";
import { Root } from "./Root";

test("Affichage du layout Root avec Header, Outlet & Footer", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<div>Contenu Outlet</div>} />
                </Route>
            </Routes>
        </MemoryRouter>
    );

    //header
    expect (screen.getByAltText("logo")).toBeInTheDocument();

    //contenu de l'Outlet
    expect (screen.getByText("Contenu Outlet")).toBeInTheDocument();

    //footer
     expect (screen.getByText(/2020 Kasa/i)).toBeInTheDocument();

});

