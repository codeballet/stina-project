import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function NavList(): ReactElement {
    return (
        <ul className="nav-burger-list">
            <li>
                <Link to="/">
                    <h4>Home</h4>
                </Link>
            </li>
            <li>
                <Link to="/about">
                    <h4>About</h4>
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    <h4>Projects</h4>
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <h4>Contact</h4>
                </Link>
            </li>
        </ul>
    );
}
