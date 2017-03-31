Badger
======

  [![Libraries.io for GitHub](https://img.shields.io/librariesio/github/l3laze/Badger.js.svg)]()

  [![GitHub issues](https://img.shields.io/github/issues/l3laze/Badger.js.svg)](https://github.com/l3laze/Badger.js/issues)

  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/l3laze/Badger.js/master/LICENSE.md)

  A library for displaying a list of "badges"
  with the dependency info of a project, similar
  to Google Chrome's chrome://credits page.

  ----

  Table of Contents
  =================


  * [Badger.js](#badger)
  * [Table of Contents](#table-of-contents)
  * [What is it?](#what-is-it)
  * [Installation](#installation)
    * [NPM](#npm)
  * [Usage](#usage)
  * [Changelog](#change-log)
  * [Contact](#contact)


  What is it?
  ==========

  A library for displaying a list of "badges"
  with the dependency info of a project, similar
  to Google Chrome's chrome://credits page.

  Installation
  ============

  ### NPM

    npm install badger.js

  ----

  Usage
  =====

  Include badger.css in the head of your project:

    <link rel="stylesheet" href="badger.css">


  And badger.js in the head or body:

    <script src="badger.js"></script>


  In the HTML where you want the badges displayed place an element with class badger-container, like so:

    <divclass="badger-container"></div>

  And use something like this to create the badges:

    <script type="text/javascript"><!--
      function addBadgeData() {
        var badges = [
          /*
           * Each badge must have a name, home, and license property.
           * These will be used with the Badger.js template to create
           *   the badges for your project.
           */
          {
            name: "Badger",
            home: "https://github.com/l3laze/Badger",
            license: "https://github.com/l3laze/Badger/blob/master/LICENSE.md"
          },
          w3css = {
            name: "W3.CSS",
            home: "https://www.w3schools.com",
            license: ""
          },
          {
            name: "Font-Awesome",
            home: "http://fontawesome.io/",
            license: "http://fontawesome.io/license/"
          }
        ],
        badgerContainer = document.getElementsByClassName( "badger-container" )[ 0 ];
        for( var b in badges ) {
          badgerContainer.appendChild( craftBadge( badges[ b ]));
        }
      }

      window.addEventListener( "DOMContentLoaded", addBadgeData );
    --></script>

  ----

  Change Log
  ==========

  * 1.0.0
    * Initial release.

  Contact
  =======

  l3l_aze (Tom Shaver)
  [GitHub]([https://github.com/l3laze/) [e-mail](mailto:l3l_aze@yahoo.com)

  Distributed under the MIT license. See [LICENSE](https://github.com/l3laze/Badger.js/blob/master/LICENSE.md) for more information.

  [https://github.com/l3laze/Badger.js](https://github.com/l3laze/Badger.js)
