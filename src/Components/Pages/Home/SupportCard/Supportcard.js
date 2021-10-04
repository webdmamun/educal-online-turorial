import React from "react";
import { Container } from "react-bootstrap";
import "./Supportcard.css";

const Supportcard = () => {
  return (
    <div>
      <Container className="px-5 py-5 top-section">
        <div className="d-flex justify-content-center">
          <div className="card-container card-container-top">
            <h3>
              Why An Scholercity Out Of <br /> The Ordinary
            </h3>
            <p>
              You don't have to struggle alone, you've got our assistance and
              help.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center card-container">
          {/* single card one*/}
          <div
            className="card card-1 single-support-card"
            style={{ backgroundColor: "#2D69F0" }}
          >
            <i className="fas fa-book card-icon"></i>
            <h5 className="card-title">
              4,000 <br /> Online courses
            </h5>
            {/* Arrow button start  */}
            <a class="cm-animated-arrow" href="/">
              <span class="cm-the-arrow cm-left">
                <span class="shaft"></span>
              </span>
              <span class="cm-main">
                <span class="cm-text">Read More</span>
                <span class="cm-the-arrow cm-right">
                  <span class="cm-shaft"></span>
                </span>
              </span>
            </a>
            {/* Arrow button end  */}
          </div>

          {/* single card two*/}
          <div
            className="card card-1 single-support-card"
            style={{ backgroundColor: "#DD246E" }}
          >
            <i class="fas fa-book-open card-icon"></i>
            <h5 className="card-title">
              Job placement <br />
              Support
            </h5>
            {/* Arrow button start  */}
            <a class="cm-animated-arrow" href="/">
              <span class="cm-the-arrow cm-left">
                <span class="shaft"></span>
              </span>
              <span class="cm-main">
                <span class="cm-text">Read More</span>
                <span class="cm-the-arrow cm-right">
                  <span class="cm-shaft"></span>
                </span>
              </span>
            </a>
            {/* Arrow button end  */}
          </div>
          {/* single card three*/}

          <div
            className="card card-1 single-support-card"
            style={{ backgroundColor: "#8007E6" }}
          >
            <i class="fas fa-headset card-icon"></i>
            <h5 className="card-title">
              Lifetime <br />
              Slack chat support
            </h5>
            {/* Arrow button start  */}
            <a class="cm-animated-arrow" href="/">
              <span class="cm-the-arrow cm-left">
                <span class="shaft"></span>
              </span>
              <span class="cm-main">
                <span class="cm-text">Read More</span>
                <span class="cm-the-arrow cm-right">
                  <span class="cm-shaft"></span>
                </span>
              </span>
            </a>
            {/* Arrow button end  */}
          </div>
          {/* single card four */}

          <div
            className="card card-1 single-support-card"
            style={{ backgroundColor: "#0CAE74" }}
          >
            <i class="fas fa-asterisk card-icon"></i>
            <h5 className="card-title">
              Research <br />
              and Innovation
            </h5>
            {/* Arrow button start  */}
            <a class="cm-animated-arrow" href="/">
              <span class="cm-the-arrow cm-left">
                <span class="shaft"></span>
              </span>
              <span class="cm-main">
                <span class="cm-text">Read More</span>
                <span class="cm-the-arrow cm-right">
                  <span class="cm-shaft"></span>
                </span>
              </span>
            </a>
            {/* Arrow button end  */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Supportcard;
