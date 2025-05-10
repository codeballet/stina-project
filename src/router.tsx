import { createBrowserRouter } from "react-router-dom";
import { App } from "./components";
import { About, Contact, Error, Home, NotFound, Projects } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "/projects",
                element: <Projects />,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />,
            },
            {
                path: "/*",
                element: <NotFound />,
                errorElement: <Error />,
            },
        ],
    },
]);
