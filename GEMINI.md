## Project Overview

This is a personal academic website for Tianhao Wang, an assistant professor at the University of Virginia. The website is built using the "Academic Pages" Jekyll theme and is hosted on GitHub Pages. It serves as a portfolio to showcase his publications, research, and other academic activities. The site also includes a blog and pages for teaching and students.

The website uses Jekyll for static site generation, with styling done in SCSS. It also incorporates JavaScript for interactive elements, with dependencies managed through npm and bundled using webpack.

## Building and Running

To work on this project locally, you'll need to have Ruby, Bundler, and Node.js installed.

1.  **Install dependencies:**
    *   Ruby dependencies: `bundle install`
    *   JavaScript dependencies: `npm install`

2.  **Build the site:**
    *   To build the Jekyll site, run: `bundle exec jekyll build`
    *   To build the JavaScript assets, run: `npm run build`

3.  **Run the local server:**
    *   To serve the site locally with auto-regeneration, run: `bundle exec jekyll serve -l -H localhost`
    *   To watch for changes in JavaScript files and automatically rebuild them, run: `npm run watch`

## Development Conventions

*   **Content:** All content is written in Markdown.
    *   Blog posts are located in the `_posts` directory.
    *   Pages are located in the `_pages` directory.
    *   Publications are in the `_publications` directory.
    *   Data files (e.g., for navigation, UI text) are in the `_data` directory.
*   **Styling:** Styles are written in SCSS and are located in the `_sass` directory. The main stylesheet is `assets/css/main.scss`.
*   **JavaScript:** JavaScript files are in the `assets/js` directory. The main entry point is `_main.js`. The `webpack.config.js` file defines how the JavaScript is bundled.
*   **Configuration:** The main site configuration is in `_config.yml`. Author information is also managed in this file.
