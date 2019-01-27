import React, { Component } from 'react'
import './scss/Footer.scss'

export default class Footer extends Component {
  render() {
    return (
        <footer className="page-footer">
            <section className="container footer">
                <div className="row">
                    <div className="col s12 l5">
                        <h1>About me...</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta commodi, facere eius vitae impedit minus neque explicabo.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta commodi, facere eius vitae impedit minus neque explicabo.</p>
                    </div>
                    <div className="col s12 l5 offset-l2">
                        <h1>Connect...</h1>
                        <ul className="social">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="footer-copyright">
                <div className="container center-align">&copy; 2018 Photo CO.</div>
            </div>
        </footer>
    )
  }
}
