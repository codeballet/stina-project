import { ReactElement } from "react";
import imgHeroUrl from "../assets/img-stina-hero.jpg";

export function Home(): ReactElement {
    return (
        <div className="home">
            <figure className="home-figure">
                <img
                    className="home-figure-img"
                    src={imgHeroUrl}
                    alt="Stina dancing"
                />
                <figcaption className="home-figure-credits">
                    <p>Photographer: Fabian Zeidlitz</p>
                </figcaption>
            </figure>
            <section className="home-text">
                <h2>Dance Artist</h2>
                <h2>Improviser</h2>
                <h2>Choreographer</h2>
            </section>
        </div>
    );
}
