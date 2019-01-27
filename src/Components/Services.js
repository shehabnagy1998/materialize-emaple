import React, { Component } from 'react'
import './scss/Services.scss'

export default class Services extends Component {
  render() {
    return (
      <section className="container services">
          <div className="row">
              <div className="col s12 l5">
                  <h1 className="indigo-text text-darken-3">What I Do...</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime. Vitae, non velit. Magni soluta quo eligendi recusandae est, ratione molestiae molestias enim tempore maxime nostrum pariatur suscipit labore aliquam.</p>
              </div>
              <div className="col s12 l5 offset-l2">
                  <ul className="tabs">
                      <li className="tab s6"><a href="#photography">Photography</a></li>
                      <li className="tab s6"><a href="#editing">Editing</a></li>
                  </ul>
                  <div className="col s12" id='photography'>
                      <h2 className="indigo-text text-darken-3">Photography...</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat aperiam iste quas delectus. Cum labore, ab sunt explicabo maiores vero incidunt fugit enim molestias perspiciatis sit libero sequi reprehenderit!</p>
                  </div>
                  <div className="col s12" id='editing'>
                      <h2 className="indigo-text text-darken-3">Editing...</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat aperiam iste quas delectus. Cum labore, ab sunt explicabo maiores vero incidunt fugit enim molestias perspiciatis sit libero sequi reprehenderit!</p>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
