import React from 'react';
import './Common.css';

export default class Divider extends React.Component {
  render() {
    return (
      <div class="row justify-content-center top-margin-less">
      <div class="col-xl-12 col-lg-12 col">
        <div style={{ borderTop: "2px solid #00000010", margin: "30px 0px 30px 0px"}}></div>
      </div>
      </div>
    );
  }
}

