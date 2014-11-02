# Cid

Cid is a simple theme for static site generator, [Pelican][pelican]. Demo: [my site](http://hndr.me).

## Features summary:
* Disqus comment. `DISQUS_SITENAME` must be defined in configuration file.
* Google Analytics. `GOOGLE_ANALYTICS` must be defined in configuration.
* Obfuscated Email. `CONTACT_EMAIL` must be defined in the configuration file. Javascript is required to view the email address.
* Responsive theme.
* Landing Page template.
* Pagination.

## Screenshots
See in the `scrshot/` directory.

## Landing Page Template
Cid includes a landing page template that can be used to generate a landing page for your site.
To use it, simply create a static page that uses the `landing.html` template and configure it
to be the index page of your site.

## Custom links on the landing page and footer
By default, the landing page and site footer will display the list of static pages configured on the site. To replace them
with a list of links you want, specify a `USE_CUSTOM_MENU` configuration variable to be true, and create
`CUSTOM_MENUITEMS` tuple in the `(Title, url)` format within your configuration file to contain the list
of items you want to display. The url are specified relative to the `SITEURL`. Example:

    USE_CUSTOM_MENU = True
    CUSTOM_MENUITEMS = (('Blog', `blog`),
                 ('Contact', 'contact'),
                 ('Projects', 'pages/projects'))

## Custom Site Footer
Define a `SITEFOOTER` in your configuration file to replace the site footer. Will default to
Pelican and theme credit if not defined. The site footer can contains HTMl tags, but it's better to
keep it simple as it will be printed inside a `p` tag.

## Obfuscated Email
If `CONTACT_EMAIL` is configured, the theme will display the email address in a `mailto` link, but
the email address will be printed through a Javascript ROT13 function in order to obfuscate the email addres.
This means the email address won't be displayed if the site visitor doesn't have Javascript enabled.

## Contacts Links
Additional contact information can be displayed in the same way as the custom menu item/ pages links. To use it,
define a `CONTACTS` tuple in the configuration file.

    CONTACTS = (('facebook', 'https://www.facebook.com/fbAcc'),
                ('twitter', 'https://twitter.com/twttrAcc'),)

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
