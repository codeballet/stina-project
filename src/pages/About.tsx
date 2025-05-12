import { ReactElement } from "react";
import imgAboutUrl from "../assets/imgs/img-stina-about-web.jpg";

export function About(): ReactElement {
    return (
        <div className="about">
            <article className="about-content">
                <h2 className="about-content-title">About</h2>
                <section className="about-content-paragraphs">
                    <p>
                        Stina Nilsson is a dancer, choreographer and improviser.
                        She graduated from The Danish National School of
                        Contemporary Dance in 2009. Her artistic practice is
                        based on improvisation and interdisciplinary
                        collaborations ranging from solo works to larger
                        collectives and groups. Improvisational practices are
                        the foundation of her artistic research as well as her
                        performative expression. Since the beginning of the
                        2010’s Stina is active in the Berlin scene for
                        improvised dance and music.
                    </p>
                    <p>
                        Since 2017, Stina is based in Jönköping, Sweden, where
                        she is a very active organizer and initiator of the
                        alternative performing arts scene. Stina has been
                        creating improvisation festivals, projects, workshops
                        and performances together with local and international
                        dancers, poets, painters, musicians and light artists.
                    </p>
                    <p>
                        Stina has a strong interest for stillness and listening
                        in her movement practice. She is often drawn to
                        existential themes like suffering, death and
                        impermanence.
                    </p>
                    <p>
                        Stina is creating a close relationship between the dance
                        and the audience by bringing dance to local places and
                        people in her surroundings. She often works site
                        specific and has performed at galleries, museums, shops,
                        churches, nursing homes, hospitals, squares, benches,
                        streets, forests and an old mine.
                    </p>
                    <p>
                        Since many years, Stina has an ongoing artistic exchange
                        between Berlin and Jönköping; performing in Berlin
                        regularly and inviting Berlin collaborators to Sweden.
                        She is also working with the Ukrainian art collective
                        Mycelium since 2023.
                    </p>
                    <p>
                        Stina’s work has been supported by Culture Moves Europe,
                        Swedish Arts Grants Committee, Swedish Arts Council,
                        Jönköping county and Jönköping Municipality as well as
                        privat funds and culture associations.
                    </p>
                </section>
            </article>
            <figure className="about-figure">
                <div className="about-figure-container">
                    <img
                        className="about-figure-img"
                        src={imgAboutUrl}
                        alt="Stina dancing"
                    />
                    <figcaption className="about-figure-credits">
                        <p>Photographer: Fabian Zeidlitz</p>
                        <p>From performance OH10.</p>
                        <p>
                            Light projections: Evelina Dembacke, Helena Boström.
                        </p>
                        <p>Dance: Rebecca Lång, Stina Nilsson.</p>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}
