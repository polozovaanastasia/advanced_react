import { fireEvent, render, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("renders correctly", () => {
        render(componentRender(<Sidebar />));

        const sidebar = screen.getByTestId("sidebar");
        expect(sidebar).toBeInTheDocument();
    });

    test("should collapse sidebar when toggle button is clicked", () => {
        render(componentRender(<Sidebar />));

        const sidebar = screen.getByTestId("sidebar");
        const toggleBtn = screen.getByTestId("sidebar-toggle");

        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass("sidebar_collapsed");
    });
});
