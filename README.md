# Cid

Cid is a simple theme for static site generator, [Pelican][pelican]

## Features:
* Disqus comment. `DISQUS_SITENAME` must be defined in configuration file.
* Google Analytics. `GOOGLE_ANALYTICS` must be defined in configuration.
* Responsive theme.
* Landing.
* Pagination.

# Development Notes
The style sheet for this theme is written in SASS, located in the `src/sass/cid.sass` file,
which are then compiled to `static/css/cid.css`. There is a `package.json` and `gulpfile.json`
that I used during the development of the theme draft, which can be used to quickly set up a
live reload server and auto-compile. Note that the you would still need to have the sass ruby gem
installed. The `design` directory contains the static HTML draft that I used to help me decide on
the design, the contents are no longer used and it is not kept updated to any design changes.

#LICENSE
MIT

[pelican]: http://getpelican.com
