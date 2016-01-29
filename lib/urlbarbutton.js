var {browserWindows} = require('sdk/windows')
  , {modelFor} = require('sdk/model/core')
  , {viewFor} = require('sdk/view/core');

var defaultButtonId = 0;


// =================================
// Public API

exports.UrlbarButton = UrlbarButton;

// constructor
function UrlbarButton(options) {
  // validate options
  options = options || {};
  options.id = options.id || 'urlbar-button-' + defaultButtonId++;

  // show urlbar button in existing windows
  var buttons = [];
  Array.prototype.forEach.call(browserWindows, createButton);
  // show urlbar button in all new windows
  browserWindows.on('open', createButton);
  browserWindows.on('close', onWindowClose);

  return {
    setImage,
    remove,
    // deprecated:
    getVisibility,
    setVisibility,
    setOptions,
    getButtons
  };

  // destructor
  function remove() {
    buttons.forEach(({win, btn}) => destroyButton(btn));
    buttons = [];
    browserWindows.off('open', createButton);
    browserWindows.off('close', onWindowClose);
  }

  // 1. check if tab is active
  // 2. find window where tab is located
  // 3. find related urlbar button
  // 4. update image of this button
  function setImage(image, tabId) {
    for (var {win, btn} of buttons)
      if (win.tabs.activeTab.id === tabId) {
        btn.setAttribute('image', image);
      }
  }


  // =================================
  // Deprecated API

  function setVisibility(/*visible, tabId*/) {
    console.error('UrlbarButton::setVisibility is deprecated');
  }

  function getVisibility(/*tabId*/) {
    console.error('UrlbarButton::getVisibility is deprecated');
    return true;
  }

  function setOptions(/*options*/) {
    console.error('UrlbarButton::setOptions is deprecated');
  }

  function getButtons(/*href*/) {
    console.error('UrlbarButton::getButtons is deprecated');
    return [];
  }


  // =================================
  // Implementation

  function createButton(win) {
    // reference http://stackoverflow.com/questions/25283607
    var doc = viewFor(win).document
      , urlbarIcons = doc.getElementById('urlbar-icons')
      , btn = doc.createElement('toolbarbutton');
    btn.setAttribute('id', options.id);
    if (options.image)
      btn.setAttribute('image', options.image);
    if (options.tooltip)
      btn.setAttribute('tooltiptext', options.tooltip);
    btn.addEventListener('command', onClick, false);
    urlbarIcons.appendChild(btn);
    buttons.push({win, btn});
  }

  function destroyButton(btn) {
    btn.removeEventListener('command', onClick);
    btn.remove();
  }

  function onWindowClose(win) {
    buttons = buttons.filter(obj => {
      if (obj.win !== win)
        return true;
      destroyButton(obj.btn);
    });
  }

  function onClick(event) {
    for (var doc = event.currentTarget; doc.parentNode; doc = doc.parentNode);
    var win = modelFor(doc.defaultView);
    if (options.onClick)
      options.onClick(win.tabs.activeTab.id, event);
  }

}
