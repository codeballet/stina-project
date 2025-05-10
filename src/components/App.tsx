import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Header } from ".";

export function App(): ReactElement {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
        </>
    );
}
