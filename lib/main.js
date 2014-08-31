var self = require("sdk/self"),
    data = self.data;

var tabs = require("sdk/tabs");

tabs.on('ready', function(tab) {
  tab.attach({
    contentScriptFile: data.url('decliseificatorul.js')
  });
});


