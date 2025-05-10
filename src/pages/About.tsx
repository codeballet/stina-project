import { ReactElement } from "react";

export function About(): ReactElement {
    return (
        <div className="about">
            <article className="about-content">
                <h2>About</h2>
                <p>
                    Stina Nilsson excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris. Duis aute irure dolor in reprehenderit in
                    voluptate.
                </p>
                <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </article>
            <figure className="about-figure">
                <div className="about-figure-container">
                    <img
                        className="about-figure-img"
                        src="https://plus.unsplash.com/premium_photo-1684966119369-c8fb5f1540b9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxkYW5jZXJ8ZW58MHx8MHx8fDA%3D"
                        alt="Stina dancing"
                    />
                    <figcaption className="about-figure-credits">
                        <p>Photographer: Some Photographer</p>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}
