import React from "react";
import NavItem from "./Nav";


const navContent = [
    {
        link: "/#home",
        content: "Home"
    },
    {
        link: "/",
        content: "About me"
    },
    {
        link: "/#skills",
        content: "Skills"
    },
    {
        link: "/#portfolio",
        content: "Portfolio"
    },
    {
        link: "/#contacts",
        content: "Contacts"
    },
]

const Header = () => {
    return <header className="position-absolute top-0 start-0 d-inline-flex flex-column">
        <span className="fs-3 fst-italic"><i className="bi bi-fingerprint"> </i>Designs by Denis Novik</span>
        <nav className="navbar d-sm-inline-flex text-start">
            <ul className="navbar-nav d-inline-flex flex-column mb-1 justify-content-start">
                {navContent.map(({content, link}) => {
                    return <NavItem key={crypto.randomUUID()} link={link} content={content}/>
                })}
            </ul>
        </nav>
    </header>
}

export default Header;