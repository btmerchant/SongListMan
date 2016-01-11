MusApp.controller('PlayerCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    console.log('PlayerCtrl');
    var ref = new Firebase('https://musicon.firebaseio.com');
    var playersRef = new Firebase('https://musicon.firebaseio.com/players');
    var songsRef = new Firebase('https://musicon.firebaseio.com/songs');
    var player = $firebaseArray(playersRef);
    var songs = $firebaseArray(songsRef);
    this.user = Auth.$getAuth().uid;
    console.log("user", this.user);
    this.players = $firebaseArray(playersRef);
    this.songs = $firebaseArray(songsRef);
    console.log("players array", this.players);
    console.log("song", this.songs);

    //  songs.$loaded(function () {
    //   this.song = songs.$getRecord(this.user);
    //   console.log('songs', songs);
    // });

    this.addSong = function() {
      console.log("addSong Function");
      songs.$add({
        uid: this.user,
        title: this.newSong.title
      });
      console.log('Added Song');
    };

     this.deleteSong = function(id) {
      var songRef = new Firebase('https://musicon.firebaseio.com/songs' + '/' + id);
      console.log("songRef", songRef);
      console.log("deleteSong function");
      console.log("$id ", id);
      songRef.remove();
      console.log("delete function run");
    };

  }]);
