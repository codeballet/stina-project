import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";

export function Header(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <Link
                // never open hamburger menu when link is clicked
                onClick={() =>
                    isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen)
                }
                to="/"
            >
                <h3>Stina Nilsson</h3>
            </Link>
            <Nav open={isOpen} openCallback={setIsOpen} />
        </header>
    );
}
