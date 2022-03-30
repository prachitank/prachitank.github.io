import React from 'react';
import BlogContentSectionTitle from './components/BlogContentSectionTitle.js';
import Card from './components/Card.js';
import BlogImage from './components/BlogImage.js';

//import CardThree from './components/CardThree.js';
import HomeIntro from './components/HomeIntro.js';
import ChiFlat from './pages/images/chi-flat.png';
import KhelgharFlat from './pages/images/khelghar-flat.jpg';
import ShawFlat from './pages/images/shawFlat.png';
import dvsFlat from './pages/images/dvs-flat.png';

import BlogContentShort from './components/BlogContentShort.js';
import Dividerblank from './components/Dividerblank.js';
import ButtonText from './components/ButtonText.js';
import DividerblankLarge from './components/DividerblankLarge.js';
import AboutMe from './components/AboutMe.js';
import Divider12 from './components/Divider12.js';
import { Helmet } from 'react-helmet';
import Whatsapp from './pages/images/whatsapp.png';

import ogImage from './pages/images/og-image.png'

export default class App extends React.Component {
  render() {
    return (
      <div class="">
        <div class="row justify-content-center">
          <Helmet>
            <title>Prachi's Portfolio</title>
            <meta property="og:image" content="https://github.com/prachitank/prachitank.github.io/blob/master/og-image.png?raw=true"></meta>
          </Helmet>
          <div class="col-xl-7 col-lg-7 col">
            <HomeIntro />
          </div>

        </div>
      <DividerblankLarge/>
      <DividerblankLarge/>
        <div class="row justify-content-center ">
        <div class="col-xl-7 col-lg-7 col">
          <div class="blog-margin">
            <p><span class="tags">HERE ARE MY PROJECTS</span> </p>
          </div>
        </div>
      </div>

        <div class="row justify-content-center top-margin">
          <div class="col-xl-7 col-lg-7 col ">
            <div class="blog-margin">

              <Card
                title="Power Up"
                featureImage={ShawFlat}
                tags="Interview task for D.E. Shaw"
                description="Helping traders efficiently analyse data and collaborate with their team.  "
                Route="ShawAssignment"
                linkText="View project"
              />
              <Divider12 />
              <Card
                title="Skipped!"
                featureImage={dvsFlat}
                tags="Runner up in the Data Visualization Society Challenge"
                description="Identifying ways to improve survey design by analysing survey responses."
                Route="Skipped"
                linkText="View project"
              />
              <Divider12 />
              <Card
                title="Parental Engagement in Rural India"
                featureImage={ChiFlat}
                tags="2nd place at the CHI 2020 SRC"
                description="Designing and testing an intervention to help low-literate parents in semi-rural India engage with their child's education."
                Route="ParentalEngagement"
                linkText="View project"
              />


              <Dividerblank />


            </div>
              <AboutMe />
          </div>
        </div>


        <DividerblankLarge />

        <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-7 col">
          <div class="blog-margin">
            <p><span class="tags">THANKS FOR STOPPING BY!</span> </p>
          </div>
        </div>
      </div>
        <DividerblankLarge />
      </div>



    );
  }
}


