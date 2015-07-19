Meteor.loginWithBufferApp = function(options, callback){
  // support callback with no options
  if( !callback && (typeof options === 'function') ){
    callback = options
    options = null
  }

  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback)
  BufferApp.requestCredential(options, credentialRequestCompleteCallback)
}