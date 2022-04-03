import React from 'react';
import { HashRouter } from "react-router-dom";
import './HomeIntro.css';
import './Common.css';
import Resume from '../pages/images/prachi-tank-resume.pdf';


export default class HomeIntro extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>

                    <div class="top-margin">

                    <div style={{backgroundColor: "#B200FF08", paddingTop: "30px", paddingBottom: "30px"}}>
                        <div class="blog-margin">

                            <p class="tags">A BIT ABOUT ME</p>


                            <p class="top-margin tags">What kind of work do I do?</p>
                            <p><em>
                                I like to work within complex spaces to create simple experiences for users. My work always focuses on the end-to-end experience for users that addresses all touchpoints. I enjoy and often find myself optimising processes within the team.   
                                </em>
                                </p>
                            


                            <p class="top-margin tags">What do I do other than my full-time job?</p>
                            <p>
                                <em>
                                    I <span class="font-bold">volunteer as a designer and developer</span> with <a href="https://www.theapprenticeproject.org/"> The Apprentice Project</a> - I taught middle school kids coding on Scratch, developed <a href="https://www.prachitank.com/tap-ticket/"> a tool</a> for other mentors like me to give personalised badges to kids, and help out however else I can.
                                </em>
                            </p>

                            <p class="top-margin tags">What am I doing when I am not in front of a screen? </p>

                            <p>
                                <em>
                                    Mostly DIYing something either with pliers, crochet needles, brushes or sandpaper, figuring out when to water plants (still trying to get it right) or reading fiction.
                                </em>
                            </p>

                            {/* <p class="top-margin tags">What have I studied?</p>
                            <em>
                            <p>A Master’s in Interaction Design from the IDC School of Design, IIT Bombay. I worked on projects in the space of <span class="font-bold">education design and service design</span>.</p>
                            <p class='top-margin-less'>
I have a Bachelor’s in Communication Design from NIFT where I did <span class="font-bold">identity design projects, publication design and photography</span>. I also got a chance to intern with <span class="font-bold">Oglivy</span> - the world’s largest ad-agency.
</em></p> */}
    </div>
                        </div>
                    </div>
                </div>



            </HashRouter>
        );
    }
}