import { MemoryRouter } from "react-router-dom";

export const renderWithMemoryRouter = (component: React.ReactNode) => {
    return <MemoryRouter>{component}</MemoryRouter>;
};
