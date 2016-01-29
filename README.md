# UrlbarButton for Mozilla Add-on SDK ([jpm](https://github.com/mozilla/jpm) version)

[![Gyazo](https://i.gyazo.com/8fbc996cf9c11cfdcb3efc0d7855bb6c.png)](https://gyazo.com/8fbc996cf9c11cfdcb3efc0d7855bb6c)

The UrlbarButton module allows for easy adding of buttons to the urlbar in Firefox.


## How to use

```bash
npm install --save moz-urlbarbutton
```

```js
var {data} = require('sdk/self');
var UrlbarButton = require('urlbarbutton');

exports.main = function() {
  button = new UrlbarButton({
    id: 'foobar-button',
    image: data.url('foobar-button.png'),
    onClick: function(tabId, event) {
    }
  });

  button.setImage(data.url('boobar-button.png'));
};

exports.onUnload = function (reason) {
  if (reason !== 'shutdown') {
    button.remove();
  }
};
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



## In action in

* **Flattr Firefox Add-on**: [Source](https://github.com/flattr/fx-flattr-addon)
* **hugit Firefox Add-on**: [AMO](https://addons.mozilla.org/firefox/addon/hugit/)


## Changelog

#### 1.0.2

* first version published to npm

#### 1.0.0

* complete code rewrite with respect to modern Firefox SDK
* deprecated methods: `setOptions()`, `setVisibility()`, `getVisibility()`, `getButtons()`

#### 0.7.0

* [jpm](https://github.com/mozilla/jpm) support

#### 0.6.0

* New method, `setOptions()`, that enables changing tooltip and click action
* New click handler option, `options.gotoUrl`, that will open the specified URL on click

#### 0.5.0

* Released, but withdrawn and reverted. Focused on updating the package to better support new SDK versions, but became broken and thus all changes was reverted.

#### 0.4.1

* Support for Mozilla's Add-on SDK version 1.13b1

#### 0.4.0

* No longer handling the decision of whether a button should be shown or not. Moved the `onLocationChange` and `onPageShow` listeners, that were called when a new page was loaded, into a new module, [ShowForPage](https://github.com/voxpelli/moz-showforpage), and removed support for those listeners along with removing the callbacks that were used in them.
* Changed `setImage` and `setVisibility` to have the href-parameter as the last parameter instead of the first as that makes more sense for an optional parameter.
* Changed `setVisibility` to have its href parameter be optional for real
* Added new `getVisibility` method
* Button can now have a tooltip

#### 0.3.0

* No changelog being tracked for this and prior version, but main changes were related to extended ways for a button to be hidden and shown.
