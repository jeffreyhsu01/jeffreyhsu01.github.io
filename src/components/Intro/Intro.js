import React, { Component } from 'react'
import './intro.scss';
import Links from '../Links/Links'
import Memoji from '../../img/memoji.png'

class Intro extends Component {
    render() {
        return (
        <div>
            <main className="landing-page">
                <div className="intro">
                    <div >
                        <h1 className="intro-text">
                            Hi there! I'm Jeff, a developer based out of the Bay Area.
                        </h1>
                        <p class = "intro-body">
                        I'm passionate about leveraging technology to transform stories into revolutionary products and services. Previously at Capital One.
                        </p>
                    </div>
                    <div class="img">
                      <img src={Memoji} alt="memoji" />
                    </div>
                </div>
                <Links/>
            </main>
            
        </div>
            
        )
    }
}

export default Intro