import React from 'react';
// import BlogContentShort from '../components/BlogContentShort.js';
import BlogTitle from '../components/BlogTitle.js';
import BlogContentTwo from '../components/BlogContentTwo.js';
import BlogImage from '../components/BlogImage.js';
import BlogImageLarge from '../components/BlogImageLarge.js';

import BlogContentSectionTitle from '../components/BlogContentSectionTitle.js';
import Divider from '../components/Divider.js';
import Dividerblank from '../components/Dividerblank.js';

import P2Logos from '../pages/images/p2/Untitled.png';
import img1 from '../pages/images/p2/1.png';
import img2 from '../pages/images/p2/2.png';
import interviewnotes from '../pages/images/p2/interviewnotes.png';
import barriers from '../pages/images/p2/barriers.png';
import comic from '../pages/images/p2/chi-comic.jpg';

import BlogContentShort from '../components/BlogContentShort.js';

export default class ParentalEngagement extends React.Component {
  render() {
    return (
      <div>
        <div class="background">

        <BlogTitle
          title="Parental Engagement in Rural India"
          BlogTags="Some subtitle" />

        {/* <BlogContentShort
          ContentShortTitle="Reposnsibilities"
          ContentShort="Spearheaded UX for multiple verticals in Shaw - Equities, debt and convertible securities along with infrastructure projects." /> */}

<Divider />
<Dividerblank/>

        <BlogContentTwo
          Title1="PUBLISHED AT"
          Content1="CHI 2020, 2nd place at the Student Research Competition - Graduate Category"
          Title2="WITH"
          Content2="Prof. Dr. Anirudha Joshi"
          />
<Dividerblank/>
        <BlogImage
          BlogImage={P2Logos}
          />
<Dividerblank/>
        {/* <BlogContentSectionTitle
          ContentSectionTitle1="SECONDARY RESEARCH"
          ContentSectionTitle2="What is the problem?" 
        /> */}
<BlogContentShort
        ContentShortTitle="WHAT IS THE PROBLEM?"
        //ContentShort="So, even though school enrollment has increased, which sounds like a positive, the perfoemance of students has decreased because parents are not able to support their children. "
        />
        <Dividerblank/>
        <BlogImage
                  BlogImage={img1}
                  />        
<BlogContentShort
        //ContentShortTitle="WHAT IS THE PROBLEM?"
        ContentShort="So, even though school enrollment has increased, which sounds like a positive, the perfoemance of students has decreased because parents are not able to support their children. "
        />
        <Dividerblank/>
        <BlogContentShort
        ContentShortTitle="PRIMARY RESEARCH"
        ContentShort="I visited schools near my hometown, Solapur to talk to some teachers and parents."
        />
        <BlogImage
        BlogImage={img2}
        Caption="Schools that I visited for primary research."
        />
      <Dividerblank/>
        <BlogImage
        BlogImage={interviewnotes}
        Caption="Interview notes and coding."
      />
<BlogContentShort
        //ContentShortTitle="PRIMARY RESEARCH"
        ContentShort="This gave me insights into the barriers to engagement and the opportunities."
        />
                <BlogImage
        BlogImage={barriers}
        Caption="Interview notes and coding."
        />
<BlogContentShort
        ContentShortTitle="INTERVENTION"
        //ContentShort="This gave me insights into the barriers to engagement and the opportunities."
        />

<BlogImageLarge
        BlogImage={comic}
        Caption="Interview notes and coding."
        />
        </div>
      </div>
    );
  }
}