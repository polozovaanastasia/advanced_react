import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

function AppRouter() {
    const routes = Object.values(routeConfig);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
