
This repository contains  projects that demonstrate the use of GSAP (GreenSock Animation Platform) for creating animations and interactive effects on web pages.

Table of Contents
Basic Project
Description
Features
How to Run
SVGCURVE Project
Description
Features
How to Run
Requirements
Resources

Basic Project
Description
The Basic project demonstrates how to use GSAP animations and ScrollTrigger to create scroll-based animations. It includes animations for different sections of a webpage, such as translating, rotating, and fading elements as the user scrolls.

Features
Smooth animations triggered by scrolling.
Animations include:
Translating elements horizontally.
Rotating elements.
Fading in elements with scaling effects.
Debugging markers for ScrollTrigger to visualize animation start and end points.
How to Run
Open the Basic.html file in a browser.
Scroll through the page to see the animations in action.
The animations are defined in Basic.js and styled using Basic.css.
Key Files
HTML: Basic.html - Contains the structure of the webpage.
CSS: Basic.css - Styles the sections and ensures proper layout.
JavaScript: Basic.js - Implements GSAP animations and ScrollTrigger.
SVGCURVE Project
Description
The SVGCURVE project demonstrates how to dynamically manipulate an SVG path using GSAP. The path's curve changes based on the user's mouse movement, creating an interactive effect.

Features
Real-time SVG path manipulation based on mouse position.
Smooth animations for the path using GSAP.
Elastic animation effect when the mouse leaves the interactive area.
How to Run
Open the index.html file (ensure it includes the SVG and links to svg.js).
Move your mouse over the element with id="curve" to see the SVG path dynamically adjust.
When the mouse leaves the area, the path animates back to its original shape.
Key Files
HTML: index.html (not provided in the attachments, but should include an SVG element with a path and id="curve").
JavaScript: svg.js - Implements the dynamic SVG path manipulation using GSAP.
Requirements
A modern browser that supports JavaScript and GSAP.
Internet connection to load GSAP from a CDN (or download GSAP locally if needed).
GSAP CDN Links
Include these in your HTML files:
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/ScrollTrigger.min.js"></script>

Resources
GSAP Documentation
ScrollTrigger Documentation
SVG Path Syntax
