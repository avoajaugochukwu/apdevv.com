import React from 'react';
import { Helmet } from "react-helmet";

import Axios from 'axios';
import './wikipediaViewer.css';

class WikipediaViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'Mathematics',
      isSearchView: true,
      searchResult: null
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleResult = this.handleResult.bind(this)

  }
  img_url = '/img/portfolio/rsz_logomakr_713m1p.png';

  handleSearch() {
    this.setState({
      isSearchView: true
    })
  }

  searchWikipedia() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    Axios(proxyUrl + "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + this.state.searchTerm)
        .then((response) => {

            console.log(response.data);
            this.setState({searchResultJSON: response.data});
            this.iterateSearch();
        })
        .catch(function (error) {
            console.log(error);
          });

}
  iterateSearch () {
    var data = this.state.searchResultJSON.query.search;
    // console.log(data);
    console.log(data);

    var searchResult = data.map((item) => {

      return (
        <div key={item.title} className="wk-result-item">
          <a href={ "https://en.wikipedia.org/?curid=" + item.pageid } >
            <div className="pl-2 pr-2 pt-2 pb-2 mb-1">
              <h6 className="h6">{item.title}</h6>
              <p dangerouslySetInnerHTML={{__html: item.snippet }} />
            </div>
          </a>
        </div>
      )
    })
    this.setState({ searchResult: searchResult});
  }


  handleResult() {
    this.setState({
      isSearchView: false
    })
    this.searchWikipedia();
  }

  onHandleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    const buttonStyle = {
        backgroundColor: "#2962FF",
        borderRadius: "0px"
    }

    return (
      <div className="container" style={{ paddingTop: "15vh"  }}>
        <Helmet>
          <title>Wikipedia Viewer App | FreeCodeCamp | ApDevv.com | Front End Developer</title>
        </Helmet>
        <h1 className="display-4 text-center">Wikipedia Viewer</h1>

        { //Display default view with search form and random article link
            this.state.isSearchView ?
            (
                <div className="row justify-content-md-center">
                    <div className="col-6 text-center pt-3">
                        <p>
                            <a target="blank" href="https://en.wikipedia.org/wiki/Special:Random">
                                View random article
                            </a>
                        </p>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Default search term 'Mathematics'"
                                onChange={(event) => this.onHandleChange(event)}
                                style={{ borderRadius: "0px" }}
                            />
                            <div className="input-group-append">
                                <button
                                    onClick={this.handleResult}
                                    className="btn btn-primary"
                                    style={buttonStyle}
                                >
                                    Search Wikipedia
                                </button>
                            </div>
                        </div>

                        {/* <input type="text" value={this.state.searchTerm} onChange={(event) => this.onHandleChange(event)} className="grey-text" />
                        <button onClick={this.handleResult} className="btn btn-primary" style={buttonStyle} >Search</button> */}
                    </div>
                </div>
            ) : (
                <div>
                    {   // Display search result
                        this.state.searchResult  ?
                        (
                            <div className="row justify-content-md-center">
                                <div className="col-8">
                                    <p>Results for "{this.state.searchTerm}"</p>
                                    {/* <div className="clearfix border border-danger mb-1" onClick={this.handleSearch}>
                                        <button type="button" className="close red-text" aria-label="Close" onClick={this.handleSearch}>
                                            <span aria-hidden="true">&times; &nbsp;&nbsp;&nbsp;&nbsp; </span>
                                        </button>
                                    </div> */}

                                    <div className="row">
                                        <div className="col-sm offset-col-sm-10">
                                            <p className="text-right">
                                            <span
                                                aria-hidden="true"
                                                style={{ fontSize: "2em", color: "red" }}
                                                className="wikipedia-close-button"
                                                onClick={this.handleSearch}
                                            >
                                                &times; &nbsp;&nbsp;&nbsp;&nbsp;
                                            </span>
                                            </p>
                                        </div>

                                    </div>


                                    <div>
                                        {this.state.searchResult}
                                    </div>
                                </div>
                            </div>
                        ) : ( // Display loading spinner
                                <div className="row justify-content-md-center">
                                        <div className="col-8 pt-1 text-center mt-5">
                                        <span className="navbar-brand">
                                            <img className="wikipedia-spinner" src={this.img_url} alt="wikipedia-spinner" />
                                        </span>
                                        <h4 className="mt-2" >
                                            Loading
                                        </h4>
                                    </div>
                                </div>
                            )
                    }
                </div>
                )
        }
      </div>
    )
  }
}

export default WikipediaViewer;
