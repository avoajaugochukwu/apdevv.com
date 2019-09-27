import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";

import HttpNotFoundException from "./components/home/HttpNotFoundException";
import NavBar from "./components/common/ui/NavBar/NavBar";

import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

import RandomQouteMachine from "./components/portfolio/freeCodeCamp/quoteMachine/QuoteMachine";
import LocalWeather from "./components/portfolio/freeCodeCamp/localWeather/LocalWeather";
import WikipediaViewer from "./components/portfolio/freeCodeCamp/wikipedia/WikipediaViewer";
import TwitchTVApi from "./components/portfolio/freeCodeCamp/twitch/TwitchTVApi";
import MarkdownPreviewer from "./components/portfolio/freeCodeCamp/markdown/MarkdownPreviewer";
import DrumMachine from "./components/portfolio/freeCodeCamp/drumMachine/DrumMachine";
import Calculator from "./components/portfolio/freeCodeCamp/calculator/Calculator";
import SalaryConverterApp from "./components/portfolio/liveProjects/SalaryConverter/SalaryConverterApp";

import CompoundInterestApp from "./components/portfolio/liveProjects/CompoundInterestApp/CompoundInterestApp";

/* Todo
  Correct twiter for random quote App
  Include the word "Javascript" in the home page
  Optimize site on mobile

*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Switch>
          <Route exact path="/blog" component={Blog} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Switch>
                <Route path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />

                <Route
                  exact
                  path="/portfolio/quote_machine"
                  component={RandomQouteMachine}
                />
                <Route
                  exact
                  path="/portfolio/local_weather"
                  component={LocalWeather}
                />
                <Route
                  exact
                  path="/portfolio/wikipedia_viewer"
                  component={WikipediaViewer}
                />
                <Route
                  exact
                  path="/portfolio/twitch_tv_api"
                  component={TwitchTVApi}
                />
                <Route
                  exact
                  path="/portfolio/MarkdownPreviewer"
                  component={MarkdownPreviewer}
                />
                <Route
                  exact
                  path="/portfolio/DrumMachine"
                  component={DrumMachine}
                />
                <Route
                  exact
                  path="/portfolio/Calculator"
                  component={Calculator}
                />

                <Route
                  exact
                  path="/compound_interest_app_in_naira"
                  component={CompoundInterestApp}
                />

                <Route
                  exact
                  path="/salary_converter"
                  component={SalaryConverterApp}
                />

                <Route component={HttpNotFoundException} />
              </Switch>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
