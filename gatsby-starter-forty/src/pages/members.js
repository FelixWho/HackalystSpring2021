import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMembers from '../components/BannerMembers'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

import karendeng from '../assets/images/karen-deng.jpeg'
import herleenkaur from '../assets/images/herleen-kaur.jpeg'
import michellezhang from '../assets/images/michelle-zhang.jpeg'
import samanthawhitt from '../assets/images/samantha-whitt.jpeg'
import samuelzhang from '../assets/images/samuel-zhang.jpeg'
import williamyu from '../assets/images/william-yu.jpeg'
import aksharaanand from '../assets/images/akshara-anand.jpeg'
import kevinfang from '../assets/images/kevin-fang.jpeg'
import adamyee from '../assets/images/adam-yee.jpeg'
import ericchai from '../assets/images/eric-chai.jpeg'
import helenxiao from '../assets/images/helen-xiao.jpeg'
import lisatang from '../assets/images/lisa-tang.jpeg'


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
                                <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={karendeng} alt="" /><p>Karen Deng</p></span></Link></div>
                                <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={herleenkaur} alt="" /><p>Herleen Kaur</p></span></Link></div>
                                <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={michellezhang} alt="" /><p>Michelle Zhang</p></span></Link></div>
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
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={adamyee} alt="" /></span><p>Adam Yee</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={aksharaanand} alt="" /></span><p>Akshara Anand</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={ericchai} alt="" /></span><p>Eric Chai</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={helenxiao} alt="" /></span><p>Helen Xiao</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={kevinfang} alt="" /></span><p>Kevin Fang</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={lisatang} alt="" /></span><p>Lisa Tang</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={samanthawhitt} alt="" /></span><p>Samantha Whitt</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={samuelzhang} alt="" /></span><p>Samuel Zhang</p></Link></div>
                            <div className="col-4"><Link to="/generic" className="image"><span className="image fit"><img src={williamyu} alt="" /></span><p>William Yu</p></Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Landing