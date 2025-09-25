import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "Rust",
    "MySQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "CSS3",
    "Sass",
    "Material UI",
    "Responsive Design",
    "Figma",
    "Sketch",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "WCAG"
];

const labelsThird = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Google Cloud",
    "Mocha",
    "Vitest",
    "OpenAI",
    "Gemini",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Development</h3>
                    <p>I develop full-stack web and mobile applications using technologies like React, React Native, Node.js, and TypeScript. From database management to API testing, I deliver robust, scalable solutions across the entire software development lifecycle.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI/UX & Design</h3>
                    <p>I design intuitive and visually appealing user interfaces using modern design tools and frameworks. From wireframing to prototyping, I ensure a seamless user experience with a focus on usability, accessibility, and aesthetic excellence.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithubAlt} size="3x"/>
                    <h3>DevOps, Automation & AI</h3>
                    <p>I implement comprehensive DevOps practices, including version control, CI/CD pipelines, containerization, and cloud deployment across major platforms. I also integrate automation and AI technologies to streamline processes and build intelligent, scalable solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;