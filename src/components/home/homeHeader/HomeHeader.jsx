import React  from "react";
import { Link } from "react-router-dom";
import './homeHeader.css';



const HomeHeader = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    <div className="home-header-pacman-container">
                        <div className="home-header-pacman">
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="home-header-logo-container">
                        <div className="home-header-logo-link">
                            <Link to="/" className="text-light">apdevv.com</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="home-header-heart-container">
                        <div className="home-header-heart">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;