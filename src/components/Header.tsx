import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";

export function Header(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <Link
                // close hamburger menu when link is clicked
                onClick={() =>
                    isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen)
                }
                to="/"
            >
                <h1>Stina Nilsson</h1>
            </Link>
            <Nav open={isOpen} openCallback={setIsOpen} />
        </header>
    );
}
