import React from 'react';
// import BlogContentShort from '../components/BlogContentShort.js';
import BlogTitle from '../components/BlogTitle.js';
import BlogContentTwo from '../components/BlogContentTwo.js';
import BlogContentShort from '../components/BlogContentShort.js';

import BlogContentSectionTitle from '../components/BlogContentSectionTitle.js';
import Divider from '../components/Divider.js';
import Dividerblank from '../components/Dividerblank.js';
import Link from '../components/Link.js';
import Skipped0 from '../pages/images/skipped/skipped0.png';

import Skipped1 from '../pages/images/skipped/skipped1.png';
import Skipped2 from '../pages/images/skipped/skipped2.png';
import Skipped3 from '../pages/images/skipped/skipped3.png';
import DividerblankLarge from '../components/DividerblankLarge.js';
import BlogImageLarge from '../components/BlogImageLarge.js';


export default class Skipped extends React.Component {
    render() {
        return (
            <div>
                <div class="background">

                    <BlogTitle
                        title="Skipped!"
                        BlogTags="My entry that bagged 2nd place at the competition hosted by the Data Visualisation Society." />


                    <Divider />
                    <DividerblankLarge />

                    <BlogContentTwo
                        Title1="BRIEF"
                        Content1="Visualise data from the Annual Data Visualization Community Survey for 2019 which has responses to 50+ questions and was taken by over 1,350 people."
                        Title2="CATEGORY"
                        Content2="Explanatory"
                    />

                    <Dividerblank />
                    <BlogContentSectionTitle
                        ContentSectionTitle1="MY PROCESS"
                        ContentSectionTitle2="Through this exercise, I tried to answer the questions - Is there an interesting story in this data? What kind of visualization would convey the story? How do I make this different from the norm?"
                    />
                    <Dividerblank/>

                    {/* <BlogContentShort
                        ContentShortTitle="IS THERE AN INTERESTING STORY IN THIS DATASET?"
                        ContentShort="I tried two different approaches - the first was to print all the questions and doing a grouping exercise (somewhat similar to what I had done while coding qualitative interviews)."
                    />
                    <Dividerblank />
                    <BlogImageLarge
                        BlogImage={Skipped0}
                    /> */}

                    <BlogContentShort
                        ContentShortTitle="THE PROCESS"
                        ContentShort="I played around with the data on sheets - I picked up interesting questions and started to analyze its answers, checked different groups of questions to rate to see if trends emerged."
                    />
                    <Dividerblank/>
                    <BlogImageLarge
                        BlogImage={Skipped1}
                        Caption="Experimenting with the data"
                    />
                    <Link 
                    href="https://docs.google.com/spreadsheets/d/1q543dC4T4tdmlpQ-y0SY-J604xYUqivt7JSA8jas1As/edit?usp=sharing"
                    target="skipped-ideation-window"
                    text="Here's "
                    textAfter="one of the sheets I used for some experiments."
                    classes=""/>


                    <BlogContentShort
                        //ContentShortTitle="IS THERE AN INTERESTING STORY IN THIS DATASET?"
                        ContentShort="As I pondered over the quality of data - the number of missing answers and how to effectively represent them, serendipity struck. The way in which respondents skipped answering questions would give some interesting insights. We'd get insights on whether the questions were irrelevant, too long or too took too much effort to answer."
                    />

                    <BlogContentShort
                        //ContentShortTitle="WHAT KIND OF VISUALISATION WOULD CONVEY THE IDEA?"
                        ContentShort="I tried out different types of visual approaches to tell the story."
                    />
                    <Dividerblank />

                    <BlogImageLarge
                        BlogImage={Skipped2}
                    />

                    <BlogContentShort
                        //ContentShortTitle="HOW DO I MAKE THIS DIFFERENT FROM THE NORM?"
                        ContentShort="As I analyzed the trend of skipping questions, on Google Sheets, I realized the power that simple conditional formatting can give to data analysis - so I decided to take Google Sheets to the extreme and try to make becautiful visualisations on it."
                    />
                    <Dividerblank />
                </div>
                <BlogContentShort
                    ContentShortTitle="THE END RESULT"
                //ContentShort=""
                />
                <div class="row justify-content-center ">
                    <div class="col-xl-6 col-lg-6 col">
                        <div class="blog-margin">
                            <a href="https://docs.google.com/spreadsheets/d/1s5GX38KZv998cqN8p0HwWOff6SDWVI44ihH1qWGv4bc/edit?usp=sharing" target="skipped-window">View on Google Sheets</a>
                        </div>
                    </div>
                </div>
                <Dividerblank
                />
                <BlogImageLarge
                    BlogImage={Skipped3}
                />
                <DividerblankLarge />
                <BlogContentShort
                    //ContentShortTitle="THANK YOU!"
                    //ContentShort="How to best represent each data point? What kind of micro interactions would be needed? What is the best idea for each usecase? I ideated in different levels of fidelity as my understanding became clearer."
                    route=""
                    LinkText=" View all projects"
                    classes="arrow left"
                />


                <DividerblankLarge />
            </div>
        );
    }
}