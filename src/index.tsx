import { createRoot } from "react-dom/client";
import { Counter } from "./components/counter";

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<Counter />);
}
