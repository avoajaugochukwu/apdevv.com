import React from "react";
import { Helmet } from "react-helmet";

import "./resume.css";

const Resume = () => {
  return (
    <div>
      <Helmet>
        <title>Resume | ApDevv.com | Front End Developer</title>
      </Helmet>
      <div className="container" style={{ marginTop: "10vh" }}>
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 resume-main-left text-white">
            <div className="card">
              <div className="card-img text-center">
                <h2>Ugochukwu Avoaja</h2>
                <p>Front-end Developer</p>
              </div>
              <div className="p-4  card-body">
                <p>
                  I am experienced in a wide range of front-end technologies,
                  specialized primarily in React and JavaScript
                </p>
                <a
                  className="btn btn-success"
                  href="mailto:avoajacharles@gmail.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  title="Send me an email"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  &nbsp;&nbsp;Shoot me a mail
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 resume-main-right">
            <div className="row">
              <div className="col-md-12 ">
                <div className="card">
                  <div className="row resume-main-right-card card-body">
                    <div className="col-md-2">
                      <h1 className="display-4 text-center">
                        &nbsp;
                        <i className="fa fa-suitcase" aria-hidden="true" />
                      </h1>
                    </div>
                    <div className="col-md-10">
                      <h1 className="font-weight-bold">Work Experience</h1>
                      <br />
                      <h5 className="font-weight-bold">Data Analyst @ PwC</h5>
                      <small>SEPT 2017 - PRESENT</small>
                      <p>PowerBI, QlikView, SQL, Data warehousing</p>
                      <hr />
                      <br />
                      <h5 className="font-weight-bold">
                        Front-End Developer @ Freelance
                      </h5>
                      <small>SEPT 2013 - PRESENT</small>
                      <p>React, JavaScript, Python, PHP, MySQL, HTML, CSS</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
              <div className="col-md-12 mt-3">
                <div className="card">
                  <div className="row resume-main-right-card card-body">
                    <div className="col-md-2">
                      <h1 className="display-4 text-center">
                        &nbsp;
                        <i
                          className="fa fa-graduation-cap"
                          aria-hidden="true"
                        />
                      </h1>
                    </div>
                    <div className="col-md-10">
                      <h1 className="font-weight-bold">Education</h1>
                      <br />
                      <h5 className="font-weight-bold">
                        B. Sc. Mathematics @ ABSU
                      </h5>
                      <small>SEPT 2008 - SEPT 2012</small>
                      <p>
                        Critical Thinking, Optimization, Operations Management
                      </p>
                      <hr />
                      <br />
                      <h5 className="font-weight-bold">
                        Diploma in Business & Accounting @ ACCA
                      </h5>
                      <small>2014</small>
                      <p>Business 101</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
              <div className="col-md-12 mt-3 text-center">
                <div className="card">
                  <div className="row">
                    <div className="col-md-2">.</div>

                    <div className="col-md-5  pt-3 pb-3">
                      <a
                        className="nav-link"
                        href="https://github.com/avoajaugochukwu/"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        title="Look through my Github profile"
                      >
                        <i className="fab fa-github" aria-hidden="true" />
                        &nbsp;&nbsp;github
                      </a>
                    </div>
                    <div className="col-md-5  pt-3 pb-3">
                      <a
                        className="nav-link"
                        href="https://www.linkedin.com/in/avoajaugochukwu/"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        title="Look through my Github profile"
                      >
                        <i
                          className="fab fa-linkedin"
                          aria-hidden="true"
                        />
                      &nbsp;&nbsp;linkedin profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Resume;
