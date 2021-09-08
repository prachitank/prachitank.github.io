import React from 'react';
import './Common.css';

export default class Divider extends React.Component {
  render() {
    return (
        <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-6 col">
            <div class="blog-margin">

                <p>
            <i class={this.props.classes}></i>
                    {this.props.textBefore}
                <a href={this.props.href} target={this.props.target}>{this.props.text}</a>
                {this.props.textAfter}</p>
            </div>
        </div>
    </div>
    );
  }
}

