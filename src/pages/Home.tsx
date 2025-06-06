import { ReactElement } from "react";
import img1Url from "../assets/imgs/img-stina-home-01-web.jpg";

export function Home(): ReactElement {
    return (
        <div className="home">
            <figure className="home-hero">
                <h2 className="home-hero-title">Dance Artist</h2>
                <img
                    className="home-hero-img"
                    src={img1Url}
                    alt="Stina dancing in blue dress"
                />
                <figcaption className="home-hero-credits">
                    <p>Photo: Mykyta Hryshko</p>
                </figcaption>
            </figure>
        </div>
    );
}
