import React from 'react';
import './Common.css';

export default class Divider extends React.Component {
  render() {
    return (
      <div class="row justify-content-center top-margin-less">
      <div class="col-xl-6 col-lg-6 col">
        <div style={{ borderTop: "2px solid #00000010"}}></div>
      </div>
      </div>
    );
  }
}

