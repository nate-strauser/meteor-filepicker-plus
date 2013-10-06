Package.describe({
  summary: "filepicker.io script repackaged for Meteor (forked from loadpicker)"
});

Package.on_use(function (api) {
  api.add_files(['loadpicker.js'],'client');
  api.export('loadPicker', 'client');
});
