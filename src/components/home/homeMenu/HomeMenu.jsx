import React  from "react";
import { Link } from "react-router-dom";
import './homeMenu.css';



const HomeMenu = () => {
    return (

        <div className="row home-menu">
            <div className="col-sm">

            </div>
            <div className="col-sm">
                <div className="">
                    <div className="">
                        <Link to="/" className="home-menu-a">apdevv.com</Link> <span>&nbsp;</span>
                        <Link to="/blog" className="home-menu-a">blog</Link> <span>&nbsp;</span>
                        <Link to="/portfolio" className="home-menu-a">portfolio</Link> <span>&nbsp;</span>
                        <Link to="/resume" className="home-menu-a">data & analytics</Link> <span>&nbsp;</span>
                        <Link to="/resume" className="home-menu-a-last">contact</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm">

            </div>
        </div>

    )
}

export default HomeMenu;
