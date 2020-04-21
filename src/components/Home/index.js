import React, { Component } from 'react';
import { Row, Image } from 'react-bootstrap';
import './home.css'
import selfpic from '../../images/profile_pic.png'

class Home extends Component {
    render() {
        return(
            <div style={{width:'70%', margin:'auto'}}>
                    <Row className="profilepic">
                        <Image src={selfpic} className="profile-img" alt="Profile" />
                    </Row>
                    <Row>
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p>
                                HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB
                            </p>
                            <div className="icon-links">
                                {/*github*/}
                                <a href="https://github.com/bkarulas" target="blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
                                {/*linked in*/}
                                <a href="https://linkedin.com/in/bkarulas" target="blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
                            </div>
                        </div>
                    </Row>
            </div>
        )
    }
}

export default Home;