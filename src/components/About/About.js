import React, { Component } from 'react'
import './about.scss';
import Header from '../Header/Header';
import Links from '../Links/Links';
import CapOne from '../../img/1635782717682.png';
import Streamforge from '../../img/Streamforge.png';
import Leidos from '../../img/Leidos.png';


class About extends Component {
    render() {
        return (
          <div>
          <main class="About">
            <Header />
            <div class="container-lg uppercase">
              <div class="AboutMe">
                <h3>About Me</h3>
                <p class="text"> Hi I'm Jeff and I'm a recent graduate at Boston University. Thanks for checking out my site (the power of the interwebs :D), please don't hesitate to reach out through LinkedIn or my email!
                </p>
                <p class="text">
                  What excites me most about software engineering is the constant ability to bet on myself. There are so many opportunities to learn and grow, and for that I'm grateful for what the future has in store.
                </p>
                <p class="text">
                  I love building out innovative solutions in the design, productivity, and finanical spheres, and have experience building out e2e projects.
                </p>
                <p class="text">
                  In my free time I enjoy building the latest and greatest LEGO sets, obsessively following the Warriors/49ers, and hanging out with friends and family!
                </p>
              </div>
            </div>
            <article class="MyExperience uppercase">
              <div class="container-lg">
                <div>
                  <h3>Experiences</h3>
                </div>
            </div>
              <div class="container-lg">
                <div class="product-card product-card--has-subdescription">
                  <div class="company-logo"> 
                    <img src={CapOne} alt="CapOne" />
                  </div>
                  <div class="product-card-content">
                    <h3 class="internship-title">Capital One</h3>
                    <p class="internship-desc">Software Engineering Intern, EMI Core Platform</p>
                  </div>
                </div>
                <div class="product-card product-card--has-subdescription">
                  <div class="company-logo"> 
                    <img src={Leidos} alt="Leidos" />
                  </div>
                  <div class="product-card-content">
                    <h3 class="internship-title">Leidos</h3>
                    <p class="internship-desc">Software Development Intern, VeRTUe</p>
                  </div>
                </div>
                <div class="product-card product-card--has-subdescription">
                  <div class="company-logo"> 
                    <img src={Streamforge} alt="Streamforge" />
                  </div>
                  <div class="product-card-content">
                    <h3 class="internship-title">Streamforge</h3>
                    <p class="internship-desc">Software Engineering Intern</p>
                  </div>
                </div>
            </div>
            </article>
            <Links />
          </main>
          </div>
        )
    }
}

export default About