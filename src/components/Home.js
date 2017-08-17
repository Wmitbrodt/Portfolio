import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {


  render() {
    return (
      <div id="home">
        <header>
          <div id="stripes">
            <span>sdf</span>
            <span>sdf</span>
            <span>sdf</span>
            <span>sd</span>
            <span>sd</span>
          </div>

          <section id="intro">
            <div className="container-lg">
                <a className="announcement" href="/blog/hong-kong">
                  <span className="new-pill">New</span>
                  <span className="message">
                      Stripe in Hong Kong + Alipay and WeChat Pay globally.
                  </span>
                </a>

              <h1>
                The new standard in online payments
              </h1>
              <p className="common-BodyText">
                Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
              </p>
                <ul>
                  <li>
                    <a
                      href="https://dashboard.stripe.com/register"
                      className="common-Button"
                      data-analytics-action="create_account"
                      data-analytics-source="header_cta"
                    >
                        Create account
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact/sales"
                      className="common-Button"
                      data-analytics-action="contact_sales"
                      data-analytics-source="header_cta"
                    >
                      Contact Sales
                    </a>
                  </li>
                </ul>
            </div>
          </section>
        </header>

      </div>

    )
  }
}



export default Home;
