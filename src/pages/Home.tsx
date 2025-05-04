import { ReactElement } from "react";

export function Home(): ReactElement {
    return (
        <div className="home">
            <div className="header-space"></div>
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1684966119182-3501898e23ec?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRhbmNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Stina dancing"
                />
            </figure>
            <section className="home-text">
                <h3>Dance Artist</h3>
                <h3>Improviser</h3>
                <h3>Choreographer</h3>
            </section>
        </div>
    );
}
