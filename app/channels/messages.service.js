angular.module('loop')
  .factory('Messages', function($firebaseArray, FirebaseUrl){
    var channelMessagesRef = new Firebase(FirebaseUrl+'channelMessages');

    return {
      forChannel: function(channelId){
        return $firebaseArray(channelMessagesRef.child(channelId));
      }
    };
  });