import React from 'react';
import './Common.css';
import { Link, HashRouter } from "react-router-dom";

export default class BlogContentShort extends React.Component {
  render() {
    return (
      <HashRouter>

        <div class="row justify-content-center top-margin ">
          <div class="col-xl-6 col-lg-6 col">
            <div class="blog-margin">
              <p><span class="tags">{this.props.ContentShortTitle}</span> </p>
              <div class="top-margin-less">
                <span style={{ fontSize: "1em" }}>{this.props.ContentShort}</span>

                <p>            <i class={this.props.classes}></i>
                  {this.props.nonLinkTextBefore}<Link to={this.props.route}>
                    {this.props.LinkText}
                  </Link>{this.props.nonLinkTextAfter}</p>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

