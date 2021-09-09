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
//import Data from '../pages/images/shaw-blog/data.png';


import '../components/Common.css';
import BlogImage from '../components/BlogImage.js';
//import BlogContentTwo from '../components/BlogContentTwo.js';

export default class ShawBlog extends React.Component {
  render() {
    return (
      <div>

        <BlogTitle
          title="Working at D. E. Shaw"
          //BlogTags="Helping traders analyse the energy market to make trading decisions." 
        />

        <Divider
        />        




<DividerblankLarge
        />
<BlogImage
BlogImage={img1}/>
<BlogContentShort
        //ContentShortTitle="RESPONSIBILITIES"
        ContentShort="Though my job title says 'Interaction Designer', my work lies at the intersection of interaction design and data visualisation. I constantly find myself ideating for product features, creating visualisations that can support thorough analysis and reading about concepts in the space of finance."
        />
        
<BlogContentShort
        //ContentShortTitle="RESPONSIBILITIES"
        ContentShort="As a sole designer on multiple trading teams, I oversee the entire UX process from end to end while collaborating with developers and product managers. Since I work on all projects of each trading team, I have a bird's eye view of the ecosystem and am always looking out for opportunities to enhance the experience on a holistic level while also working with devs on monthly releases.
        "
        />
        <DividerblankLarge
        />
        <BlogImage
        BlogImage={img2}/>
        
        <BlogContentShort
        //ContentShortTitle="RESPONSIBILITIES"
        ContentShort="        I also am involved in maintaining and improving the internal design system for which I collaborate with multiple stakeholders and come up with solutions that are scalable and customisable. Since the team is growing, I contribute often to improving design processes with the team with a focus on improving consistency and productivity.  
        "
        />
        
        <BlogContentShort
        //ContentShortTitle="RESPONSIBILITIES"
        ContentShort=" I work with 6 client teams on multiple different projects - notable amongst them being products realted to access management, the internal data viz and analytics software and with the equities team  which is the highest revenue generating team. Unfortunately, I can't share specifics about the work I do. But I would be happy to talk about some of it in person.

        "
        />

        />
        <BlogContentShort
                    //ContentShortTitle="THANK YOU!"
                    //ContentShort="How to best represent each data point? What kind of micro interactions would be needed? What is the best idea for each usecase? I ideated in different levels of fidelity as my understanding became clearer."
                    route=""
                    LinkText=" Go back"
                    classes="arrow left"
                />

<DividerblankLarge/>
      </div>
    );
  }
}