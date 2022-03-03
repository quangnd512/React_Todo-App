import React from "react";
import '../../styles/Nav/nav.scss'
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component
{
    render(){
        return(
            <div className="topnav">
                <NavLink end to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink end to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink end to="/about" activeClassName="active">
                    About
                </NavLink>
                {/* <Link to="/">Home</Link> |{" "}
                <Link to="/todo">Todo</Link>
                <Link to="/about">About</Link> */}
            </div>
        )
    }
}

export default Nav;