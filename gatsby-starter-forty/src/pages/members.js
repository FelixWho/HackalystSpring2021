import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMembers from '../components/BannerMembers'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

import karendeng from '../assets/images/karen-deng1.jpeg'
import herleenkaur from '../assets/images/herleen-kaur1.jpeg'
import michellezhang from '../assets/images/michelle-zhang1.jpeg'
import samanthawhitt from '../assets/images/samantha-whitt1.jpeg'
import samuelzhang from '../assets/images/samuel-zhang1.jpeg'
import williamyu from '../assets/images/william-yu1.jpeg'
import aksharaanand from '../assets/images/akshara-anand1.jpeg'
import kevinfang from '../assets/images/kevin-fang1.jpeg'
import adamyee from '../assets/images/adam-yee1.jpeg'
import ericchai from '../assets/images/eric-chai1.jpeg'
import helenxiao from '../assets/images/helen-xiao1.jpeg'
import lisatang from '../assets/images/lisa-tang1.jpeg'


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Members</title>
            <meta name="description" content="Members Page" />
        </Helmet>

        <BannerMembers/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Executives</h2>
                    </header>
                    <div className="box alt">
                        <div className="grid-wrapper">
                                <div className="col-4"><Link to="https://www.linkedin.com/in/karen-deng-7b5a8816b/" className="image"><span className="image fit"><img src={karendeng} alt="" /><p>Karen Deng</p></span></Link></div>
                                <div className="col-4"><Link to="https://www.linkedin.com/in/herleen-kaur/" className="image"><span className="image fit"><img src={herleenkaur} alt="" /><p>Herleen Kaur</p></span></Link></div>
                                <div className="col-4"><Link to="https://www.linkedin.com/in/xmichellez/" className="image"><span className="image fit"><img src={michellezhang} alt="" /><p>Michelle Zhang</p></span></Link></div>
                        </div>
                    </div> 
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <header className="major">
                        <h2>Members</h2>
                    </header>
                    <div className="box alt">
                        <div className="grid-wrapper">
                            <div className="col-4"><Link to="https://www.linkedin.com/in/adamyee22/" className="image"><span className="image fit"><img src={adamyee} alt="" /></span><p>Adam Yee</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/aksharasanand/" className="image"><span className="image fit"><img src={aksharaanand} alt="" /></span><p>Akshara Anand</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/eric-chai-4145b118b/" className="image"><span className="image fit"><img src={ericchai} alt="" /></span><p>Eric Chai</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/helenxiao15/" className="image"><span className="image fit"><img src={helenxiao} alt="" /></span><p>Helen Xiao</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/kevin-fang/" className="image"><span className="image fit"><img src={kevinfang} alt="" /></span><p>Kevin Fang</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/lisa-tang8/" className="image"><span className="image fit"><img src={lisatang} alt="" /></span><p>Lisa Tang</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/samantha-whitt/" className="image"><span className="image fit"><img src={samanthawhitt} alt="" /></span><p>Samantha Whitt</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/samzyao/" className="image"><span className="image fit"><img src={samuelzhang} alt="" /></span><p>Samuel Zhang</p></Link></div>
                            <div className="col-4"><Link to="https://www.linkedin.com/in/williamyu112/" className="image"><span className="image fit"><img src={williamyu} alt="" /></span><p>William Yu</p></Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Landing