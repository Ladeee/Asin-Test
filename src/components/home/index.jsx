import React from 'react'
import Group from '../../images/group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './home.css'
import Concept from './concept'
import Program from './program'
import Investors from './investors'
import Jobs from './jobs'
import Blog from './blog'
import Featured from './featured'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="top-mobile">
          <div className="top-section">
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="top-side">
              <h2 className="heading">
                SINC Partners is a service <br />
                incubation company
              </h2>
              <p className="top-text">
                Connecting experts in product development <br /> and growth
                marketing willing to offer their <br />
                services to amazing startups in exchange
                <br />
                for minute equity (usually 0.5% to 2%).
              </p>

              <button className="sinc-us">SINC With Us</button>
            </div>
            <img src={Group} alt="group img" className="group" />
          </div>
        </div>

        <section className="homeSection-one">
          <div className="center">
            <p className="nigerians">
              "Nigeria and Africa has a massive network effect that have not be
              fully utilized. With <br />
              Nigerians/Africans in every country and territory of the world, we
              can scale an African <br />
              business to 100+ countries in few weeks"
            </p>
            <p className="name">Daniel Izeghs Oratokhai</p>
            <p className="post">Managing Partner at SINC Partners Ltd</p>
          </div>

          <header>
            Network of builders helping <br />
            startup scale
          </header>

          <div className="display">
            <div className="box">
              <h3 className="box-head">
                Work with Service Incubators to expedite <br />
                your time-to-market
              </h3>
              <p className="text-one">
                Collaborate with our meticulously chosen service partners,{' '}
                <br />
                each with a vested interest, ensuring a shared commitment to{' '}
                <br />
                success in the game of venture building.
              </p>
              <p className="text-two">
                For 7.5% equity, you get a product manager, product <br />
                designer, frontend engineer, software engineer and growth <br />
                marketer to build the MVP of your app or web application <br />
                and validate it.
              </p>
              <div className="learn-arrow" id="learn-one">
                <p className="learn">Learn More</p>
                <div className="arrow-icon">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
            <div className="box">
              <h3 className="box-head">
                Access funding after your mvp is <br />
                validated{' '}
              </h3>
              <p className="text-one">
                Startups that have built and validated their product can take{' '}
                <br />
                advantage of the financial resources of the SINC Investors{' '}
                <br />
                Network, elevating their potential for success in the venture{' '}
                <br />
                capital landscape.
              </p>
              <p className="text-two">
                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within{' '}
                <br />
                12 months{' '}
              </p>
              <div className="learn-arrow" id="learn-two">
                <p className="learn">Learn More</p>
                <div className="arrow-icon">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-demo">
            <h2 className="mobile-demo-header">
              Building the future together, democratizing success.
            </h2>
            <p className="mobile-demo-text">
              SINC Partners has a novel vision of making success available to
              everyone and democratizing the pain point of success. We are a
              next generation startup studio focus on building and supporting
              enterprises at scale and we help them raise service investments
              and funds across 3-5 deals from as low as $25k at start to up to
              $15m before you leave the lab. We are a Gasus Business, a business
              built on the foundation of Christian values and belief.
            </p>

            <button className="mobile-demo-btn">Read About Us</button>
          </div>

          <h2 className="area">Our Area of Focus</h2>
          <p className="quest">
            In our quest to help make success available to everyone, we have
            initial strategic <br />
            direction to focus on these five (5) key areas at the lab
          </p>

          <div className="numbered">
            <div className="n-one">
              <p className="num">01</p>
              <p className="num-text">
                Business Support & <br />
                Incubation
              </p>
            </div>
            <div className="n-two">
              <p className="num">02</p>
              <p className="num-text">
                On-Demand & As-
                <br />
                A-Service
              </p>
            </div>
            <div className="n-three">
              <p className="num">03</p>
              <p className="num-text">
                Marketplace & <br />
                Crowdsourcing
              </p>
            </div>
            <div className="n-four">
              <p className="num">04</p>
              <p className="num-text">
                Aggregation & <br />
                Shared Economy
              </p>
            </div>
            <div className="n-five">
              <p className="num">05</p>
              <p className="num-text">
                Decentralized <br />
                Economy & Digital <br />
                Assets
              </p>
            </div>
          </div>
        </section>
        <section className="homeSection-two">
          <Concept />
          <Program />
          <Investors />
          <Jobs />
          <Blog />
          <Featured />
        </section>
      </div>
    </div>
  )
}
