import React from 'react';
import './BlogTitle.css';
import { Link, } from "react-router-dom";
import './Common.css';

export default class BlogTitle extends React.Component {
    render() {
        return (
            <div class="row justify-content-center">

                <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6">
                    <Link to={this.props.route}>
                        <div class="blog-margin" style={{ boxShadow: "0px 0px 6px 2px #00000010", margin: "20px 0px 0px 0px", padding: "10px", borderRadius: "5px"  }}>
                            {/* border: "solid" */}
                            <p class="noHoverLink" style={{color:"black"}}>{this.props.Text} <i class="arrow right"></i></p>              
                            

                        </div>
                    </Link>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6">
                    <Link to={this.props.route2}>
                        <div class="blog-margin" style={{ boxShadow: "0px 0px 6px 2px #00000010", margin: "20px 0px 0px 0px", padding: "10px", borderRadius: "5px" }}>
                            {/* border: "solid" */}
                            <p style={{color:"black"}}>{this.props.Text2} <i class="arrow right"></i></p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

