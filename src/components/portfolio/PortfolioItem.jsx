import React  from "react";
import { Link } from "react-router-dom";
import './portfolioItem.css';

const buttonStyle = {

    ':hover': {
        backgroundColor: "#2962ed"
        }
}

const PortfolioItem = ({ header, explanation, challengeSource, link }) => {
    return (
        <div>
            <br /><br />
            <h2>{ header }</h2>
            <p>
                { explanation }
            </p>
            <p>
                <i>
                    Challenge Source: {challengeSource}
                </i>
            </p>
            <br />
                <p>
                    <Link to={link} className="btn portfolio_view_button" style={buttonStyle}>
                        View
                    </Link>
                </p>
            <br />
        </div>
    )
}

export default PortfolioItem;
