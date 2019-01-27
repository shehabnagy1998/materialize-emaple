import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import $ from 'jquery'
import M from 'materialize-css'
import './App.scss'
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
import stars from './imgs/stars.jpg'
import street from './imgs/street.jpg'
import Services from './Components/Services';
import Connect from './Components/Connect';
import Footer from './Components/Footer';

class App extends Component {

  state = {};

  componentDidMount() {
    console.log('program started');
    M.AutoInit();
    M.Parallax.init($('.parallax'))
    $(document).ready(function() {
      var header_height = $('header').height();
      $(document).on('scroll', function(e) {
        if($(this).scrollTop() >= header_height) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
      $(document).on('click', '.scroll-to-top', function() {
        // window.scroll({
        //   top: 0, 
        //   behavior: 'smooth'
        // });
        $('html, body').animate({scrollTop : 0},700);
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("program updated");
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <button className="btn-floating scroll-to-top"><i className="material-icons">expand_less</i></button>
          {/* Header and Navbar */}
          <header>
            <Navbar />
          </header>
          {/* Photos section */}
          <article className="section scrollspy" id="photos">
            <Photos />
          </article>
          {/* parallax section */}
          <article className="parallax-container">
            <section className="parallax"><img src={stars} alt="stars" className="responsive-img"/></section>
          </article>
          {/* Services section */}
          <article className="section scrollspy" id="services">
            <Services />
          </article>
          {/* parallax section */}
          <article className="parallax-container">
            <section className="parallax"><img src={street} alt="street" className="responsive-img"/></section>
          </article>
          {/* Connect section */}
          <article className="section scrollspy"  id="connect">
            <Connect />
          </article>
          {/* Footer section */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
