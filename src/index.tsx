import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/storeProvider";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import App from "./app/App";
import { ThemeProvider } from "./app/providers/theme";

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);
    root.render(
        <StoreProvider>
            <ErrorBoundary>
                <BrowserRouter>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </StoreProvider>
    );
}
