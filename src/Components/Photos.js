import React, { Component } from 'react'
import port from '../imgs/portrait.jpg'
import nature from '../imgs/nature.jpg'
import city from '../imgs/city.jpg'
import $ from 'jquery'
import M from 'materialize-css'
import './scss/Photos.scss'

export default class Photos extends Component {

  render() {
    return (
      <section className="container photos">
        <div className="row">
          <div className="col s12 m5">
            <img src={port} alt="dancing_man" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 m7">
            <h1 className="indigo-text text-darken-3">Portrait</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero eaque corrupti, quis, eum non aliquam odit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero eaque corrupti, quis, eum non aliquam odit</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m5 push-m7">
            <img src={nature} alt="nature" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 m7 pull-m5">
            <h1 className="indigo-text text-darken-3">Nature</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero eaque corrupti, quis, eum non aliquam odit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero eaque corrupti, quis, eum non aliquam odit</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m5">
            <img src={city} alt="city" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 m7">
            <h1 className="indigo-text text-darken-3">City</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero eaque corrupti, quis, eum non aliquam odit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero eaque corrupti, quis, eum non aliquam odit</p>
          </div>
        </div>
      </section>
    )
  }
}
