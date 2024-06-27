import React from 'react'
import One from '../../../images/one.png'
import Two from '../../../images/twoG.png'
import Punch from '../../../images/punch.png'
import News from '../../../images/news.png'
import './featured.css'

export default function Featured() {
  return (
    <div className="featured-container">
      <h3 className="fea-head">As Featured In</h3>
      <div className="fea-news">
        <div className="news-box">
          <div className="news-info">
            <img src={Punch} alt="punch logo" className="punch-logo" />
            <p className="news-head">
              SINC Partners invests over 200 <br />
              million naira in 5 startups
            </p>
            <p className="news-text">
              SINC Partners invests over 200 <br />
              million naira in 5 startups. SINC <br />
              Partners invests over 200 million <br />
              naira in 5 startups SINC Partners <br />
              invests over 200 million naira in ....
            </p>
          </div>

          <div className="news-report">
            <p className="report">REPORTED BY:</p>
            <p className="reporter-name">Rema Viel</p>
          </div>
        </div>

        <div className="buj-box">
          <img src={One} alt="picture one" className="fea-pics" />
          <div className="news-box">
            <div className="news-info">
              <img src={News} alt="buj logo" className="buj-logo" />
              <p className="news-head">
                SINC Partners invests over 200 <br />
                million naira in 5 startups
              </p>
              <p className="news-text">
                SINC Partners invests over 200 <br />
                million naira in 5 startups. SINC <br />
                Partners invests over 200 million <br />
                naira in 5 startups SINC Partners <br />
                invests over 200 million naira in ....
              </p>
            </div>

            <div className="news-report">
              <p className="report">REPORTED BY:</p>
              <p className="reporter-name">Rema Viel</p>
            </div>
          </div>
        </div>

        <img src={Two} alt="picture two" className="fea-pics" />
      </div>

      <h1 className="fea-build">
        Let's build companies that <br />
        help everyone succeed
      </h1>

      <div className="fea-btns">
        <button className="fea-sinc">SINC With Us</button>
        <button className="fea-apply">Apply to SIP 1.0</button>
      </div>
    </div>
  )
}
