import React from 'react';
import Card from './components/Card.js';

export default class App extends React.Component {
  render() {
    return (
        <div class="row p-3">
          <Card
            title="D.E. Shaw"
            featureImage="feature-images/shawFlat.png"
            tags="Publication | April 2020"
            description="I design digital ecosystems for traders and analysts that help them make critical decisions in an informed and timely manner."
            nonLinkText="The work is under NDA"
            route="shaw"
            linkText="Read about my experience" />

          <Card
            title="Google"
            featureImage="feature-images/GoogleInternshipFlat.png"
            tags="Publication | April 2020"
            description="I did internship"
            nonLinkText=""
            route="google"
            linkText="Read about my experience" />

          <Card
            title="Google"
            featureImage="feature-images/GoogleInternshipFlat.png"
            tags="Publication | April 2020"
            description="I did internship"
            nonLinkText=""
            route="google"
            linkText="Read about my experience" />

          <Card
            title="D.E. Shaw"
            featureImage="feature-images/shawFlat.png"
            tags="Publication | April 2020"
            description="I do work"
            nonLinkText="The work is under NDA"
            route="shaw"
            linkText="Read about my experience" />

          <Card
            title="Google"
            featureImage="feature-images/GoogleInternshipFlat.png"
            tags="Publication | April 2020"
            description="I did internship"
            nonLinkText=""
            route="google"
            linkText="Read about my experience" />

          <Card
            title="Google"
            featureImage="feature-images/GoogleInternshipFlat.png"
            tags="Publication | April 2020"
            description="I did internship"
            nonLinkText=""
            route="google"
            linkText="Read about my experience" />

          <Card
            title="D.E. Shaw"
            featureImage="feature-images/shawFlat.png"
            tags="Publication | April 2020"
            description="I do work"
            nonLinkText="The work is under NDA"
            route="shaw"
            linkText="Read about my experience" />

          <Card
            title="Google"
            featureImage="feature-images/GoogleInternshipFlat.png"
            tags="Publication | April 2020"
            description="I did internship"
            nonLinkText=""
            route="google"
            linkText="Read about my experience" />

          <Card
            title="Google"
            featureImage="feature-images/GoogleInternshipFlat.png"
            tags="Publication | April 2020"
            description="I did internship"
            nonLinkText=""
            route="google"
            linkText="Read about my experience" />
        </div>


    );
  }
}


