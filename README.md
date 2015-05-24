UrlbarButton for Mozilla Add-on SDK jpm Version
=======

[![Gyazo](https://i.gyazo.com/8fbc996cf9c11cfdcb3efc0d7855bb6c.png)](https://gyazo.com/8fbc996cf9c11cfdcb3efc0d7855bb6c)

The UrlbarButton module allows for easy adding of buttons to the urlbar in Firefox.

This Repository is Version supported [jpm](https://github.com/mozilla/jpm).

[Original Repository is here](https://github.com/SpeCT/moz-urlbarbutton)

## How to use

Follow the Add-on SDK's documentation for [third party packages](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Using_third-party_modules_%28jpm%29).

### `package.json`

    "dependencies": {
      "urlbarbutton":"pastak/moz-urlbarbutton#support-jpm"
    }

### `main.js`

    var urlbarButton = require('urlbarbutton')

    exports.main = function () {
      button = urlbarButton({
        id : 'foobar-button',
        image : data.url("foobar-button.png"),
        onClick : doTheThing,
      });
    };


## Options

- **id** - a string identifier that identifies the specific button.
- **image** - a path to an image for the button. (optional)
- ~~**tooltip** - a tooltip text for the button. (optional)~~ Not support. future.
- **onClick** - a callback to fire on a click on the button. (optional)

### Option syntax: onClick

Should be a function. Is called with the URL of the current page as a single argument and has the document of the page that is checked as its context.
