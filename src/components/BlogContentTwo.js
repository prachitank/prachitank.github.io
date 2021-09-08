import React from 'react';
import './Common.css';

export default class BlogContentTwo extends React.Component {
  render() {
    return (
      <div class="three">
        <div class="row justify-content-center">
        <div class="col col-xl-6 col-lg-6">

        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-4 col-12 col">
            <div class="blog-margin three">
              <span class="tags">{this.props.Title1} </span>
              <p>{this.props.Content1}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 col">
            <div class="blog-margin three">

            <span class="tags">{this.props.Title2} </span>              <p>{this.props.Content2}</p>
            </div>
          </div>


          </div>
          </div>

        </div>
      </div>
    );
  }
}

