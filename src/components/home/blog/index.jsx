import React from 'react'
import Blogone from '../../../images/blogone.png'
import Blogtwo from '../../../images/blogtwo.png'
import Bookone from '../../../images/bookone.png'
import Booktwo from '../../../images/booktwo.png'
import Bookthree from '../../../images/bookthree.png'

import './blog.css'

export default function Blog() {
  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blogs & Resources</h1>
      <div className="blog-boxes">
        <div className="blog-box">
          <img src={Blogone} alt="blog img" className="blog-img" />

          <div className="book-text-pics">
            <div className="blog-texts">
              <p className="bb-heading">Top Ten Most Powerful Startup</p>
              <p className="bb-text">
                Top Ten Most Powerful Startup. Top Ten Most <br />
                Powerful Startup. Top Ten Most Powerful <br />
                Startup
              </p>
            </div>
            <img src={Bookone} alt="book one" className="book-pics" />
          </div>
        </div>
        <div className="blog-box">
          <img src={Blogtwo} alt="blog img" className="blog-img" />

          <div className="book-text-pics">
            <div className="blog-texts">
              <p className="bb-heading">Top Ten Most Powerful Startup</p>
              <p className="bb-text">
                Top Ten Most Powerful Startup. Top Ten Most <br />
                Powerful Startup. Top Ten Most Powerful <br />
                Startup
              </p>
            </div>
            <img src={Booktwo} alt="book two" className="book-pics" />
          </div>
        </div>
        <div className="blog-box">
          <img src={Blogtwo} alt="blog img" className="blog-img" />

          <div className="book-text-pics">
            <div className="blog-texts">
              <p className="bb-heading">Top Ten Most Powerful Startup</p>
              <p className="bb-text">
                Top Ten Most Powerful Startup. Top Ten Most <br />
                Powerful Startup. Top Ten Most Powerful <br />
                Startup
              </p>
            </div>
            <img src={Bookthree} alt="book three" className="book-pics" />
          </div>
        </div>
      </div>

      <p className="more-blog">See More Blogs & Resources</p>

      <div className="mobile-blog">
        <div className="mobile-blog-thumbnail">
          <img src={Blogone} alt="blog img" className="blog-img" />
          <img src={Blogtwo} alt="blog img" className="blog-img" />
          <img src={Blogtwo} alt="blog img" className="blog-img" />
        </div>
      </div>

      <div className="mobile-blog-books">
        <div className="book-text-pics">
          <div className="blog-texts">
            <p className="bb-heading">Top Ten Most Powerful Startup</p>
            <p className="bb-text">
              Top Ten Most Powerful Startup. Top Ten Most <br />
              Powerful Startup. Top Ten Most Powerful <br />
              Startup
            </p>
          </div>
          <img src={Bookone} alt="book img" className="book-pics" />
        </div>
        <div className="book-text-pics">
          <div className="blog-texts">
            <p className="bb-heading">Top Ten Most Powerful Startup</p>
            <p className="bb-text">
              Top Ten Most Powerful Startup. Top Ten Most <br />
              Powerful Startup. Top Ten Most Powerful <br />
              Startup
            </p>
          </div>
          <img src={Booktwo} alt="book img" className="book-pics" />
        </div>
        <div className="book-text-pics">
          <div className="blog-texts">
            <p className="bb-heading">Top Ten Most Powerful Startup</p>
            <p className="bb-text">
              Top Ten Most Powerful Startup. Top Ten Most <br />
              Powerful Startup. Top Ten Most Powerful <br />
              Startup
            </p>
          </div>
          <img src={Booktwo} alt="book img" className="book-pics" />
        </div>
      </div>

      <p className="mobile-more-blog">See More Blogs & Resources</p>
    </div>
  )
}
