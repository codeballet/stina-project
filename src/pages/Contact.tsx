import { ReactElement } from "react";
import { Link } from "react-router-dom";
import cvpdf from "../assets/cv-stina.pdf";

export function Contact(): ReactElement {
    return (
        <div className="contact">
            <article className="contact-content">
                <h2>Contact</h2>
                <p>stina.nilsson@email.com</p>
                <p>+46 762 1111</p>
            </article>
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1684966119369-c8fb5f1540b9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxkYW5jZXJ8ZW58MHx8MHx8fDA%3D"
                    alt="Stina dancing"
                />
            </figure>

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
        </div>
    );
}
