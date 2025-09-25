import React from "react";
import mock01 from '../assets/images/ironbrook.png';
import mock02 from '../assets/images/attractionator.png';
import mock03 from '../assets/images/tnn.png';
import mock04 from '../assets/images/beamdog_client.png';
import mock05 from '../assets/images/siegeofdragonspear.png';
import mock06 from '../assets/images/goalzero.png';
import mock07 from '../assets/images/evz.png';
import mock08 from '../assets/images/crystalglass.png';
import mock09 from '../assets/images/careit_dash.png';
import mock10 from '../assets/images/careit_app.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://apps.apple.com/ca/app/careit-food-donation-rescue/id1574145523" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apps.apple.com/ca/app/careit-food-donation-rescue/id1574145523" target="_blank" rel="noreferrer"><h2>Careit Mobile</h2></a>
                <p>A mobile app for food donation and rescue, built with React Native to connect donors with charities and reduce food waste.</p>
            </div>
            <div className="project">
                <a href="https://my.careit.com" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://my.careit.com" target="_blank" rel="noreferrer"><h2>Careit Dashboard</h2></a>
                <p>Web dashboard for managing food donation operations, developed with React and Node.js for efficient charity coordination.</p>
            </div>
            <div className="project">
                <a href="https://quote.crystalglass.ca/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://quote.crystalglass.ca/" target="_blank" rel="noreferrer"><h2>Crystal Glass Quote & Booking System</h2></a>
                <p>Online quote and booking system for auto glass services, created with modern web technologies for seamless customer interactions.</p>
            </div>
            <div className="project">
                <a href="https://apps.apple.com/us/app/edmonton-valley-zoo/id1672107105" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apps.apple.com/us/app/edmonton-valley-zoo/id1672107105" target="_blank" rel="noreferrer"><h2>Edmonton Valley Zoo</h2></a>
                <p>Mobile app for Edmonton Valley Zoo, featuring interactive maps, animal information, and visitor guides, built with React Native.</p>
            </div>
            <div className="project">
                <a href="https://goalzero.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://goalzero.app/" target="_blank" rel="noreferrer"><h2>Goal Zero</h2></a>
                <p>Goal tracking and productivity app to help users achieve personal objectives, developed with full-stack technologies.</p>
            </div>
            <div className="project">
                <a href="https://www.siegeofdragonspear.com/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.siegeofdragonspear.com/" target="_blank" rel="noreferrer"><h2>Siege of Dragonspear</h2></a>
                <p>Official website for the Baldur's Gate: Siege of Dragonspear game, showcasing features, lore, and community, built with responsive web design.</p>
            </div>
            <div className="project">
                <a href="https://app.tnnpro.ca" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://app.tnnpro.ca" target="_blank" rel="noreferrer"><h2>TNN Maintenance & Cleaning</h2></a>
                <p>Management app for TNN Maintenance & Cleaning services, streamlining scheduling and operations with intuitive interfaces.</p>
            </div>
            <div className="project">
                <a href="https://attractionator.com/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://attractionator.com/" target="_blank" rel="noreferrer"><h2>Attractionator</h2></a>
                <p>Platform white label mobile apps for attractions, built with user-friendly navigation and search features.</p>
            </div>
            <div className="project">
                <a href="https://www.ironbrook.ca/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.ironbrook.ca/" target="_blank" rel="noreferrer"><h2>Ironbrook</h2></a>
                <p>Corporate website for Ironbrook, designed for professional home building services with clean, modern aesthetics.</p>
            </div>
            <div className="project">
                <a href="https://store.beamdog.com/about/client" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://store.beamdog.com/about/client" target="_blank" rel="noreferrer"><h2>Beamdog Game Client</h2></a>
                <p>Game client for Beamdog RPG titles, providing nostalgic gaming experiences with enhanced updates.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;