import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Header } from ".";

export function App(): ReactElement {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
