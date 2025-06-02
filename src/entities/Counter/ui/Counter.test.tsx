import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StateSchema } from "app/providers/storeProvider";
import { componentRender } from "shared/lib/tests/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
    const state: Partial<StateSchema> = {
        counter: { value: 1 },
    };

    test("renders correctly with initialState", () => {
        render(componentRender(<Counter />, state as StateSchema));

        const counterTitle = screen.getByTestId("counter-title");
        expect(counterTitle).toHaveTextContent("1");
    });

    test("increment", async () => {
        render(componentRender(<Counter />, state as StateSchema));

        const counterTitle = screen.getByTestId("counter-title");
        const incrementBtn = screen.getByTestId("increment-btn");
        await userEvent.click(incrementBtn);
        expect(counterTitle).toHaveTextContent("2");
    });

    test("decrement", async () => {
        render(componentRender(<Counter />, state as StateSchema));

        const counterTitle = screen.getByTestId("counter-title");
        const decrementBtn = screen.getByTestId("decrement-btn");
        await userEvent.click(decrementBtn);
        expect(counterTitle).toHaveTextContent("0");
    });
});
