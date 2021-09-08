import React from 'react';
import './BlogTitle.css';

export default class BlogTitle extends React.Component {
  render() {
    return (
      <div class="row justify-content-center">

      <div class="col col-xl-6 col-lg-6 ">
      <div class="blog-title blog-margin">
        <h2>{this.props.title}</h2>

        <p class="tags">{this.props.BlogTags}</p>
      </div>
      </div>  
      </div>    
    );
  }
}
  
