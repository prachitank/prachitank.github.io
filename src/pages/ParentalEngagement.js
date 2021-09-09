import React from 'react';
// import BlogContentShort from '../components/BlogContentShort.js';
import BlogTitle from '../components/BlogTitle.js';
import BlogContentTwo from '../components/BlogContentTwo.js';
import BlogContentThree from '../components/BlogContentThree.js';
import BlogImage from '../components/BlogImage.js';
import BlogImageLarge from '../components/BlogImageLarge.js';
import BlogImageExtraLarge from '../components/BlogImageExtraLarge.js';

import BlogContentSectionTitle from '../components/BlogContentSectionTitle.js';
import Divider from '../components/Divider.js';
import Dividerblank from '../components/Dividerblank.js';

import P2Logos from '../pages/images/p2/Untitled.png';
import img1 from '../pages/images/p2/1.png';
import img2 from '../pages/images/p2/2.png';
import interviewnotes from '../pages/images/p2/interviewnotes.png';
import barropp from '../pages/images/p2/barropp.png';
import comic from '../pages/images/p2/chi-comic.jpg';
import whatsapp from '../pages/images/p2/whatsapp.png';
import interviewplan from '../pages/images/p2/interviewplan.png';

import feedback from '../pages/images/p2/feedback.png';
import gaps from '../pages/images/p2/gaps.png';
import whatworked from '../pages/images/p2/whatworked.png';
import workedverywell from '../pages/images/p2/workedverywell.png';


import videos from '../pages/images/p2/videos.png';
import BlogContentShort from '../components/BlogContentShort.js';
import DividerblankLarge from '../components/DividerblankLarge.js';
import { Link } from 'react-router-dom';

export default class ParentalEngagement extends React.Component {
  render() {
    return (
      <div>
        <div class="background">
        <BlogTitle
          title="Parental Engagement in Rural India"
          //BlogTags="Some subtitle" 
          />

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

          <Link 
          textBefore="The paper can be accessed "
          text="here."
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
        ContentShort="So, even though school enrollment has increased, which sounds like a positive, the performance of students has decreased because parents are not able to support their children. "
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
        ContentShort="From the interviews, I identified the contextual engagement barriers that the parents face and the opportunities that we can leverage."
        />
        <DividerblankLarge/>
                <BlogImage
        BlogImage={barropp}
        Caption="Insights from the interviews."
        />
<BlogContentShort
        ContentShortTitle="INTERVENTION DESIGN"
        //ContentShort="This gave me insights into the barriers to engagement and the opportunities."
        />

<BlogImageExtraLarge
        BlogImage={comic}
        Caption="Intervention Design"
        />

<BlogContentShort
        ContentShortTitle="EXPERIMENT DESIGN"
        ContentShort="While the above comic shows the ideal scenario of the teacher being able to completely control the process, I took over some of the parts in this process like shooting the video and editing it in order to test proof of concept. We made 6 videos over two weeks."
        />

        <Dividerblank/>   
<BlogImageLarge
        BlogImage={videos}
        Caption="Intervention Design"
        />

<BlogContentShort
        //ContentShortTitle="EXPERIMENT DESIGN"
        ContentShort="I edited them and the teacher sent them to the parents on the same day."
        />  
        <Dividerblank/>   

<BlogImage
        BlogImage={whatsapp}
        Caption="Intervention Design"
        />

<BlogContentShort
        ContentShortTitle="GATHERING FEEDBACK"
        ContentShort="I interviewed the parents at two intervals. This was done because the teacher had recommended calling them and giving the parents who haven't accessed the videos a push. This helped get more data about what the parents thought of the intervention while also giving insights into why parents would completely ignore the videos."
        />  
        <Dividerblank/>  
<BlogImage
        BlogImage={interviewplan}
        Caption="Interview and analysis plan"
        />


<BlogContentShort
        //ContentShortTitle="GATHERING FEEDBACK"
        ContentShort="I evaluated the parents' feedback on a scale based on an engagement coninuum proposed by Goodall et al. While all the parents reached level 3, not all shared any immediate benefit they saw from it."
        />  
        <Dividerblank/>  


        <BlogImage
        BlogImage={feedback}
        Caption="Interview and analysis plan"
        />

<BlogContentShort
        ContentShortTitle="WHAT WORKED WELL"
        ContentShort="Parents who were already engaged with their childrens' learning engaged with the intervention, mentioned that they learnt something new about their child."
        />  
        <Dividerblank/>  
        <BlogImage
        BlogImage={whatworked}
        Caption="Interview and analysis plan"
        />
        <BlogContentShort
        ContentShortTitle="WHAT WORKED SURPRISINGLY WELL"
        ContentShort="The two teachers that I worked with and the school principal became a lot more accountable. They started speaking in English in the videos, using props for the explanations and went the extra mile."
        />  
        <Dividerblank/>  
        <BlogImage
        BlogImage={workedverywell}
        Caption="Interview and analysis plan"
        />

<BlogContentShort
        ContentShortTitle="FUTURE WORK"
        ContentShort="The intervention gave us insights into what its strengths were, while also shedding light on the gaps that still existed in the intervention as well as in the ecosystem. Some areas for future work that I identified were - "
        />  
 <Dividerblank/>

<BlogContentThree
Content1="Conveying the long term benefits of engagement to the parents through different means."
Content2="Improving communication between parents and teachers."
Content3="Using parent-teacher communication to help increase accountability."
/>

<BlogContentShort
                    //ContentShortTitle="THANK YOU!"
                    //ContentShort="How to best represent each data point? What kind of micro interactions would be needed? What is the best idea for each usecase? I ideated in different levels of fidelity as my understanding became clearer."
                    route=""
                    LinkText="View all projects"
                    classes="arrow left"
                />

                <DividerblankLarge/>
      </div>
      </div>
    );
  }
}