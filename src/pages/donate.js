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

<p>Dear Santa Cruz Baroque Festival Patron,</p>
<p>We hope this letter finds you well and looking forward to the Santa Cruz Baroque Festivals 53rd season “ESSENTIALLY BAROQUE”.</p>
<p>We are thrilled to announce that this will be Artistic Director Jörg Reddin’s third season at the helm and he has once again created a wonderfully varied season we are sure will help guarantee the success for the future of our organization.</p>
<p>We cannot thank you enough for your past support! Your generosity ensures that the Baroque Festival continues beyond our 53rd season, inspiring future generations of listeners and young musicians with the same excellence that has brought us together since the organization was founded by Linda Burman-Hall.</p>
<p>Baroque Festival audiences were first introduced to Jörg Reddin from the Bach Church in Arnstadt Germany in the 2024 season, when as Artist in Residence he directed and performed on the first four concerts of the Festival. Audiences enthusiastically responded to Maestro Reddin's insightful programing and virtuosity on the organ as well as his warm bass-baritone voice. His infectious enthusiasm for Baroque music and easy rapport with the audience were evident throughout his four concerts.</p>
<p>With your support of donations, season ticket sales and sponsorships, Maestro Reddin and the entire Board of the Festival is sure you will enjoy this season’s offerings, including concerts for Solo Pipe Organ, Organ and Brass, Baroque Songs and Arias, Secular & Sacred Music from the Bach family and a Solo All-Bach Violin performance: Essentially Baroque!</p>
<p>In addition we’ve added a special Family & Kids concert (Prokofiev’s Peter and the Wolf, Toccata and Fugue in D minor, and more), several master classes, and a vocal competition.</p>
<p>In order tor the Festival to present the superlative season Maestro Reddin has planned for 2026, we need to raise $20,000. With funding for the arts in Santa Cruz basically non-existent, we desperately need your help and count on you to make 2026 the best Baroque Festival yet!</p>
<p>Musically yours,</p>
<p>The Santa Cruz Baroque Festival Board of Directors.</p>
<p>You can make a donation, sponsor a concert and buy season tickets online ~ by mail ~ phone </p>
<p>Online at scbaroquefestival.org ~ email: manager@SantaCruzBaroqueFestival.org</p>
<p>Call us: 831.457.9693 P.O. Box 482Santa Cruz, CA 95061</p>
<p>The Santa Cruz Baroque Festival is a non-profit 501(c)(3). Taxpayer Identification Number EIN 94-2705719</p>

<hr/>

            <p>There are many ways, large and small, that you may support the 
                financial well-being of the Baroque Festival. 
                Please explore the options below and find the level of 
                support that is right for you.</p>

            <DonateButton/>


            <div class="my-flex-container">
                <div class="max-width-350">
                    <h2>Season Sponsor</h2>
                    <p>By donating $3000, you can enable an entire season's worth of musicians, instrument maintenance, hall rentals, community outreach, and more.
                        Concert Sponsor</p>
                    <p>By donating $2000, you can support the activities of a particular concert. Piano and harpsichord tuning,  hall rental, and professional musicians are supported by this generous gift.</p>
                </div>
                <div class="max-width-350">
                    <h2>EAS Sponsor</h2>
                    <p>Each year our Emerging Artists Showcase gives a boost to dedicated young musicians, enabled by your donation of $1500.</p>
                </div>
                <div class="max-width-350">
                    <h2>Angels</h2>
                    <p>Our Angels provide substantial support for our activities by a generous donation of $1000 or more.</p>
                </div>
                <div class="max-width-350">
                    <h2>Nobles</h2>
                    <p>Our Nobles provide substantial support with a donation between $500 and $999.</p>
                </div>
                <div class="max-width-350">
                    <h2>Lords and Ladies</h2>
                    <p>Lords and Ladies sustain and inspire us with their generous gift of $250-$499.</p>
                </div>
                <div class="max-width-350">
                    <h2>Sustainers</h2>
                    <p>Our sustainers keep us making music and events with their generous contributions between $100 and $249.</p>
                </div>
                <div class="max-width-350">
                    <h2>Patrons</h2>
                    <p>Patrons keep us afloat and doing our work by their generous donation of $50-$99.</p>
                </div>
                <div class="max-width-350">
                    <h2>Fans</h2>
                    <p>Our Fans keep us moving along with their generous donation anything up to $50. Every amount is warmly appreciated!</p>
                </div>
            </div>
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
    <>
    <Seo title="SC Baroque Festival Donations" />
    </>
)