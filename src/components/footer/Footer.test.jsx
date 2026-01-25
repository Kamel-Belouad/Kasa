import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import logo from "../../assets/img/logo.png";

test("Affichage du footer avec le logo et le texte", () => {
    render(
        <Footer />
    );

    //LOGO image footer
    const logoFooter = screen.getByAltText("footer");
    expect (logoFooter).toBeInTheDocument();
    expect (logoFooter).toHaveAttribute("src", logo);

    //Texte du footer
    expect (screen.getByText(/2020 Kasa\. All rights reserved/i)).toBeInTheDocument();
});

