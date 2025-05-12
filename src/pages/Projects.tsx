import { ReactElement } from "react";
import { projects } from "../data";
import { IProject } from "../interfaces";

export function Projects(): ReactElement {
    return (
        <div className="projects">
            <article className="projects-content">
                <h2 className="projects-title">Projects</h2>
                <section className="projects-cards">
                    {projects.map((project: IProject) => (
                        <div className="card">
                            <figure className="card-figure">
                                <img
                                    src={project.img}
                                    alt=""
                                    className="card-img"
                                />
                                <figcaption className="card-img-credits">
                                    <p>{project.credits}</p>
                                </figcaption>
                            </figure>
                            <article className="card-article">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-info">{project.info}</p>
                            </article>
                        </div>
                    ))}
                </section>
            </article>
        </div>
    );
}
