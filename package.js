Package.describe({
  name: 'rkstar:accounts-buffer',
  version: '1.0.4',
  // Brief, one-line summary of the package.
  summary: 'Accounts service for Buffer accounts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rkstar/accounts-buffer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')

  api.use('accounts-base')
  api.imply('accounts-base')

  api.use('accounts-oauth')
  api.use('rkstar:buffer@1.1.0')

  api.addFiles('accounts-buffer-common.js')
  api.addFiles('accounts-buffer-client.js', 'client')
  api.addFiles('accounts-buffer-server.js', 'server')
})