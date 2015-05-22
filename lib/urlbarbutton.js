var winUtils = require("sdk/window/utils"),

module.exports = function(option){
  if(!option || !option.id){
    return false;
  }
  var doc = require('sdk/window/utils').getMostRecentBrowserWindow().document;

  //reference http://stackoverflow.com/questions/25283607/how-to-put-action-button-icon-inside-address-url-bar-of-firefox-add-ons
  var urlBarIcons = doc.getElementById('urlbar-icons');
  var btn = doc.createElement('toolbarbutton');
  btn.setAttribute('id', option.id);
  btn.setAttribute('image', option.image);
  btn.addEventListener('command', option.onClick, false);
  urlBarIcons.appendChild(btn);
  return btn;
}
