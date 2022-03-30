import React from 'react';
// import BlogContentShort from '../components/BlogContentShort.js';
import BlogTitle from '../components/BlogTitle.js';
// import BlogImage from '../components/BlogImage.js';
// import P2Logos from '../pages/images/p2-logos.png';
import BlogContentSectionTitle from '../components/BlogContentSectionTitle.js';
import Divider from '../components/Divider.js';

import Link from '../components/Link.js';


import Dividerblank from '../components/Dividerblank.js';
import DividerblankLarge from '../components/DividerblankLarge.js';

import BlogImage from '../components/BlogImage.js';
import BlogImageLarge from '../components/BlogImageLarge.js';

import BlogContentShort from '../components/BlogContentShort.js';

import Process from '../pages/images/shaw-blog/process.png';
import Persona from '../pages/images/shaw-blog/persona.png';
import Competition from '../pages/images/shaw-blog/competition.png';
import Data from '../pages/images/shaw-blog/data.png';
import Ideation1 from '../pages/images/shaw-blog/ideation1.png';
import Ideation2 from '../pages/images/shaw-blog/ideation2.png';
import Ideation3 from '../pages/images/shaw-blog/ideation3.png';
import Userjourney1 from '../pages/images/shaw-blog/userjourney1.png';
import Userjourney2 from '../pages/images/shaw-blog/userjourney2.png';
import Userjourney3 from '../pages/images/shaw-blog/userjourney3.png';
import Userjourney4 from '../pages/images/shaw-blog/userjourney4.png';
import Userjourney6 from '../pages/images/shaw-blog/userjourney6.png';

import '../components/Common.css';
import BlogContentTwo from '../components/BlogContentTwo.js';

import ScrollToTopOnMount from "../ScrollToTopOnMount.js";

export default class ShawAssignment extends React.Component {
  render() {
    return (
      <div>
              <ScrollToTopOnMount />

        <div class="background">

        <BlogTitle
          title="Power Up"
          //BlogTags="Helping traders analyse the energy market to make trading decisions." 
        />

        <Divider
        />
        <DividerblankLarge/>

        {/* <BlogContentShort
        ContentShortTitle="ASSIGNMENT BRIEF"
        ContentShort="Helping traders draw insights about investment opportunities in the power sector from the World Resources Institue Dataset."
        />

        <BlogContentShort
        ContentShortTitle="DURATION"
        ContentShort="2 days"
        /> */}

        <BlogContentTwo
        Title1="ASSIGNMENT BRIEF"
        Content1="Helping traders draw insights about investment opportunities in the power sector from a dataset about powerplants across the world."
        Title2="DURATION"
        Content2="2 days"
        />

<Dividerblank
/>
        <Link 
        textBefore="Link to the "
        text="dataset"
        textAfter=" from the World Resources Institute."
        href="https://www.wri.org/research/global-database-power-plants"
        target="wri-window"
        />
        


        <Dividerblank
        />
        

        <BlogContentSectionTitle
        ContentSectionTitle1="MY PROCESS"
        />
        <Dividerblank
        />
        <BlogImage 
        BlogImage={Process}
        />
        
        <DividerblankLarge
        />

        <BlogContentShort
        ContentShortTitle="UNDERSTANDING THE DATASET"
        ContentShort="In this step, I answered questions like - What is the nature and quality of the data? Can we calculate fields to help the trader get better insights?"
        />
        <Dividerblank
        />
        <BlogImage 
        BlogImage={Data}
        //Caption="User persona"
        />

        <DividerblankLarge
        />

        <BlogContentShort
        ContentShortTitle="UNDERSTANDING THE USER"
        ContentShort="While I did not have access to traders while doing the assignment, I conducted secondary research to understand what a trader's day looks like, what are the tasks they do and how they approach research on any topic. Quora answers and blogs were surprisingly helpful. I listed down the use cases that I came across and the corresponding design insights."
        />
        <Dividerblank
        />

        <BlogImageLarge
        BlogImage={Persona}
        Caption=""
        />
        
        <Dividerblank
        />

        <BlogContentShort
        ContentShortTitle="UNDERSTANDING THE MARKET"
        ContentShort="I did a heuristic evaluation of products by Sisense, Tableau and Microstrategy to identify some best practices for the UI design and set a baseline."
        />       
        
        <Dividerblank/>

        <BlogImage
        BlogImage={Competition}
        Caption=""
        />
        
        <Dividerblank
        />
        
        <BlogContentShort
        ContentShortTitle="IDEATION AND PAPER PROTOTYPES"
        ContentShort="I ideated at different levels of fidelity as my understanding of the following questions became clearer -  What is the best idea for each usecase? How to best represent each data point? What kind of micro interactions would be needed? "
        />
        <Dividerblank
        />
        <BlogImage 
        BlogImage={Ideation1}
        Caption="Quick paper mocks"
        />
        <Dividerblank/>
        <BlogImage 
        BlogImage={Ideation2}
        Caption="Ideating for comparison usecase"
        />    
        <Dividerblank/>   
        <BlogImage 
        BlogImage={Ideation3}
        Caption="Hi-fidelity mocks exploring different visualisations"
        />
        <Dividerblank/>

</div>
        <DividerblankLarge
        />
        <BlogContentSectionTitle
        ContentSectionTitle1="FINAL OUTPUT"
        ContentSectionTitle2="Power Up"
        />


        <BlogContentShort
        //ContentShortTitle="Product"
        ContentShort="Representation of the final journey the user would take while using the product."
        /> 
        
        <Dividerblank
        />

        <BlogImageLarge 
        BlogImage={Userjourney1}
        //Caption="Hi-fidelity mocks for data visualisation"
        />
        <BlogImageLarge 
        BlogImage={Userjourney2}
        //Caption="Hi-fidelity mocks for data visualisation"
        />
        <BlogImageLarge 
        BlogImage={Userjourney3}
        //Caption="Hi-fidelity mocks for data visualisation"
        />
        <BlogImageLarge 
        BlogImage={Userjourney4}
        //Caption="Hi-fidelity mocks for data visualisation"
        />
        <BlogImageLarge 
        BlogImage={Userjourney6}
        //Caption="Hi-fidelity mocks for data visualisation"
        />
        <DividerblankLarge
        />

<Link 
href="https://drive.google.com/file/d/1LjvVyu58uoMqRIpOQh3qWtcsNxYCLNOU/view"
target="shaw-assignment-page"
textBefore="You can view the full presentation"
text=" here."/>

<BlogContentShort
                    //ContentShortTitle="THANK YOU!"
                    //ContentShort="How to best represent each data point? What kind of micro interactions would be needed? What is the best idea for each usecase? I ideated in different levels of fidelity as my understanding became clearer."
                    route=""
                    LinkText="View all projects"
                    classes="arrow left"
                />
        <DividerblankLarge/>



      </div>
    );
  }
}