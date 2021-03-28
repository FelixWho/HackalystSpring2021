import React from 'react'
import logo from '../assets/images/logo.png';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
                <header className="major">
                    <h1>HELLO, CATALYST&nbsp;  
                    <img src={logo} alt="" />
                    </h1>
                </header>
            <div className="content">
                <p>Duke University's Premier Tech Society.<br />
                </p>
                <ul className="actions">
                    <li><a href="#" className="button next scrolly">Join the mailing list</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
