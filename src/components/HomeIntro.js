import React from 'react';
import { HashRouter } from "react-router-dom";
import './HomeIntro.css';
import './Common.css';
import Resume from '../pages/images/prachi-tank-resume.pdf';


export default class HomeIntro extends React.Component {
    render() {
        return (
            <HashRouter>
                <div style={{ marginTop: "100px" }}>

                    <div class="blog-margin top-margin">

                        <div class="intro" style={{ marginBottom: "40px" }}>
                            <h1 style={{ fontWeight: 600 }}><span class="awesome"><span class="greeting">Hello! I'm Prachi</span>.</span> </h1>



                            <p class="top-margin">I am an Interaction Designer at <a href="https://www.deshawindia.com/" target="shaw-window">D. E. Shaw</a>.</p>

                            <div class="row top-margin">
                                <p class="col col-lg-8">I have a Master's in Interaction Design from the <a class="underline-link" href="http://www.idc.iitb.ac.in/" target="idk-window">IDC School of Design</a> at IIT Bombay and have interned at <a class="" href="https://design.google/#:~:text=Google%20Design%20is%20a%20cooperative,that%20advance%20design%20and%20technology" target="google-window"> Google</a>, <a class="" href="https://www.ogilvy.com/#work" target="ogilvy-window"> Ogilvy</a> and <a class="" href="https://oppositehq.com/portfolio" target="opposite-window"> Opposite Design Studio</a>.</p>
                                <p class="col col-lg-2 col-md-12 col-sm-12 col-12 ">You can find my resume <a class="underline-link" href={Resume} target="resume-window">here</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: "2px solid #00000010" }} class="blog-margin"></div>
                </div>



            </HashRouter>
        );
    }
}