import React from "react";
import "../component/navmenu.css";


const NavMenu = (props) => {
    return (
        <div className="menu">
            {props.listofitems.map((el, i) =>
                <div className="dropdown">
                    <a href={el.link} >
                        {el.title}
                    </a>
                    {el.items && <div className="dropdown-content"><ul className="navmenu"> {el.items.map(elem => <li>{elem}</li>)}</ul></div> }
                </div>
            )}
        </div>
    );
}

export default NavMenu;