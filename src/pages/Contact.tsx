import { ReactElement } from "react";
import imgContactUrl from "../assets/imgs/img-stina-contact-web.jpg";

export function Contact(): ReactElement {
    return (
        <div className="contact">
            <article className="contact-content">
                <h2>Contact</h2>
                <a
                    className="contact-details"
                    href="mailto:stina.margareta.nilsson@gmail.com?subject=Website inquiry"
                >
                    stina.margareta.nilsson@gmail.com
                </a>
                <a
                    className="contact-details"
                    href="https://www.instagram.com/stinadansar/"
                >
                    Instagram: @stinadansar
                </a>
            </article>
            <figure className="contact-figure">
                <img
                    className="contact-figure-img"
                    src={imgContactUrl}
                    alt="Stina dancing"
                />
                <figcaption className="contact-figure-credits">
                    <p>Photo and light design: Evelina Dembacke</p>
                </figcaption>
            </figure>
        </div>
    );
}
