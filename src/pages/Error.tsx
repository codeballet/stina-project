import { ReactElement } from "react";
import { useRouteError } from "react-router-dom";

export function Error(): ReactElement {
    const error = useRouteError();
    console.log(error);

    return (
        <section className="error">
            <h2 className="error-title">
                An error occurred while loading the page!
            </h2>
        </section>
    );
}
