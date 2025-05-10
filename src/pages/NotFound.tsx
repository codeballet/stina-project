import { ReactElement } from "react";

export function NotFound(): ReactElement {
    return (
        <section className="not-found">
            <h2 className="not-found-title">404 page not found!</h2>
            <p>Please try one of the links from the navigation menu instead.</p>
        </section>
    );
}
