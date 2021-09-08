import React from 'react';
import './Common.css';

export default class BlogImageLarge extends React.Component {
  render() {
    return (
      <div class="row justify-content-center">
        <div class="col-xl-9 col-lg-9  col">
        <div class="blog-margin blog-margin-image">
            <img src={this.props.BlogImage} alt={this.props.BlogImageAlt} class="blog-image"></img>
            <p class="tags"><em>{this.props.Caption}</em></p>

        </div>
        </div>
</div>
    );
  }
}

