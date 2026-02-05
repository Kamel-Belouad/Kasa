import { render, screen,fireEvent } from "@testing-library/react";
import { Slider } from "./Slider";

describe("Slider", () => {
    test("affiche d'une seule image sans les fleches si slides.length=1", ()  => {
        const slides = ["image1.jpg"];

        render(
            <Slider slides={slides} />
        );

        const image = screen.getByAltText("image");
        expect (image).toBeInTheDocument();

        expect(screen.queryByAltText("left arrow")).not.toBeInTheDocument();
        expect(screen.queryByAltText("right-arrow")).not.toBeInTheDocument();
        expect(screen.queryByText("1/1")).not.toBeInTheDocument();

    })

    test("affiche les flèches si plusieurs images", () => {
        const slides = ["img1.jpg", "img2.jpg", "img3.jpg"];
        render(
            <Slider slides={slides} />
        );

        expect(screen.getByAltText("left arrow")).toBeInTheDocument();
        expect(screen.getByAltText("right-arrow")).toBeInTheDocument();
    })
    test("affiche le compteur si plusieurs images", () => {
        const slides = ["img1.jpg", "img2.jpg", "img3.jpg"];

        render(
        <Slider slides={slides} />
    );

        expect(screen.getByText("1/3")).toBeInTheDocument();
});
test("clic sur right arrow et affichage de l'image suivante ", () =>{
    const slides = ["img1.jpg", "img2.jpg", "img3.jpg"];
       
        render(
        <Slider slides={slides} />
    );

    expect(screen.getByText("1/3")).toBeInTheDocument();

    const rightArrow = screen.getByAltText("right-arrow");
    fireEvent.click(rightArrow);
    expect(screen.getByText("2/3")).toBeInTheDocument();

    
});
test("clic sur left arrow et affichage de l'image précédene", () => {
    const slides = ["img1.jpg", "img2.jpg", "img3.jpg"];
    render(
        <Slider slides={slides} />
    );
    expect(screen.getByText("1/3")).toBeInTheDocument();

    const leftArrow = screen.getByAltText("left arrow");
    fireEvent.click(leftArrow);
    expect(screen.getByText("3/3")).toBeInTheDocument();

});


});