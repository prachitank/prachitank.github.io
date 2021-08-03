import React from 'react';
import './BlogTitle.css';

export default class BlogTitle extends React.Component {
  render() {
    return (
      <div class="col-lg-8 col-md-12 col-sm-10">
      <div class="blog-title">
        <h2>{this.props.title}</h2>

        <p class="tags">{this.props.tags}</p>
      </div>  
      </div>    
    );
  }
}
  
