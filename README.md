UrlbarButton for Mozilla Add-on SDK jpm Version
=======

[![Gyazo](https://i.gyazo.com/8fbc996cf9c11cfdcb3efc0d7855bb6c.png)](https://gyazo.com/8fbc996cf9c11cfdcb3efc0d7855bb6c)

The UrlbarButton module allows for easy adding of buttons to the urlbar in Firefox.

This Repository is Version supported [jpm](https://github.com/mozilla/jpm).

[Original Repository is here](https://github.com/voxpelli/moz-urlbarbutton)

## How to use

```bash
npm install --save moz-urlbarbutton
```

```js
var {data} = require('sdk/self');
var UrlbarButton = require('urlbarbutton');

button = new UrlbarButton({
  id: 'foobar-button',
  image: data.url('foobar-button.png'),
  onClick: function(tabId, event) {
  }
});
```


## Options

| option       | description
|---------------|---------------
| id        | a string identifier that identifies the specific button.
| image     | optional path to an image for the button.
| tooltip   | optional tooltip text for the button.
| onClick   | optional callback to fire on a click on the button.


## Contributors

* [Pelle Wessman](http://kodfabrik.se/)
* [Iurii Proshchenko](https://github.com/SpeCT/)
* [pastak](http://pastak.hatenablog.com)
