import React from 'react'
import Calender from "../../../images/calender.png"
import Two from "../../../images/two.png"
import Edit from "../../../images/edit.png"
import Avatar from "../../../images/avatar.png"
import Arrow from "../../../images/arrow.png"
import Back from "../../../images/backcircle.png"
import Forward from "../../../images/frontcircle.png"
import './program.css'

export default function Program() {
  return (
    <div className="program-container">
      <h1 className="pro-heading">
        Join Our Entrepreneur In Residence <br />
        (EIR) Program
      </h1>
      <p className="pro-text">
        Our EIR program is our structured 3 months un-paid program designed to
        help us have a pipeline of business and <br />
        technical cofounders who can run the venture of choice as CEO & CTO
        owning 20% equity each.
      </p>

      <div className="pro-boxes">
        <div className="pro-box">
          <img src={Calender} alt="calender icon" className="pro-icon" />
          <p className="pro-box-head">Application and Selection</p>
          <p className="pro-box-text">
            Begin your journey by completing our <br />
            straightforward application form. Share <br />
            insights into your entrepreneurial background, <br />
            expertise, and your vision for supporting the <br />
            success of our portfolio companies.
          </p>
          <p className="pro-box-text">
            Our dedicated selection committee, <br />
            comprised of key stakeholders at SINC <br />
            Partners, will carefully review your application.
          </p>
        </div>
        <div className="pro-box">
          <img src={Two} alt="two icon" className="pro-icon" />
          <p className="pro-box-head">
            Alignment Meeting and Proposal <br />
            Submission
          </p>
          <p className="pro-box-text">
            If your application stands out, we'll invite you <br />
            to an alignment meeting. This is an <br />
            opportunity to discuss the goals of our EIR <br />
            program and explore how your expertise aligns <br />
            with the needs of our portfolio companies.
          </p>
          <p className="pro-box-text">
            Following the alignment meeting, submit a <br />
            formal proposal outlining your intended <br />
            contributions and how you envision adding <br />
            significant value to our portfolio companies.
          </p>
        </div>
        <div className="pro-box">
          <img src={Edit} alt="edit icon" className="pro-icon" />
          <p className="pro-box-head">Negotiation and Agreement</p>
          <p className="pro-box-text">
            Upon successful alignment and proposal <br />
            review, we'll engage in discussions to finalize <br />
            the terms of your EIR role. This includes the <br />
            duration, expectations, and any compensation <br />
            or equity arrangements.
          </p>
          <p className="pro-box-text">
            Once terms are agreed upon, we'll draft a <br />
            formal agreement outlining the specifics of <br />
            your EIR engagement, including reporting <br />
            structures, responsibilities, and the support/
            <br />
            resources provided by SINC Partners.
          </p>
        </div>
        <div className="pro-box">
          <img src={Avatar} alt="avatar icon" className="pro-icon" />
          <p className="pro-box-head">Onboarding and Integration</p>
          <p className="pro-box-text">
            Congratulations! As an accepted EIR, you'll undergo <br />
            an onboarding process to familiarize yourself with <br />
            the SINC Partners ecosystem, our portfolio companies, <br />
            and key team membersP.
          </p>
          <p className="pro-box-text">
            Facilitated introductions will ensure a seamless <br />
            integration between you and relevant portfolio <br />
            companies, setting clear expectations for <br />
            collaboration.
          </p>
        </div>
      </div>

      <div className="future">
        <p className="support">Support the future</p>
        <img src={Arrow} alt="forward arrow" className="future-arrow" />
      </div>

      <div className="arrows">
        <img src={Back} alt="backward arrow" className="backward-arrow" />
        <img src={Forward} alt="forward arrow" className="forward-arrow" />
      </div>
    </div>
  )
}
