import React from 'react'
import Facebook from '../../images/facebook.png'
// import Facebook from "../../images/facebook.png"
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'
import Insta from '../../images/insta.png'
import Youtube from '../../images/youtube.png'
import Messenger from '../../images/messenger.png'
import Gasus from '../../images/gasus.png'
import Trusted from '../../images/trusted.png'
import Nigeria from '../../images/nigeria.png'
import Logo from '../../images/footerlogo.png'
import Whats from '../../images/w.png'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="top-footer">
        <h1 className="footer-head">Newsletter</h1>
        <p className="news">
          Get the latest about SINC Partners, our startup Incubator program,
          Portfolio <br />
          company offerings - straight into your inbox.
        </p>

        <div className="email">
          <input type="email" placeholder="Enter your email address" />
          <p className="sub">Subscribe</p>
        </div>
      </div>

      <div className="fline">
        <div className="footer-wrap">
          <div className="footer-stuff">
            <div className="footer-logo" id="list">
              <img src={Logo} alt="footer logo" className="flogo-icon" />
              <p>
                SINC Partners is a service <br />
                incubation company connecting <br />
                experts in product development <br />
                and growth marketing willing to <br /> offer their services to
                amazing <br />
                startups in exchange <br />
                for minute equity (usually <br />
                0.5% to 2%)
              </p>
            </div>

            <div className="first-list">
              <div id="list" className="platforms">
                <h2>Platforms</h2>
                <p>Kofoundme</p>
                <p>InResidency</p>
                <p>Service Market</p>
                <p>Founders School</p>
                <p>Metty</p>
                <p>Grantty</p>
                <p>Boldtell</p>
                <p>Chekwa</p>
              </div>

              <div id="list" className="initiatives">
                <h2>Initiatives</h2>
                <p>Jabi Plains</p>
                <p>Local Pricing Initiative</p>
                <p>Scholarship Program</p>
                <p>SSMN Pricing</p>
                <p>University STEM </p>
                <p>University InResidency </p>
                <div className="nig">
                  <p>1M Nigeria</p>
                  <img src={Nigeria} alt="Nigeria logo" className="nigeria" />
                  <p>Products</p>
                </div>
                <p>Founders Festival </p>
              </div>
            </div>

            <div className="second-list">
              <div id="list" className="about">
                <h2>About Us</h2>
                <p>Who We Are</p>
                <p>Our People</p>
                <p>Concept Innovations</p>
                <p>Our Process</p>
                <p>Investors Network</p>
                <p>CSR & Events</p>
                <p>Career</p>
                <p>Contact</p>
              </div>

              <div id="list" className="more">
                <h2>More</h2>
                <p>Services</p>
                <p>Equity Jobs</p>
                <p>EIR Program</p>
                <p>Offers</p>
                <p>Innovation News</p>
                <p>FAQ</p>
                <p>Blog & Resources</p>
                <p>Press</p>
              </div>
            </div>
          </div>

          <div className="location-hr">
            <div id="list" className="locations">
              <h2>Locations</h2>
              <p>Abuja, Nigeria </p>
              <p>Lagos, Nigeria </p>
              <p>Philadelphia, USA</p>
              <div className="img-logo">
                <img src={Trusted} alt="trusted logo" className="trusted" />
                <div className="what-text">
                  <img src={Whats} alt="whatsapp logo" className="whats" />
                  <p>Chat With Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guaranteed">
        <p className="gua">
          Guaranteed 2x on your service or cash investment, usually been the
          first to invest. <span>Get in early and SINC your guaranty!</span>
        </p>
        <div className="gasus-display">
          <img src={Gasus} alt="gasus logo" className="gasus" />
          <p className="bus">
            We are a business built on the <br />
            foundation of Christian values and belief
          </p>
        </div>
      </div>

      <div className="copyright">
        <p className="copy">© 2023 SINC Partners Ltd. All rights reserved</p>
        <div className="policy">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Security</p>
        </div>
        <div className="medias">
          <img src={Facebook} alt="" className="facebook" id="f" />
          <img src={Twitter} alt="" className="twitter" id="f" />
          <img src={Instagram} alt="" className="instagram" id="f" />
          <img src={LinkedIn} alt="" className="linkedin" id="l" />
          <img src={Insta} alt="" className="insta" id="l" />
          <img src={Youtube} alt="" className="youtube" id="l" />
          <img src={Messenger} alt="" className="messenger" />
        </div>
      </div>

      <div className="web">
        <p className="web-text">Web in Nigeria</p>
        <img src={Nigeria} alt="" className="nigeria" />
      </div>
    </div>
  )
}
