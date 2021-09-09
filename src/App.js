import React from 'react';
import BlogContentSectionTitle from './components/BlogContentSectionTitle.js';
import Card from './components/Card.js';
import BlogImage from './components/BlogImage.js';

//import CardThree from './components/CardThree.js';
import HomeIntro from './components/HomeIntro.js';
import ChiFlat from './pages/images/chi-flat.png';
import KhelgharFlat from './pages/images/khelghar-flat.jpg';
import ShawFlat from './pages/images/shawFlat.png';
import BlogContentShort from './components/BlogContentShort.js';
import Dividerblank from './components/Dividerblank.js';
import DividerblankLarge from './components/DividerblankLarge.js';
import { Helmet } from 'react-helmet';

import Whatsapp from './pages/images/whatsapp.png';

export default class App extends React.Component {
  render() {
    return (
      <div class="">
        <div class="row justify-content-center">
      <Helmet>
      <title>Prachi's Portfolio</title>
      </Helmet>
          <div class="col-xl-6 col-lg-6 col">
            <HomeIntro />
          </div>

        </div>


        <BlogContentShort
          ContentShortTitle="WORKING AT D. E. SHAW"
          ContentShort="I design products to help users comprehend, analyze and act on data in an effective and timely manner. I have spearheaded design for 8 highly technical and data dense products from end to end and I also contribute to creating and maintaining a scalable design system."
          route="ShawBlog"
          nonLinkTextBefore="Read more about it"
          LinkText=" here"
          nonLinkTextAfter="."
        />

        <BlogContentShort
          ContentShortTitle="INTERNING AT GOOGLE"
          ContentShort="In the 10 weeks at Google Bangalore, I worked with the G Suite Team to design a new feature within the Admin Console in collaboration with the large network of teams associated with the product. I also carved out time to contribute to user research that the Next Billion Users team was conducting."
          route="GoogleBlog"
          nonLinkTextBefore="I've written more about my experience"
          LinkText=" here"
          nonLinkTextAfter="."
        />

        <Dividerblank />
        <BlogContentSectionTitle
          ContentSectionTitle1="PROJECTS"
        />
        <Dividerblank />



        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6 col ">
            <div class="blog-margin">

              <Card
                title="Power Up"
                featureImage={ShawFlat}
                tags="Interview task for D.E. Shaw"
                description="I proposed a product which would help traders analyze a dataset about power plants in the world. I focused on integrating it within the user's existing workflows and allowing them to dissect the data as they would want."
                route="ShawAssignment"
                linkText="View project"
              />
              <Card
                title="Skipped!"
                featureImage={KhelgharFlat}
                tags="Runner up in the Data Visualization Society Challenge"
                description="I was given a dataset about data viz professionals in the world. I found answers to - Is there an interesting story this data can tell us? How do I visualize this differently from the norm?"
                route="Skipped"
                linkText="View project"
              />
              <Card
                title="Parental Engagement in Rural India"
                featureImage={ChiFlat}
                tags="2nd place at the CHI 2020 SRC"
                description="I worked with a school in the outskirts of my hometown to design and test an intervention to help low-literate parents engage with their child's education. The research project was selected to be presented at the CHI 2020 Student Research Competition."
                route="ParentalEngagement"
                linkText="View project"
              />

              {/* <CardThree 
              title1="Game Design"
              tags1="Theory and application to create physical and digital games."
              title2="Teacher Training"
              tags2="Service Design for an education    NGO in Pune"
              title3="Enthu"
              tags3="Interview assignment for Google Interview"/> */}




            </div>
          </div>
        </div>


        <BlogContentSectionTitle
          ContentSectionTitle1="AFTER WORK"
        />
        <div class="row justify-content-center top-margin-less ">
          <div class="col-xl-6 col-lg-6 col">
            <div class="blog-margin">


              <p> I volunteer with the product team at <a href="https://www.theapprenticeproject.org/" target="tap-window">The Apprentice Project </a> who aim to provide children from low-imcome communities in Maharashtra access to extracurricular subjects. We design for and improve the student experience - recently, I made a little <a href="https://www.prachitank.com/tap-ticket/" target="website_window">website</a> that the mentors can use to customise badges for their students which the kids love to share with their friends :) </p>
            </div>
          </div>
        </div>

        <Dividerblank />
        <BlogImage
          BlogImage={Whatsapp}
        />


        {/* <BlogContentShort
          //ContentShortTitle="AFTER WORK"
          ContentShort="When I am not in front of a laptop screen, I am usually DIYing something around the house - from painting walls to making wire jewelry or obsessing over the plants in my house."
        /> */}


        <DividerblankLarge />
        <BlogContentShort
          //ContentShortTitle=""
          ContentShort="Thanks for stopping by!"
          //route="GoogleBlog"
          //nonLinkTextBefore="I've written more about my experience"
          //LinkText=" here"
          //nonLinkTextAfter="."
        />
        <DividerblankLarge />
        </div>



    );
  }
}


