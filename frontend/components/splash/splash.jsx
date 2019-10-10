import React from 'react';

import { Link } from 'react-router';

import NavbarContainer from '../navbar_container';
import Footer from '../footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.slideIndex = 0;
  }

  render() {
    return (
        <div className="splash">
          <ul className="cb-slideshow">
            <li>
              <span>Image 01</span>
              <div>
                <h3>Help out your community</h3>
                </div>
              </li>
            <li>
              <span>Image 02</span>
              <div>
                <h3>Give young people opportunities</h3>
                </div>
              </li>
            <li>
              <span>Image 03</span>
              <div>
                <h3>Get your jobs done!</h3>
                </div>
              </li>
            <li>
              <span>Image 04</span>
              <div>
                <h3>Enjoy youthful energy, creativity and spirit</h3>
                </div>
              </li>
            <li>
              <span>Image 05</span>
              <div>
                <h3>Help today's youth learn responsibility</h3>
                </div>
              </li>
            <li>
              <span>Image 06</span>
              <div>
                <h3>Find the help you need</h3>
                </div>
              </li>
          </ul>
        </div>
    );
  }
}

export default Splash;
