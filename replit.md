# David Ward Portfolio Website

## Overview
Static HTML/CSS/JavaScript portfolio website for David Ward, a Network Administrator and IT Strategist at Warfel Construction. The site showcases professional experience, resume, and an essay on VPN technology.

## Project Structure
- **index.html** - Home page with hero section and professional highlights
- **about.html** - About page with profile and interests
- **resume.html** - Resume page with downloadable PDF
- **vpn.html** - VPN essay page with table of contents
- **script.js** - Navigation menu interactions and audio controls
- **style.css** - Main stylesheet with responsive design
- **about.css, resume.css, vpn.css** - Page-specific stylesheets

## Technology Stack
- Pure HTML5, CSS3, and vanilla JavaScript
- Fully accessible with WCAG compliance features
- No build process or dependencies required
- Static file serving via Python HTTP server

## Setup in Replit
- Served on port 5000 using Python's built-in HTTP server
- Workflow configured to run `python -m http.server 5000`
- Frontend binds to 0.0.0.0:5000 for Replit compatibility
- Deployment configured for autoscale

## Accessibility Features
- **Skip-to-content links** - Keyboard users can jump directly to main content
- **Focus-visible styles** - Clear visual indicators for keyboard navigation
- **ARIA labels** - Proper semantic HTML and screen reader support
- **Inline navigation** - Navigation works without JavaScript

## Recent Changes
- **2025-11-13**: Initial Replit setup - configured workflow and serving infrastructure
- **2025-11-13**: Professional code review and improvements:
  - Removed legacy video background code from all pages
  - Inlined navigation HTML for better accessibility and reliability
  - Added skip-to-content links on all pages
  - Improved focus visibility for keyboard navigation
  - Ensured consistent button and link styles across all pages
  - Cleaned up unused assets (nav.html, video CSS)
  - Verified responsive design consistency
