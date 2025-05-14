import { render, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import { Navbar } from "./Navbar";

const defaultProps = {};

describe("Navbar", () => {
    test("renders correctly", () => {
        render(componentRender(<Navbar {...defaultProps} />));

        const navbar = screen.getByTestId("navbar");
        expect(navbar).toBeInTheDocument();
    });
});
