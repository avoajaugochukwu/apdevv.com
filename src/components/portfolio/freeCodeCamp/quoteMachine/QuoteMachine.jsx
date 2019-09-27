// RandomQouteMachine
import React from 'react';
import { Helmet } from "react-helmet";

class RandomQouteMachine extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            quotes: [],
            bgColor: ''
        };
        this.changeBackgroundAndQuote = this.changeBackgroundAndQuote.bind(this);
    }

    componentWillMount () {
        this.changeBackgroundAndQuote();
    }

    changeBackgroundAndQuote () {
        var colorArray = ['#ffebee', '#C5CAE9', '#B2DFDB', '#F9FBE7', '#FAFAFA'];
        var randomNumber = Math.floor(Math.random() * colorArray.length);

        this.setState({ bgColor: colorArray[randomNumber] })
        // Api call
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

        fetch(proxyUrl + "https://api.forismatic.com/api/1.0/?jsonp&method=getQuote&key=457653&format=json&lang=en")
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({quotes: data})
            // console.log(this.state.quotes)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render () {
        const buttonStyle = {
            backgroundColor: "#2962FF",
            borderRadius: "0px"
        }

        const { quotes } = this.state;
        return (
            <div className="container" style={{ paddingTop: "15vh"  }}>
              <Helmet>
                <title>Random Quote Machine App | FreeCodeCamp | ApDevv.com | Front End Developer</title>
              </Helmet>
                <h1 className="display-4 text-center">Random Quote Machine </h1>
                <div className="row justify-content-md-center" >
                    <div className="col-sm"></div>
                    <div className="col-sm-8">
                        <br /><br />
                        <div className="" style={{ backgroundColor: this.state.bgColor, height: "250px", padding: "20px" }}>
                            <p style={{ height: "100px" }}>
                                { quotes.quoteText }
                            </p>
                            <b>
                                <i>
                                    <h6>
                                        { quotes.author }
                                    </h6>
                                </i>
                            </b>
                            <div>
                                <div className="tweet-box">
                                    <a className="twitter-share-button" href={'https://twitter.com/intent/tweet?text=' + quotes.quoteText}>
                                        Tweet
                                    </a>
                                </div>
                                <br />
                                <button className="btn btn-success" onClick={this.changeBackgroundAndQuote} style={buttonStyle}>
                                    Change Quote
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm"></div>

                </div>
            </div>
        );
    }
}

export default RandomQouteMachine;
