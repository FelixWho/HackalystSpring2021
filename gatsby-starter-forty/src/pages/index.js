import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/mission.png'
import pic02 from '../assets/images/social.png'
import pic03 from '../assets/images/innovation.png'
import pic04 from '../assets/images/outreach.png'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import companypic from '../assets/images/companies.jpeg'

class HomeIndex extends React.Component {
    render() {
        return (
            
            <Layout>
                <head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />                
                </head>
                <Helmet
                    title="Duke Catalyst"
                    meta={[
                        { name: 'description', content: '' },
                        { name: 'keywords', content: '' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Our Mission</h3>
                                <p>See what we're about.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Social</h3>
                                <p>Meet passionate builders, designers, leaders.</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Innovation</h3>
                                <p>Catalyst is home to members in all aspects of tech, from entrepreneurship to consulting to software development.</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Mentorship and Outreach</h3>
                                <p>We support our members and the wider Duke community in all technological endeavors.</p>
                            </header>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Where our members have gone</h2>
                            </header>
                            <span className="image main"><img src={companypic} alt="" /></span>
                            <p></p>
                        </div>
                    </section>
                    <section id="three">
                        <div className="inner">
                        <ul className="actions">
                            <li><Link to="/landing" className="button next">Rush Catalyst!</Link></li>
                        </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex