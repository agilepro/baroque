import * as React from "react"

import Layout from "../components/layout"
import {Seo} from "../components/seo"
import DonateButton from "../components/donateButton"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
    <Layout>
        <div className="container  my-5">
          <div className="container">
            <h1>Donations</h1>
            <p>There are many ways, large and small, that you may support the 
                financial well-being of the Baroque Festival. 
                Please explore the options below and find the level of 
                support that is right for you.</p>

            <DonateButton/>


            <table class="spaceyTable">
                <tr><td>
                    <h2>Season Sponsor</h2>
                    <p>By donating $3000, you can enable an entire season’s worth of musicians, instrument maintenance, hall rentals, community outreach, and more.
                        Concert Sponsor</p>
                    <p>By donating $2000, you can support the activities of a particular concert. Piano and harpsichord tuning,  hall rental, and professional musicians are supported by this generous gift.</p>
                </td>
                <td>
                    <h2>EAS Sponsor</h2>
                    <p>Each year our Emerging Artists Showcase gives a boost to dedicated young musicians, enabled by your donation of $1500.</p>

                </td></tr>
                <tr><td>
                    <h2>Angels</h2>
                    <p>Our Angels provide substantial support for our activities by a generous donation of $1000 or more.</p>
                </td>
                <td>
                    <h2>Nobles</h2>
                    <p>Our Nobles provide substantial support with a donation between $500 and $999.</p>
                </td></tr>
                <tr><td>
                    <h2>Lords and Ladies</h2>
                    <p>Lords and Ladies sustain and inspire us with their generous gift of $250-$499.</p>
                </td>
                <td>
                    <h2>Sustainers</h2>
                    <p>Our sustainers keep us making music and events with their generous contributions between $100 and $249.</p>
                </td></tr>
                <tr><td>
                    <h2>Patrons</h2>
                    <p>Patrons keep us afloat and doing our work by their generous donation of $50-$99.</p>
                </td>
                <td>
                    <h2>Fans</h2>
                    <p>Our Fans keep us moving along with their generous donation anything up to $50. Every amount is warmly appreciated!</p>
                </td></tr>
            </table>
            <DonateButton/>

            <p>If you prefer to donate via check, please decide upon a suitable level of support above and mail your check to:</p>
            <ul>
                <li>Santa Cruz Baroque Festival</li>
                <li>P.O. Box 482</li>
                <li>Santa Cruz, CA 95061</li>
            </ul>
            <p>Or use this QR code from your phone:</p>
            <StaticImage
              src="../images/donate-qr-code.png"
              formats={["AUTO", "WEBP"]}
              alt="Baroque"
              className="img-fluid"
            />

            <p>The Santa Cruz Baroque Festival is a 501(c)(3) nonprofit corporation, EIN 94-2705719. It operates on an annual break-even budget. As with most performing arts organizations, ticket sales generate only a small portion of our income.</p>
          </div>
        </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="SC Baroque Festival Donations" />
)