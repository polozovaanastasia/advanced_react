import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithMemoryRouter } from "shared/lib/tests/renderWithTranslation/renderWithMemoryRouter";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("renders correctly", () => {
        render(renderWithTranslation(renderWithMemoryRouter(<Sidebar />)));

        const sidebar = screen.getByTestId("sidebar");
        expect(sidebar).toBeInTheDocument();
    });

    test("should collapse sidebar when toggle button is clicked", () => {
        render(renderWithTranslation(renderWithMemoryRouter(<Sidebar />)));

        const sidebar = screen.getByTestId("sidebar");
        const toggleBtn = screen.getByTestId("sidebar-toggle");

        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass("sidebar_collapsed");
    });
});
