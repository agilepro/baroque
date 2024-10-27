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

            <h2>Announcing the Santa Cruz Baroque Festival 2025 Season!</h2>

            <p>Dear Santa Cruz Baroque Festival Supporter,</p> 

            <p>It is with great pleasure and enthusiasm that we announce the commencement of our 52nd season of the Santa Cruz Baroque Festival. This year marks the beginning of a new era for our beloved festival, as we welcome our esteemed new Artistic Director, Jörg Reddin, to the helm. We are thrilled to have such a distinguished musician leading us into this next chapter of our festival's evolving legacy. Jörg brings with him a wealth of experience and a deep connection to the Baroque tradition. As the organist and cantor at the renowned Johann Sebastian Bach Church in Arnstadt, Germany, he stands in a long and illustrious line of musicians who have upheld the legacy of JS Bach.</p> 

            <p>While we celebrate this new beginning, we also pause to remember and honor the remarkable contributions of our Founder and Artistic Director of 50 years, Linda Burman-Hall, who sadly passed away last year. It was Linda’s keen eye for talent that brought Jörg to the SCBF as a visiting artist last season, shortly before her passing. In this way, she left us with a final gift – a worthy successor to carry forward her life's work and passion.</p> 

            <p>On January 26, Jörg will inaugurate the 52nd concert season entitled Rendezvous with the Romantics with Concert I, a recital of Baroque organ masterworks at Holy Cross Church, set against the glow of candlelight and joined by special guest artists. Concert II features two of J.S. Bach's most beloved cantatas, the Coffee Cantata & Cantata Burlesque in a café setting, performed by Jörg Reddin, bass-baritone; Jennifer Paulino, soprano; Jonathan Salzado, harpsichord; and the Baroque Festival Strings and Winds. Concert III will feature Maestro Reddin, organ; Samantha Bounkeua, violin, and Judy Roberts, cello. Concert IV Jörg Reddin will perform as both organist and bass baritone, accompanied by the UCSC Chamber Singers and also featuring WAVE, the premier Women’s Antique Vocal Ensemble.</p> 

            <p>In addition to our concerts, we will offer a variety of educational and performance opportunities including our first Youth Vocal Music Competition, German Cultural Center fundraiser, and private home events. Please visit our website https://scbaroque.org/to view these programs and other postseason programming.</p> 

            <p>Your generosity is the fuel for our continued exploration. All of the research, practice, and passion poured into creating our concert series would come to nothing without the support of patrons like you. To aid you in consideration of the level of your giving, please consult the accompanying sheet listing various levels of giving and opportunities to sponsor concerts or instruments. Just use the ‘Donate’ tab of our website: scbaroque.org/donate. Donations may also be made by check mailed to our address, P.O. Box 482, Santa Cruz, CA 95061.</p> 

            <p>With Gratitude,</p> 

            <p>- Vlada Moran and Brian Johnston</p>
            <p>- Co-Presidents, Santa Cruz Baroque Festival</p>

<hr/>

            <p>There are many ways, large and small, that you may support the 
                financial well-being of the Baroque Festival. 
                Please explore the options below and find the level of 
                support that is right for you.</p>

            <DonateButton/>


            <div class="my-flex-container">
                <div class="max-width-400">
                    <h2>Season Sponsor</h2>
                    <p>By donating $3000, you can enable an entire season’s worth of musicians, instrument maintenance, hall rentals, community outreach, and more.
                        Concert Sponsor</p>
                    <p>By donating $2000, you can support the activities of a particular concert. Piano and harpsichord tuning,  hall rental, and professional musicians are supported by this generous gift.</p>
                </div>
                <div class="max-width-400">
                    <h2>EAS Sponsor</h2>
                    <p>Each year our Emerging Artists Showcase gives a boost to dedicated young musicians, enabled by your donation of $1500.</p>
                </div>
                <div class="max-width-400">
                    <h2>Angels</h2>
                    <p>Our Angels provide substantial support for our activities by a generous donation of $1000 or more.</p>
                </div>
                <div class="max-width-400">
                    <h2>Nobles</h2>
                    <p>Our Nobles provide substantial support with a donation between $500 and $999.</p>
                </div>
                <div class="max-width-400">
                    <h2>Lords and Ladies</h2>
                    <p>Lords and Ladies sustain and inspire us with their generous gift of $250-$499.</p>
                </div>
                <div class="max-width-400">
                    <h2>Sustainers</h2>
                    <p>Our sustainers keep us making music and events with their generous contributions between $100 and $249.</p>
                </div>
                <div class="max-width-400">
                    <h2>Patrons</h2>
                    <p>Patrons keep us afloat and doing our work by their generous donation of $50-$99.</p>
                </div>
                <div class="max-width-400">
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
    <Seo title="SC Baroque Festival Donations" />
)