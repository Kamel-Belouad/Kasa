import { render, screen, fireEvent } from "@testing-library/react";
import { Collapse } from "./Collapse";

const testTitle = "Description";
const TestContent = "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.";

describe("Collapse", () => {


  test("affichage du titre et du contenu caché par défaut", () => {
 render(
      <Collapse title={testTitle} initialOpen={true}>
        <div>{TestContent}</div>
      </Collapse>
    );

    expect(screen.getByText(testTitle)).toBeInTheDocument();

    const content = screen.getByText(TestContent);
    expect(content).toBeInTheDocument();
    expect(content.parentElement).not.toHaveClass("active-dropdown");
  });

  test("ouverture et fermeture du contenu au clic", () => {
    render(
      <Collapse title={testTitle} initialOpen={true}>
        <div>{TestContent}</div>
      </Collapse>
    );

  const title = screen.getByText(testTitle);
  const content = screen.getByText(TestContent);


  expect(content.parentElement).not.toHaveClass("active-dropdown");

 
  fireEvent.click(title);
  expect(content.parentElement).toHaveClass("active-dropdown");


  fireEvent.click(title);
  expect(content.parentElement).not.toHaveClass("active-dropdown");
});

  });
