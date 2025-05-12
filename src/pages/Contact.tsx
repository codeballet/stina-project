import { ReactElement } from "react";
import { Link } from "react-router-dom";
import cvpdf from "../assets/cv-stina.pdf";
import imgContactUrl from "../assets/imgs/img-stina-contact-web.jpg";

export function Contact(): ReactElement {
    return (
        <div className="contact">
            <article className="contact-content">
                <h2>Contact</h2>
                <p>stina.margareta.nilsson@gmail.com</p>
                <p>Instagram: @stinadansar</p>
                <div className="contact-download">
                    <Link
                        to={cvpdf}
                        download="cv-stina-nilsson"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="contact-button">Download CV</button>
                    </Link>
                </div>
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
