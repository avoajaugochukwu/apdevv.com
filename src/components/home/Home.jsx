import React from "react";
import HomeHeader from "./homeHeader/HomeHeader";
import { Helmet } from 'react-helmet';
import HomeMenu from "./homeMenu/HomeMenu";


import "./home.css";


const styles = {
  backgroundColor: "#2962FF",
  // height: "100vh"
};

const Home = () => {
  return (
    <div style={styles}>
      <Helmet>
        <title>Apdevv.com | Front-End Developer, React, Javascript, Data Analytics, Blog</title>
      </Helmet>
      <HomeHeader />
      <div>
        <div className="box" />



        <div className="home-h1-text typewriter">
          <div className="container">
            <h1 className="display-1 text-light text-center">
              Front-end developer / designer
            </h1>
          </div>
        </div>

        <br />
        <h2 className="display-5 home-h2 text-light">React.js. JavaScript. Web Technology.</h2> {/*Data Analytics.*/}

        <br />
        <div className="home-description">
          <p className="text-light">
            I am involved in all things technology, from HTML to C# and Data Analytics.
            <br />
            I love learning new things to solve real world problems.
          </p>
        </div>


        {/* <div className="path-top">
          <div className="path">
            <span id="elem" className="shape trail" />
          </div>
        </div> */}

        <div className="container-fluid">
          <HomeMenu />
        </div>

      </div>
    </div>
  );
}

export default Home;
