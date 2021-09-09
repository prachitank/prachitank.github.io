import React from 'react';
// import BlogContentShort from '../components/BlogContentShort.js';
import BlogTitle from '../components/BlogTitle.js';
// import BlogImage from '../components/BlogImage.js';
// import P2Logos from '../pages/images/p2-logos.png';
import Divider from '../components/Divider.js';



import Dividerblank from '../components/Dividerblank.js';
import DividerblankLarge from '../components/DividerblankLarge.js';

import BlogImage from '../components/BlogImage.js';
//import BlogImageLarge from '../components/BlogImageLarge.js';

import BlogContentShort from '../components/BlogContentShort.js';

//import Process from '../pages/images/shaw-blog/process.png';
import Goog1 from '../pages/images/google-blog/goog-1.jfif';

import Goog2 from '../pages/images/google-blog/goog-2.jfif';
import Goog3 from '../pages/images/google-blog/goog-3.jfif';

import '../components/Common.css';
//import BlogContentTwo from '../components/BlogContentTwo.js';

export default class GoogleBlog extends React.Component {
  render() {
    return (
      <div>
        <div class="background">

          <BlogTitle
            title="Interning at Google"
          //BlogTags="Helping traders analyse the energy market to make trading decisions." 
          />

          <Divider
          />



          <BlogContentShort
            //ContentShortTitle="BI and analytics tool"
            ContentShort="I interned with the G Suite team in Bangalore for 10 weeks when I worked on the Admin Console. I got a chance to collaborate with the 8 sub-teams that owned parts of the product to design a new feature. In my time there, I went through the phases of research, design, iterations and user feedback. And having the PMs discuss a possible development timeline for the feature was a fitting end to the internship!"
          />



          <Dividerblank
          />

          <BlogContentShort
            ContentShortTitle="OVERVIEW"
            ContentShort="The summer of 2019 was 20 weeks worth of things to do packed into 10 - My project with the G Suite team, participating in design sprints, winning a post it art contest B), learning from other brilliant designers and researchers and from my fellow interns! But every bit of those busy ten weeks have been extremely rewarding. What follows are parts of the experience that really stood out."
          />
          <Dividerblank
          />

          <BlogImage
            BlogImage={Goog1}
            Caption="Doodle credits to Som Roy :)"
          />

          <Dividerblank
          />
<BlogContentShort
            ContentShortTitle="MULTIDISCIPLINARY EXPOSURE"
            ContentShort="A lot of my college projects have looked like this: A design student, working under the guidance of a design professor and also taking regular feedback from design student classmates and seniors. We do manage to get feedback from field experts and users when required, but their involvement remains minimal and given the constraints of the academic setup, they are not heavily invested. However, through the projects that I worked on at Google, I got a chance to collaborate not just with designers but with product managers and engineers across different teams. Each of them had a different and valuable viewpoint of looking at the product — discussions with them made me more sensitive to their point of view to eventually make a better end product."
          />

<BlogContentShort
            ContentShortTitle="THE 20% PROJECT"
            ContentShort="I contributed in a design sprint to help ideate product directions for an upcoming app with a team which included designers, product managers, engineers and members of the marketing team. Through the sprint, I got a chance to lead ideations with groups of users, conduct one on one interviews and ideate flows that were tested with users."
          />

<Dividerblank
          />
<BlogImage
            BlogImage={Goog2}
            Caption="Getting feedback from users in an informal setting - with some pizza and refreshments."
          />


<BlogContentShort
            ContentShortTitle="PEOPLE"
            ContentShort="The environment at Google made borrowing a colleague’s time only an email away. Everyone was happy to answer questions related to their project, their careers or the design industry in general. This made the place a lot more welcoming and made it easy to get imbibed in the culture."
          />
          <Dividerblank
          />
          
<BlogImage
            BlogImage={Goog3}
            Caption="Spent a whole evening sticking post-its on walls with the most amazing co-interns."
          />

<BlogContentShort
            //ContentShortTitle="PEOPLE"
            ContentShort="The internship was an amazing experience where I got to learn a lot from the work and the people. The project helped me understand the parts of the design process that I need to work on more. I think my main takeaways from the internship was learning how to document, communicate and collaborate effectively!

            "
          />



        <BlogContentShort
                    //ContentShortTitle="THANK YOU!"
                    //ContentShort="How to best represent each data point? What kind of micro interactions would be needed? What is the best idea for each usecase? I ideated in different levels of fidelity as my understanding became clearer."
                    route=""
                    LinkText="Go back"
                    classes="arrow left"
                />
        <DividerblankLarge/>

        </div>
        </div>
        );
  }
}