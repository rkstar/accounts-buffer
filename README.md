## rkstar:accounts-buffer

Buffer Oauth2 login service for [Buffer](http://bufferapp.com) in [Meteor](http://meteor.com)

### Package Dependencies

This login service depends on the following packages:
* accounts-base
* accounts-oauth
* rkstar:buffer [link](https://github.com/rkstar/buffer)

### Usage

1. `meteor add rkstar:accounts-buffer`
2. Read the 'Integrating with Login Services' section of [Getting Started with Auth](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth) and make sure you set up your config and secret correctly.
3. Call `Meteor.loginWithBuffer()`
4. Enjoy logged in goodness.