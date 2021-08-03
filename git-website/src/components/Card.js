import React from 'react';
import './Card.css';
import { Link, HashRouter } from "react-router-dom";


export default class Card extends React.Component {
  render() {
    return (
      <HashRouter>
        
        <div class="col-lg-4 col-md-4 col-sm-12 p-4">
          <div class="card p-3">
            <div class="card-top">
              <img src={this.props.featureImage} alt="Doodle about D.E. Shaw" class="test" ></img>
              <p class="tags">{this.props.tags}</p>
              <h4 class="title">{this.props.title}</h4>
              <p class="content">{this.props.description}</p>
            </div>
            <div class="card-bottom">
              <div>
                </div><p class="link m-0" >{this.props.nonLinkText}</p>
              </div>
              <div>
              <Link to={this.props.route}>
                <p class="link link-decor mb-2">{this.props.linkText}<i class="arrow right"></i></p>
              </Link>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

