import { ReactElement } from "react";
import { NavList } from "./NavList";

interface INavBurgerProps {
    open: boolean;
    openCallback: (open: boolean) => void;
}

export function Nav({ open, openCallback }: INavBurgerProps): ReactElement {
    return (
        <nav className="nav">
            <section className="nav-mobile">
                <div className="nav-burger">
                    <button
                        className="burger-button"
                        onClick={() => openCallback(!open)}
                    >
                        <span className="material-symbols-outlined nav-menu">
                            {open ? "close" : "menu"}
                        </span>
                    </button>
                </div>
                {open && (
                    <section
                        className="nav-list"
                        onClick={() => openCallback(!open)}
                    >
                        <NavList />
                    </section>
                )}
            </section>
            <section className="nav-desktop">
                <NavList />
            </section>
        </nav>
    );
}
