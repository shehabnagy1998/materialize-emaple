import React, { Component } from 'react'
import './scss/Connect.scss'

export default class Connect extends Component {
  render() {
    return (
      <section className="container connect">
          <div className="row">
              <div className="col s12 l5">
                  <h1 className="indigo-text text-darken-3">Get in touch...</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem excepturi minus recusandae exercitationem, necessitatibus enim repellat blanditiis veritatis eveniet doloribus cum mollitia laudantium dolorem sed! Inventore fuga temporibus nulla!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem excepturi minus recusandae exercitationem, necessitatibus enim repellat blanditiis veritatis eveniet doloribus cum mollitia laudantium dolorem sed! Inventore fuga temporibus nulla!</p>
              </div>
              <div className="col s12 l5 offset-l2">
                  <form>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input type="email" id="email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">message</i>
                            <textarea id="message" className="materialize-textarea"></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" className="datepicker" id="date"/>
                            <label htmlFor="date">Choose a date</label>
                        </div>
                        <div>
                            <p>Choose service:</p>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Photography</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Editing</span>
                                </label>
                            </p>
                        </div>
                        <div className="center"><button type="submit" className="btn indigo darken-3 waves-effect waves-light">Submit</button></div>
                  </form>
              </div>
          </div>
      </section>
    )
  }
}
