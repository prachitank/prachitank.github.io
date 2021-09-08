import React from 'react';
// import BlogContentShort from '../components/BlogContentShort.js';
import BlogTitle from '../components/BlogTitle.js';
// import BlogImage from '../components/BlogImage.js';
// import P2Logos from '../pages/images/p2-logos.png';
//import BlogContentSectionTitle from '../components/BlogContentSectionTitle.js';
import Divider from '../components/Divider.js';



//import Dividerblank from '../components/Dividerblank.js';
import DividerblankLarge from '../components/DividerblankLarge.js';
//import BlogContentThree from '../components/BlogContentThree.js';

//import BlogImage from '../components/BlogImage.js';
//import BlogImageLarge from '../components/BlogImageLarge.js';

import BlogContentShort from '../components/BlogContentShort.js';

//import Process from '../pages/images/shaw-blog/process.png';
//import Persona from '../pages/images/shaw-blog/persona.png';
//import Data from '../pages/images/shaw-blog/data.png';


import '../components/Common.css';
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





<BlogContentShort
        ContentShortTitle="RESPONSIBILITIES"
        ContentShort="Though my job title says 'Interaction Designer', my work lies at the intersection of interaction design and data visualisation. I constantly find myself ideating for product features, creating visualisations that can support thorough analysis and reading about concepts in the space of finance."
        />
<BlogContentShort
        //ContentShortTitle="RESPONSIBILITIES"
        ContentShort="As a sole designer on multiple trading teams, I oversee the entire UX process from end to end while collaborating with developers and product managers. Since I work on all projects of each trading team, I have a bird's eye view of the ecosystem and am always looking out for opportunities to enhance the experience on a holistic level while also working with devs on monthly releases.
        "
        />
        
        <BlogContentShort
        //ContentShortTitle="RESPONSIBILITIES"
        ContentShort="        I also am involved in maintaining and improving the internal design system for which I collaborate with multiple stakeholders and come up with solutions that are scalable and customisable. Since the team is growing, I contribute often to improving design processes with the team with a focus on improving consistency and productivity.  
        "
        />
        
        <BlogContentShort
        //ContentShortTitle="RESPONSIBILITIES"
        ContentShort="         Unfortunately, I can't share details about the work I do. But I would be happy to talk about it in person.

        "
        />
        
        <DividerblankLarge
        />

        {/* <BlogContentShort
        ContentShortTitle="EQUITIES"
        ContentShort="I work with  the Equities Team (highest revenue generating team in D. E. Shaw) as they started their collaboration with the design team. I worked on multiple products that helped streamline the workflows on the research team and reduce time spent by Financial Researchers on average by creating an ecosystem for the users."
        />

<BlogContentShort
        ContentShortTitle="PROJECTS"
        ContentShort="Of the multiple teams I work with"
        />
        <Dividerblank */}
        />


      </div>
      </div>
    );
  }
}