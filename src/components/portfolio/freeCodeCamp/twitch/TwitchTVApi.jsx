import React from 'react';
import { Helmet } from "react-helmet";

import Axios from 'axios';

export default class TwitchTv extends React.Component {
  constructor() {
    super();
    this.state = {
      clientID: 'rf1l4oh9f41mv7nz43ko9zb8kl125r',
      // clientSecret: 'pfgy2qwxa20xxsxhd0s2a4osvirsgb'
      clientSecret: 'pfgy2qwxa20xxsxhd0s2a4osvirsgb',
      resulter: [],
      regularStreamers: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
      searchResult: ''
    }

    this.getEachApi();
    this.iterateSearch = this.iterateSearch.bind(this);
  }

  getEachApi() {
    this.state.regularStreamers.map((streamer) =>
      this.getData(streamer)
    )
    console.log(this.state.resulter);
  }

  getData(streamer) {
    Axios('https://wind-bow.glitch.me/twitch-api/channels/' + streamer)
      .then((response) => {
          // console.log(response.data);
          this.state.resulter.push(response.data);
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  iterateSearch () {
    console.log('here')
    var searchResult = this.state.resulter.map((item) => {

      return (
        <tr key={item._id}>
          <td><img className="img-fluid z-depth-1 rounded-circle" src={item.logo} style={{height: '50px'}}  alt="head-logo-img" /></td>
          <td><p>{item.name}</p></td>
          <td>
              { !item.status ? (
                <i className="fa fa-circle" aria-hidden="true" style={{color: "red"}}></i>
              ) : (
                <i className="fa fa-circle" aria-hidden="true" style={{color: "green"}}></i>
              )
              }
          </td>
          <td>
          { !item.status ? (
                <p style={{color: 'red'}}>{item.name} is offline</p>
              ) : (
                <p><a target="blank" className="blue-text" href={item.url}>{item.status}</a></p>
              )
              }
          </td>
        </tr>
      )
    })

    this.setState({ searchResult: searchResult});
    // console.log(this.state.searchResult)
    // this.state = { searchResult: searchResult}
  }

  // Todo
  //Add table to render method
  render () {
    const buttonStyle = {
      backgroundColor: "#2962FF",
      borderRadius: "0px"
    }

    return (
      <div className="container-fluid" style={{ paddingTop: "15vh"  }}>
        <Helmet>
          <title>Twitch TV API App | FreeCodeCamp | ApDevv.com | Front End Developer</title>
        </Helmet>
        <h1 className="display-4 text-center">Twitch TV API</h1>
        <div className="row text-center">
          <div className="col-1" />
          <div className="col-10 border">
            <button className="btn btn-primary mt-3 mb-3" style={buttonStyle} onClick={this.iterateSearch}>Click to see our channels</button>
            <table className="table">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Channel name</th>
                  <th>Status (Online / Offline)</th>
                  <th>Streaming</th>
                </tr>
              </thead>
              <tbody>
                {this.state.searchResult}
              </tbody>
            </table>
          </div>
          <div className="col-1" />
        </div>
        <br /><br /><br /><br />
      </div>
    )
  }
}
