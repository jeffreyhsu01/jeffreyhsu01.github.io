import React, { Component } from 'react'
import './blog.scss';
import CautionSign from '../../img/CautionSign.svg';
import Header from '../Header/Header';
import Links from '../Links/Links'


class Blog extends Component {
    render() {
        return (
          <div>
          <main className="Blog">
            <Header />
            <div className="NotReady">
              <img src={CautionSign} alt="NA" />
              <h1>Work in progress, check back later!</h1>
            </div>
            <Links />
          </main>
          
          </div>
        )
    }
}

export default Blog