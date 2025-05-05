import { ReactElement } from "react";

export function Home(): ReactElement {
    return (
        <div className="home">
            <div className="header-space"></div>
            <figure>
                <img src="src/assets/img-stina-hero.jpg" alt="Stina dancing" />
            </figure>
            <section className="home-text">
                <h3>Dance Artist</h3>
                <h3>Improviser</h3>
                <h3>Choreographer</h3>
            </section>
        </div>
    );
}
