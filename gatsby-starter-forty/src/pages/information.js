import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerInfo from '../components/BannerInfo'

import pic08 from '../assets/images/imposter3.jpg'
import pic09 from '../assets/images/felixandfriends.jpg'
import pic10 from '../assets/images/cliff.png'

const information = (props) => (
    <Layout>
        <Helmet>
            <title>information - Forty by HTML5 UP</title>
            <meta name="description" content="Info" />
        </Helmet>

        <BannerInfo/>




        
        <div id="main">
            <section id="one">

                <div className="box">
                    <header className="major">
                        <h2>mission statement</h2>  
                    </header>
                    <p> Catalyst is a social and pre-professional community of tech enthusiasts. We strive to connect our members to peers with similar interests and provide members with mentorship in the field of technology. As a diverse, tight-knit group on campus, we can rely on each other for not only career and academic advice, but also for social and emotional support. We wish to help members realize their potential and explore the possibilities that await in the tech world.</p>
            

                    <header className="major">
                        <h2>frequently asked questions</h2>
                    </header>
                    <p> <b> <code> q: i would love to work with catalyst. how can i reach out?</code></b></p> 
                    <p> <code> a: please email us! we're always looking to collaborate with folks around campus.</code></p>
                    <p> <b> <code> q: how can i join?</code></b></p>
                    <p> <code>a: unfortunately for you, we already have an amazing pledge class this semester! better luck next time :/ </code></p>
                    <p> <b><code> q: are your events open to everyone?</code></b></p>
                    <p><code> a: some of our events are open to everyone at duke, and we would love to have you there.</code></p>
                    <p> <b><code>q:who is the best hackalyst team?</code></b></p>
                    <p><code> a: felix and friends! (duh) (pictured below)</code></p>
                </div>

            </section>

            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Imposter Syndrome Workshops</h3>
                            </header>
                            <p>In collaboration with executive coaches in the Research Triangle Park and Amy Arnold from DTech, the Catalyst exec team is putting together a workshop dedicated to demystifying Imposter Syndrome and providing students with resources to develop personally and professionally. We held this event on Thursday, March 18th, and are planning to hold more in the future!</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Hackalyst!</h3>
                            </header>
                            <p>As a part of our new member orientation (NME) program, baby catalyst members are thrown headfirst like lambs to the slaughter into a high-stakes, high-pressure hackathon. Members are given 24 hours to produce a project in one of 4 categories: flushed-out wireframe, app, website, or data analysis, after which they are to present a PowerPoint on their product. Pictured on the right is the winning team from the 2021 PC, Felix and Friends: Allison Shi, Chan Park, Ahan Kaul, and Felix Hu. </p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cata-Retreats</h3>
                            </header>
                            <p>Besides the professional development workshops and courses we host for our members as well as access to an extensive network of succesful techies, Catalyst is all about community bonding and having a good time. Every year our members go on retreats together for some adventuring fun and to get to know each other better. Check out this sick pic we snapped at this cliff edge!</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default information