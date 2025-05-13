import { ReactElement } from "react";
import imgHeroUrl from "../assets/imgs/img-stina-hero-web.jpg";
import img1Url from "../assets/imgs/img-stina-home-01-web.jpg";
import img2Url from "../assets/imgs/img-stina-home-02-web.jpg";
import img3Url from "../assets/imgs/img-stina-home-03-web.jpg";

export function Home(): ReactElement {
    return (
        <div className="home">
            <figure className="home-hero">
                <img
                    className="home-hero-img"
                    src={imgHeroUrl}
                    alt="Stina dancing"
                />
                <figcaption className="home-hero-credits">
                    <p>Photo: Fabian Zeidlitz</p>
                </figcaption>
            </figure>
            <section className="home-text">
                <h2>Dance Artist</h2>
                <h2>Improviser</h2>
                <h2>Choreographer</h2>
            </section>
            <section className="home-images">
                <figure className="home-image">
                    <img
                        src={img1Url}
                        alt="Stina dancing in blue dress"
                        className="home-image-pic"
                    />
                    <figcaption className="home-image-caption">
                        <p>Photo: Mykyta Hryshko</p>
                    </figcaption>
                </figure>
                <figure className="home-image">
                    <img
                        src={img2Url}
                        alt="Stina dancing in violet dress"
                        className="home-image-pic"
                    />
                    <figcaption className="home-image-caption">
                        <p>Photo: Dick Wåhlin</p>
                    </figcaption>
                </figure>
                <figure className="home-image">
                    <img
                        src={img3Url}
                        alt="Stina dancing in yellow dress"
                        className="home-image-pic"
                    />
                    <figcaption className="home-image-caption">
                        <p>Photo: Eda Emirdag</p>
                    </figcaption>
                </figure>
            </section>
        </div>
    );
}
