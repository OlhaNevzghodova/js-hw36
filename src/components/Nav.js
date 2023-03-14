import React from "react";

const NavItem = ({content, link}) => {
    return <li className="nav-item p-1 text-start border-bottom container-fluid">
        <a href={link} className="nav-link">
            {content}
        </a>
    </li>
};

export default NavItem;