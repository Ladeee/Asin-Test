import React from 'react'
import Triangle from '../../../images/triangle.png'
import Polygon from '../../../images/polygon.png'
import Pentagon from '../../../images/pentagon.png'
import Portfolio from '../../../images/companies.png'
import Mport from '../../../images/mobileport.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './concept.css'

export default function Concept() {
  return (
    <div className="concept-container">
      <div className="concept-wrapper">
        <h1 className="con-heading">Our Concept Innovations</h1>
        <p className="con-text">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and <br />
          ultimately help democratize success;
        </p>
        <div className="con-boxes">
          <div className="con-box">
            <p className="conbox-head">Service Incubator</p>
            <p className="conbox-text">
              A service-for-shares model of incubating <br />
              pre-product startups and early-stage <br />
              companies by building their early stage <br />
              product and MVP
            </p>
          </div>
          <div className="con-box">
            <p className="conbox-head">Virtualting</p>
            <p className="conbox-text">
              A resource share model that allows <br />
              companies share the time of resources <br />
              (employees, consultants, technical advisers <br />
              or influencers) while also splitting the <br />
              service cost of the resource
            </p>
          </div>
          <div className="con-box">
            <p className="conbox-head">Diiming</p>
            <p className="conbox-text">
              A progressive investment model that allows <br />
              you to put aside income (disposable or non-
              <br />
              disposable) as investment over a period <br />
              towards an investment or spend of your <br />
              choice
            </p>
          </div>
        </div>
      </div>

      <div className="service-wrapper">
        <div className="ser-wrap">
          <p className="ser-head">Our Service Incubation Model</p>
          <p className="ser-text">
            The Service Incubation model is an alternate funding model for
            startup that allows professionals to offer their services to <br />
            startups in return for a minute equity (usually between 0.5% to
            1.5%) in the startup. As a service incubator, you will see <br />
            your share grow as much as 1000% in 12 - 24 months as been first to
            invest.
          </p>
        </div>

        <div className="hypothesis">
          <p className="hypo">Hypothesis</p>
          <p className="hypo-text">
            Just a few reasons we know its time for this model within the
            ecosystem
          </p>

          <div className="hypo-boxes">
            <div className="hypo-box">
              <img src={Triangle} alt="triangle icon" className="hypo-icon" />
              <p className="hypobox-text">
                Most early-stage companies and pre-
                <br />
                product startups cannot afford professional <br />
                services especially those who don't have <br />
                family and friends' network that can <br />
                support
              </p>
            </div>
            <div className="hypo-box">
              <img src={Polygon} alt="polygon icon" className="hypo-icon" />
              <p className="hypobox-text">
                If startups can seed 5-10% in equity to <br />
                incubators for $20k to $200k funding most <br />
                times, they will be willing to seed 10% equity <br />
                for a $25k service investment
              </p>
            </div>
            <div className="hypo-box">
              <img src={Pentagon} alt="pentagon icon" className="hypo-icon" />
              <p className="hypobox-text">
                Young professionals who don't have a lot of <br />
                money to invest nor an accredited investors <br />
                will have opportunities to take equity at the <br />
                early stage of their career, usually been the <br />
                first to invest and almost guaranteed of <br />
                return
              </p>
            </div>
          </div>

          <div className='con-case-study'>
            <p className="hypo-case">Case Study</p>
            <p className="hypo-text">
              See what Service Incubators get, the maths behind Service Equity
              (SEEQ) and what the value of your share equity can be over time
            </p>
          </div>

          <div className="case-display">
            <button className="inc-btn">Service Incubator Equity</button>
            <button className="seeq-btn">SEEQ Maths Equation</button>
            <button className="eq-btn">Value of my Equity Over Time</button>
          </div>

          <div className="s-inc">
            <p className="ser-inc">Become a Service Incubator</p>
            <div className="ser-arrow-icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <div className="portfolio">
          <h1 className="port-head">Our Studio Portfolio</h1>
          <p className="port-text">
            Our 2024 Service Incubator Portfolio Companies
          </p>
          <img src={Portfolio} alt="portfolio companies" className="port-img" />
          <img src={Mport} alt="portfolio companies" className="mobile-port" />
          <div className="s-inc">
            <p className="ser-inc">View All Companies</p>
            <div className="ser-arrow-icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <div className="co-found">
          <h1 className="co-found-head">Co-found With Us</h1>
          <p className="co-found-text">
            We seek to collaborate with visionary individuals who are solving
            similar problems of helping entrepreneurs succeed{' '}
          </p>

          <div className="co-found-boxes">
            <div className="co-found-box">
              <p className="co-one" id="co-num">
                1
              </p>
              <p className="co-box-head">We ideate</p>
              <p className="co-box-text">
                We internally generate concepts and ideas <br />
                that help solve problems in our thesis areas, <br />
                after which we proceed to develop a nano/
                <br />
                micro MVP (usually having as low as 30 functions to as high as
                100 functions) of the <br />
                product that we take to the market.
              </p>
            </div>
            <div className="co-found-box">
              <p className="co-two" id="co-num">
                2
              </p>
              <p className="co-box-head">You Validate</p>
              <p className="co-box-text">
                You join our 3 months inResidence program as <br />a business
                expert to run the operations or as a <br />
                technical expert to further the development <br />
                and validate the idea with an average monthly revenue of $1k or
                10,000 users and/or an MVP <br />
                of at least 150 functions
              </p>
            </div>
            <div className="co-found-box">
              <p className="co-three" id="co-num">
                3
              </p>
              <p className="co-box-head">You Co-own</p>
              <p className="co-box-text">
                After successful validation and demo day at <br />
                the end of the EIR program, we move those <br />
                with perfect fit to become co-founders of the <br />
                product they validated as CEO & CTO, each <br />
                owning 20% of the venture.
              </p>
            </div>
          </div>

          <div className="co-found-display">
            <p className="ser-inc">Build your dream</p>
            <div className="ser-arrow-icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
