import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import App from "./app/App";
import { ThemeProvider } from "./app/providers/theme";

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);
    root.render(
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    );
}
