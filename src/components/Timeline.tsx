import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#323232ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder & CTO, Careit</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Project Management, Full-Stack Development, UI/UX Design, DevOps, GenAI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2002 - 2025"
            iconStyle={{ background: '#323232ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder, Cloudowl</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Full-stack Development, UI/UX, Cloud DevOps, Project Management, GenAI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2016"
            iconStyle={{ background: '#323232ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Producer & Engineer, Beamdog</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              UI/UX, Full-Stack Development, Game Client, Ecommerce, Project Management
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2014"
            iconStyle={{ background: '#323232ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer, Yardstick Software</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Full-Stack Development, UI/UX, Project Management, Client Support
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: '#323232ff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Web Developer, Parcom Marketing</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Full-Stack Development, UI/UX, Interactive Experiences, Project Management, Client Support
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;