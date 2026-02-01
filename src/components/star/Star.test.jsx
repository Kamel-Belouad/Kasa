import { render } from "@testing-library/react";
import { Star } from "./Star";

describe("Star", () => {

  test("étoile grise par défaut", () => {
    const { container } = render(<Star />);
    const star = container.querySelector("svg");
    expect(star).toHaveAttribute("color", "#E3E3E3");
  });


   test("étoile GRISE", () => {
    const { container } = render(<Star selected={false} />);
    const star = container.querySelector("svg");
    expect(star).toHaveAttribute("color", "#E3E3E3");
  });

   test("étoile rouge", () => {
    const { container } = render(<Star selected={true} />);
    const star = container.querySelector("svg");
    expect(star).toHaveAttribute("color", "#FF6060");
  });


});


