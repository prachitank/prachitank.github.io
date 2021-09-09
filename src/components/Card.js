import React from 'react';
import './Card.css';
import { Link, HashRouter } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    return (
      <HashRouter>

        <div class="card">
            <img src={this.props.featureImage} alt="Doodle about D.E. Shaw" class="test top-margin-less" ></img>
            <h4 class="title top-margin-less">{this.props.title}</h4>
          <p class="tags">{this.props.tags}</p>


          <div class="row">
            <div class="col col-lg-12 col-md-10 col-sm-10 ">

              <p class="content top-margin-less">{this.props.description}</p>
            </div>
          </div>

          <Link to={this.props.route} class="card-top">
              <p class="link-decor mb-2">{this.props.linkText}<i class="arrow right"></i></p>
              </Link>
        {/* <Link to={this.props.route}>
                  </Link> */}

                  </div>

        <div class="col col-lg-3 col-md-3 col-sm-12 col-12 top-margin-less">
          {/* <p style={{ color: "#00000080" }}><em> {this.props.Tags2}</em></p> */}
        </div>
        <div style={{ borderTop: "2px solid #00000010", marginTop: "30px", marginBottom: "20px" }}></div>

      </HashRouter>
    );
  }
}

