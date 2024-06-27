import React from 'react'
import './investors.css'

export default function Investors() {
  return (
    <div className="investors-container">
      <h1 className="inv-head">SINC Investors Network</h1>
      <p className="inv-text">
        Our deals are structured not just to take in investments but to onboard
        owners passionate about our solutions. Our <br />
        portfolio companies are valued at $50k at start, with these low
        valuation, you are guaranteed at least 2x-5x, usually been <br />
        the first to invest.{' '}
      </p>
      <p className="inv-text">
        <span className='disclaimer'>Disclaimer:</span>
        These deal flows is a statement of our projections and may differ from
        stage to stage and from venture to <br />
        venture and the guarantee is for deal 1, usually the first to invest
      </p>

      <div className="angel">
        <div className="angel-boxes">
          <p className="ang-text">
            <span>Micro Angel Investors & Service incubators </span>
            (Invest from $500 & above)
          </p>
          <div className="top-boxes">
            <div className="ang-box" id='deal-one'>
              <div className="ang-box-head">Deal 1</div>
              <p className="deal">
                <span>✓</span> Idea Stage: <span>$5k for 5% Equity</span>
              </p>
              <p className="deal">
                <span>✓</span> Expected Revenue at This Stage:{' '}
                <span>$0/mth</span>
              </p>
              <p className="deal">
                <span>✓</span> Duration of Raise: <span>1mth</span>
              </p>
              <p className="deal">
                <span>✓</span> Who Can Invest:{' '}
                <span>
                  {' '}
                  People with Domain <br />
                  Expertise and Advisors{' '}
                </span>
              </p>
            </div>
            <div className="ang-box">
              <div className="ang-box-head">Deal 2</div>
              <p className="deal">
                <span>✓</span> Build Stage:{' '}
                <span>$25k worth of service for 10% Equity</span>
              </p>
              <p className="deal">
                <span>✓</span> Expected Revenue at This Stage:{' '}
                <span>$100+/mth</span>
              </p>
              <p className="deal">
                <span>✓</span> Duration of Raise: <span>1-3mths</span>
              </p>
              <p className="deal">
                <span>✓</span> Who Can Invest:{' '}
                <span>Developers, Engineers, Growth Marketers</span>
              </p>
            </div>
            <div className="ang-box">
              <div className="ang-box-head">Deal 3</div>
              <p className="deal">
                <span>✓</span> Validation Stage: <span>$50k for 5% Equity</span>
              </p>
              <p className="deal">
                <span>✓</span> Expected Revenue at This Stage:{' '}
                <span>$1k+/mth</span>
              </p>
              <p className="deal">
                <span>✓</span> Duration of Raise: <span>3-6mths</span>
              </p>
              <p className="deal">
                <span>✓</span> Who Can Invest: <span>3-6mths</span>{' '}
              </p>
            </div>
            <div className="ang-box" id='deal-two'>
              <div className="ang-box-head">Deal 4</div>
              <p className="deal">
                <span>✓</span> Traction Stage:{' '}
                <span>: $125k worth of service for 5% Equity</span>
              </p>
              <p className="deal">
                <span>✓</span> Expected Revenue at This Stage:{' '}
                <span>$5k+/mth</span>
              </p>
              <p className="deal">
                <span>✓</span> Duration of Raise: <span>6-12mths</span>
              </p>
              <p className="deal">
                <span>✓</span> Who Can Invest:{' '}
                <span>Media, Influencers, Celebrity, Platform Owners </span>{' '}
              </p>
            </div>
          </div>

          <div className="angel-boxes">
            <p className="ang-text">
              <span>Angel Investors & Venture Capital </span>
              (Invest from $50k & above)
            </p>
            <div className="bottom-boxes">
              <div className="ang-box" id='deal-one'>
                <div className="ang-box-head">Deal 5</div>
                <p className="deal">
                  <span>✓</span> Pre-seed Stage:{' '}
                  <span>$1.5M for 10% Equity</span>
                </p>
                <p className="deal">
                  <span>✓</span> Expected Revenue at This Stage:{' '}
                  <span>$50k+/mth</span>
                </p>
                <p className="deal">
                  <span>✓</span> Duration of Raise: <span>6-18mths</span>
                </p>
                <p className="deal">
                  <span>✓</span> Who Can Invest:{' '}
                  <span>Angel Investors, VCs, PE, Institutions </span>
                </p>
              </div>
              <div className="ang-box">
                <div className="ang-box-head">Deal 6</div>
                <p className="deal">
                  <span>✓</span> Seed Stage: <span>$7.5M for 20% Equity</span>
                </p>
                <p className="deal">
                  <span>✓</span> Expected Revenue at This Stage:{' '}
                  <span>$250k+/mth</span>
                </p>
                <p className="deal">
                  <span>✓</span> Duration of Raise: <span>12-24mths</span>
                </p>
                <p className="deal">
                  <span>✓</span> Who Can Invest:{' '}
                  <span>VCs, PE, Institutions</span>
                </p>
              </div>
              <div className="ang-box">
                <div className="ang-box-head">Deal 7</div>
                <p className="deal">
                  <span>✓</span> IPO Stage: <span>$1.5B for 20% Equity</span>
                </p>
                <p className="deal">
                  <span>✓</span> Expected Revenue at This Stage:{' '}
                  <span> $1M+/mth</span>
                </p>
                <p className="deal">
                  <span>✓</span> Duration of Raise: <span>18-36mths</span>
                </p>
                <p className="deal">
                  <span>✓</span> Who Can Invest: <span>The Public</span>
                </p>
              </div>
              <div className="ang-box" id='deal-three'>
                <div className="ang-black-box">
                  <p className="ang-black">
                    Work with Service Incubators <br />
                    (SINC) to expedite your <br />
                    time to market
                  </p>
                  <button className="ang-btn">Join SINC Network</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
