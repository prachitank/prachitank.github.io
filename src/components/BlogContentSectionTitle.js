import React from 'react';
import './Common.css';

export default class BlogContentSectionTitle extends React.Component {
  render() {
    return (

      <div class="row justify-content-center top-margin">
        <div class="col-xl-6 col-lg-6 col">
          <div class="blog-margin">
            <p><span class="tags">{this.props.ContentSectionTitle1}</span> </p>
            <span style={{ fontSize: "1.5em" }}>{this.props.ContentSectionTitle2}</span>

          </div>
        </div>
      </div>
    );
  }
}

