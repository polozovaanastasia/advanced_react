import { render, screen } from "@testing-library/react";
import { UIButton, UIButtonType } from "./UIButton";

const defaultProps = {
    onClick: jest.fn(),
    children: "Test",
};

describe("UIButton", () => {
    test("renders correctly", () => {
        render(<UIButton {...defaultProps} />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    test("applies class based on type prop", () => {
        render(<UIButton type={UIButtonType.ROUND} {...defaultProps} />);

        const button = screen.getByRole("button");
        expect(button).toHaveClass("type-round");
    });
});
