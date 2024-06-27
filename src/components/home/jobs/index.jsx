import React from 'react'
import Skim from "../../../images/skim.png"
import Kree from "../../../images/kree.png"
import Krow from "../../../images/krow.png"
import Wet from "../../../images/wet.png"
import Arrow from "../../../images/arrow.png"
import './jobs.css'

export default function Jobs() {
  return (
    <div className="jobs-container">
      <h1 className="jobs-heading">Equity jobs</h1>
      <p className="jobs-text">
        See companies and startups offering equity or a mix of cash and equity
        for very important position in their company
      </p>

      <div className="jobs-boxes">
        <div className="job-box">
          <img src={Skim} alt="job logo" className="jobs-icon" />
          <p className="saas">
            This company is a SAAS Startup <br />
            that builds AI copy generator...
          </p>
          <p className="job-position">Chief Executive Officer</p>
          <div className="job-display">
            <div className="location">
              <p>LOCATON</p>
              <b>Abuja, Nigera</b>
            </div>
            <div className="industry">
              <p>INDUSTRY</p>
              <b>On-demand print</b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>EQUITY</p>
              <b>12%</b>
            </div>
            <div className="industry">
              <p>STIPEND</p>
              <b>NGN 200,000/mth </b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>DEADLINE</p>
              <b>24th, January 2024</b>
            </div>
            <div className="industry">
              <p>ROLE TYPE</p>
              <b>Full-time</b>
            </div>
          </div>

          <button className="jobs-btn">View Details</button>
        </div>
        <div className="job-box" id="mobile-none">
          <img src={Kree} alt="job logo" className="jobs-icon" />
          <p className="saas">
            This company is a SAAS Startup <br />
            that builds AI copy generator...
          </p>
          <p className="job-position">UX Strategist</p>
          <div className="job-display">
            <div className="location">
              <p>LOCATON</p>
              <b>Abuja, Nigera</b>
            </div>
            <div className="industry">
              <p>INDUSTRY</p>
              <b>E-commerce</b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>EQUITY</p>
              <b>12%</b>
            </div>
            <div className="industry">
              <p>STIPEND</p>
              <b>NGN 200,000/mth </b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>DEADLINE</p>
              <b>24th, January 2024</b>
            </div>
            <div className="industry">
              <p>ROLE TYPE</p>
              <b>Full-time</b>
            </div>
          </div>

          <button className="jobs-btn">View Details</button>
        </div>
        <div className="job-box" id="mobile-none">
          <img src={Krow} alt="job logo" className="jobs-icon" />
          <p className="saas">
            This company is a SAAS Startup <br />
            that builds AI copy generator...
          </p>
          <p className="job-position">CTO & Head of innovations</p>
          <div className="job-display">
            <div className="location">
              <p>LOCATON</p>
              <b>Abuja, Nigera</b>
            </div>
            <div className="industry">
              <p>INDUSTRY</p>
              <b>Fintech</b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>EQUITY</p>
              <b>12%</b>
            </div>
            <div className="industry">
              <p>STIPEND</p>
              <b>NGN 200,000/mth </b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>DEADLINE</p>
              <b>24th, January 2024</b>
            </div>
            <div className="industry">
              <p>ROLE TYPE</p>
              <b>Full-time</b>
            </div>
          </div>

          <button className="jobs-btn">View Details</button>
        </div>
        <div className="job-box" id="mobile-none">
          <img src={Wet} alt="job logo" className="jobs-icon" />
          <p className="saas">
            This company is a SAAS Startup <br />
            that builds AI copy generator...
          </p>
          <p className="job-position">Backend Developer</p>
          <div className="job-display">
            <div className="location">
              <p>LOCATON</p>
              <b>Abuja, Nigera</b>
            </div>
            <div className="industry">
              <p>INDUSTRY</p>
              <b>Transportation</b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>EQUITY</p>
              <b>12%</b>
            </div>
            <div className="industry">
              <p>STIPEND</p>
              <b>NGN 200,000/mth </b>
            </div>
          </div>
          <div className="job-display">
            <div className="location">
              <p>DEADLINE</p>
              <b>24th, January 2024</b>
            </div>
            <div className="industry">
              <p>ROLE TYPE</p>
              <b>Full-time</b>
            </div>
          </div>

          <button className="jobs-btn">View Details</button>
        </div>
      </div>

      <div className="more-jobs">
        <p className="jobs-more">See More Equity Jobs</p>
        <img src={Arrow} alt="arrow" className="jobs-arrow" />
      </div>
    </div>
  )
}
