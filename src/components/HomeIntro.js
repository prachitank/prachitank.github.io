import React from 'react';
import { Link, HashRouter } from "react-router-dom";
import './HomeIntro.css';
import './Common.css';
import Resume from '../pages/images/prachi-tank-resume.pdf';
import googleLogo from '../pages/images/google-logo.png';
import capIcon from '../pages/images/cap-icon.png';
import ShawBlog from '../pages/ShawBlog';

export default class HomeIntro extends React.Component {
    render() {
        return (
            <HashRouter>
                <div style={{ marginTop: "100px"}}>

                    <div class="blog-margin top-margin">

                        <div class="intro" style={{ marginBottom: "40px" }}>
                            <h1 style={{ fontWeight: 600 }}><span class="awesome"><span class="greeting">Hello! I'm Prachi</span>.</span> </h1>

                            <p class="font2 top-margin-less">I'm a Senior UX Designer at <a href="https://www.deshawindia.com/" target="shaw-window" class="underline-link">D. E. Shaw</a>.</p>
                                <p>
                                    <Link to="ShawBlog">Read about my work there > 
                                    </Link>
                                </p>
                        </div>   
                    </div>
                            <div style={{backgroundColor: "#B200FF05", paddingTop: "30px", paddingBottom: "30px", opacity: "80%" }}>
                                <div class="blog-margin">

                                    <p style={{color: "#00000080"}}><em>Previously,</em></p>

                                    <div class="row" style={{paddingTop: "30px"}}>
                                        <img class="col col-1 logos" src= {googleLogo} alt={this.props.BlogImageAlt} style={{opacity: "70%"}} ></img>

                                        <p class="col col-xl-5 col-lg-10 col-md-01 col-sm-10 col-10" style={{paddingLeft: "10px"}}><em>I interned at <span class="font-bold">Google</span>.</em><br></br> 
                                        
                                    <Link to="GoogleBlog">Read about my work there > 
                                    </Link>
                                        </p>

      
                                        <img class="col col-1 top-media logos" src= {capIcon} alt={this.props.BlogImageAlt} style={{opacity: "70%"}} ></img>


                                        <p class="col col-xl-5 col-lg-10 col-md-10 col-sm-10 col-10 top-media" style={{paddingLeft: "10px"}}><em>I got a <span class="font-bold">Master’s in Interaction Design</span> from the <br class="br-remove"></br><a class="underline-link" href="http://www.idc.iitb.ac.in/" target="idk-window">IDC School of Design</a> at IIT Bombay.</em></p>
                                    </div>
                                    <p class="col top-media top-margin">More details are in my <a class="underline-link" href={Resume} target="resume-window">resume</a>.</p>
                                </div>
                            </div>

                            
                </div>



            </HashRouter>
        );
    }
}