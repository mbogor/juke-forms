'use strict';

/* PLAYLIST (SINGULAR) CONTROLLER */

juke.controller('NewPlaylistCtrl', function ($scope) {

    $scope.create = function(newPlaylist){
    	$scope.newForm = newPlaylist;
    	console.log($scope.newForm)
    }

});