import React from 'react';
import { Helmet } from "react-helmet";
import './css/all.min.css'

class LocalWeather extends React.Component {
    constructor () {
        super();
        this.state = {
            weatherApi: '',
            location: '',
            weatherResult: '',
            temperature: '',
            temperatureCheck: 0,
            changeMeasurementUnit: 'Fahrenheit',
            icon: '',
            error: ''
        };
        this.getLocation();
        // document.body.style.background = '#000';
        // document.body.style.color = '#8f979e';
        // document.body.style.paddingTop = '10vh';

        this.toggleCAndF = this.toggleCAndF.bind(this);
    }

    getLocation() {
        // fetch("http://ip-api.com/json")
        fetch("https://ipapi.co/json/")
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({location: data});
            //Attach weatherAPI URL to state
            let dataW = "https://api.openweathermap.org/data/2.5/weather?lat=" + this.state.location.latitude + "&lon=" +this.state.location.longitude + "&units=metric&APPID=1bf0c7372cfe1679eacd5906cefdf81d"
            this.setState({ weatherApi:  dataW})
            this.getWeather();
        })
    }

    getWeather () {
        // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        fetch(this.state.weatherApi)
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({ weatherResult: data,
                temperature: data.main.temp,
                temperatureConversion: data.main.temp + String.fromCharCode(176) + 'C' })
        })
        this.getTemperatureIcon();
    }

    getTemperatureIcon () {
        var testTemperature = this.state.temperature;
        var icon = '';
        if (testTemperature < 10) {
            icon = 'fa fa-snowflake-o';
        } else if (testTemperature < 20) {
            icon = 'fa fa-sun-o';
        } else {
            icon = 'fa fa-smile-o';
        }
        //set state
        this.setState({ icon: icon });
    }
    // componentWillMount () {}

    toggleCAndF () {
        console.log('toggleCAnfF')
        if (this.state.temperatureCheck === 0) {
            this.changeToFahrenheit();
            this.setState({
                temperatureCheck: 1,
                changeMeasurementUnit : 'Fahrenheit'
             });
        } else {
            this.changeToCelcius();
            this.setState({
                temperatureCheck: 0,
                changeMeasurementUnit : 'Celcius'
            });

        }
    }

    changeToFahrenheit() {
        let fahrenheit = ( this.state.temperature * 1.8 ) + 32;
        this.setState({ temperatureConversion: fahrenheit.toFixed(2)  + String.fromCharCode(176) + 'F'});
        this.setState({ changeMeasurementUnit: 'Celsius'})
    }

    changeToCelcius() {
        //No need to convert since temperature is already in celcius
        this.setState({ temperatureConversion: this.state.temperature.toFixed(2) + String.fromCharCode(176) + 'C'});
    }

    render () {
        const buttonStyle = {
            backgroundColor: "#2962FF",
            borderRadius: "0px"
        }

        return (
            <div className="container" style={{ paddingTop: "15vh"  }}>
              <Helmet>
                <title>Local Weather App | FreeCodeCamp | ApDevv.com | Front End Developer</title>
              </Helmet>
                <br/>
                <h1 className="display-4 text-center">We<i className="fa fa-cloud" aria-hidden="true"></i>ther App</h1>
                <div className="row  justify-content-md-center">
                    <div className="col-sm text-center pt-5">
                        <div className="weather-main pt-5 pb-5 d-block">
                            <h3>You are in { this.state.weatherResult.name }</h3>
                            <h2>
                                The temperature is { this.state.temperatureConversion }  &nbsp;
                                <i className={this.state.icon} aria-hidden="true"></i>
                            </h2>
                        </div>
                        <button className="btn btn-success" onClick={this.toggleCAndF} style={buttonStyle}>
                            Convert temperature to { this.state.changeMeasurementUnit }
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LocalWeather;
