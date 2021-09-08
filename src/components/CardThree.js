import React from 'react';
import './Card.css';
import { Link, HashRouter } from "react-router-dom";

export default class CardThree extends React.Component {
  render() {
    return (
      <HashRouter>

        <div class="card">
          <div class="row">
            <div class="col col-lg-12">
              <div class="row">
                  <div class="col col-lg-4">
                <Link to={this.props.route} class="link">
                    <h4 class="title top-margin-less">{this.props.title1}</h4>
                    <p class="tags">{this.props.tags1}</p>
                </Link>
                  </div>
                  <div class="col col-lg-4">
                <Link to={this.props.route} class="link">
                    <h4 class="title top-margin-less">{this.props.title2}</h4>
                    <p class="tags">{this.props.tags2}</p>
                </Link>
                  </div>
                  <div class="col col-lg-4">
                <Link to={this.props.route} class="link">
                    <h4 class="title top-margin-less">{this.props.title3}</h4>
                    <p class="tags">{this.props.tags3}</p>
                </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "2px solid #00000010", marginTop: "30px", marginBottom: "20px" }}></div>

      </HashRouter>
    );
  }
}

