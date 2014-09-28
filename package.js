Package.describe({
  name:"natestrauser:filepicker-plus",
  summary: "ink filepicker script packaged for Meteor with helpers and utilities",
  version: "1.2.3",
  git: "https://github.com/nate-strauser/meteor-filepicker-plus.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use([
    'underscore',
    'templating',
    'handlebars']
  , 'client');

  api.add_files(['client.js'],'client');
  api.export('loadFilePicker', 'client');
});
