Package.describe({
  summary: "ink filepicker script packaged for Meteor with helpers and utilities"
});

Package.on_use(function (api) {
  api.use([
    'underscore',
    'templating',
    'handlebars']
  , 'client');

  api.add_files(['client.js'],'client');
  api.export('loadFilePicker', 'client');
});
