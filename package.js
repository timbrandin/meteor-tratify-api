Package.describe({
  name: 'traitify:api',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'Traitify API bundled for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "traitify": "2.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('traitify.js', 'server');

  api.export('Traitify', 'server');
});
