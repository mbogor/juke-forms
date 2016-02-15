'use strict';

/* PLAYLIST (SINGULAR) CONTROLLER */

juke.controller('NewPlaylistCtrl', function ($scope, PlaylistFactory) {

    
    $scope.create = function(data) {
        console.log(data)
        $scope.title = data.name;
        PlaylistFactory.create(data);
    }
    // PlaylistFactory.create(newPlaylist);

    // $scope.create = function(newPlaylist){
    //  $scope.newForm = newPlaylist;
    //  console.log($scope.newForm)
    // }

});

juke.controller('SidebarPlaylistCtrl', function($scope, PlaylistFactory) {

    $scope.playlistId = PlaylistFactory.fetchById();
    
    PlaylistFactory.fetchAll()
    .then(function(playlists) {
        $scope.playlists = playlists;
    })
})