# David Ward Portfolio Website

## Overview
Static HTML/CSS/JavaScript portfolio website for David Ward, a Network Administrator and IT Strategist at Warfel Construction. The site showcases professional experience, resume, and an essay on VPN technology.

## Project Structure
- **index.html** - Home page with hero section and professional highlights
- **about.html** - About page
- **resume.html** - Resume page  
- **vpn.html** - VPN essay page
- **nav.html** - Shared navigation component (loaded via JavaScript)
- **script.js** - Navigation menu interactions and audio controls
- **style.css** - Main stylesheet
- **about.css, resume.css, vpn.css** - Page-specific stylesheets

## Technology Stack
- Pure HTML5, CSS3, and vanilla JavaScript
- No build process or dependencies required
- Static file serving via Python HTTP server

## Setup in Replit
- Served on port 5000 using Python's built-in HTTP server
- Workflow configured to run `python -m http.server 5000`
- Frontend binds to 0.0.0.0:5000 for Replit compatibility

## Recent Changes
- **2025-11-13**: Initial Replit setup - configured workflow and serving infrastructure

## Notes
- The site references a background video (movie.mp4) that is not included in the repository
- Site is fully functional without the video - background will show as solid color
