import React from 'react';
import './Card.css';
import { Link, HashRouter } from "react-router-dom";
import Resume from '../pages/images/prachi-tank-resume.pdf';

export default class Card extends React.Component {
  render() {
    return (
      <HashRouter>

        <div class="card">
            <img src={this.props.featureImage} alt="Doodle about D.E. Shaw" class="test top-margin-less" ></img>
            <h4 class="title top-margin-less">{this.props.title}</h4>
          <p class="tags">{this.props.tags}</p>


          <div class="row">
            <div class="col col-lg-10 col-md-10 col-sm-10 ">

              <p class="content top-margin-less">{this.props.description}</p>
            </div>
          </div>

              <p class=" mb-2">
                <Link to={this.props.Route} class=" link-decor card-top">
                  View project >
                </Link>
              </p>
 
              {/* <p><a class="underline-link" href={this.props.Route} target="new-window">View project > </a></p> */}

                  </div>

        <div class="col col-lg-3 col-md-3 col-sm-12 col-12 top-margin-less">
          {/* <p style={{ color: "#00000080" }}><em> {this.props.Tags2}</em></p> */}
        </div>
        {/* <div style={{ borderTop: "2px solid #00000010", marginTop: "30px", marginBottom: "20px" }}></div> */}

      </HashRouter>
    );
  }
}

