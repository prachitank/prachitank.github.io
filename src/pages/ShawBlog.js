import React from 'react';
// import BlogContentShort from '../components/BlogContentShort.js';
import BlogTitle from '../components/BlogTitle.js';
// import BlogImage from '../components/BlogImage.js';
// import P2Logos from '../pages/images/p2-logos.png';
//import BlogContentSectionTitle from '../components/BlogContentSectionTitle.js';
import Divider from '../components/Divider.js';



import Dividerblank from '../components/Dividerblank.js';
import DividerblankLarge from '../components/DividerblankLarge.js';
//import BlogContentThree from '../components/BlogContentThree.js';

//import BlogImage from '../components/BlogImage.js';
//import BlogImageLarge from '../components/BlogImageLarge.js';

import BlogContentShort from '../components/BlogContentShort.js';

import img1 from '../pages/images/shaw-blog/1.png';
import img2 from '../pages/images/shaw-blog/2.png';
import userquad from '../pages/images/user-quad.png';

//import Data from '../pages/images/shaw-blog/data.png';


import '../components/Common.css';
import BlogImage from '../components/BlogImage.js';
//import BlogContentTwo from '../components/BlogContentTwo.js';

export default class ShawBlog extends React.Component {
  render() {
    return (
      <div>
        <div class="background">
          <BlogTitle
            title="Working at D. E. Shaw"
          //BlogTags="Helping traders analyse the energy market to make trading decisions." 
          />

          <Divider
          />




          <div class="row justify-content-center top-margin ">
            <div class="col-xl-6 col-lg-6 col">
              <div class="blog-margin">
                <div class="top-margin-less">
                  <p><span >I work at the intersection of interaction design and data visualisation. I often engage in</span>
                  </p>
                  <p class="top-margin-less"><span class="font-bold">Research</span>  - 1:1 interviews, focus groups, A/B tests.
                  </p>
                  <p class="top-margin-less"><span class="font-bold">Analysis</span> - Using design thinking tools like personas, workflows to come up with product ideas.
                  </p>
                  <p class="top-margin-less"><span class="font-bold">Design</span> - Converting the workflows into mocks that align with heuristics.
                  </p>
                  <p class="top-margin-less"><span class="font-bold">Data Visualisation</span> - Finding out what questions need to be answered by the data to create appropriate interactive visualizations.
                  </p>

                  <p class="top-margin-more tags">I HAVE WORKED ON
                  </p>

                  <div class="row top-margin" style={{}}>
                    <div class="col col-xl-3 col-6" >
                      <p style={{ fontSize: "1.5em", fontWeight: "700" }}>8</p>
                      <p>Enterprise <br></br>products</p>
                    </div>
                    <div class="col col-xl-3 col-6" >
                      <p style={{ fontSize: "1.5em", fontWeight: "700" }}>6</p>
                      <p>Client<br></br> teams</p>
                    </div>
                    <div class="col col-xl-3 col-6" >
                      <p style={{ fontSize: "1.5em", fontWeight: "700" }}>14</p>
                      <p>Product <br></br> Enhancements</p>
                    </div>
                    <div class="col col-xl-3 col-6" >
                      <p style={{ fontSize: "1.5em", fontWeight: "700" }}>6</p>
                      <p>Revamped <br></br> Components</p>
                    </div>
                  </div>

                  <Dividerblank />


                  <div class="row top-margin">
                    <div class="col col-xl-3 col-6" style={{ paddingRight: "20px" }}>
                      <div class="">
                        <p style={{ fontSize: "1.5em", fontWeight: "500" }}>Design System Revamp</p>
                        <p>Led a team of designers to define the processes for revamping our design system.</p>
                      </div>
                    </div>
                    <div class="col col-xl-3 col-6" style={{ paddingRight: "20px" }}>
                      <div class="">
                        <p style={{ fontSize: "1.5em", fontWeight: "500" }}>Icon Design Guidelines </p>
                        <p>Created novel guidelines for designing smaller size icons for dense enterprise products</p>
                      </div>
                    </div>
                    <div class="col col-xl-3 col-6" style={{ paddingRight: "20px" }}>
                      <div class="">
                        <p style={{ fontSize: "1.5em", fontWeight: "500" }}>Mentoring Interns</p>
                        <p>Mentored a summer intern who was offered a full time position at D. E. Shaw </p>
                      </div>
                    </div>
                    <div class="col col-xl-3 col-6" style={{ paddingRight: "20px" }}>
                      <div class="">
                        <p style={{ fontSize: "1.5em", fontWeight: "500" }}>Hiring</p>
                        <p>Improved hiring process for Shaw and conducted interviews to expand the team. </p>
                      </div>
                    </div>
                  </div>

                  <Dividerblank />
                  <p class="top-margin-more tags">I DESIGN FOR
                  </p>
                  <p class="top-margin-less">
                    Enterprise design deals with users that have different sets of motivations. The users I design for can be divided into four types. The majority of users fall in the top right quadrant - <span class="font-bold"> power users.</span>
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div class="top-margin">

            <BlogImage
              BlogImage={userquad}
              Caption="Representation inspired by Dean Schuster from the design research firm Truematter."
            />
          </div>

          {/* <BlogContentShort
            //ContentShortTitle="RESPONSIBILITIES"
            ContentShort=" The processes for each type of user are similar on a high level, the details change.  

        "
          /> */}



<div class="row justify-content-center top-margin ">
            <div class="col-xl-6 col-lg-6 col">
              <div class="blog-margin">

                <div>
                  <p class="top-margin-less" style={{fontSize:"1.2em"}}><em>The processes for each type of user are similar on a high level, the details change.</em>
                  </p>
                  <p class="top-margin-less"> 
                  </p>
                </div>
              </div>
            </div>
          </div>




          <Dividerblank />

          {/* <BlogContentShort
            ContentShortTitle="WHAT HAVE I LEARNT THERE?"
            ContentShort=""
          />
          <div class="row justify-content-center ">
            <div class="col-xl-6 col-lg-6 col">
              <div class="blog-margin">
                <div class="top-margin-less">
                  <p><span >Ask as many questions as possible, even if you look silly.</span>
                  </p>
                  <p class="top-margin-less">ROI of involving non-designers in the process is unparalleled.
                  </p>
                  <p class="top-margin-less"><span class="font-bold">Analysis</span> - Using design thinking tools like personas, workflows to come up with product ideas.
                  </p>
                  <p class="top-margin-less"><span class="font-bold">Design</span> - Converting the workflows into mocks that align with heuristics.
                  </p>
                  <p class="top-margin-less"><span class="font-bold">Data Visualisation</span> - Finding out what questions need to be answered by the data to create appropriate interactive visualizations.
                  </p>
                </div>

                <DividerblankLarge />
              </div>
            </div>
          </div> */}
          <Divider />
          <div class="row justify-content-center top-margin ">
            <div class="col-xl-6 col-lg-6 col">
              <div class="blog-margin">

                <div>
                  <p class="top-margin-less">I can't share my projects because of legal constraints. Please get in touch if you want more details.
                  </p>
                </div>
              </div>
            </div>
            <DividerblankLarge />
            <DividerblankLarge />
          </div>
        </div>
      </div>

    );
  }
}