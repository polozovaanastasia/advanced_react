import { render, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Navbar } from "./Navbar";

const defaultProps = {};

describe("Navbar", () => {
    test("renders correctly", () => {
        render(renderWithTranslation(<Navbar {...defaultProps} />));

        const navbar = screen.getByTestId("navbar");
        expect(navbar).toBeInTheDocument();
    });
});
